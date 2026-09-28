import { useState, useEffect, useRef } from 'react';
import { siteContent } from '../data/siteContent';
import { Radio, Volume2, VolumeX, ExternalLink, Sparkles, Disc } from 'lucide-react';

export default function MusicSpaceSection() {
  const [globalSound, setGlobalSound] = useState(false);
  const [isPlayingSynth, setIsPlayingSynth] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const tracks = siteContent.music;

  // Toggle ambient harmonic synth
  const toggleAmbientAudio = () => {
    if (globalSound) {
      setGlobalSound(false);
      setIsPlayingSynth(false);
      audioContextRef.current?.close();
      audioContextRef.current = null;
    } else {
      setGlobalSound(true);
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;

          // Create subtle relaxing ambient chord (Root, Fifth, Octave)
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(216, ctx.currentTime); // A3 216Hz
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(324, ctx.currentTime); // E4 harmonic

          gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.2); // Very quiet & atmospheric

          osc1.connect(gainNode);
          osc2.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc1.start();
          osc2.start();
          setIsPlayingSynth(true);
        }
      } catch {
        // AudioContext restricted
      }
    }
  };

  useEffect(() => {
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  return (
    <section id="musicspace" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            WORLD 03 // ACOUSTIC LAB
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            THE FREQUENCY CORNER
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl">
            The soundscapes that anchor focus during programming marathons and creative contemplation.
          </p>
        </div>

        {/* Global Sound Toggle (OFF by default) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAmbientAudio}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
              globalSound
                ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(0,216,255,0.3)]'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            aria-label="Toggle ambient frequency synthesis"
          >
            {globalSound ? <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span>FREQUENCY SOUND: {globalSound ? 'ACTIVE [432Hz]' : 'MUTED'}</span>
          </button>
        </div>
      </div>

      {/* Futuristic Frequency Waveform Simulation */}
      <div className="mb-10 rounded-2xl bg-[#070e24] border border-[#1677FF]/25 p-5 flex items-center justify-between gap-4 overflow-hidden relative">
        <div className="flex items-center gap-3 text-xs font-mono text-cyan-400">
          <Radio className="w-4 h-4" />
          <span>AUDIO FREQUENCY OSCILLOSCOPE</span>
        </div>

        {/* Equalizer Bars */}
        <div className="flex items-end gap-1.5 h-7">
          {[40, 70, 30, 85, 60, 95, 45, 80, 50, 65, 35, 90, 55, 75].map((height, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-[#1677FF] to-cyan-300 transition-all duration-300"
              style={{
                height: isPlayingSynth ? `${Math.max(15, (height * (Math.sin(Date.now() / 300 + i) + 1.2)) / 2)}%` : `${height * 0.4}%`,
                opacity: isPlayingSynth ? 0.9 : 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Tracks List or Official Empty State */}
      {tracks.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-[#070e24]/70 p-10 sm:p-16 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-[#1677FF]/40 flex items-center justify-center mx-auto mb-6 text-cyan-400 shadow-[0_0_30px_-5px_rgba(22,119,255,0.4)]">
            <Disc className="w-8 h-8 animate-[spin_10s_linear_infinite]" />
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Awaiting Frequency Tuning
          </h3>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-6">
            "{siteContent.worlds.frequency.emptyStateText}"
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Add your favourite songs, artists and Spotify URLs to siteContent.ts</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="rounded-xl bg-[#070e24] border border-slate-800 hover:border-cyan-500/50 p-5 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                  <span>{track.tag || 'TRACK ENTRY'}</span>
                  <Disc className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:rotate-180 transition-all duration-700" />
                </div>

                <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {track.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5 mb-3">
                  {track.artist} {track.album && <span className="text-slate-500">· {track.album}</span>}
                </p>

                {track.personalNote && (
                  <p className="text-xs text-slate-400 font-light italic bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 mb-4">
                    "{track.personalNote}"
                  </p>
                )}
              </div>

              {track.spotifyUrl && (
                <div className="pt-3 border-t border-slate-800/80 flex justify-end">
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-white"
                  >
                    <span>Spotify Stream</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
