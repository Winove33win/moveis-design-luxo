import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-16 md:mb-24 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-gold-500 text-xs tracking-luxury uppercase font-bold mb-4 opacity-90 animate-fade-in">
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-tight ${light ? 'text-stone-100' : 'text-stone-100'}`}>
        {title}
      </h2>
      <div className={`h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-8 opacity-50 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;