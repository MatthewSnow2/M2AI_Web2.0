import React from 'react';
import { Section } from '../Section';
import { HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  return (
    <Section id="faq" themeClass="bg-white/10 backdrop-blur-md text-white">
      <div className="text-center">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Common Questions
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          FAQ
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Got questions? We've got answers. Learn more about
          how AI can work for your business.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-teal/20 flex items-center justify-center">
            <HelpCircle className="w-12 h-12 text-teal" />
          </div>
        </div>
        <p className="text-gray-500 mt-8 italic">Coming soon: Frequently asked questions</p>
      </div>
    </Section>
  );
};

export default FAQSection;
