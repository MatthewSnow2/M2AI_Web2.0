import React from 'react';
import { Section } from '../Section';
import { StoriesCarousel } from '../ui/StoriesCarousel';
import { PROJECT_STORIES } from '../../constants';

export const CustomProjectsSection: React.FC = () => {
  return (
    <Section id="custom-projects" themeClass="bg-white/10 backdrop-blur-md text-white">
      <div className="text-center mb-8">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Bespoke Solutions
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Custom Projects
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a unique challenge? We build custom AI solutions
          tailored to your specific needs and integrations.
        </p>
      </div>

      {/* Stories Carousel */}
      <StoriesCarousel
        stories={PROJECT_STORIES}
        autoplay={true}
        autoplayInterval={6000}
      />
    </Section>
  );
};

export default CustomProjectsSection;
