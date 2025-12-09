import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  themeClass?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  themeClass = 'bg-white text-gray-800',
  className = '',
  children
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`flex flex-col items-center px-4 py-12 md:py-16 ${themeClass} ${className}`}
    >
      <div
        className={`w-full max-w-6xl mx-auto transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
