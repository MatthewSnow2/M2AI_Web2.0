import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/fulllogo_transparent_nobuffer.png"
              alt="Me, Myself Plus AI"
              className="h-12 w-auto mb-2"
            />
            <p className="text-gray-400 text-sm">
              AI Solutions for Small Business
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#claude-skills"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              Services
            </a>
            <a
              href="#voice-agents"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              Voice Agents
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-teal transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} Me, Myself Plus AI. All rights reserved.
          </div>
        </div>

        {/* Nashville Badge */}
        <div className="text-center mt-6 text-gray-500 text-xs">
          Made with AI in Nashville, TN
        </div>
      </div>
    </footer>
  );
};

export default Footer;
