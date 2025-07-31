import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, ArrowLeft, ChevronLeft, ExternalLink, Clock, Users, Target, Lightbulb, Cog, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import Header from './Header';
import BackgroundBlobs from './BackgroundBlobs';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    shortDescription: string;
    heroImage: string;
    overview: {
      duration: string;
      team: string;
      role: string;
      tools: string[];
    };
    problem: {
      title: string;
      description: string;
      challenges: string[];
    };
    solution: {
      title: string;
      description: string;
      approach: string[];
    };
    process: {
      title: string;
      steps: Array<{
        phase: string;
        description: string;
        deliverables: string[];
      }>;
    };
    features: Array<{
      title: string;
      description: string;
      image: string;
    }>;
    gallery: Array<{
      image: string;
      caption: string;
    }>;
    technicalSpecs: {
      materials?: string[];
      dimensions?: string;
      sustainability?: string[];
      manufacturing?: string;
    };
    results: {
      impact: string[];
      metrics?: Array<{
        label: string;
        value: string;
      }>;
      testimonial?: {
        text: string;
        author: string;
        role: string;
      };
    };
    nextSteps: string[];
  };
  navigation: {
    previousProject?: {
      id: number;
      title: string;
      image: string;
    };
    nextProject?: {
      id: number;
      title: string;
      image: string;
    };
  };
  onNavigate: (projectId: number) => void;
  onBackToPortfolio: () => void;
}

export default function ProjectDetail({ project, navigation, onNavigate, onBackToPortfolio }: ProjectDetailProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen russian-violet-bg relative overflow-hidden custom-cursor">
      <BackgroundBlobs />

      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onBackToPortfolio={onBackToPortfolio}
        showPortfolioLink={true}
      />

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 lg:px-12 relative">
        {/* Single Glass Container for All Content */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 relative z-10 max-w-7xl mx-auto space-y-16 lg:space-y-20">
          
          {/* Consistent Grey Back to Portfolio Button */}
          <div className="mb-8">
            <Button 
              onClick={onBackToPortfolio}
              size="lg" 
              className="onyx-bg text-white rounded-full px-12 py-4 text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 font-medium" 
              style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--onyx)'}}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-shadow">{t('project.backToPortfolio')}</span>
            </Button>
          </div>

          {/* Hero Section */}
          <section className="text-center space-y-8">
            <div className="space-y-6">
              <Badge className="air-superiority-blue-bg text-white border-0 rounded-full px-6 py-3 text-lg shadow-lg" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}>
                {project.category}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl text-white leading-tight fun-font max-w-4xl mx-auto text-shadow-strong">
                {project.title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-medium text-shadow">
                {project.shortDescription}
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative w-full h-64 lg:h-96 overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl text-white fun-font text-center text-shadow-strong">
              {t('project.overview')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center">
                <Clock className="w-8 h-8 air-superiority-blue-bg rounded-full p-2 mx-auto mb-4" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}} />
                <h3 className="text-white mb-2 text-shadow">{t('project.duration')}</h3>
                <p className="text-white/90 text-shadow">{project.overview.duration}</p>
              </Card>
              
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center">
                <Users className="w-8 h-8 orange-pantone-bg rounded-full p-2 mx-auto mb-4" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--orange-pantone)'}} />
                <h3 className="text-white mb-2 text-shadow">{t('project.team')}</h3>
                <p className="text-white/90 text-shadow">{project.overview.team}</p>
              </Card>
              
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center">
                <Target className="w-8 h-8 amber-bg rounded-full p-2 mx-auto mb-4" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--amber)'}} />
                <h3 className="text-white mb-2 text-shadow">{t('project.role')}</h3>
                <p className="text-white/90 text-shadow">{project.overview.role}</p>
              </Card>
              
              <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center">
                <Cog className="w-8 h-8 dark-teal-bg rounded-full p-2 mx-auto mb-4" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}} />
                <h3 className="text-white mb-2 text-shadow">{t('project.tools')}</h3>
                <p className="text-white/90 text-sm text-shadow">{project.overview.tools.join(', ')}</p>
              </Card>
            </div>
          </section>

          {/* Problem & Solution */}
          <section className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Problem */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 orange-pantone-bg rounded-full flex items-center justify-center" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--orange-pantone)'}}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-white fun-font text-shadow-strong">
                    {project.problem.title}
                  </h2>
                </div>
                
                <p className="text-lg text-white leading-relaxed text-shadow">
                  {project.problem.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg text-white font-semibold text-shadow">{t('project.keyChallenges')}</h4>
                  <ul className="space-y-2">
                    {project.problem.challenges.map((challenge, index) => (
                      <li key={index} className="text-white flex items-start gap-3 text-shadow">
                        <div className="w-2 h-2 orange-pantone-bg rounded-full mt-2 flex-shrink-0" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--orange-pantone)'}}></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 air-superiority-blue-bg rounded-full flex items-center justify-center" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}>
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-white fun-font text-shadow-strong">
                    {project.solution.title}
                  </h2>
                </div>
                
                <p className="text-lg text-white leading-relaxed text-shadow">
                  {project.solution.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg text-white font-semibold text-shadow">{t('project.ourApproach')}</h4>
                  <ul className="space-y-2">
                    {project.solution.approach.map((item, index) => (
                      <li key={index} className="text-white flex items-start gap-3 text-shadow">
                        <div className="w-2 h-2 air-superiority-blue-bg rounded-full mt-2 flex-shrink-0" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl text-white fun-font text-center text-shadow-strong">
              {project.process.title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.process.steps.map((step, index) => {
                const colors = ['var(--air-superiority-blue)', 'var(--orange-pantone)', 'var(--amber)', 'var(--dark-teal)'];
                const colorClasses = ['air-superiority-blue-bg', 'orange-pantone-bg', 'amber-bg', 'dark-teal-bg'];
                
                return (
                  <Card key={index} className="bg-white/15 backdrop-blur-sm border-white/20 p-6 space-y-4">
                    <div className={`w-12 h-12 ${colorClasses[index % 4]} rounded-full flex items-center justify-center text-xl font-bold text-white`} style={{'--tw-bg-opacity': '1', backgroundColor: colors[index % 4]}}>
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl text-white font-semibold text-shadow">
                      {step.phase}
                    </h3>
                    
                    <p className="text-white text-shadow">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-medium text-shadow">{t('project.deliverables')}</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-white/90 text-sm flex items-center gap-2 text-shadow">
                            <div className={`w-1.5 h-1.5 ${colorClasses[index % 4]} rounded-full`} style={{'--tw-bg-opacity': '1', backgroundColor: colors[index % 4]}}></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl text-white fun-font text-center text-shadow-strong">
              {t('project.keyFeatures')}
            </h2>
            
            <div className="space-y-8">
              {project.features.map((feature, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <h3 className="text-xl lg:text-2xl text-white font-semibold text-shadow">
                      {feature.title}
                    </h3>
                    <p className="text-white leading-relaxed text-shadow">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative w-full h-64 overflow-hidden rounded-xl">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Image Gallery */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl text-white fun-font text-center text-shadow-strong">
              {t('project.gallery')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="relative w-full h-64 overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-white/90 text-sm text-center text-shadow">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="space-y-8">
            <h2 className="text-2xl lg:text-3xl text-white fun-font text-center text-shadow-strong">
              {t('project.technicalSpecs')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {project.technicalSpecs.materials && (
                <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 space-y-4">
                  <h3 className="text-xl text-white font-semibold text-shadow">{t('project.materials')}</h3>
                  <ul className="space-y-2">
                    {project.technicalSpecs.materials.map((material, index) => (
                      <li key={index} className="text-white flex items-center gap-2 text-shadow">
                        <div className="w-2 h-2 amber-bg rounded-full" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--amber)'}}></div>
                        {material}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
              
              {project.technicalSpecs.dimensions && (
                <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 space-y-4">
                  <h3 className="text-xl text-white font-semibold text-shadow">{t('project.dimensions')}</h3>
                  <p className="text-white text-shadow">{project.technicalSpecs.dimensions}</p>
                </Card>
              )}
              
              {project.technicalSpecs.sustainability && (
                <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 space-y-4">
                  <h3 className="text-xl text-white font-semibold text-shadow">{t('project.sustainability')}</h3>
                  <ul className="space-y-2">
                    {project.technicalSpecs.sustainability.map((item, index) => (
                      <li key={index} className="text-white flex items-center gap-2 text-shadow">
                        <div className="w-2 h-2 dark-teal-bg rounded-full" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
              
              {project.technicalSpecs.manufacturing && (
                <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 space-y-4">
                  <h3 className="text-xl text-white font-semibold text-shadow">{t('project.manufacturing')}</h3>
                  <p className="text-white text-shadow">{project.technicalSpecs.manufacturing}</p>
                </Card>
              )}
            </div>
          </section>

          {/* Results & Impact */}
          <section className="space-y-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 amber-bg rounded-full flex items-center justify-center" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--amber)'}}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl text-white fun-font text-shadow-strong">
                {t('project.resultsImpact')}
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.results.metrics?.map((metric, index) => (
                  <Card key={index} className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center">
                    <div className="text-3xl lg:text-4xl amber-bg inline-block px-4 py-2 rounded-full text-white font-bold mb-3" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--amber)'}}>
                      {metric.value}
                    </div>
                    <p className="text-white text-shadow">{metric.label}</p>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl text-white font-semibold text-shadow">{t('project.impactAreas')}</h3>
                <ul className="space-y-3">
                  {project.results.impact.map((item, index) => (
                    <li key={index} className="text-white flex items-start gap-3 text-shadow">
                      <div className="w-2 h-2 amber-bg rounded-full mt-2 flex-shrink-0" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--amber)'}}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.results.testimonial && (
                <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-8">
                  <blockquote className="text-lg lg:text-xl text-white italic text-center leading-relaxed text-shadow">
                    "{project.results.testimonial.text}"
                  </blockquote>
                  <div className="text-center mt-6">
                    <p className="text-white font-semibold text-shadow">{project.results.testimonial.author}</p>
                    <p className="text-white/80 text-shadow">{project.results.testimonial.role}</p>
                  </div>
                </Card>
              )}
            </div>
          </section>

          {/* Next Steps */}
          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl text-white fun-font text-center text-shadow-strong">
              {t('project.nextSteps')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.nextSteps.map((step, index) => (
                <Card key={index} className="bg-white/15 backdrop-blur-sm border-white/20 p-4 flex items-center gap-3">
                  <div className="w-8 h-8 air-superiority-blue-bg rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}>
                    {index + 1}
                  </div>
                  <p className="text-white text-shadow">{step}</p>
                </Card>
              ))}
            </div>
          </section>

        </div>

        {/* Project Navigation */}
        <div className="max-w-7xl mx-auto mt-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {navigation.previousProject && (
              <Card 
                className="bg-white/15 backdrop-blur-sm border-white/20 p-6 cursor-pointer hover:bg-white/25 transition-all"
                onClick={() => onNavigate(navigation.previousProject!.id)}
              >
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-6 h-6 text-white flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white/80 text-sm text-shadow">{t('project.previousProject')}</p>
                    <h3 className="text-white text-lg font-semibold text-shadow">{navigation.previousProject.title}</h3>
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={navigation.previousProject.image}
                      alt={navigation.previousProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            )}

            {navigation.nextProject && (
              <Card 
                className="bg-white/15 backdrop-blur-sm border-white/20 p-6 cursor-pointer hover:bg-white/25 transition-all"
                onClick={() => onNavigate(navigation.nextProject!.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={navigation.nextProject.image}
                      alt={navigation.nextProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/80 text-sm text-shadow">{t('project.nextProject')}</p>
                    <h3 className="text-white text-lg font-semibold text-shadow">{navigation.nextProject.title}</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white flex-shrink-0" />
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}