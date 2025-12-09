import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { FuturisticHero } from './components/ui/FuturisticHero';
import { AuditModal } from './components/AuditModal';
import { ShapesBackground } from './components/ui/ShapesBackground';
import { ClaudeSkillsSection } from './components/sections/ClaudeSkillsSection';
import { CustomGPTsSection } from './components/sections/CustomGPTsSection';
import { ChromeExtensionsSection } from './components/sections/ChromeExtensionsSection';
import { ChatbotsSection } from './components/sections/ChatbotsSection';
import { WorkflowsSection } from './components/sections/WorkflowsSection';
import { CustomProjectsSection } from './components/sections/CustomProjectsSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { FAQSection } from './components/sections/FAQSection';
import { ProjectBlurrSection } from './components/sections/ProjectBlurrSection';
import { VoiceAgentsSection } from './components/sections/VoiceAgentsSection';
import { EarlyAdoptersSection } from './components/sections/EarlyAdoptersSection';
import { ContactSection } from './components/sections/ContactSection';

const App: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full">
      {/* Animated Background */}
      <ShapesBackground />

      {/* Content Layer */}
      <div className="relative z-10">
      {/* Futuristic Hero Section */}
      <FuturisticHero onAuditClick={() => setIsAuditModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <ClaudeSkillsSection />
        <CustomGPTsSection />
        <ChromeExtensionsSection />
        <ChatbotsSection />
        <WorkflowsSection />
        <CustomProjectsSection />
        <ResourcesSection />
        <FAQSection />
        <ProjectBlurrSection />
        <VoiceAgentsSection />
        <EarlyAdoptersSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
      </div>
    </div>
  );
};

export default App;
