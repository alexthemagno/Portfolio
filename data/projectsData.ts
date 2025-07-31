// Enhanced project data structure with bilingual support
export interface BilingualProject {
  id: number;
  title: {
    pt: string;
    en: string;
  };
  category: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  shortDescription: {
    pt: string;
    en: string;
  };
  image: string;
  heroImage: string;
  year?: string;
  featured?: boolean;
  overview: {
    duration: {
      pt: string;
      en: string;
    };
    team: {
      pt: string;
      en: string;
    };
    role: {
      pt: string;
      en: string;
    };
    tools: string[];
  };
  problem: {
    title: {
      pt: string;
      en: string;
    };
    description: {
      pt: string;
      en: string;
    };
    challenges: {
      pt: string[];
      en: string[];
    };
  };
  solution: {
    title: {
      pt: string;
      en: string;
    };
    description: {
      pt: string;
      en: string;
    };
    approach: {
      pt: string[];
      en: string[];
    };
  };
  process: {
    title: {
      pt: string;
      en: string;
    };
    steps: Array<{
      phase: {
        pt: string;
        en: string;
      };
      description: {
        pt: string;
        en: string;
      };
      deliverables: {
        pt: string[];
        en: string[];
      };
    }>;
  };
  features: Array<{
    title: {
      pt: string;
      en: string;
    };
    description: {
      pt: string;
      en: string;
    };
    image: string;
  }>;
  gallery: Array<{
    image: string;
    caption: {
      pt: string;
      en: string;
    };
  }>;
  technicalSpecs: {
    materials?: {
      pt: string[];
      en: string[];
    };
    dimensions?: {
      pt: string;
      en: string;
    };
    sustainability?: {
      pt: string[];
      en: string[];
    };
    manufacturing?: {
      pt: string;
      en: string;
    };
  };
  results: {
    impact: {
      pt: string[];
      en: string[];
    };
    metrics?: Array<{
      label: {
        pt: string;
        en: string;
      };
      value: string;
    }>;
    testimonial?: {
      text: {
        pt: string;
        en: string;
      };
      author: string;
      role: {
        pt: string;
        en: string;
      };
    };
  };
  nextSteps: {
    pt: string[];
    en: string[];
  };
}

// Sample bilingual project data
export const ecoFlowProject: BilingualProject = {
  id: 1,
  title: {
    pt: "Garrafa EcoFlow",
    en: "EcoFlow Water Bottle"
  },
  category: {
    pt: "Design de Produto",
    en: "Product Design"
  },
  description: {
    pt: "Solução sustentável de hidratação com sistema de filtração integrado",
    en: "Sustainable hydration solution with integrated filtration system"
  },
  shortDescription: {
    pt: "Uma revolucionária garrafa de água com sistema de filtração avançado, projetada para reduzir o desperdício de plástico e fornecer água limpa em qualquer lugar.",
    en: "A revolutionary water bottle with advanced filtration system, designed to reduce plastic waste and provide clean water anywhere."
  },
  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=600&fit=crop&crop=center",
  heroImage: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1200&h=800&fit=crop&crop=center",
  year: "2024",
  featured: true,
  overview: {
    duration: {
      pt: "6 meses",
      en: "6 months"
    },
    team: {
      pt: "3 designers",
      en: "3 designers"
    },
    role: {
      pt: "Designer Principal",
      en: "Lead Designer"
    },
    tools: ["Fusion 360", "Keyshot", "Adobe Creative Suite", "Figma"]
  },
  problem: {
    title: {
      pt: "O Problema",
      en: "The Problem"
    },
    description: {
      pt: "Bilhões de garrafas plásticas são descartadas anualmente, causando poluição ambiental massiva. Além disso, milhões de pessoas não têm acesso à água potável limpa, especialmente durante viagens ou atividades ao ar livre.",
      en: "Billions of plastic bottles are discarded annually, causing massive environmental pollution. Additionally, millions of people lack access to clean drinking water, especially during travel or outdoor activities."
    },
    challenges: {
      pt: [
        "Reduzir o uso de garrafas plásticas descartáveis",
        "Criar um sistema de filtração portátil e eficiente",
        "Manter a facilidade de uso e limpeza",
        "Equilibrar durabilidade com sustentabilidade"
      ],
      en: [
        "Reduce single-use plastic bottle consumption",
        "Create a portable and efficient filtration system",
        "Maintain ease of use and cleaning",
        "Balance durability with sustainability"
      ]
    }
  },
  solution: {
    title: {
      pt: "A Solução",
      en: "The Solution"
    },
    description: {
      pt: "A EcoFlow é uma garrafa reutilizável inovadora com sistema de filtração de múltiplas camadas que purifica a água de qualquer fonte. Feita com materiais sustentáveis e projetada para uma vida útil de mais de 5 anos.",
      en: "EcoFlow is an innovative reusable bottle with a multi-layer filtration system that purifies water from any source. Made with sustainable materials and designed for a lifespan of over 5 years."
    },
    approach: {
      pt: [
        "Pesquisa extensiva sobre tecnologias de filtração",
        "Design centrado no usuário com múltiplas iterações",
        "Seleção cuidadosa de materiais sustentáveis",
        "Testes rigorosos de usabilidade e eficiência"
      ],
      en: [
        "Extensive research on filtration technologies",
        "User-centered design with multiple iterations",
        "Careful selection of sustainable materials",
        "Rigorous usability and efficiency testing"
      ]
    }
  },
  process: {
    title: {
      pt: "Processo de Design",
      en: "Design Process"
    },
    steps: [
      {
        phase: {
          pt: "Pesquisa & Descoberta",
          en: "Research & Discovery"
        },
        description: {
          pt: "Análise profunda do mercado e necessidades dos usuários",
          en: "Deep analysis of market and user needs"
        },
        deliverables: {
          pt: ["Pesquisa de mercado", "Entrevistas com usuários", "Análise competitiva"],
          en: ["Market research", "User interviews", "Competitive analysis"]
        }
      },
      {
        phase: {
          pt: "Ideação & Conceito",
          en: "Ideation & Concept"
        },
        description: {
          pt: "Geração de ideias e desenvolvimento de conceitos iniciais",
          en: "Idea generation and initial concept development"
        },
        deliverables: {
          pt: ["Sessões de brainstorming", "Sketches conceituais", "Mood boards"],
          en: ["Brainstorming sessions", "Concept sketches", "Mood boards"]
        }
      },
      {
        phase: {
          pt: "Prototipagem",
          en: "Prototyping"
        },
        description: {
          pt: "Criação de protótipos funcionais para testes",
          en: "Creation of functional prototypes for testing"
        },
        deliverables: {
          pt: ["Protótipos físicos", "Testes de filtração", "Modelos 3D"],
          en: ["Physical prototypes", "Filtration tests", "3D models"]
        }
      }
    ]
  },
  features: [
    {
      title: {
        pt: "Sistema de Filtração Avançado",
        en: "Advanced Filtration System"
      },
      description: {
        pt: "Sistema de 4 camadas que remove 99.9% dos contaminantes, incluindo bactérias, vírus e metais pesados, garantindo água potável segura em qualquer lugar.",
        en: "4-layer system that removes 99.9% of contaminants, including bacteria, viruses, and heavy metals, ensuring safe drinking water anywhere."
      },
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: {
        pt: "Design Ergonômico",
        en: "Ergonomic Design"
      },
      description: {
        pt: "Formato otimizado para conforto durante o uso, com superfície antiderrapante e bico de fácil abertura com uma mão só.",
        en: "Optimized shape for comfort during use, with non-slip surface and easy one-hand opening spout."
      },
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
    }
  ],
  gallery: [
    {
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop&crop=center",
      caption: {
        pt: "Vista geral do produto final",
        en: "Overview of the final product"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center",
      caption: {
        pt: "Detalhes do sistema de filtração",
        en: "Filtration system details"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      caption: {
        pt: "Testes de usabilidade",
        en: "Usability testing"
      }
    }
  ],
  technicalSpecs: {
    materials: {
      pt: ["Aço inoxidável 316", "Silicone grau alimentício", "Filtros de carvão ativado"],
      en: ["316 Stainless Steel", "Food-grade silicone", "Activated carbon filters"]
    },
    dimensions: {
      pt: "25cm altura × 7cm diâmetro",
      en: "25cm height × 7cm diameter"
    },
    sustainability: {
      pt: [
        "100% reciclável",
        "Vida útil de 5+ anos",
        "Substitui 1,800 garrafas plásticas/ano"
      ],
      en: [
        "100% recyclable",
        "5+ year lifespan",
        "Replaces 1,800 plastic bottles/year"
      ]
    },
    manufacturing: {
      pt: "Produção local com fornecedores certificados",
      en: "Local production with certified suppliers"
    }
  },
  results: {
    impact: {
      pt: [
        "Redução de 85% no uso de garrafas plásticas pelos usuários",
        "Melhoria na qualidade da água consumida",
        "Aumento da hidratação diária em 40%",
        "Economia média de R$ 1,200/ano por usuário"
      ],
      en: [
        "85% reduction in plastic bottle usage by users",
        "Improved quality of consumed water",
        "40% increase in daily hydration",
        "Average savings of $240/year per user"
      ]
    },
    metrics: [
      {
        label: {
          pt: "Satisfação do Usuário",
          en: "User Satisfaction"
        },
        value: "94%"
      },
      {
        label: {
          pt: "Redução de Plástico",
          en: "Plastic Reduction"
        },
        value: "85%"
      },
      {
        label: {
          pt: "Eficiência de Filtração",
          en: "Filtration Efficiency"
        },
        value: "99.9%"
      }
    ],
    testimonial: {
      text: {
        pt: "A EcoFlow revolucionou minha hidratação diária. A qualidade da água é excelente e finalmente parei de comprar garrafas plásticas!",
        en: "EcoFlow revolutionized my daily hydration. The water quality is excellent and I finally stopped buying plastic bottles!"
      },
      author: "Maria Silva",
      role: {
        pt: "Usuária Beta",
        en: "Beta User"
      }
    }
  },
  nextSteps: {
    pt: [
      "Expansão para novos mercados internacionais",
      "Desenvolvimento de filtros especializados",
      "Implementação de IoT para monitoramento"
    ],
    en: [
      "Expansion to new international markets",
      "Development of specialized filters",
      "IoT implementation for monitoring"
    ]
  }
};

// More sample projects with bilingual support
export const allProjectsData: BilingualProject[] = [
  ecoFlowProject,
  {
    id: 2,
    title: {
      pt: "Sistema ModularDesk",
      en: "ModularDesk System"
    },
    category: {
      pt: "Design Industrial",
      en: "Industrial Design"
    },
    description: {
      pt: "Mobiliário de workspace adaptável para trabalho remoto moderno",
      en: "Adaptable workspace furniture for modern remote work"
    },
    shortDescription: {
      pt: "Sistema modular de mesa que se adapta a diferentes necessidades de trabalho",
      en: "Modular desk system that adapts to different work needs"
    },
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&crop=center",
    year: "2024",
    overview: {
      duration: { pt: "4 meses", en: "4 months" },
      team: { pt: "2 designers", en: "2 designers" },
      role: { pt: "Co-designer", en: "Co-designer" },
      tools: ["SolidWorks", "KeyShot", "Adobe Creative Suite"]
    },
    problem: {
      title: { pt: "O Problema", en: "The Problem" },
      description: { pt: "Espaços de trabalho limitados e necessidades variáveis", en: "Limited workspace and varying needs" },
      challenges: { pt: ["Flexibilidade", "Ergonomia"], en: ["Flexibility", "Ergonomics"] }
    },
    solution: {
      title: { pt: "A Solução", en: "The Solution" },
      description: { pt: "Sistema modular adaptável", en: "Adaptable modular system" },
      approach: { pt: ["Design modular"], en: ["Modular design"] }
    },
    process: {
      title: { pt: "Processo", en: "Process" },
      steps: [{
        phase: { pt: "Pesquisa", en: "Research" },
        description: { pt: "Análise de necessidades", en: "Needs analysis" },
        deliverables: { pt: ["Pesquisa"], en: ["Research"] }
      }]
    },
    features: [],
    gallery: [],
    technicalSpecs: {},
    results: {
      impact: { pt: ["Melhoria na produtividade"], en: ["Productivity improvement"] }
    },
    nextSteps: { pt: ["Expansão"], en: ["Expansion"] }
  },
  {
    id: 3,
    title: {
      pt: "Scooter UrbanMobility",
      en: "UrbanMobility Scooter"
    },
    category: {
      pt: "Design de Transporte",
      en: "Transportation Design"
    },
    description: {
      pt: "Solução de micromobilidade elétrica para deslocamento urbano",
      en: "Electric micro-mobility solution for urban commuting"
    },
    shortDescription: {
      pt: "Scooter elétrico para mobilidade urbana sustentável",
      en: "Electric scooter for sustainable urban mobility"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&crop=center",
    year: "2023",
    overview: {
      duration: { pt: "8 meses", en: "8 months" },
      team: { pt: "4 designers", en: "4 designers" },
      role: { pt: "Designer de Transporte", en: "Transportation Designer" },
      tools: ["Rhino", "KeyShot", "Adobe Creative Suite"]
    },
    problem: {
      title: { pt: "O Problema", en: "The Problem" },
      description: { pt: "Trânsito urbano congestionado", en: "Congested urban traffic" },
      challenges: { pt: ["Mobilidade", "Sustentabilidade"], en: ["Mobility", "Sustainability"] }
    },
    solution: {
      title: { pt: "A Solução", en: "The Solution" },
      description: { pt: "Scooter elétrico compacto", en: "Compact electric scooter" },
      approach: { pt: ["Design sustentável"], en: ["Sustainable design"] }
    },
    process: {
      title: { pt: "Processo", en: "Process" },
      steps: [{
        phase: { pt: "Desenvolvimento", en: "Development" },
        description: { pt: "Criação do conceito", en: "Concept creation" },
        deliverables: { pt: ["Protótipo"], en: ["Prototype"] }
      }]
    },
    features: [],
    gallery: [],
    technicalSpecs: {},
    results: {
      impact: { pt: ["Redução de emissões"], en: ["Emission reduction"] }
    },
    nextSteps: { pt: ["Produção"], en: ["Production"] }
  },
  {
    id: 4,
    title: {
      pt: "Hub SmartHome",
      en: "SmartHome Hub"
    },
    category: {
      pt: "Design de Produto",
      en: "Product Design"
    },
    description: {
      pt: "Centro de controle intuitivo para dispositivos domésticos conectados",
      en: "Intuitive control center for connected home devices"
    },
    shortDescription: {
      pt: "Hub central para controle de casa inteligente",
      en: "Central hub for smart home control"
    },
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&crop=center",
    heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=800&fit=crop&crop=center",
    year: "2023",
    overview: {
      duration: { pt: "5 meses", en: "5 months" },
      team: { pt: "3 designers", en: "3 designers" },
      role: { pt: "UX Designer", en: "UX Designer" },
      tools: ["Figma", "Principle", "Adobe Creative Suite"]
    },
    problem: {
      title: { pt: "O Problema", en: "The Problem" },
      description: { pt: "Fragmentação de controles domésticos", en: "Fragmentation of home controls" },
      challenges: { pt: ["Usabilidade", "Integração"], en: ["Usability", "Integration"] }
    },
    solution: {
      title: { pt: "A Solução", en: "The Solution" },
      description: { pt: "Hub centralizado intuitivo", en: "Intuitive centralized hub" },
      approach: { pt: ["Design centrado no usuário"], en: ["User-centered design"] }
    },
    process: {
      title: { pt: "Processo", en: "Process" },
      steps: [{
        phase: { pt: "UX Research", en: "UX Research" },
        description: { pt: "Pesquisa de usuário", en: "User research" },
        deliverables: { pt: ["Personas"], en: ["Personas"] }
      }]
    },
    features: [],
    gallery: [],
    technicalSpecs: {},
    results: {
      impact: { pt: ["Melhoria na experiência"], en: ["Experience improvement"] }
    },
    nextSteps: { pt: ["Lançamento"], en: ["Launch"] }
  }
];

// Helper functions for language support
export function getProjectById(id: number): BilingualProject | undefined {
  return allProjectsData.find(project => project.id === id);
}

export function getProjectNavigation(currentId: number) {
  const currentIndex = allProjectsData.findIndex(project => project.id === currentId);
  
  return {
    previousProject: currentIndex > 0 ? {
      id: allProjectsData[currentIndex - 1].id,
      title: allProjectsData[currentIndex - 1].title,
      image: allProjectsData[currentIndex - 1].image
    } : undefined,
    nextProject: currentIndex < allProjectsData.length - 1 ? {
      id: allProjectsData[currentIndex + 1].id,
      title: allProjectsData[currentIndex + 1].title,
      image: allProjectsData[currentIndex + 1].image
    } : undefined
  };
}

export function getCategories() {
  return [
    'category.all',
    'category.productDesign',
    'category.industrialDesign', 
    'category.transportationDesign'
  ];
}

export function filterProjectsByCategory(category: string) {
  if (category === 'category.all' || category === 'All') {
    return allProjectsData;
  }
  
  // Map category translation keys to actual categories
  const categoryMap: { [key: string]: string[] } = {
    'category.productDesign': ['Product Design', 'Design de Produto'],
    'category.industrialDesign': ['Industrial Design', 'Design Industrial'],
    'category.transportationDesign': ['Transportation Design', 'Design de Transporte']
  };
  
  const targetCategories = categoryMap[category] || [category];
  
  return allProjectsData.filter(project => 
    targetCategories.some(cat => 
      project.category.en === cat || project.category.pt === cat
    )
  );
}

// Helper function to get localized project data
export function getLocalizedProject(project: BilingualProject, language: 'pt' | 'en') {
  return {
    id: project.id,
    title: project.title[language],
    category: project.category[language],
    shortDescription: project.shortDescription[language],
    heroImage: project.heroImage,
    overview: {
      duration: project.overview.duration[language],
      team: project.overview.team[language],
      role: project.overview.role[language],
      tools: project.overview.tools
    },
    problem: {
      title: project.problem.title[language],
      description: project.problem.description[language],
      challenges: project.problem.challenges[language]
    },
    solution: {
      title: project.solution.title[language],
      description: project.solution.description[language],
      approach: project.solution.approach[language]
    },
    process: {
      title: project.process.title[language],
      steps: project.process.steps.map(step => ({
        phase: step.phase[language],
        description: step.description[language],
        deliverables: step.deliverables[language]
      }))
    },
    features: project.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
      image: feature.image
    })),
    gallery: project.gallery.map(item => ({
      image: item.image,
      caption: item.caption[language]
    })),
    technicalSpecs: {
      materials: project.technicalSpecs.materials?.[language],
      dimensions: project.technicalSpecs.dimensions?.[language],
      sustainability: project.technicalSpecs.sustainability?.[language],
      manufacturing: project.technicalSpecs.manufacturing?.[language]
    },
    results: {
      impact: project.results.impact[language],
      metrics: project.results.metrics?.map(metric => ({
        label: metric.label[language],
        value: metric.value
      })),
      testimonial: project.results.testimonial ? {
        text: project.results.testimonial.text[language],
        author: project.results.testimonial.author,
        role: project.results.testimonial.role[language]
      } : undefined
    },
    nextSteps: project.nextSteps[language]
  };
}