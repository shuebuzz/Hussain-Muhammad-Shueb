/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import CosmicBackground from './components/CosmicBackground';
import CinematicIntro from './components/CinematicIntro';
import Navbar from './components/Navbar';
import InteractiveTerminal from './components/InteractiveTerminal';
import SecretUniverseModal from './components/SecretUniverseModal';

import HeroSection from './sections/HeroSection';
import IdentitySection from './sections/IdentitySection';
import ThreeWorldsSection from './sections/ThreeWorldsSection';
import TechMatrixSection from './sections/TechMatrixSection';
import LaboratorySection from './sections/LaboratorySection';
import EvolutionSection from './sections/EvolutionSection';
import DarkroomSection from './sections/DarkroomSection';
import MusicSpaceSection from './sections/MusicSpaceSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Check if user disabled the intro in localStorage or prefers reduced motion
    if (typeof window !== 'undefined') {
      const isDisabled = localStorage.getItem('shueb_intro_disabled') === 'true';
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      return !isDisabled && !prefersReducedMotion;
    }
    return true;
  });

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'identity', 'worlds', 'matrix', 'laboratory', 'evolution', 'darkroom', 'musicspace', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 160;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut to open terminal (backtick ` or ~ or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || (e.ctrlKey && e.key === 'k') || (e.metaKey && e.key === 'k')) {
        // Prevent toggle if currently typing in an input or textarea
        if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
          return;
        }
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050914] text-slate-200 selection:bg-[#1677FF]/30 selection:text-cyan-200">
      
      {/* Cinematic Intro Animation */}
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Persistent Cosmic Particle & Grid Canvas */}
      <CosmicBackground />

      {/* Main Top Bar Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onUnlockSecret={() => setSecretOpen(true)} />
        <IdentitySection />
        <ThreeWorldsSection />
        <TechMatrixSection />
        <LaboratorySection />
        <EvolutionSection />
        <DarkroomSection />
        <MusicSpaceSection />
        <ContactSection />
      </main>

      {/* Minimalist Sci-Fi Footer */}
      <FooterSection
        onOpenTerminal={() => setTerminalOpen(true)}
        onUnlockSecret={() => setSecretOpen(true)}
      />

      {/* Interactive Command Terminal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onUnlockSecret={() => {
          setTerminalOpen(false);
          setSecretOpen(true);
        }}
      />

      {/* Secret Universe Easter Egg Modal */}
      <SecretUniverseModal
        isOpen={secretOpen}
        onClose={() => setSecretOpen(false)}
      />
    </div>
  );
}
