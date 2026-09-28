import { siteContent } from '../data/siteContent';
import { ArrowUp, Terminal } from 'lucide-react';

interface FooterSectionProps {
  onOpenTerminal: () => void;
  onUnlockSecret: () => void;
}

export default function FooterSection({ onOpenTerminal, onUnlockSecret }: FooterSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#050914] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#hero"
            className="text-lg font-display font-bold text-white hover:text-cyan-300 transition-colors"
          >
            <span>SHUEB</span>
            <span className="text-[#1677FF]">.DEV</span>
          </a>
          <p className="text-xs text-slate-400 font-light mt-1">
            {siteContent.personal.name} · BSc (Hons) Computer Science · University College Birmingham
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <a href="#identity" className="hover:text-cyan-300 transition-colors">Identity</a>
          <a href="#worlds" className="hover:text-cyan-300 transition-colors">Worlds</a>
          <a href="#matrix" className="hover:text-cyan-300 transition-colors">Tech Matrix</a>
          <a href="#laboratory" className="hover:text-cyan-300 transition-colors">Laboratory</a>
          <a href="#evolution" className="hover:text-cyan-300 transition-colors">Evolution</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </div>

        {/* System Actions & Scroll Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-300 transition-colors"
            title="Launch Terminal"
            aria-label="Launch Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Return to Zenith (Top)"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Subtle Copyright & Classified Tag */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <p>© 2026 {siteContent.personal.name}. All rights reserved.</p>
        <button
          onClick={onUnlockSecret}
          className="text-slate-600 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          SYS://SECRET-UNIVERSE
        </button>
      </div>
    </footer>
  );
}
