import React from 'react';
import { Section } from '../Section';
import { Bot } from 'lucide-react';

export const CustomGPTsSection: React.FC = () => {
  return (
    <Section id="custom-gpts" themeClass="bg-white/5 backdrop-blur-sm text-white">
      <div className="text-center">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Tailored AI Assistants
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Custom GPTs
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Build AI assistants tailored to your specific business needs.
          Custom GPTs trained on your data, processes, and brand voice.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-teal/20 flex items-center justify-center">
            <Bot className="w-12 h-12 text-teal" />
          </div>
        </div>
        <p className="text-gray-500 mt-8 italic">Coming soon: Featured Custom GPT showcase</p>
      </div>
    </Section>
  );
};

export default CustomGPTsSection;
