import React from 'react';
import { Section } from '../Section';
import { CircularCarousel } from '../ui/CircularCarousel';
import { CLAUDE_SKILLS } from '../../constants';

export const ClaudeSkillsSection: React.FC = () => {
  return (
    <Section id="claude-skills" themeClass="bg-white/10 backdrop-blur-md text-white">
      <div className="text-center mb-8">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          AI-Powered Workflows
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Claude Skills
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover 20 powerful AI skills that can transform your business operations.
          Each skill is designed to automate, enhance, and streamline your workflows.
        </p>
      </div>

      {/* 3D Circular Carousel */}
      <CircularCarousel
        items={CLAUDE_SKILLS}
        autoplay={true}
        autoplayInterval={4000}
      />
    </Section>
  );
};

export default ClaudeSkillsSection;
