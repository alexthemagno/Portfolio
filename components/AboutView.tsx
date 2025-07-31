import Header from './Header';
import BackgroundBlobs from './BackgroundBlobs';
import AboutMe from './AboutMe';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface AboutViewProps {
  onBackToPortfolio: () => void;
  onViewAllProjects: () => void;
  onProjectClick: (projectId: number) => void;
}

export default function AboutView({
  onBackToPortfolio,
  onViewAllProjects,
  onProjectClick
}: AboutViewProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen russian-violet-bg relative overflow-hidden custom-cursor">
      <BackgroundBlobs />
      
      <Header 
        mobileMenuOpen={false}
        setMobileMenuOpen={() => {}}
        onAboutClick={() => {}} // Already in about view
        onPortfolioClick={onBackToPortfolio}
        onProjectsClick={onViewAllProjects}
        currentView="about"
      />

      {/* Back to Portfolio Button */}
      <div className="pt-24 pb-8 px-6 lg:px-12 relative z-20">
        <Button 
          variant="ghost" 
          onClick={onBackToPortfolio}
          className="text-white hover:bg-white/20 rounded-full px-6 py-3 flex items-center gap-3 transition-all hover:scale-105 bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
          {t('project.backToPortfolio')}
        </Button>
      </div>

      {/* Main Content Container */}
      <main className="pb-20 px-6 lg:px-12 relative">
        {/* Additional decorative blob elements */}
        <div className="absolute top-20 right-16 w-16 h-16 md:w-24 md:h-24 air-superiority-blue-bg bg-blob-2 bg-blob-animate-2 bounce-3 hidden sm:block"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 md:w-32 md:h-32 dark-teal-bg bg-blob-4 bg-blob-animate-1 bounce-5 hidden md:block" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 md:w-16 md:h-16 orange-pantone-bg bg-blob-6 bg-blob-animate-3 bounce-2"></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 md:w-20 md:h-20 amber-bg bg-blob-3 bg-blob-animate-2 bounce-4 hidden sm:block"></div>
        <div className="absolute top-16 left-8 w-20 h-20 lg:w-32 lg:h-32 orange-pantone-bg bg-blob-4 bg-blob-animate-2 bounce-1 hidden md:block"></div>
        <div className="absolute bottom-24 right-12 w-18 h-18 lg:w-28 lg:h-28 amber-bg bg-blob-6 bg-blob-animate-1 bounce-4 hidden md:block"></div>
        
        {/* Glass Morphism Container */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 relative z-10 max-w-7xl mx-auto">
          <AboutMe />
        </div>
      </main>

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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Button>
              <Button variant="ghost" className="text-white hover:text-gray-200 rounded-full p-4 hover:bg-white/10">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </Button>
              <Button variant="ghost" className="text-white hover:text-gray-200 rounded-full p-4 hover:bg-white/10">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
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