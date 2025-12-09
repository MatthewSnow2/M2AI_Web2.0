import React from 'react';
import { Section } from '../Section';
import { BookOpen } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  return (
    <Section id="resources" themeClass="bg-white/5 backdrop-blur-sm text-white">
      <div className="text-center">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Learning Center
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Resources
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Free guides, templates, and tutorials to help you
          get started with AI automation for your business.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-teal/20 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-teal" />
          </div>
        </div>
        <p className="text-gray-500 mt-8 italic">Coming soon: Resource library</p>
      </div>
    </Section>
  );
};

export default ResourcesSection;
