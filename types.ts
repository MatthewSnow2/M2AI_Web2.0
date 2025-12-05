export interface StoryState {
  title: string;
  content: string;
  isLoading: boolean;
}

export interface CarouselImage {
  id: number;
  url: string;
  alt: string;
  rotation: number; // Degree of rotation for the wheel
}

export interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  themeClass: string; // Tailwind classes for colors
}