import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Clock, Globe } from 'lucide-react';
import { siteContent } from '../data/siteContent';

interface HeroSectionProps {
  onUnlockSecret: () => void;
}

export default function HeroSection({ onUnlockSecret }: HeroSectionProps) {
  const [timeString, setTimeString] = useState('');
  const [photoLoaded, setPhotoLoaded] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in UK / Birmingham local time
      const timeUK = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeString(timeUK);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] md:min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Cinematic Typography & Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Status live badge with digital clock */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-6 bg-slate-900/60 border border-[#1677FF]/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-[#00D8FF] animate-pulse" />
              <span>DIGITAL UNIVERSE // ONLINE</span>
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="tabular-nums">{timeString ? `${timeString} UK` : 'SYNCING...'}</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>Birmingham, UK</span>
            </span>
          </div>

          {/* Subtitle / Role Tagline */}
          <p className="text-sm sm:text-base font-mono tracking-widest text-[#00D8FF] uppercase mb-3">
            {siteContent.personal.statusTagline}
          </p>

          {/* Large Cinematic Typography */}
          <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
            HUSSAIN <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200">
              MUHAMMAD
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] via-cyan-400 to-blue-200">
              SHUEB
            </span>
          </h1>

          {/* Natural Biography Statement */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-light">
            {siteContent.personal.heroIntro}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#worlds"
              className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-[#1677FF] hover:bg-blue-600 shadow-[0_0_30px_-5px_rgba(22,119,255,0.6)] transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              <span>EXPLORE MY UNIVERSE</span>
              <span className="text-cyan-200 group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg text-sm font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-[#1677FF]/30 hover:border-cyan-400 transition-colors whitespace-nowrap"
            >
              CONTACT ME
            </a>

            {/* Secret Universe Easter Egg Constellation Trigger */}
            <button
              onClick={onUnlockSecret}
              className="p-3 rounded-lg text-slate-500 hover:text-cyan-400 bg-slate-900/40 border border-slate-800 hover:border-[#1677FF]/40 transition-colors"
              title="Classified Cosmic Frequency"
              aria-label="Access Secret Universe"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Hussain's Official Portrait with Cinematic Sci-Fi Staging */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
          
          {/* Subtle Orbital Circles & Glow (outside face) */}
          <div className="relative w-72 sm:w-84 md:w-96 aspect-[3/4] flex items-center justify-center">
            
            {/* Outer Orbital Ring */}
            <div className="absolute -inset-6 sm:-inset-8 rounded-[2rem] border border-[#1677FF]/20 animate-[spin_60s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-2 rounded-[1.75rem] border border-cyan-500/25 pointer-events-none" />

            {/* Atmospheric Blue Backlight */}
            <div className="absolute inset-4 bg-gradient-to-tr from-[#1677FF]/30 via-cyan-500/20 to-transparent blur-3xl -z-10 rounded-3xl" />

            {/* Portrait Frame Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#1677FF]/40 bg-[#070e24] shadow-2xl shadow-blue-950/80 group">
              
              {/* Fallback container until loaded */}
              {!photoLoaded && (
                <div className="absolute inset-0 bg-[#070e24] flex items-center justify-center text-xs font-mono text-slate-500">
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
                    <span>SYNCHRONIZING PROFILE...</span>
                  </div>
                </div>
              )}

              {/* Official Portrait Photo */}
              <img
                src={siteContent.personal.portraitImage}
                alt="Hussain Muhammad Shueb"
                onLoad={() => setPhotoLoaded(true)}
                className={`w-full h-full object-cover object-center filter contrast-[1.03] transition-all duration-700 ${
                  photoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Subtle edge atmospheric lighting scrim (never obscuring face) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-60" />

              {/* Subtle Corner Tech Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/70 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/70 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/70 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/70 pointer-events-none" />

              {/* Quiet Identity Stamp at bottom */}
              <div className="absolute bottom-3 inset-x-3 bg-[#050914]/80 backdrop-blur-sm border border-[#1677FF]/25 rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-300 font-medium tracking-wide">SHUEB.DEV</span>
                <span className="text-cyan-400">ID: HMS-2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="pt-8 flex flex-col items-center justify-center text-slate-500 text-xs font-mono">
        <a 
          href="#identity" 
          className="flex flex-col items-center gap-1.5 hover:text-cyan-300 transition-colors group"
          aria-label="Scroll down to identity file"
        >
          <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#1677FF] group-hover:text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
