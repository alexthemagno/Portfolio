import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, Download, Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { getCoreSkills, blobColors, colorClasses, colorStyles } from '../data/portfolioConstants';
import Header from './Header';
import BackgroundBlobs from './BackgroundBlobs';

interface PortfolioViewProps {
  projects: any[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onProjectClick: (projectId: number) => void;
  onViewAllProjects: () => void;
  onViewAbout: () => void;
}

export default function PortfolioView({
  projects,
  mobileMenuOpen,
  setMobileMenuOpen,
  onProjectClick,
  onViewAllProjects,
  onViewAbout
}: PortfolioViewProps) {
  const { t } = useLanguage();
  const coreSkills = getCoreSkills(t);

  return (
    <div className="min-h-screen russian-violet-bg relative overflow-hidden custom-cursor">
      <BackgroundBlobs />

      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onAboutClick={onViewAbout}
        onProjectsClick={onViewAllProjects}
        currentView="portfolio"
      />

      {/* Main Content Container */}
      <main className="pt-32 pb-20 px-6 lg:px-12 relative">
        {/* Additional decorative blob elements */}
        <div className="absolute top-20 right-16 w-16 h-16 md:w-24 md:h-24 air-superiority-blue-bg bg-blob-2 bg-blob-animate-2 bounce-3 hidden sm:block"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 md:w-32 md:h-32 dark-teal-bg bg-blob-4 bg-blob-animate-1 bounce-5 hidden md:block" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 md:w-16 md:h-16 orange-pantone-bg bg-blob-6 bg-blob-animate-3 bounce-2"></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 md:w-20 md:h-20 amber-bg bg-blob-3 bg-blob-animate-2 bounce-4 hidden sm:block"></div>
        <div className="absolute top-16 left-8 w-20 h-20 lg:w-32 lg:h-32 orange-pantone-bg bg-blob-4 bg-blob-animate-2 bounce-1 hidden md:block"></div>
        <div className="absolute bottom-24 right-12 w-18 h-18 lg:w-28 lg:h-28 amber-bg bg-blob-6 bg-blob-animate-1 bounce-4 hidden md:block"></div>
        
        {/* Glass Morphism Container */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 relative z-10 max-w-7xl mx-auto space-y-20 lg:space-y-24">
          
          {/* Hero Section */}
          <section className="text-center space-y-8">
            <div className="space-y-6">
              <Badge className="air-superiority-blue-bg text-white border-0 relative z-10 rounded-full px-6 py-3 text-lg shadow-lg" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}>
                {t('hero.badge')}
              </Badge>
              <h1 className="text-5xl lg:text-7xl text-white leading-tight relative z-10 fun-font max-w-4xl mx-auto text-shadow-strong">
                {t('hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-white leading-relaxed relative z-10 max-w-3xl mx-auto font-medium text-shadow">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 relative z-10 pt-4">
              <Button size="lg" className="air-superiority-blue-bg text-white rounded-full px-12 py-5 text-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('hero.viewWork')}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white rounded-full px-12 py-5 text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-transparent border-2" style={{'--tw-text-opacity': '1', '--tw-border-opacity': '1'}}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="w-6 h-6 mr-3" />
                {t('hero.getInTouch')}
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-6 relative z-10 pt-8">
              <div className="text-center">
                <Button variant="ghost" className="air-superiority-blue-bg text-white blob-1 blob-animate-1 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-2" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}>
                  <Linkedin className="w-8 h-8" />
                </Button>
                <p className="text-sm text-white font-medium text-shadow">{t('social.linkedin')}</p>
              </div>
              <div className="text-center">
                <Button variant="ghost" className="orange-pantone-bg text-white blob-2 blob-animate-2 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-2" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--orange-pantone)'}}>
                  <Instagram className="w-8 h-8" />
                </Button>
                <p className="text-sm text-white font-medium text-shadow">{t('social.instagram')}</p>
              </div>
              <div className="text-center">
                <Button variant="ghost" className="dark-teal-bg text-white blob-3 blob-animate-3 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-2" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}>
                  <Mail className="w-8 h-8" />
                </Button>
                <p className="text-sm text-white font-medium text-shadow">{t('social.email')}</p>
              </div>
            </div>
          </section>

          {/* Core Skills Section */}
          <section id="about" className="relative">
            <div className="text-center mb-12 lg:mb-16 relative z-10">
              <h2 className="text-3xl lg:text-4xl mb-4 text-white fun-font text-shadow-strong">
                {t('skills.title')}
              </h2>
              <p className="text-lg lg:text-xl text-white text-shadow">{t('skills.subtitle')}</p>
            </div>
          
            <div className="flex flex-col items-center space-y-3 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8 mb-8 relative z-10">
              {coreSkills.map((item, index) => (
                <Card key={index} className="bg-white/15 backdrop-blur-sm border-white/20 relative overflow-hidden
                  w-full max-w-sm mx-auto lg:max-w-none lg:mx-0
                  flex items-center gap-3 lg:flex-col lg:text-center lg:gap-0 p-3 lg:p-8 shadow-lg">
                  
                  <div className={`w-10 h-10 lg:w-20 lg:h-20 ${colorClasses[index % 4]} rounded-full flex items-center justify-center flex-shrink-0 lg:mx-auto mb-0 lg:mb-6 shadow-lg`} style={colorStyles[index % 4]}>
                    <item.icon className="w-5 h-5 lg:w-10 lg:h-10 text-white" />
                  </div>
                  
                  <div className="flex-1 lg:flex-none text-center lg:text-center">
                    <div className="text-base lg:text-xl mb-1 lg:mb-3 font-bold text-white leading-tight text-shadow">{item.skill}</div>
                    <Badge variant="secondary" className="onyx-bg text-white rounded-full px-2 py-0.5 lg:px-4 lg:py-2 text-xs lg:text-sm backdrop-blur-sm" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--onyx)'}}>
                      {item.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center relative z-10">
              <p className="text-white mb-4 text-shadow">{t('skills.viewFullExpertise')}</p>
              <button 
                onClick={onViewAbout}
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors font-medium text-lg underline underline-offset-4 hover:no-underline text-shadow cursor-pointer"
              >
                {t('skills.aboutPageLink')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-3xl lg:text-4xl mb-4 text-white fun-font text-shadow-strong">
                {t('projects.title')}
              </h2>
              <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto text-shadow">
                {t('projects.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              {projects.map((project, index) => (
                <div key={project.id} className="group transition-all duration-500 hover:scale-105">
                  <Card 
                    className="bg-white/15 backdrop-blur-sm border-white/20 hover:bg-white/25 transition-all duration-500 overflow-hidden relative shadow-lg cursor-pointer"
                    onClick={() => onProjectClick(project.id)}
                  >
                    
                    {/* Image Section */}
                    <div className="relative w-full h-64 overflow-hidden">
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
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <Button size="sm" variant="ghost" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-3">
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Text Content Section */}
                    <div className="p-8">
                      {/* Category Badge Above Title */}
                      <div className="mb-4">
                        <Badge className="onyx-bg text-white border-0 rounded-full font-bold px-4 py-2 backdrop-blur-sm" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--onyx)'}}>
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors text-shadow">
                        {project.title}
                      </h3>
                      <p className="text-white leading-relaxed mb-6 text-base lg:text-lg text-shadow">
                        {project.description}
                      </p>
                      <Button variant="ghost" className="text-white hover:bg-white transition-colors px-6 py-3 rounded-full text-lg pointer-events-none" style={{'--tw-text-opacity': '1'}}>
                        {t('projects.learnMore')}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* View All Projects Button */}
            <div className="text-center mt-16 relative z-10">
              <Button 
                size="lg" 
                onClick={onViewAllProjects}
                className="dark-teal-bg text-white rounded-full px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" 
                style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}
              >
                {t('projects.viewAll')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-white mt-4 text-lg text-shadow">
                {t('projects.viewAllSubtitle')}
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-12 relative overflow-hidden">
        {/* Contact decorative blobs */}
        <div className="absolute top-12 left-16 w-24 h-24 lg:w-40 lg:h-40 air-superiority-blue-bg bg-blob-1 bg-blob-animate-1 bounce-3 hidden md:block"></div>
        <div className="absolute bottom-16 right-20 w-20 h-20 lg:w-32 lg:h-32 amber-bg bg-blob-5 bg-blob-animate-3 bounce-5 hidden md:block"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 lg:w-24 lg:h-24 dark-teal-bg bg-blob-3 bg-blob-animate-2 bounce-2 hidden sm:block" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
        <div className="absolute bottom-32 left-1/3 w-14 h-14 lg:w-20 lg:h-20 orange-pantone-bg bg-blob-6 bg-blob-animate-1 bounce-6 hidden sm:block"></div>
        
        {/* Contact container */}
        <div className="orange-pantone-bg backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-red-800/60 max-w-4xl mx-auto relative z-10" style={{'--tw-bg-opacity': '0.95', backgroundColor: 'var(--orange-pantone)'}}>
          <div className="text-center text-white relative z-10">
            <h2 className="text-3xl lg:text-4xl mb-6 fun-font">{t('contact.title')}</h2>
            <p className="text-lg lg:text-xl mb-12 opacity-90">
              {t('contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button size="lg" className="bg-white rounded-full px-10 py-4 text-lg" style={{'--tw-bg-opacity': '1', backgroundColor: 'white', color: 'var(--orange-pantone)'}}>
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.email')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white rounded-full px-10 py-4 text-lg" style={{'--tw-border-opacity': '1', borderColor: 'white'}}>
                {t('contact.scheduleCall')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 relative">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white">
            <div className="text-2xl lg:text-3xl mb-4 text-white fun-font text-shadow">
              Alexandre Magno
            </div>
            <p className="text-white mb-6 text-shadow">{t('footer.tagline')}</p>
            <div className="flex justify-center gap-8">
              <Button variant="ghost" className="text-white hover:text-gray-200 rounded-full p-4 hover:bg-white/10">
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button variant="ghost" className="text-white hover:text-gray-200 rounded-full p-4 hover:bg-white/10">
                <Instagram className="w-6 h-6" />
              </Button>
              <Button variant="ghost" className="text-white hover:text-gray-200 rounded-full p-4 hover:bg-white/10">
                <Mail className="w-6 h-6" />
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/30 text-white text-sm text-shadow">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}