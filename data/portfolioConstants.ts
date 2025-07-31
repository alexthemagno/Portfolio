import { Code, Palette, Settings, Users } from 'lucide-react';

export const getCoreSkills = (t: (key: string) => string) => {
  try {
    return [
      { skill: t('skills.productDesign'), level: t('skills.advanced'), icon: Palette },
      { skill: t('skills.industrialDesign'), level: t('skills.advanced'), icon: Settings },
      { skill: t('skills.designThinking'), level: t('skills.advanced'), icon: Users },
      { skill: t('skills.cadModeling'), level: t('skills.proficient'), icon: Code }
    ];
  } catch (error) {
    console.warn('Error getting core skills:', error);
    return [
      { skill: 'Product Design', level: 'Advanced', icon: Palette },
      { skill: 'Industrial Design', level: 'Advanced', icon: Settings },
      { skill: 'Design Thinking', level: 'Advanced', icon: Users },
      { skill: 'CAD Modeling', level: 'Proficient', icon: Code }
    ];
  }
};

export const blobColors = [
  "var(--air-superiority-blue)", 
  "var(--orange-pantone)", 
  "var(--amber)", 
  "var(--dark-teal)"
];

export const colorClasses = [
  "air-superiority-blue-bg",
  "orange-pantone-bg", 
  "amber-bg",
  "dark-teal-bg"
];

export const colorStyles = [
  {backgroundColor: 'var(--air-superiority-blue)'},
  {backgroundColor: 'var(--orange-pantone)'}, 
  {backgroundColor: 'var(--amber)'},
  {backgroundColor: 'var(--dark-teal)'}
];