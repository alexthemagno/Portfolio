import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Comprehensive translations
const translations = {
  pt: {
    // Navigation
    'nav.portfolio': 'Portfólio',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.resume': 'Currículo',
    'nav.allProjects': 'Todos os Projetos',
    
    // Hero Section
    'hero.badge': 'Designer de Produto e Industrial',
    'hero.title': 'Projetando os Produtos de Amanhã Hoje',
    'hero.description': 'Sou Alexandre, um designer de produto e industrial apaixonado, atualmente cursando minha graduação com 2 anos para concluir. Crio soluções inovadoras que combinam funcionalidade com estética bela, sempre mantendo o usuário no centro de cada decisão de design.',
    'hero.viewWork': 'Ver Meu Trabalho',
    'hero.getInTouch': 'Entre em Contato',
    
    // Social Media
    'social.linkedin': 'LinkedIn',
    'social.instagram': 'Instagram', 
    'social.email': 'Email',
    
    // Core Skills
    'skills.title': 'Principais Competências',
    'skills.subtitle': 'Minhas principais competências em design',
    'skills.productDesign': 'Design de Produto',
    'skills.industrialDesign': 'Design Industrial',
    'skills.designThinking': 'Design Thinking',
    'skills.cadModeling': 'Modelagem CAD',
    'skills.advanced': 'Avançado',
    'skills.proficient': 'Proficiente',
    'skills.viewFullExpertise': 'Quer ver meu conjunto completo de habilidades?',
    'skills.aboutPageLink': 'Ver competências completas na minha página Sobre',
    
    // About Section
    'about.badge': 'Sobre Alexandre Magno',
    'about.title': 'Olá, sou Alexandre Magno',
    'about.bio.paragraph1': 'Sou um designer de produto e industrial apaixonado atualmente no meu terceiro ano de graduação em Design de Produto, com previsão de formatura em 2027. Minha jornada no design começou com curiosidade sobre como as coisas funcionam e evoluiu para uma paixão por criar soluções que verdadeiramente impactam a vida das pessoas.',
    'about.bio.paragraph2': 'Com foco na criação de produtos inovadores e sustentáveis, combino princípios de design thinking com conhecimento técnico avançado em modelagem CAD e prototipagem. Acredito que o melhor design surge da intersecção entre necessidades humanas, viabilidade tecnológica e sustentabilidade ambiental.',
    'about.bio.paragraph3': 'Quando não estou projetando, você pode me encontrar explorando novas tecnologias, participando de workshops de design ou colaborando com outros criativos em projetos que desafiam o status quo. Estou sempre em busca de oportunidades para aprender, crescer e contribuir para um mundo melhor através do design.',
    
    // About Stats
    'about.stats.experience': '3+',
    'about.stats.experienceLabel': 'Anos de Experiência',
    'about.stats.projects': '25+',
    'about.stats.projectsLabel': 'Projetos Concluídos',
    'about.stats.year': '2025',
    'about.stats.yearLabel': 'Ano Atual',
    'about.stats.graduation': '2027',
    'about.stats.graduationLabel': 'Ano de Formatura',
    
    // About Contact
    'about.contact.location': 'Localização',
    'about.contact.email': 'Email',
    'about.contact.availability': 'Disponibilidade',
    'about.contact.availabilityStatus': 'Disponível para estágios',
    
    // About Skills
    'about.skills.technicalTitle': 'Competências Técnicas',
    'about.skills.technicalSubtitle': 'Ferramentas e tecnologias que domino para trazer ideias à vida',
    'about.skills.softTitle': 'Competências Interpessoais',
    'about.skills.softSubtitle': 'As habilidades humanas que tornam o design verdadeiramente impactante',
    
    'about.skills.solidworks': 'SolidWorks',
    'about.skills.fusion360': 'Fusion 360',
    'about.skills.keyshot': 'KeyShot',
    'about.skills.photoshop': 'Adobe Photoshop',
    'about.skills.illustrator': 'Adobe Illustrator',
    'about.skills.figma': 'Figma',
    'about.skills.sketch': 'Sketch',
    'about.skills.prototyping': 'Prototipagem',
    
    'about.skills.problemSolving': 'Resolução de Problemas',
    'about.skills.problemSolvingDesc': 'Abordagem sistemática para identificar, analisar e resolver desafios de design complexos.',
    'about.skills.creativity': 'Criatividade',
    'about.skills.creativityDesc': 'Pensamento inovador e capacidade de gerar soluções originais que destacam-se no mercado.',
    'about.skills.teamwork': 'Trabalho em Equipe',
    'about.skills.teamworkDesc': 'Colaboração eficaz com equipes multidisciplinares para alcançar objetivos comuns.',
    'about.skills.designThinkingDesc': 'Metodologia centrada no usuário para criar soluções inovadoras e significativas.',
    
    // About Education
    'about.education.title': 'Educação',
    'about.education.degree': 'Bacharelado em Design de Produto',
    'about.education.school': 'Universidade Estadual Paulista (UNESP)',
    'about.education.period': '2023 - 2027',
    'about.education.status': 'Em andamento',
    'about.education.highlight1': 'Foco em design sustentável e inovação tecnológica',
    'about.education.highlight2': 'Participação ativa em projetos de pesquisa e extensão',
    'about.education.highlight3': 'Desenvolvimento de projetos colaborativos com a indústria',
    
    // About Interests
    'about.interests.title': 'Áreas de Interesse',
    'about.interests.subtitle': 'Temas e tendências que me inspiram e direcionam minha prática de design',
    'about.interests.sustainableDesign': 'Design Sustentável',
    'about.interests.emergingTech': 'Tecnologias Emergentes',
    'about.interests.userExperience': 'Experiência do Usuário',
    'about.interests.manufacturing': 'Processos de Manufatura',
    'about.interests.innovation': 'Inovação Social',
    'about.interests.collaboration': 'Design Colaborativo',
    
    // About Social
    'about.social.title': 'Vamos nos Conectar',
    'about.social.subtitle': 'Encontre-me nas redes sociais e vamos iniciar uma conversa sobre design',
    
    // About CTA
    'about.cta.title': 'Pronto para Trabalharmos Juntos?',
    'about.cta.description': 'Estou sempre aberto a novas oportunidades, colaborações e conversas inspiradoras sobre design.',
    'about.cta.downloadCV': 'Baixar Currículo',
    'about.cta.contactMe': 'Entre em Contato',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Uma vitrine dos meus projetos de design mais recentes, do conceito ao protótipo. Cada projeto representa minha paixão por criar soluções centradas no usuário.',
    'projects.viewAll': 'Ver Todos os Projetos',
    'projects.viewAllSubtitle': 'Explore meu portfólio completo de projetos de design',
    'projects.learnMore': 'Saiba Mais',
    'projects.viewProject': 'Ver Projeto',
    
    // Contact Section
    'contact.title': 'Vamos Criar Algo Incrível Juntos',
    'contact.description': 'Estou sempre animado para trabalhar em novos projetos e colaborar com outros criativos. Seja um estágio, projeto freelance ou apenas um bate-papo sobre design, adoraria ouvir você!',
    'contact.email': 'hello@alexandremagno.design',
    'contact.scheduleCall': 'Agendar uma Conversa',
    
    // Footer
    'footer.tagline': 'Designer de Produto e Industrial | Formatura em 2027',
    'footer.copyright': '© 2025 Alexandre Magno. Projetado com paixão e muito café ☕',
    
    // All Projects Page
    'allProjects.badge': 'Portfólio Completo',
    'allProjects.title': 'Todos os Projetos',
    'allProjects.subtitle': 'Explore meu portfólio completo de design abrangendo design de produto, design industrial e projetos de design de transporte.',
    'allProjects.searchPlaceholder': 'Buscar projetos...',
    'allProjects.showing': 'Mostrando',
    'allProjects.project': 'projeto',
    'allProjects.projects': 'projetos',
    'allProjects.in': 'em',
    'allProjects.matching': 'correspondendo a',
    'allProjects.noProjectsFound': 'Nenhum projeto encontrado',
    'allProjects.noProjectsSubtitle': 'Tente ajustar seus critérios de busca ou filtro para ver mais projetos.',
    'allProjects.clearFilters': 'Limpar Filtros',
    'allProjects.backToPortfolio': 'Voltar ao Portfólio',
    'allProjects.backToMainPortfolio': 'Voltar ao Portfólio Principal',
    
    // Project Categories
    'category.all': 'Todos',
    'category.productDesign': 'Design de Produto',
    'category.industrialDesign': 'Design Industrial',
    'category.transportationDesign': 'Design de Transporte',
    'category.featured': 'Destaque',
    
    // Project Detail
    'project.backToPortfolio': 'Voltar ao Portfólio',
    'project.overview': 'Visão Geral do Projeto',
    'project.duration': 'Duração',
    'project.team': 'Equipe',
    'project.role': 'Minha Função',
    'project.tools': 'Ferramentas',
    'project.keyChallenges': 'Principais Desafios:',
    'project.ourApproach': 'Nossa Abordagem:',
    'project.keyFeatures': 'Principais Características',
    'project.gallery': 'Galeria',
    'project.technicalSpecs': 'Especificações Técnicas',
    'project.materials': 'Materiais',
    'project.dimensions': 'Dimensões',
    'project.sustainability': 'Sustentabilidade',
    'project.manufacturing': 'Fabricação',
    'project.resultsImpact': 'Resultados e Impacto',
    'project.impactAreas': 'Áreas de Impacto:',
    'project.nextSteps': 'Próximos Passos',
    'project.deliverables': 'Entregáveis:',
    'project.previousProject': 'Projeto Anterior',
    'project.nextProject': 'Próximo Projeto',
    
    // Language Switcher
    'language.portuguese': 'Português',
    'language.english': 'English',
  },
  en: {
    // Navigation
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.allProjects': 'All Projects',
    
    // Hero Section
    'hero.badge': 'Product & Industrial Designer',
    'hero.title': 'Designing Tomorrow\'s Products Today',
    'hero.description': 'I\'m Alexandre, a passionate product and industrial designer currently pursuing my degree with 2 years to go. I create innovative solutions that blend functionality with beautiful aesthetics, always keeping the user at the center of every design decision.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    
    // Social Media
    'social.linkedin': 'LinkedIn',
    'social.instagram': 'Instagram',
    'social.email': 'Email',
    
    // Core Skills
    'skills.title': 'Core Expertise',
    'skills.subtitle': 'My primary design competencies',
    'skills.productDesign': 'Product Design',
    'skills.industrialDesign': 'Industrial Design',
    'skills.designThinking': 'Design Thinking',
    'skills.cadModeling': 'CAD Modeling',
    'skills.advanced': 'Advanced',
    'skills.proficient': 'Proficient',
    'skills.viewFullExpertise': 'Want to see my complete skill set?',
    'skills.aboutPageLink': 'View full expertise on my About page',
    
    // About Section
    'about.badge': 'About Alexandre Magno',
    'about.title': 'Hello, I\'m Alexandre Magno',
    'about.bio.paragraph1': 'I\'m a passionate product and industrial designer currently in my third year of pursuing a Product Design degree, with an expected graduation in 2027. My journey in design began with curiosity about how things work and evolved into a passion for creating solutions that truly impact people\'s lives.',
    'about.bio.paragraph2': 'With a focus on creating innovative and sustainable products, I combine design thinking principles with advanced technical knowledge in CAD modeling and prototyping. I believe the best design emerges from the intersection of human needs, technological feasibility, and environmental sustainability.',
    'about.bio.paragraph3': 'When I\'m not designing, you can find me exploring new technologies, attending design workshops, or collaborating with fellow creatives on projects that challenge the status quo. I\'m always seeking opportunities to learn, grow, and contribute to a better world through design.',
    
    // About Stats
    'about.stats.experience': '3+',
    'about.stats.experienceLabel': 'Years Experience',
    'about.stats.projects': '25+',
    'about.stats.projectsLabel': 'Projects Completed',
    'about.stats.year': '2025',
    'about.stats.yearLabel': 'Current Year',
    'about.stats.graduation': '2027',
    'about.stats.graduationLabel': 'Graduation Year',
    
    // About Contact
    'about.contact.location': 'Location',
    'about.contact.email': 'Email',
    'about.contact.availability': 'Availability',
    'about.contact.availabilityStatus': 'Available for internships',
    
    // About Skills
    'about.skills.technicalTitle': 'Technical Skills',
    'about.skills.technicalSubtitle': 'Tools and technologies I master to bring ideas to life',
    'about.skills.softTitle': 'Soft Skills',
    'about.skills.softSubtitle': 'The human skills that make design truly impactful',
    
    'about.skills.solidworks': 'SolidWorks',
    'about.skills.fusion360': 'Fusion 360',
    'about.skills.keyshot': 'KeyShot',
    'about.skills.photoshop': 'Adobe Photoshop',
    'about.skills.illustrator': 'Adobe Illustrator',
    'about.skills.figma': 'Figma',
    'about.skills.sketch': 'Sketch',
    'about.skills.prototyping': 'Prototyping',
    
    'about.skills.problemSolving': 'Problem Solving',
    'about.skills.problemSolvingDesc': 'Systematic approach to identifying, analyzing, and solving complex design challenges.',
    'about.skills.creativity': 'Creativity',
    'about.skills.creativityDesc': 'Innovative thinking and ability to generate original solutions that stand out in the market.',
    'about.skills.teamwork': 'Teamwork',
    'about.skills.teamworkDesc': 'Effective collaboration with multidisciplinary teams to achieve common goals.',
    'about.skills.designThinkingDesc': 'User-centered methodology for creating innovative and meaningful solutions.',
    
    // About Education
    'about.education.title': 'Education',
    'about.education.degree': 'Bachelor in Product Design',
    'about.education.school': 'São Paulo State University (UNESP)',
    'about.education.period': '2023 - 2027',
    'about.education.status': 'In Progress',
    'about.education.highlight1': 'Focus on sustainable design and technological innovation',
    'about.education.highlight2': 'Active participation in research and extension projects',
    'about.education.highlight3': 'Development of collaborative projects with industry',
    
    // About Interests
    'about.interests.title': 'Areas of Interest',
    'about.interests.subtitle': 'Topics and trends that inspire and guide my design practice',
    'about.interests.sustainableDesign': 'Sustainable Design',
    'about.interests.emergingTech': 'Emerging Technologies',
    'about.interests.userExperience': 'User Experience',
    'about.interests.manufacturing': 'Manufacturing Processes',
    'about.interests.innovation': 'Social Innovation',
    'about.interests.collaboration': 'Collaborative Design',
    
    // About Social
    'about.social.title': 'Let\'s Connect',
    'about.social.subtitle': 'Find me on social media and let\'s start a conversation about design',
    
    // About CTA
    'about.cta.title': 'Ready to Work Together?',
    'about.cta.description': 'I\'m always open to new opportunities, collaborations, and inspiring conversations about design.',
    'about.cta.downloadCV': 'Download Resume',
    'about.cta.contactMe': 'Contact Me',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my latest design projects, from concept to prototype. Each project represents my passion for creating user-centered solutions.',
    'projects.viewAll': 'View All Projects',
    'projects.viewAllSubtitle': 'Explore my complete portfolio of design projects',
    'projects.learnMore': 'Learn More',
    'projects.viewProject': 'View Project',
    
    // Contact Section
    'contact.title': 'Let\'s Create Something Amazing Together',
    'contact.description': 'I\'m always excited to work on new projects and collaborate with fellow creatives. Whether it\'s an internship, freelance project, or just a chat about design, I\'d love to hear from you!',
    'contact.email': 'hello@alexandremagno.design',
    'contact.scheduleCall': 'Schedule a Call',
    
    // Footer
    'footer.tagline': 'Product & Industrial Designer | Graduating 2027',
    'footer.copyright': '© 2025 Alexandre Magno. Designed with passion and lots of coffee ☕',
    
    // All Projects Page
    'allProjects.badge': 'Complete Portfolio',
    'allProjects.title': 'All Projects',
    'allProjects.subtitle': 'Explore my complete design portfolio spanning product design, industrial design, and transportation design projects.',
    'allProjects.searchPlaceholder': 'Search projects...',
    'allProjects.showing': 'Showing',
    'allProjects.project': 'project',
    'allProjects.projects': 'projects',
    'allProjects.in': 'in',
    'allProjects.matching': 'matching',
    'allProjects.noProjectsFound': 'No projects found',
    'allProjects.noProjectsSubtitle': 'Try adjusting your search or filter criteria to see more projects.',
    'allProjects.clearFilters': 'Clear Filters',
    'allProjects.backToPortfolio': 'Back to Portfolio',
    'allProjects.backToMainPortfolio': 'Back to Main Portfolio',
    
    // Project Categories
    'category.all': 'All',
    'category.productDesign': 'Product Design',
    'category.industrialDesign': 'Industrial Design',
    'category.transportationDesign': 'Transportation Design',
    'category.featured': 'Featured',
    
    // Project Detail
    'project.backToPortfolio': 'Back to Portfolio',
    'project.overview': 'Project Overview',
    'project.duration': 'Duration',
    'project.team': 'Team',
    'project.role': 'My Role',
    'project.tools': 'Tools',
    'project.keyChallenges': 'Key Challenges:',
    'project.ourApproach': 'Our Approach:',
    'project.keyFeatures': 'Key Features',
    'project.gallery': 'Gallery',
    'project.technicalSpecs': 'Technical Specifications',
    'project.materials': 'Materials',
    'project.dimensions': 'Dimensions',
    'project.sustainability': 'Sustainability',
    'project.manufacturing': 'Manufacturing',
    'project.resultsImpact': 'Results & Impact',
    'project.impactAreas': 'Impact Areas:',
    'project.nextSteps': 'Next Steps',
    'project.deliverables': 'Deliverables:',
    'project.previousProject': 'Previous Project',
    'project.nextProject': 'Next Project',
    
    // Language Switcher
    'language.portuguese': 'Português',
    'language.english': 'English',
  }
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Auto-detect language based on browser locale
const detectLanguage = (): Language => {
  if (typeof window === 'undefined') return 'pt'; // Default to Portuguese for SSR
  
  try {
    const browserLang = navigator.language.toLowerCase();
    
    // Check for Brazilian Portuguese or Portuguese
    if (browserLang.startsWith('pt-br') || browserLang.startsWith('pt')) {
      return 'pt';
    }
    
    // Default to English for other locales
    return 'en';
  } catch (error) {
    console.warn('Error detecting language:', error);
    return 'pt'; // Default fallback
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('pt');

  // Initialize language based on localStorage or browser detection
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('portfolio-language') as Language;
      if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
        setLanguageState(savedLanguage);
      } else {
        const detectedLanguage = detectLanguage();
        setLanguageState(detectedLanguage);
        localStorage.setItem('portfolio-language', detectedLanguage);
      }
    } catch (error) {
      console.warn('Error initializing language:', error);
      setLanguageState('pt'); // Default fallback
    }
  }, []);

  const setLanguage = (lang: Language) => {
    try {
      setLanguageState(lang);
      localStorage.setItem('portfolio-language', lang);
    } catch (error) {
      console.warn('Error saving language:', error);
    }
  };

  const t = (key: string): string => {
    try {
      const translation = translations[language][key as keyof typeof translations[typeof language]];
      if (!translation) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key; // Return the key if translation is missing
      }
      return translation;
    } catch (error) {
      console.warn('Error getting translation:', error);
      return key; // Return the key as fallback
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}