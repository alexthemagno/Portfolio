import { Button } from './ui/button';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    try {
      setLanguage(language === 'pt' ? 'en' : 'pt');
    } catch (error) {
      console.warn('Error toggling language:', error);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-white hover:bg-white/20 rounded-full px-4 py-2 flex items-center gap-3 transition-all hover:scale-105 bg-white/10 backdrop-blur-sm border border-white/20"
      title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      {/* Globe Icon */}
      <Globe className="w-4 h-4 text-white/90" />
      
      {/* Language Options */}
      <div className="flex items-center gap-2 text-sm">
        <span 
          className={`transition-all duration-200 ${
            language === 'pt' 
              ? 'text-white font-semibold' 
              : 'text-white/50 font-normal'
          }`}
        >
          PT
        </span>
        <span className="text-white/40 text-xs">|</span>
        <span 
          className={`transition-all duration-200 ${
            language === 'en' 
              ? 'text-white font-semibold' 
              : 'text-white/50 font-normal'
          }`}
        >
          EN
        </span>
      </div>
    </Button>
  );
}