import { CarouselImage, SectionData, ClaudeSkill, VoiceAgent, FormOption, WorkflowItem, ProjectStory } from './types';

// Carousel images with section mapping
// Note: Contact (carousel_09) is moved to position 12 (last section)
export const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    id: 1,
    url: "/images/carousel_01_claude_skills_final.png",
    alt: "Claude Skills",
    rotation: 0,
    sectionId: "claude-skills"
  },
  {
    id: 2,
    url: "/images/carousel_02_customgpts.png",
    alt: "Custom GPTs",
    rotation: 30,
    sectionId: "custom-gpts"
  },
  {
    id: 3,
    url: "/images/carousel_03_chrome_extensions.png",
    alt: "Chrome Extensions",
    rotation: 60,
    sectionId: "chrome-extensions"
  },
  {
    id: 4,
    url: "/images/carousel_04_chatbots.png",
    alt: "Chatbots",
    rotation: 90,
    sectionId: "chatbots"
  },
  {
    id: 5,
    url: "/images/carousel_05_workflows.png",
    alt: "Workflows",
    rotation: 120,
    sectionId: "workflows"
  },
  {
    id: 6,
    url: "/images/carousel_06_custom_projects.png",
    alt: "Custom Projects",
    rotation: 150,
    sectionId: "custom-projects"
  },
  {
    id: 7,
    url: "/images/carousel_07_resources.png",
    alt: "Resources",
    rotation: 180,
    sectionId: "resources"
  },
  {
    id: 8,
    url: "/images/carousel_08_faq.png",
    alt: "FAQ",
    rotation: 210,
    sectionId: "faq"
  },
  {
    id: 9,
    url: "/images/carousel_10_project_blurr.png",
    alt: "Project Blurr",
    rotation: 240,
    sectionId: "project-blurr"
  },
  {
    id: 10,
    url: "/images/carousel_11_voice_agents.png",
    alt: "Voice Agents",
    rotation: 270,
    sectionId: "voice-agents"
  },
  {
    id: 11,
    url: "/images/carousel_12_early_ai_dopters.png",
    alt: "Early AI Adopters",
    rotation: 300,
    sectionId: "early-adopters"
  },
  {
    id: 12,
    url: "/images/carousel_09_contact.png",
    alt: "Contact Us",
    rotation: 330,
    sectionId: "contact"
  }
];

// Section definitions in display order (dark mode theme)
export const CONTENT_SECTIONS: SectionData[] = [
  {
    id: "claude-skills",
    title: "Claude Skills",
    subtitle: "AI-Powered Workflows",
    themeClass: "bg-white/10 backdrop-blur-md text-white",
    animationType: "fade-up"
  },
  {
    id: "custom-gpts",
    title: "Custom GPTs",
    subtitle: "Tailored AI Assistants",
    themeClass: "bg-white/5 backdrop-blur-sm text-white",
    animationType: "fade-left"
  },
  {
    id: "chrome-extensions",
    title: "Chrome Extensions",
    subtitle: "Browser Productivity",
    themeClass: "bg-white/10 backdrop-blur-md text-white",
    animationType: "fade-right"
  },
  {
    id: "chatbots",
    title: "Chatbots",
    subtitle: "Conversational AI",
    themeClass: "bg-teal/10 backdrop-blur-md text-white",
    animationType: "fade-up"
  },
  {
    id: "workflows",
    title: "Workflows",
    subtitle: "Process Automation",
    themeClass: "bg-white/5 backdrop-blur-sm text-white",
    animationType: "fade-left"
  },
  {
    id: "custom-projects",
    title: "Custom Projects",
    subtitle: "Bespoke Solutions",
    themeClass: "bg-white/10 backdrop-blur-md text-white",
    animationType: "fade-right"
  },
  {
    id: "resources",
    title: "Resources",
    subtitle: "Learning Center",
    themeClass: "bg-white/5 backdrop-blur-sm text-white",
    animationType: "fade-up"
  },
  {
    id: "faq",
    title: "FAQ",
    subtitle: "Common Questions",
    themeClass: "bg-white/10 backdrop-blur-md text-white",
    animationType: "scale"
  },
  {
    id: "project-blurr",
    title: "Project Blurr",
    subtitle: "Featured Work",
    themeClass: "bg-white/5 backdrop-blur-sm text-white",
    animationType: "fade-left"
  },
  {
    id: "voice-agents",
    title: "Voice Agents",
    subtitle: "AI Voice Assistants",
    themeClass: "bg-transparent text-white",
    animationType: "fade-up"
  },
  {
    id: "early-adopters",
    title: "Early AI Adopters",
    subtitle: "Join the Community",
    themeClass: "bg-orange/10 backdrop-blur-md text-white",
    animationType: "fade-right"
  },
  {
    id: "contact",
    title: "Contact Us",
    subtitle: "Let's Connect",
    themeClass: "bg-white/5 backdrop-blur-sm text-white",
    animationType: "fade-up"
  }
];

// 20 Placeholder Claude Skills for horizontal carousel
export const CLAUDE_SKILLS: ClaudeSkill[] = [
  { id: 1, title: "Code Review", description: "Automated code analysis and feedback", icon: "Code" },
  { id: 2, title: "Documentation", description: "Generate and update technical docs", icon: "FileText" },
  { id: 3, title: "Data Analysis", description: "Extract insights from complex datasets", icon: "BarChart" },
  { id: 4, title: "Email Drafting", description: "Professional email composition", icon: "Mail" },
  { id: 5, title: "Meeting Notes", description: "Summarize and action item extraction", icon: "ClipboardList" },
  { id: 6, title: "Research", description: "Deep dive into any topic", icon: "Search" },
  { id: 7, title: "Writing Assistant", description: "Content creation and editing", icon: "PenTool" },
  { id: 8, title: "Translation", description: "Multi-language support", icon: "Globe" },
  { id: 9, title: "Brainstorming", description: "Creative ideation sessions", icon: "Lightbulb" },
  { id: 10, title: "Task Planning", description: "Project breakdown and scheduling", icon: "Calendar" },
  { id: 11, title: "Customer Support", description: "Response drafting and escalation", icon: "Headphones" },
  { id: 12, title: "Report Generation", description: "Automated business reports", icon: "FileSpreadsheet" },
  { id: 13, title: "Social Media", description: "Content strategy and creation", icon: "Share2" },
  { id: 14, title: "Legal Review", description: "Contract analysis assistance", icon: "Scale" },
  { id: 15, title: "Sales Enablement", description: "Pitch and proposal support", icon: "TrendingUp" },
  { id: 16, title: "HR Assistant", description: "Policy and onboarding help", icon: "Users" },
  { id: 17, title: "Financial Analysis", description: "Budget and forecast support", icon: "DollarSign" },
  { id: 18, title: "Training Content", description: "Educational material creation", icon: "GraduationCap" },
  { id: 19, title: "Quality Assurance", description: "Testing and validation", icon: "CheckCircle" },
  { id: 20, title: "Process Mapping", description: "Workflow visualization", icon: "GitBranch" }
];

// Voice Agents with Vapi.ai demo links
export const VOICE_AGENTS: VoiceAgent[] = [
  {
    id: "sam",
    name: "Sam",
    specialty: "HVAC Services",
    description: "AI voice agent for HVAC service scheduling, appointment booking, and customer inquiries. Available 24/7 to handle inbound calls.",
    image: "/images/sam.png",
    demoUrl: "https://vapi.ai?demo=true&shareKey=54e98134-8ae6-4156-abe7-6c94736ad5de&assistantId=9dba090a-0e04-4784-8381-7ad6ad7fffa9"
  },
  {
    id: "morgan",
    name: "Morgan",
    specialty: "Lead Qualification",
    description: "Outbound AI agent specializing in lead qualification, appointment setting, and initial prospect conversations.",
    image: "/images/morgan.png",
    demoUrl: "https://vapi.ai?demo=true&shareKey=54e98134-8ae6-4156-abe7-6c94736ad5de&assistantId=850dc773-39f7-42de-977d-7767c2c97ebb"
  },
  {
    id: "rebecca",
    name: "Rebecca",
    specialty: "Electrician Services",
    description: "Inbound AI voice agent for electrical service businesses. Handles scheduling, quotes, and emergency call routing.",
    image: "/images/rebecca.png",
    demoUrl: "https://vapi.ai?demo=true&shareKey=54e98134-8ae6-4156-abe7-6c94736ad5de&assistantId=495c7ad8-1560-44d1-baef-50b3bf8cdcfa"
  }
];

// Form options for AI Audit Modal
export const INDUSTRY_OPTIONS: FormOption[] = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "retail", label: "Retail" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "professional-services", label: "Professional Services" },
  { value: "real-estate", label: "Real Estate" },
  { value: "construction", label: "Construction" },
  { value: "other", label: "Other" }
];

export const COMPANY_SIZE_OPTIONS: FormOption[] = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" }
];

export const AI_USAGE_OPTIONS: FormOption[] = [
  { value: "none", label: "No AI tools currently in use" },
  { value: "basic", label: "Basic AI tools (ChatGPT, etc.)" },
  { value: "some-integrated", label: "Some integrated AI solutions" },
  { value: "advanced", label: "Advanced AI implementation" }
];

export const CHALLENGE_OPTIONS: FormOption[] = [
  { value: "customer-support", label: "Customer support & response times" },
  { value: "lead-generation", label: "Lead generation & qualification" },
  { value: "manual-processes", label: "Manual processes & repetitive tasks" },
  { value: "data-analysis", label: "Data analysis & insights" },
  { value: "document-management", label: "Document management & contracts" },
  { value: "other", label: "Other" }
];

export const BUDGET_OPTIONS: FormOption[] = [
  { value: "under-500", label: "Under $500/month" },
  { value: "500-2000", label: "$500 - $2,000/month" },
  { value: "2000-5000", label: "$2,000 - $5,000/month" },
  { value: "5000-plus", label: "$5,000+/month" },
  { value: "not-sure", label: "Not sure yet" }
];

// Workflow automation items
export const WORKFLOW_ITEMS: WorkflowItem[] = [
  {
    id: 1,
    title: "Lead Capture to CRM",
    description: "Automatically sync new leads from forms, chatbots, and landing pages directly to your CRM.",
    icon: "UserPlus",
    details: "Integrates with HubSpot, Salesforce, Pipedrive, and more. Includes lead scoring and automatic assignment."
  },
  {
    id: 2,
    title: "Invoice Processing",
    description: "Extract data from invoices using AI and automatically create entries in your accounting software.",
    icon: "Receipt",
    details: "Works with QuickBooks, Xero, FreshBooks. Handles multi-currency and tax calculations."
  },
  {
    id: 3,
    title: "Email Response Automation",
    description: "AI-powered email drafting and automated responses for common inquiries.",
    icon: "Mail",
    details: "Learns your tone and style. Handles customer support, scheduling, and follow-ups."
  },
  {
    id: 4,
    title: "Social Media Scheduler",
    description: "AI generates and schedules content across all your social platforms.",
    icon: "Share2",
    details: "Optimal timing suggestions, hashtag recommendations, and performance analytics."
  },
  {
    id: 5,
    title: "Document Generation",
    description: "Auto-generate contracts, proposals, and reports from templates and data.",
    icon: "FileText",
    details: "PDF generation, e-signature integration, version control, and approval workflows."
  },
  {
    id: 6,
    title: "Appointment Booking",
    description: "Intelligent scheduling that syncs across calendars and sends reminders.",
    icon: "Calendar",
    details: "Buffer time management, timezone handling, and no-show follow-ups."
  },
  {
    id: 7,
    title: "Data Sync & Migration",
    description: "Keep your databases in sync across multiple platforms automatically.",
    icon: "RefreshCw",
    details: "Real-time sync, conflict resolution, and scheduled batch processing."
  },
  {
    id: 8,
    title: "Report Generation",
    description: "Automated weekly/monthly reports compiled from multiple data sources.",
    icon: "BarChart",
    details: "Custom templates, data visualization, and scheduled email delivery."
  }
];

// Custom project showcase items
export const PROJECT_STORIES: ProjectStory[] = [
  {
    id: 1,
    title: "AI-Powered Real Estate Platform",
    description: "Custom property matching system using machine learning to connect buyers with their ideal homes.",
    image: "/images/projects/real-estate.jpg",
    category: "Real Estate",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare Appointment Assistant",
    description: "Voice AI system handling patient scheduling and appointment reminders for medical practices.",
    image: "/images/projects/healthcare.jpg",
    category: "Healthcare",
    link: "#"
  },
  {
    id: 3,
    title: "E-commerce Chatbot",
    description: "Intelligent shopping assistant that helps customers find products and complete purchases.",
    image: "/images/projects/ecommerce.jpg",
    category: "E-commerce",
    link: "#"
  },
  {
    id: 4,
    title: "Legal Document Analyzer",
    description: "AI tool that reviews contracts and highlights key terms, risks, and obligations.",
    image: "/images/projects/legal.jpg",
    category: "Legal Tech",
    link: "#"
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "Multi-channel reservation system with AI-powered capacity optimization.",
    image: "/images/projects/restaurant.jpg",
    category: "Hospitality",
    link: "#"
  },
  {
    id: 6,
    title: "Financial Planning Dashboard",
    description: "Automated financial reporting and forecasting tool for small businesses.",
    image: "/images/projects/finance.jpg",
    category: "Finance",
    link: "#"
  }
];

// External links
export const CALENDLY_URL = "https://calendly.com/matthew-memyselfplusai/30min";
