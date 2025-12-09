import React from 'react';
import { Section } from '../Section';
import { VoiceAgentCarousel } from '../ui/VoiceAgentCarousel';
import { VOICE_AGENTS } from '../../constants';
import { Volume2 } from 'lucide-react';

export const VoiceAgentsSection: React.FC = () => {
  return (
    <Section id="voice-agents" themeClass="bg-transparent text-white">
      <div className="text-center mb-8">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          AI Voice Assistants
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4 text-white">
          Voice Agents
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Meet our AI voice agents. Each one is trained for specific industries
          and ready to handle calls 24/7. Click to try a live demo.
        </p>
      </div>

      {/* Demo Notice */}
      <div className="flex items-center justify-center gap-2 mb-4 text-teal-light">
        <Volume2 className="w-5 h-5" />
        <span className="text-sm">Speaker and microphone required for full demo experience</span>
      </div>

      {/* 3D Voice Agent Carousel */}
      <VoiceAgentCarousel
        agents={VOICE_AGENTS}
        autoplay={true}
        autoplayInterval={6000}
      />
    </Section>
  );
};

export default VoiceAgentsSection;
