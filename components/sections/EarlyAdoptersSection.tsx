import React from 'react';
import { Section } from '../Section';
import { Users, ExternalLink } from 'lucide-react';

const SKOOL_URL = 'https://www.skool.com/earlyaidopters/about?ref=9a7b59dfbd814636a81171ef857082bc';

export const EarlyAdoptersSection: React.FC = () => {
  return (
    <Section id="early-adopters" themeClass="bg-orange/10 backdrop-blur-md text-white">
      <div className="text-center">
        <span className="text-xs font-bold text-orange tracking-widest uppercase">
          Join the Community
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Early AI-Dopters
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Be among the first to leverage cutting-edge AI solutions.
          Join our community of forward-thinking businesses and AI enthusiasts.
        </p>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-orange/20 flex items-center justify-center">
            <Users className="w-12 h-12 text-orange" />
          </div>
        </div>
        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange hover:bg-orange-light text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/30 text-lg"
        >
          Join the Community
          <ExternalLink size={20} />
        </a>
      </div>
    </Section>
  );
};

export default EarlyAdoptersSection;
