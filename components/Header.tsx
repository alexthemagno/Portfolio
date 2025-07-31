import { Button } from './ui/button';
import { Download, Menu } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onBackToPortfolio?: () => void;
  onAboutClick?: () => void;
  onPortfolioClick?: () => void;
  onProjectsClick?: () => void;
  showPortfolioLink?: boolean;
  currentView?: 'portfolio' | 'about' | 'projects';
}

export default function Header({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  onBackToPortfolio, 
  onAboutClick,
  onPortfolioClick,
  onProjectsClick,
  showPortfolioLink = false,
  currentView = 'portfolio'
}: HeaderProps) {
  const { t } = useLanguage();

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full onyx-bg backdrop-blur-sm z-50 border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
        <div className="text-xl sm:text-2xl md:text-3xl text-white relative z-10 fun-font">
          Alexandre Magno
        </div>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8 relative z-10">
          {/* Portfolio Link */}
          {(showPortfolioLink || currentView !== 'portfolio') && (
            <button 
              onClick={onPortfolioClick || onBackToPortfolio}
              className={`hover:text-white transition-colors font-medium px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-white/10 text-sm lg:text-base ${
                currentView === 'portfolio' ? 'text-white bg-white/10' : 'text-white/80'
              }`}
            >
              {t('nav.portfolio')}
            </button>
          )}
          
          {/* About Link */}
          {currentView === 'portfolio' ? (
            <a href="#about" className="hover:text-white transition-colors text-white/80 font-medium px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-white/10 text-sm lg:text-base">
              {t('nav.about')}
            </a>
          ) : (
            <button 
              onClick={onAboutClick}
              className={`hover:text-white transition-colors font-medium px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-white/10 text-sm lg:text-base ${
                currentView === 'about' ? 'text-white bg-white/10' : 'text-white/80'
              }`}
            >
              {t('nav.about')}
            </button>
          )}
          
          {/* Projects Link */}
          {currentView === 'portfolio' ? (
            <a href="#projects" className="hover:text-white transition-colors text-white/80 font-medium px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-white/10 text-sm lg:text-base">
              {t('nav.projects')}
            </a>
          ) : (
            <button 
              onClick={onProjectsClick}
              className={`hover:text-white transition-colors font-medium px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-white/10 text-sm lg:text-base ${
                currentView === 'projects' ? 'text-white bg-white/10' : 'text-white/80'
              }`}
            >
              {t('nav.projects')}
            </button>
          )}
          
          {/* Contact Link */}
          {currentView === 'portfolio' ? (
            <a href="#contact" className="hover:text-white transition-colors text-white/80 font-medium px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-white/10 text-sm lg:text-base">
              {t('nav.contact')}
            </a>
          ) : (
            <button 
              onClick={onPortfolioClick || onBackToPortfolio}
              className="hover:text-white transition-colors text-white/80 font-medium px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-white/10 text-sm lg:text-base"
            >
              {t('nav.contact')}
            </button>
          )}
          
          <LanguageSwitcher />
          <Button 
            className="orange-pantone-bg hover:bg-red-700 text-white rounded-full px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-lg" 
            style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--orange-pantone)'}}
          >
            <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
            {t('nav.resume')}
          </Button>
        </div>

        <div className="md:hidden relative z-10 flex items-center gap-2">
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden onyx-bg border-t border-gray-800/50 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {/* Portfolio Link Mobile */}
            {(showPortfolioLink || currentView !== 'portfolio') && (
              <button 
                onClick={() => handleNavClick(onPortfolioClick || onBackToPortfolio || (() => {}))}
                className={`block py-3 px-4 rounded-full hover:bg-white/10 transition-colors font-medium w-full text-left ${
                  currentView === 'portfolio' ? 'text-white bg-white/10' : 'text-white/80 hover:text-gray-200'
                }`}
              >
                {t('nav.portfolio')}
              </button>
            )}
            
            {/* About Link Mobile */}
            {currentView === 'portfolio' ? (
              <a 
                href="#about" 
                className="block text-white/80 hover:text-gray-200 py-3 px-4 rounded-full hover:bg-white/10 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
            ) : (
              <button 
                onClick={() => handleNavClick(onAboutClick || (() => {}))}
                className={`block py-3 px-4 rounded-full hover:bg-white/10 transition-colors font-medium w-full text-left ${
                  currentView === 'about' ? 'text-white bg-white/10' : 'text-white/80 hover:text-gray-200'
                }`}
              >
                {t('nav.about')}
              </button>
            )}
            
            {/* Projects Link Mobile */}
            {currentView === 'portfolio' ? (
              <a 
                href="#projects" 
                className="block text-white/80 hover:text-gray-200 py-3 px-4 rounded-full hover:bg-white/10 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.projects')}
              </a>
            ) : (
              <button 
                onClick={() => handleNavClick(onProjectsClick || (() => {}))}
                className={`block py-3 px-4 rounded-full hover:bg-white/10 transition-colors font-medium w-full text-left ${
                  currentView === 'projects' ? 'text-white bg-white/10' : 'text-white/80 hover:text-gray-200'
                }`}
              >
                {t('nav.projects')}
              </button>
            )}
            
            {/* Contact Link Mobile */}
            {currentView === 'portfolio' ? (
              <a 
                href="#contact" 
                className="block text-white/80 hover:text-gray-200 py-3 px-4 rounded-full hover:bg-white/10 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            ) : (
              <button 
                onClick={() => handleNavClick(onPortfolioClick || onBackToPortfolio || (() => {}))}
                className="block text-white/80 hover:text-gray-200 py-3 px-4 rounded-full hover:bg-white/10 transition-colors font-medium w-full text-left"
              >
                {t('nav.contact')}
              </button>
            )}
            
            <div className="pt-3 border-t border-gray-800/50">
              <Button 
                className="w-full orange-pantone-bg hover:bg-red-700 text-white rounded-full px-6 py-3 text-base" 
                style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--orange-pantone)'}}
              >
                <Download className="w-4 h-4 mr-2" />
                {t('nav.resume')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}