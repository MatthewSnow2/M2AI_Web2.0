import React from 'react';
import { Section } from '../Section';
import { Chrome } from 'lucide-react';

export const ChromeExtensionsSection: React.FC = () => {
  return (
    <Section id="chrome-extensions" themeClass="bg-white/10 backdrop-blur-md text-white">
      <div className="text-center">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Browser Productivity
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Chrome Extensions
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Supercharge your browser with AI-powered extensions.
          Boost productivity without leaving your workflow.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-teal/20 flex items-center justify-center">
            <Chrome className="w-12 h-12 text-teal" />
          </div>
        </div>
        <p className="text-gray-500 mt-8 italic">Coming soon: Extension gallery</p>
      </div>
    </Section>
  );
};

export default ChromeExtensionsSection;
