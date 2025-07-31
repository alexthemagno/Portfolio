import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
}

export function CustomProgress({ value, className = '' }: ProgressProps) {
  // Ensure value is between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100);
  
  return (
    <div className={`relative w-full overflow-hidden rounded-full ${className}`}>
      <div className="h-full w-full bg-white/20 backdrop-blur-sm rounded-full" />
      <div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-pantone via-amber to-air-superiority-blue rounded-full transition-all duration-700 ease-out"
        style={{ 
          width: `${clampedValue}%`,
          background: 'linear-gradient(90deg, var(--orange-pantone) 0%, var(--amber) 50%, var(--air-superiority-blue) 100%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full" />
    </div>
  );
}