import React from 'react';
import { Section } from '../Section';
import { RetroCarousel } from '../ui/RetroCarousel';
import { WORKFLOW_ITEMS } from '../../constants';

export const WorkflowsSection: React.FC = () => {
  return (
    <Section id="workflows" themeClass="bg-white/5 backdrop-blur-sm text-white">
      <div className="text-center mb-8">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Process Automation
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Workflows
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Automate repetitive tasks and connect your tools.
          Custom n8n and Zapier integrations built for your business.
        </p>
      </div>

      {/* Retro Carousel */}
      <RetroCarousel
        items={WORKFLOW_ITEMS}
        autoplay={true}
        autoplayInterval={5000}
      />
    </Section>
  );
};

export default WorkflowsSection;
