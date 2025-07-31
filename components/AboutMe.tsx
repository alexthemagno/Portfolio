import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Linkedin, 
  Instagram, 
  Github,
  MapPin,
  Calendar,
  GraduationCap,
  Code,
  Palette,
  Lightbulb,
  Users,
  Wrench,
  Monitor,
  Layers,
  LucideIcon
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

// Type definitions for better TypeScript support
interface TechnicalSkill {
  name: string;
  category: 'CAD' | 'Rendering' | 'Graphics' | 'UX/UI' | 'Process';
  icon: LucideIcon;
}

interface SoftSkill {
  name: string;
  icon: LucideIcon;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  period: string;
  status: string;
  highlights: string[];
}

interface Interest {
  name: string;
  color: string;
}

export default function AboutMe() {
  const { t } = useLanguage();

  // Technical skills with proper typing
  const technicalSkills: TechnicalSkill[] = [
    { name: t('about.skills.solidworks'), category: 'CAD', icon: Wrench },
    { name: t('about.skills.fusion360'), category: 'CAD', icon: Wrench },
    { name: t('about.skills.keyshot'), category: 'Rendering', icon: Layers },
    { name: t('about.skills.photoshop'), category: 'Graphics', icon: Palette },
    { name: t('about.skills.illustrator'), category: 'Graphics', icon: Palette },
    { name: t('about.skills.figma'), category: 'UX/UI', icon: Monitor },
    { name: t('about.skills.sketch'), category: 'UX/UI', icon: Monitor },
    { name: t('about.skills.prototyping'), category: 'Process', icon: Layers },
  ];

  const softSkills: SoftSkill[] = [
    { name: t('about.skills.designThinking'), icon: Lightbulb, description: t('about.skills.designThinkingDesc') },
    { name: t('about.skills.problemSolving'), icon: Code, description: t('about.skills.problemSolvingDesc') },
    { name: t('about.skills.creativity'), icon: Palette, description: t('about.skills.creativityDesc') },
    { name: t('about.skills.teamwork'), icon: Users, description: t('about.skills.teamworkDesc') },
  ];

  const education: Education[] = [
    {
      degree: t('about.education.degree'),
      school: t('about.education.school'),
      period: t('about.education.period'),
      status: t('about.education.status'),
      highlights: [
        t('about.education.highlight1'),
        t('about.education.highlight2'),
        t('about.education.highlight3')
      ]
    }
  ];

  const interests: Interest[] = [
    { name: t('about.interests.sustainableDesign'), color: 'bg-green-500' },
    { name: t('about.interests.emergingTech'), color: 'bg-blue-500' },
    { name: t('about.interests.userExperience'), color: 'bg-purple-500' },
    { name: t('about.interests.manufacturing'), color: 'bg-orange-500' },
    { name: t('about.interests.innovation'), color: 'bg-red-500' },
    { name: t('about.interests.collaboration'), color: 'bg-teal-500' }
  ];

  // Color schemes for skill categories with proper typing
  const categoryColors: Record<TechnicalSkill['category'], { bg: string; style: { backgroundColor: string } }> = {
    'CAD': { bg: 'air-superiority-blue-bg', style: { backgroundColor: 'var(--air-superiority-blue)' }},
    'Rendering': { bg: 'orange-pantone-bg', style: { backgroundColor: 'var(--orange-pantone)' }},
    'Graphics': { bg: 'amber-bg', style: { backgroundColor: 'var(--amber)' }},
    'UX/UI': { bg: 'dark-teal-bg', style: { backgroundColor: 'var(--dark-teal)' }},
    'Process': { bg: 'onyx-bg', style: { backgroundColor: 'var(--onyx)' }}
  };

  return (
    <div className="space-y-20 lg:space-y-24">
      
      {/* About Header Section */}
      <section className="text-center space-y-8">
        <div className="relative inline-block">
          <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto relative">
            {/* Profile photo with glass morphism frame */}
            <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Alexandre Magno"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 orange-pantone-bg rounded-full bounce-2"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 air-superiority-blue-bg rounded-full bounce-4"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 amber-bg rounded-full bounce-1"></div>
          </div>
        </div>

        <div className="space-y-6">
          <Badge className="air-superiority-blue-bg text-white border-0 relative z-10 rounded-full px-6 py-3 text-lg shadow-lg" 
                 style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--air-superiority-blue)'}}>
            {t('about.badge')}
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl text-white leading-tight relative z-10 fun-font text-shadow-strong">
            {t('about.title')}
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg lg:text-xl text-white leading-relaxed text-shadow">
              {t('about.bio.paragraph1')}
            </p>
            <p className="text-lg lg:text-xl text-white leading-relaxed text-shadow">
              {t('about.bio.paragraph2')}
            </p>
            <p className="text-lg lg:text-xl text-white leading-relaxed text-shadow">
              {t('about.bio.paragraph3')}
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 text-shadow">{t('about.stats.experience')}</div>
              <div className="text-white/80 text-shadow">{t('about.stats.experienceLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 text-shadow">{t('about.stats.projects')}</div>
              <div className="text-white/80 text-shadow">{t('about.stats.projectsLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 text-shadow">{t('about.stats.year')}</div>
              <div className="text-white/80 text-shadow">{t('about.stats.yearLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 text-shadow">{t('about.stats.graduation')}</div>
              <div className="text-white/80 text-shadow">{t('about.stats.graduationLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all">
          <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2 text-shadow">{t('about.contact.location')}</h3>
          <p className="text-white/80 text-shadow">São Paulo, Brasil</p>
        </Card>
        
        <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all">
          <Mail className="w-8 h-8 text-white mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2 text-shadow">{t('about.contact.email')}</h3>
          <p className="text-white/80 text-shadow">hello@alexandremagno.design</p>
        </Card>
        
        <Card className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all">
          <Calendar className="w-8 h-8 text-white mx-auto mb-4" />
          <h3 className="text-white font-semibold mb-2 text-shadow">{t('about.contact.availability')}</h3>
          <p className="text-white/80 text-shadow">{t('about.contact.availabilityStatus')}</p>
        </Card>
      </section>

      {/* Technical Skills - Simplified */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl mb-4 text-white fun-font text-shadow-strong">
            {t('about.skills.technicalTitle')}
          </h2>
          <p className="text-lg lg:text-xl text-white text-shadow max-w-3xl mx-auto">
            {t('about.skills.technicalSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technicalSkills.map((skill, index) => {
            const colorConfig = categoryColors[skill.category];
            const IconComponent = skill.icon;
            
            return (
              <Card key={index} className="bg-white/15 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all group">
                <div className={`w-12 h-12 ${colorConfig.bg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`} 
                     style={colorConfig.style}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-shadow">{skill.name}</h3>
                <Badge className="onyx-bg text-white text-xs" style={{'backgroundColor': 'var(--onyx)'}}>
                  {skill.category}
                </Badge>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl mb-4 text-white fun-font text-shadow-strong">
            {t('about.skills.softTitle')}
          </h2>
          <p className="text-lg lg:text-xl text-white text-shadow max-w-3xl mx-auto">
            {t('about.skills.softSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {softSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <Card key={index} className="bg-white/15 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="air-superiority-blue-bg p-3 rounded-full flex-shrink-0" style={{'backgroundColor': 'var(--air-superiority-blue)'}}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-shadow">{skill.name}</h3>
                    <p className="text-white/80 text-sm leading-relaxed text-shadow">{skill.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl mb-4 text-white fun-font text-shadow-strong">
            {t('about.education.title')}
          </h2>
        </div>

        {education.map((edu, index) => (
          <Card key={index} className="bg-white/15 backdrop-blur-sm border-white/20 p-8">
            <div className="flex items-start space-x-6">
              <div className="orange-pantone-bg p-4 rounded-full flex-shrink-0" style={{'backgroundColor': 'var(--orange-pantone)'}}>
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-white font-semibold mb-2 text-shadow">{edu.degree}</h3>
                    <p className="text-lg text-white/90 text-shadow">{edu.school}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <Badge className="dark-teal-bg text-white mb-2" style={{'backgroundColor': 'var(--dark-teal)'}}>
                      {edu.period}
                    </Badge>
                    <div className="text-white text-shadow">{edu.status}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 amber-bg rounded-full mt-2 flex-shrink-0" style={{'backgroundColor': 'var(--amber)'}}></div>
                      <p className="text-white/80 text-shadow">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Interests */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl mb-4 text-white fun-font text-shadow-strong">
            {t('about.interests.title')}
          </h2>
          <p className="text-lg lg:text-xl text-white text-shadow max-w-3xl mx-auto">
            {t('about.interests.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, index) => (
            <Badge key={index} className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm hover:bg-white/30 transition-all cursor-default">
              {interest.name}
            </Badge>
          ))}
        </div>
      </section>

      {/* Social Media & Links */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl mb-4 text-white fun-font text-shadow-strong">
            {t('about.social.title')}
          </h2>
          <p className="text-lg lg:text-xl text-white text-shadow max-w-3xl mx-auto">
            {t('about.social.subtitle')}
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="text-center">
            <Button variant="ghost" className="air-superiority-blue-bg text-white blob-1 blob-animate-1 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3" 
                   style={{'backgroundColor': 'var(--air-superiority-blue)'}}>
              <Linkedin className="w-8 h-8" />
            </Button>
            <p className="text-sm text-white font-medium text-shadow">LinkedIn</p>
            <p className="text-xs text-white/70 text-shadow">@alexandremagno</p>
          </div>
          
          <div className="text-center">
            <Button variant="ghost" className="orange-pantone-bg text-white blob-2 blob-animate-2 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3" 
                   style={{'backgroundColor': 'var(--orange-pantone)'}}>
              <Instagram className="w-8 h-8" />
            </Button>
            <p className="text-sm text-white font-medium text-shadow">Instagram</p>
            <p className="text-xs text-white/70 text-shadow">@alexandre.design</p>
          </div>
          
          <div className="text-center">
            <Button variant="ghost" className="dark-teal-bg text-white blob-3 blob-animate-3 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3" 
                   style={{'backgroundColor': 'var(--dark-teal)'}}>
              <Github className="w-8 h-8" />
            </Button>
            <p className="text-sm text-white font-medium text-shadow">GitHub</p>
            <p className="text-xs text-white/70 text-shadow">@alexandremagno</p>
          </div>
          
          <div className="text-center">
            <Button variant="ghost" className="amber-bg text-white blob-1 blob-animate-1 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-110 mb-3" 
                   style={{'backgroundColor': 'var(--amber)'}}>
              <Mail className="w-8 h-8" />
            </Button>
            <p className="text-sm text-white font-medium text-shadow">Email</p>
            <p className="text-xs text-white/70 text-shadow">hello@alexandremagno.design</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl text-white fun-font text-shadow-strong">
            {t('about.cta.title')}
          </h2>
          <p className="text-lg lg:text-xl text-white text-shadow max-w-3xl mx-auto">
            {t('about.cta.description')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="air-superiority-blue-bg text-white rounded-full px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105" 
                  style={{'backgroundColor': 'var(--air-superiority-blue)'}}>
            <Download className="w-5 h-5 mr-3" />
            {t('about.cta.downloadCV')}
          </Button>
          
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white rounded-full px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-transparent border-2">
            <Mail className="w-5 h-5 mr-3" />
            {t('about.cta.contactMe')}
          </Button>
        </div>
      </section>

    </div>
  );
}