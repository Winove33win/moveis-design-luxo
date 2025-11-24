import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-16 md:mb-20 ${centered ? 'text-center' : 'text-left'} space-y-4`}>
      {subtitle && (
        <div className={`flex ${centered ? 'justify-center' : 'justify-start'} items-center gap-3 text-gold-500 text-[11px] uppercase tracking-[0.26em]`}>
          <span className="h-px w-8 bg-gold-500" />
          <span>{subtitle}</span>
        </div>
      )}
      <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-tight ${light ? 'text-stone-100' : 'text-stone-50'}`}>
        {title}
      </h2>
      <div className={`h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;