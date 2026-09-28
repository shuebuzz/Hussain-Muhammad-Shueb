import { useState, useEffect } from 'react';
import { X, Sparkles, Compass, ShieldCheck, Volume2, VolumeX } from 'lucide-react';
import { siteContent } from '../data/siteContent';

interface SecretUniverseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecretUniverseModal({ isOpen, onClose }: SecretUniverseModalProps) {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    if (isOpen && soundEnabled) {
      // Gentle harmonic chime with Web Audio API
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(432, ctx.currentTime); // 432Hz harmonic
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(864, ctx.currentTime);

          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          osc2.start();
          osc1.stop(ctx.currentTime + 1.8);
          osc2.stop(ctx.currentTime + 1.8);
        }
      } catch {
        // AudioContext not allowed or unsupported
      }
    }
  }, [isOpen, soundEnabled]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Secret Universe Easter Egg"
    >
      <div 
        className="relative w-full max-w-xl bg-gradient-to-b from-[#0a1435] to-[#050914] border border-[#00D8FF]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_-10px_rgba(0,216,255,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle orbital decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-cyan-500/20 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border border-blue-500/20 pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-cyan-400 block uppercase">
                {siteContent.secretUniverse.codeName}
              </span>
              <h2 className="font-display text-lg font-bold text-white tracking-tight">
                SECRET UNIVERSE
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1.5 text-slate-400 hover:text-cyan-300 rounded-lg border border-slate-800 hover:border-slate-700"
              title={soundEnabled ? 'Mute audio frequency' : 'Enable audio frequency'}
              aria-label="Toggle Easter egg chime"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700"
              aria-label="Close secret universe"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Secret Message Body */}
        <div className="py-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{siteContent.secretUniverse.timestamp}</span>
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
            "{siteContent.secretUniverse.message}"
          </p>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-cyan-300">
              <Compass className="w-3.5 h-3.5" />
              <span>{siteContent.secretUniverse.coordinates}</span>
            </div>
            <span className="text-slate-500">Hussain Muhammad Shueb · 21</span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-900 bg-cyan-300 hover:bg-cyan-200 rounded-lg transition-colors font-mono"
          >
            RETURN TO EXPLORATION
          </button>
        </div>
      </div>
    </div>
  );
}
