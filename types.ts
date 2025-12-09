export interface CarouselImage {
  id: number;
  url: string;
  alt: string;
  rotation: number;
  sectionId: string;
}

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  themeClass: string;
  animationType: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
}

export interface ClaudeSkill {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface VoiceAgent {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
  demoUrl: string;
}

export interface AuditFormData {
  companyName: string;
  email: string;
  industry: string;
  companySize: string;
  currentAIUsage: string;
  primaryChallenge: string;
  budgetRange?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface WorkflowItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  details?: string;
}

export interface ProjectStory {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}
