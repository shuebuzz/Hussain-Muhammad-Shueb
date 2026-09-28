import { SiteContent } from '../types';

/**
 * ============================================================================
 * SHUEB.DEV — CENTRAL CONTENT CONFIGURATION
 * ============================================================================
 * 
 * Welcome to your digital universe configuration!
 * Edit this file to update any text, links, photos, projects, or music across
 * the entire website without touching any complex code.
 * 
 * Instructions:
 * - Update your social links below (leave empty "" to hide the button).
 * - When you create new projects or take photos, add them to their respective lists.
 * - Replace the portrait or gallery images by placing your files in /src/assets/
 *   and updating the paths here.
 */

// Import generated universe visual assets
import portraitImg from '../assets/images/shueb_portrait_1790561377174.jpg';
import codeCosmosImg from '../assets/images/world_code_cosmos_1790561325172.jpg';
import frameDarkroomImg from '../assets/images/world_frame_darkroom_1790561334901.jpg';
import frequencySoundImg from '../assets/images/world_frequency_sound_1790561344973.jpg';

export const siteContent: SiteContent = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & IDENTITY
  // --------------------------------------------------------------------------
  personal: {
    name: 'Hussain Muhammad Shueb',
    brand: 'SHUEB.DEV',
    age: 21,
    origin: 'Bangladesh',
    currentLocation: 'United Kingdom',
    university: 'University College Birmingham',
    degree: 'BSc (Hons) Computer Science',
    year: '2nd Year Student',
    goal: 'Software Developer',
    statusTagline: 'Student · Creator · Future Developer',
    
    // Short tagline for the Hero banner
    heroIntro: 'Computer Science student at University College Birmingham, exploring code, creativity and technology while building towards a future in software development.',
    
    // Natural personal biography
    fullBio: "I'm Hussain Muhammad Shueb, a second-year BSc (Hons) Computer Science student at University College Birmingham in the United Kingdom. I'm passionate about coding, photography and music, and I'm working towards becoming a software developer.",

    // Official portrait photograph
    portraitImage: portraitImg,
  },

  // --------------------------------------------------------------------------
  // 2. THE THREE WORLDS
  // --------------------------------------------------------------------------
  worlds: {
    code: {
      title: 'WORLD 01',
      label: 'CODING',
      headline: 'The Code Dimension',
      description: 'The computational foundry where architectural logic turns into interactive software and purposeful tools.',
      image: codeCosmosImg,
      emptyStateText: 'The laboratory is currently evolving. New experiments will appear here.',
    },
    frame: {
      title: 'WORLD 02',
      label: 'PHOTOGRAPHY',
      headline: 'The Optical Darkroom',
      description: 'Capturing moments, atmospheric lighting, and architectural symmetry through my personal lens.',
      image: frameDarkroomImg,
      emptyStateText: 'Frames captured through my lens. New photographic journeys will be exhibited here.',
    },
    frequency: {
      title: 'WORLD 03',
      label: 'MUSIC',
      headline: 'The Sonic Frequency',
      description: 'The sonic soundtrack that powers late-night coding sessions and reflective creative explorations.',
      image: frequencySoundImg,
      emptyStateText: 'The frequency is waiting to be tuned. Selected tracks and sonic vibrations will land here.',
    },
  },

  // --------------------------------------------------------------------------
  // 3. SKILLS & TECH MATRIX
  // Note: We avoid fake percentage bars. We display technologies as areas
  // being actively practiced or explored.
  // --------------------------------------------------------------------------
  skills: [
    {
      id: 'html',
      name: 'HTML5',
      category: 'Core',
      status: 'Proficient',
      description: 'Semantic document structure, accessibility standards, and SEO markup hygiene.',
    },
    {
      id: 'css',
      name: 'CSS3',
      category: 'Core',
      status: 'Proficient',
      description: 'Modern flexbox, grid layouts, responsive media queries, and aesthetic styling.',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Core',
      status: 'Proficient',
      description: 'Modern ES6+ fundamentals, DOM manipulation, asynchronous programming, and event handling.',
    },
    {
      id: 'github',
      name: 'GitHub & Git',
      category: 'Tools & Systems',
      status: 'Proficient',
      description: 'Source control versioning, branching models, pull requests, and collaborative repository management.',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Exploring',
      status: 'Learning',
      description: 'Static typing, robust interfaces, type safety, and scalable application development.',
    },
    {
      id: 'react',
      name: 'React',
      category: 'Web & Frontend',
      status: 'Learning',
      description: 'Component-driven UI architecture, custom state management, and modern reactive patterns.',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Exploring',
      status: 'Exploring',
      description: 'Data structures, algorithm practice, and foundational software engineering principles.',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Exploring',
      status: 'Exploring',
      description: 'Server runtime environments, RESTful API consumption, and command line tooling.',
    },
  ],

  // --------------------------------------------------------------------------
  // 4. THE LABORATORY — PROJECTS
  // Leave empty [] to show the beautiful official empty state, or add real items.
  // --------------------------------------------------------------------------
  projects: [
    // You can add your actual projects here as you build them.
    // Example:
    // {
    //   id: 'shueb-dev-portfolio',
    //   title: 'SHUEB.DEV Universe',
    //   tagline: 'Futuristic personal digital portfolio & operating system',
    //   description: 'A cinematic, production-ready digital portfolio built with React, TypeScript, and modern styling.',
    //   technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    //   status: 'Completed',
    //   githubUrl: 'https://github.com/hussainshueb/portfolio', // Add your real repo URL
    //   demoUrl: 'https://shueb.dev',
    // }
  ],

  // --------------------------------------------------------------------------
  // 5. PHOTOGRAPHY DARKROOM
  // Add your captured photographs here with camera specs or captions.
  // --------------------------------------------------------------------------
  photography: [
    // Add your real photos here when ready!
    // Example:
    // {
    //   id: 'photo-1',
    //   title: 'Urban Architecture',
    //   caption: 'Reflections of city geometry under evening overcast skies.',
    //   category: 'Architecture',
    //   location: 'Birmingham, UK',
    //   date: '2026',
    //   cameraInfo: { camera: 'iPhone 15 Pro', lens: '24mm f/1.78', iso: '80' },
    //   src: '/images/photo1.jpg'
    // }
  ],

  // --------------------------------------------------------------------------
  // 6. FREQUENCY — MUSIC CORNER
  // Add your favourite tracks, albums, or Spotify playlists here.
  // --------------------------------------------------------------------------
  music: [
    // Example tracks (uncomment or edit with your favourites):
    // {
    //   id: 'track-1',
    //   title: 'Midnight City',
    //   artist: 'M83',
    //   album: 'Hurry Up, We\'re Dreaming',
    //   personalNote: 'Go-to soundtrack for deep night coding sessions and flow state.',
    //   tag: 'Electronic / Synthwave',
    //   spotifyUrl: 'https://open.spotify.com/track/1eyzqe2QqGZUmfcPZtrIyt',
    // }
  ],

  // --------------------------------------------------------------------------
  // 7. MY EVOLUTION — TIMELINE
  // Only verified, authentic milestones are listed.
  // --------------------------------------------------------------------------
  timeline: [
    {
      id: 'ucb-cs-2nd-year',
      year: '2026',
      title: '2nd Year — BSc (Hons) Computer Science',
      institutionOrContext: 'University College Birmingham, United Kingdom',
      stage: 'Current Focus',
      description: 'Deepening foundations in software design, algorithms, databases, web systems, and modern software development practices.',
      status: 'Current',
    },
    {
      id: 'ucb-cs-1st-year',
      year: '2024 — 2025',
      title: '1st Year — Computer Science Fundamentals',
      institutionOrContext: 'University College Birmingham, United Kingdom',
      stage: 'Foundation Completed',
      description: 'Learned core computing theory, structured programming, web architecture basics, and foundational mathematical principles.',
      status: 'Completed',
    },
    {
      id: 'future-software-dev',
      year: 'Future',
      title: 'Software Developer & Honours Graduate',
      institutionOrContext: 'Tech Industry / Software Engineering',
      stage: 'Career Vision',
      description: 'Aspiring to engineer impactful software systems, contribute to innovative software products, and expand engineering depth.',
      status: 'Upcoming',
    },
  ],

  // --------------------------------------------------------------------------
  // 8. SOCIAL & CONTACT LINKS
  // Set to your actual URL or username. Leave as "" to hide that button.
  // --------------------------------------------------------------------------
  socialLinks: {
    github: 'https://github.com', // Replace with your actual GitHub profile: e.g., 'https://github.com/hussainshueb'
    linkedin: '',                  // e.g., 'https://linkedin.com/in/hussainshueb'
    instagram: '',                 // e.g., 'https://instagram.com/hussainshueb'
    email: 'hussainmuhammadshueb8@gmail.com',
  },

  // --------------------------------------------------------------------------
  // 9. SECRET UNIVERSE EASTER EGG
  // Unlocked by typing `sudo universe` in the terminal or clicking the cosmos node.
  // --------------------------------------------------------------------------
  secretUniverse: {
    codeName: 'COSMOS // ZERO',
    message: 'Welcome to the core frequency of SHUEB.DEV. Thank you for exploring my personal digital world. Software development is not just about writing instructions for machines — it is about shaping ideas into reality, frame by frame, line by line.',
    coordinates: '52.4862° N, 1.8904° W (Birmingham, UK) · Origin: Bangladesh',
    timestamp: 'CLASSIFIED // AUTHORIZED ACCESS GRANTED',
  },
};
