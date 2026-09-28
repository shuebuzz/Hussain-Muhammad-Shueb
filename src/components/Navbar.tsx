import { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenTerminal, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Identity', href: '#identity' },
    { label: 'Worlds', href: '#worlds' },
    { label: 'Matrix', href: '#matrix' },
    { label: 'Laboratory', href: '#laboratory' },
    { label: 'Evolution', href: '#evolution' },
  ];

  return (
    <>
      {/* Scroll progress line */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#1677FF] via-[#00D8FF] to-blue-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Top Bar Contract adherence */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#050914]/85 backdrop-blur-md border-b border-[#1677FF]/15 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="text-lg md:text-xl font-display font-bold tracking-tight text-white hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 group flex items-center gap-1.5"
            aria-label="SHUEB.DEV home"
          >
            <span>SHUEB</span>
            <span className="text-[#1677FF] group-hover:text-cyan-400 transition-colors">.DEV</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav 
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap hover:text-white ${
                    isActive ? 'text-cyan-300 font-semibold' : 'text-slate-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00D8FF] shadow-[0_0_8px_#00D8FF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Terminal launcher button */}
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-[#1677FF] rounded-lg transition-colors whitespace-nowrap"
              title="Open Command Terminal (or press ~)"
              aria-label="Open Command Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Terminal</span>
            </button>

            {/* Primary Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-medium text-white bg-[#1677FF] hover:bg-blue-600 rounded-lg shadow-sm shadow-[#1677FF]/40 transition-colors whitespace-nowrap"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-[#050914]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              SYSTEM SECTORS
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-cyan-300 py-2 border-b border-slate-800/80 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-slate-500">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-[#00D8FF] py-2 border-b border-slate-800/80 flex items-center justify-between"
            >
              <span>Establish Connection</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>HUSSAIN MUHAMMAD SHUEB</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="text-cyan-400 underline"
            >
              Launch Terminal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
