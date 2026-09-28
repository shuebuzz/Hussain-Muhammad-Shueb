export type ProjectStatus = 'Exploring' | 'In Development' | 'Completed';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface PhotographyItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  location?: string;
  date?: string;
  cameraInfo?: {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutter?: string;
    iso?: string;
  };
  src: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  coverImage?: string;
  spotifyUrl?: string;
  spotifyUri?: string;
  personalNote?: string;
  tag?: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'Core' | 'Web & Frontend' | 'Tools & Systems' | 'Exploring';
  status: 'Proficient' | 'Learning' | 'Exploring';
  description: string;
  relatedProjects?: string[];
  iconName?: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  institutionOrContext: string;
  stage: string;
  description: string;
  status: 'Completed' | 'Current' | 'Upcoming';
}

export interface SiteContent {
  personal: {
    name: string;
    brand: string;
    age: number;
    origin: string;
    currentLocation: string;
    university: string;
    degree: string;
    year: string;
    goal: string;
    heroIntro: string;
    fullBio: string;
    portraitImage: string;
    statusTagline: string;
  };
  worlds: {
    code: {
      title: string;
      label: string;
      headline: string;
      description: string;
      image: string;
      emptyStateText: string;
    };
    frame: {
      title: string;
      label: string;
      headline: string;
      description: string;
      image: string;
      emptyStateText: string;
    };
    frequency: {
      title: string;
      label: string;
      headline: string;
      description: string;
      image: string;
      emptyStateText: string;
    };
  };
  skills: SkillNode[];
  projects: ProjectItem[];
  photography: PhotographyItem[];
  music: MusicTrack[];
  timeline: TimelineMilestone[];
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
  secretUniverse: {
    codeName: string;
    message: string;
    coordinates: string;
    timestamp: string;
  };
}
