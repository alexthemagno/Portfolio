import React, { useState, lazy, Suspense, Component, ReactNode, ErrorInfo } from 'react';
import { getProjectById, getProjectNavigation, ecoFlowProject, allProjectsData, getLocalizedProject } from './data/projectsData';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';

// Dynamic imports to avoid bundling issues
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const PortfolioView = lazy(() => import('./components/PortfolioView'));
const AllProjectsView = lazy(() => import('./components/AllProjectsView'));
const AboutView = lazy(() => import('./components/AboutView'));

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen russian-violet-bg flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

// Error boundary interfaces
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Error boundary component with proper TypeScript typing
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen russian-violet-bg flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4">Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 orange-pantone-bg text-white rounded-full hover:bg-opacity-80 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppContent() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'about' | 'project' | 'allProjects'>('portfolio');
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('category.all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { language } = useLanguage();

  // Convert bilingual projects to single language for display
  const projects = allProjectsData.slice(0, 4).map(project => ({
    id: project.id,
    title: project.title[language],
    category: project.category[language],
    description: project.description[language],
    image: project.image,
    year: project.year,
    featured: project.featured
  }));

  const handleProjectClick = (projectId: number) => {
    setCurrentProjectId(projectId);
    setCurrentView('project');
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    setCurrentProjectId(null);
  };

  const handleViewAllProjects = () => {
    setCurrentView('allProjects');
    setSelectedCategory('category.all');
    setSearchQuery('');
  };

  const handleViewAbout = () => {
    setCurrentView('about');
  };

  const handleProjectNavigation = (projectId: number) => {
    setCurrentProjectId(projectId);
  };

  // Project Detail View
  if (currentView === 'project' && currentProjectId) {
    const project = getProjectById(currentProjectId);
    const detailedProject = currentProjectId === 1 ? ecoFlowProject : project;
    
    if (detailedProject) {
      const navigation = getProjectNavigation(currentProjectId);
      const localizedProject = getLocalizedProject(detailedProject, language);
      
      return (
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectDetail
            project={localizedProject}
            navigation={{
              previousProject: navigation.previousProject ? {
                id: navigation.previousProject.id,
                title: navigation.previousProject.title[language],
                image: navigation.previousProject.image
              } : undefined,
              nextProject: navigation.nextProject ? {
                id: navigation.nextProject.id,
                title: navigation.nextProject.title[language],
                image: navigation.nextProject.image
              } : undefined
            }}
            onNavigate={handleProjectNavigation}
            onBackToPortfolio={handleBackToPortfolio}
          />
        </Suspense>
      );
    }
  }

  // All Projects View
  if (currentView === 'allProjects') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AllProjectsView
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          setSelectedCategory={setSelectedCategory}
          setSearchQuery={setSearchQuery}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          onBackToPortfolio={handleBackToPortfolio}
          onProjectClick={handleProjectClick}
        />
      </Suspense>
    );
  }

  // About View
  if (currentView === 'about') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AboutView
          onBackToPortfolio={handleBackToPortfolio}
          onViewAllProjects={handleViewAllProjects}
          onProjectClick={handleProjectClick}
        />
      </Suspense>
    );
  }

  // Portfolio View (Default)
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PortfolioView
        projects={projects}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onProjectClick={handleProjectClick}
        onViewAllProjects={handleViewAllProjects}
        onViewAbout={handleViewAbout}
      />
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}