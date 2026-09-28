import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<'initial-point' | 'converging' | 'reveal-brand' | 'fading'>('initial-point');
  const [disableFuture, setDisableFuture] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, skip intro directly
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase('converging'), 700);
    const t2 = setTimeout(() => setPhase('reveal-brand'), 1700);
    const t3 = setTimeout(() => setPhase('fading'), 3200);
    const t4 = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (disableFuture) {
      localStorage.setItem('shueb_intro_disabled', 'true');
    }
    setPhase('fading');
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  const handleToggleDisable = (checked: boolean) => {
    setDisableFuture(checked);
    if (checked) {
      localStorage.setItem('shueb_intro_disabled', 'true');
    } else {
      localStorage.removeItem('shueb_intro_disabled');
    }
  };

  return (
    <AnimatePresence>
      {phase !== 'fading' && (
        <motion.div
          key="cinematic-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050914] text-white select-none overflow-hidden"
          role="dialog"
          aria-label="Welcome to SHUEB.DEV"
        >
          {/* Subtle grid in intro */}
          <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none" />

          {/* Top Skip controls */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex items-center gap-4 text-xs font-mono">
            <label className="hidden sm:flex items-center gap-2 text-slate-400 cursor-pointer hover:text-slate-300">
              <input
                type="checkbox"
                checked={disableFuture}
                onChange={(e) => handleToggleDisable(e.target.checked)}
                className="w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-[#1677FF] focus:ring-0 focus:ring-offset-0"
              />
              <span>Don't show again</span>
            </label>
            <button
              onClick={handleSkip}
              className="px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:border-[#1677FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            >
              Skip Intro ⇥
            </button>
          </div>

          {/* Central Convergence Stage */}
          <div className="relative flex flex-col items-center justify-center">
            {/* The primordial glowing blue particle */}
            {phase === 'initial-point' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative flex items-center justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_24px_6px_#00d8ff]" />
                <div className="absolute w-8 h-8 rounded-full border border-[#1677FF]/40 animate-ping" />
              </motion.div>
            )}

            {/* Converging constellation particles */}
            {phase === 'converging' && (
              <div className="relative w-48 h-48 flex items-center justify-center">
                {[...Array(12)].map((_, i) => {
                  const angle = (i / 12) * Math.PI * 2;
                  const distance = 80;
                  const startX = Math.cos(angle) * distance;
                  const startY = Math.sin(angle) * distance;
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: startX, y: startY, opacity: 0 }}
                      animate={{ x: 0, y: 0, opacity: [0, 1, 0.4] }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.03 }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#00d8ff] shadow-[0_0_12px_#1677FF]"
                    />
                  );
                })}
                {/* Central singularity pulse */}
                <motion.div
                  animate={{ scale: [0.8, 1.4, 1], opacity: [0.4, 1, 0.8] }}
                  transition={{ duration: 0.8 }}
                  className="w-4 h-4 rounded-full bg-cyan-200 shadow-[0_0_30px_10px_#1677FF]"
                />
              </div>
            )}

            {/* Revealed Brand: SHUEB.DEV */}
            {phase === 'reveal-brand' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-center relative z-10 px-4"
              >
                {/* Ambient glow behind wordmark */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-blue-600/20 blur-2xl -z-10 rounded-full" />
                
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3">
                  <span className="text-white">SHUEB</span>
                  <span className="text-[#1677FF]">.DEV</span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xs sm:text-sm font-mono tracking-widest text-cyan-300 uppercase"
                >
                  INITIALIZING DIGITAL UNIVERSE
                </motion.p>
              </motion.div>
            )}
          </div>

          {/* Subtitle status anchor */}
          <div className="absolute bottom-8 inset-x-0 text-center font-mono text-[11px] text-slate-500 tracking-wider">
            HUSSAIN MUHAMMAD SHUEB · 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
