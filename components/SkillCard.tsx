import React from 'react';
import * as Icons from 'lucide-react';
import { ClaudeSkill } from '../types';

interface SkillCardProps {
  skill: ClaudeSkill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Dynamically get icon from lucide-react
  const IconComponent = (Icons as any)[skill.icon] || Icons.Sparkles;

  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal/30 scroll-snap-start">
      <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-teal" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h3>
      <p className="text-sm text-gray-600">{skill.description}</p>
    </div>
  );
};

export default SkillCard;
