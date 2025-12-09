import React from 'react';
import { Section } from '../Section';
import { MessageSquare } from 'lucide-react';

export const ChatbotsSection: React.FC = () => {
  return (
    <Section id="chatbots" themeClass="bg-teal/10 backdrop-blur-md text-white">
      <div className="text-center">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Conversational AI
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Chatbots
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Deploy intelligent chatbots that understand your customers.
          24/7 support, lead capture, and seamless handoffs to humans.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-teal/20 flex items-center justify-center">
            <MessageSquare className="w-12 h-12 text-teal" />
          </div>
        </div>
        <p className="text-gray-500 mt-8 italic">Coming soon: Live chatbot demos</p>
      </div>
    </Section>
  );
};

export default ChatbotsSection;
