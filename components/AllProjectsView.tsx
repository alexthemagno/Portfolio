import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { ArrowRight, ExternalLink, Search, Filter, ChevronLeft } from 'lucide-react';
import { useMemo } from 'react';
import { getCategories, filterProjectsByCategory } from '../data/projectsData';
import { useLanguage } from '../hooks/useLanguage';
import { blobColors } from '../data/portfolioConstants';
import Header from './Header';
import BackgroundBlobs from './BackgroundBlobs';

interface AllProjectsViewProps {
  selectedCategory: string;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onBackToPortfolio: () => void;
  onProjectClick: (projectId: number) => void;
}

export default function AllProjectsView({
  selectedCategory,
  searchQuery,
  setSelectedCategory,
  setSearchQuery,
  mobileMenuOpen,
  setMobileMenuOpen,
  onBackToPortfolio,
  onProjectClick
}: AllProjectsViewProps) {
  const { language, t } = useLanguage();

  const filteredProjects = useMemo(() => {
    let filtered = filterProjectsByCategory(selectedCategory);
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(project => 
        project.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category[language].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered.map(project => ({
      id: project.id,
      title: project.title[language],
      category: project.category[language],
      description: project.description[language],
      image: project.image,
      year: project.year,
      featured: project.featured
    }));
  }, [selectedCategory, searchQuery, language]);

  return (
    <div className="min-h-screen russian-violet-bg relative overflow-hidden custom-cursor">
      <BackgroundBlobs />
      
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onBackToPortfolio={onBackToPortfolio}
        showPortfolioLink={true}
      />

      <main className="pt-32 pb-20 px-6 lg:px-12 relative">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 relative z-10 max-w-7xl mx-auto space-y-12 lg:space-y-16">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Button 
              onClick={onBackToPortfolio}
              size="lg" 
              className="onyx-bg text-white rounded-full px-12 py-4 text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 font-medium" 
              style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--onyx)'}}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-shadow">{t('allProjects.backToPortfolio')}</span>
            </Button>
          </div>

          {/* Header Section */}
          <section className="text-center space-y-6">
            <Badge className="air-superiority-blue-bg text-white border-0 rounded-full px-6 py-3 text-lg shadow-lg" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}>
              {t('allProjects.badge')}
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl text-white leading-tight fun-font max-w-4xl mx-auto text-shadow-strong">
              {t('allProjects.title')}
            </h1>
            
            <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-medium text-shadow">
              {t('allProjects.subtitle')}
            </p>
          </section>

          {/* Search and Filter Section */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={t('allProjects.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-xl shadow-lg backdrop-blur-sm border-2 h-12"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {getCategories().map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="default"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg ${
                      selectedCategory === category
                        ? 'air-superiority-blue-bg text-white border-0 shadow-xl'
                        : 'bg-white/20 border-white/50 border-2 text-white hover:bg-white/30 hover:border-white/70 backdrop-blur-sm'
                    }`}
                    style={selectedCategory === category ? {'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'} : {}}
                  >
                    {t(category)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-white/80 text-lg text-shadow">
                {t('allProjects.showing')} {filteredProjects.length} {filteredProjects.length !== 1 ? t('allProjects.projects') : t('allProjects.project')} 
                {selectedCategory !== 'category.all' && ` ${t('allProjects.in')} ${t(selectedCategory)}`}
                {searchQuery && ` ${t('allProjects.matching')} "${searchQuery}"`}
              </p>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="group transition-all duration-500 hover:scale-105">
                  <Card 
                    className="bg-white/15 backdrop-blur-sm border-white/20 hover:bg-white/25 transition-all duration-500 overflow-hidden relative shadow-lg cursor-pointer h-full flex flex-col"
                    onClick={() => onProjectClick(project.id)}
                  >
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="amber-bg text-white border-0 rounded-full px-3 py-1 text-xs shadow-lg" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--amber)'}}>
                          {t('category.featured')}
                        </Badge>
                      </div>
                    )}

                    {/* Image Section */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Color overlay on hover */}
                      <div 
                        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                        style={{backgroundColor: blobColors[index % 4]}}
                      ></div>
                      
                      {/* External Link Button */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <Button size="sm" variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-3">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Text Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Category and Year */}
                      <div className="flex justify-between items-center mb-3">
                        <Badge className="onyx-bg text-white border-0 rounded-full font-bold px-3 py-1 text-xs backdrop-blur-sm" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--onyx)'}}>
                          {project.category}
                        </Badge>
                        <span className="text-white/60 text-sm text-shadow">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors text-shadow">
                        {project.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-4 text-sm lg:text-base text-shadow flex-1">
                        {project.description}
                      </p>
                      <Button variant="ghost" className="text-white hover:bg-white transition-colors px-4 py-2 rounded-full text-sm pointer-events-none self-start" style={{'--tw-text-opacity': '1'}}>
                        {t('projects.viewProject')}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="space-y-4">
                  <Filter className="w-16 h-16 text-white/40 mx-auto" />
                  <h3 className="text-2xl text-white font-semibold text-shadow">{t('allProjects.noProjectsFound')}</h3>
                  <p className="text-white/80 text-shadow">
                    {t('allProjects.noProjectsSubtitle')}
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('category.all');
                    }}
                    className="air-superiority-blue-bg text-white rounded-full px-6 py-3 mt-4"
                    style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}
                  >
                    {t('allProjects.clearFilters')}
                  </Button>
                </div>
              </div>
            )}
          </section>

          {/* Back to Portfolio Section */}
          <section className="text-center pt-8 border-t border-white/20">
            <Button 
              onClick={onBackToPortfolio}
              size="lg" 
              className="onyx-bg text-white rounded-full px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" 
              style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--onyx)'}}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              {t('allProjects.backToMainPortfolio')}
            </Button>
          </section>

        </div>
      </main>
    </div>
  );
}