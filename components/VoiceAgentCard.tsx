import React from 'react';
import { ExternalLink, Mic } from 'lucide-react';
import { VoiceAgent } from '../types';

interface VoiceAgentCardProps {
  agent: VoiceAgent;
  index: number;
}

export const VoiceAgentCard: React.FC<VoiceAgentCardProps> = ({ agent, index }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-teal/30`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Agent Avatar */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover rounded-full border-4 border-teal/30"
        />
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-teal rounded-full flex items-center justify-center">
          <Mic className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Agent Info */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{agent.name}</h3>
        <p className="text-teal text-sm font-medium mb-3">{agent.specialty}</p>
        <p className="text-gray-600 text-sm mb-4">{agent.description}</p>

        {/* Demo Button */}
        <a
          href={agent.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal hover:bg-teal-light text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Try Demo
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default VoiceAgentCard;
