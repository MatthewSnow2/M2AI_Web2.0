import React from 'react';
import { Section } from '../Section';
import { Sparkles } from 'lucide-react';

export const ProjectBlurrSection: React.FC = () => {
  return (
    <Section id="project-blurr" themeClass="bg-white/5 backdrop-blur-sm text-white">
      <div className="text-center">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Project Blurr
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          A showcase of our latest and greatest AI project.
          Innovation meets practical business solutions.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-teal/20 flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-teal" />
          </div>
        </div>
        <p className="text-gray-500 mt-8 italic">Coming soon: Project details</p>
      </div>
    </Section>
  );
};

export default ProjectBlurrSection;
