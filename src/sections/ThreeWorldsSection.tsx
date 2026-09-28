import { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { Code2, Camera, Radio, ArrowRight } from 'lucide-react';

export default function ThreeWorldsSection() {
  const [activeWorld, setActiveWorld] = useState<'code' | 'frame' | 'frequency'>('code');

  const worlds = [
    {
      id: 'code' as const,
      num: '01',
      label: siteContent.worlds.code.label,
      title: siteContent.worlds.code.title,
      headline: siteContent.worlds.code.headline,
      description: siteContent.worlds.code.description,
      emptyState: siteContent.worlds.code.emptyStateText,
      image: siteContent.worlds.code.image,
      icon: Code2,
      targetSection: '#laboratory',
      accentColor: 'from-blue-600/30 to-cyan-500/10',
      actionText: 'Enter Laboratory',
    },
    {
      id: 'frame' as const,
      num: '02',
      label: siteContent.worlds.frame.label,
      title: siteContent.worlds.frame.title,
      headline: siteContent.worlds.frame.headline,
      description: siteContent.worlds.frame.description,
      emptyState: siteContent.worlds.frame.emptyStateText,
      image: siteContent.worlds.frame.image,
      icon: Camera,
      targetSection: '#darkroom',
      accentColor: 'from-cyan-600/30 to-blue-500/10',
      actionText: 'View Darkroom',
    },
    {
      id: 'frequency' as const,
      num: '03',
      label: siteContent.worlds.frequency.label,
      title: siteContent.worlds.frequency.title,
      headline: siteContent.worlds.frequency.headline,
      description: siteContent.worlds.frequency.description,
      emptyState: siteContent.worlds.frequency.emptyStateText,
      image: siteContent.worlds.frequency.image,
      icon: Radio,
      targetSection: '#musicspace',
      accentColor: 'from-indigo-600/30 to-cyan-500/10',
      actionText: 'Tune Frequency',
    },
  ];

  return (
    <section id="worlds" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            CORE CREATIVE AXES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            MY THREE WORLDS
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl">
            Each realm represents a foundational dimension of my craft: the logic of computation, the visual eye of photography, and the auditory resonance of music.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
          {worlds.map((w) => {
            const Icon = w.icon;
            const isCurrent = activeWorld === w.id;
            return (
              <button
                key={w.id}
                onClick={() => setActiveWorld(w.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isCurrent
                    ? 'bg-[#1677FF] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{w.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* World Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {worlds.map((w) => {
          const Icon = w.icon;
          const isSelected = activeWorld === w.id;

          return (
            <div
              key={w.id}
              onClick={() => setActiveWorld(w.id)}
              className={`group relative rounded-2xl bg-[#070e24] border transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-[#00D8FF]/70 shadow-[0_0_35px_-5px_rgba(22,119,255,0.4)] ring-1 ring-[#00D8FF]/30'
                  : 'border-slate-800/80 hover:border-slate-700 opacity-90 hover:opacity-100'
              }`}
            >
              {/* Media Imagery Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={w.image}
                  alt={w.headline}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-black/40 to-transparent" />

                {/* World Tag */}
                <div className="absolute top-3 left-3 bg-[#050914]/80 backdrop-blur-md border border-slate-700/80 px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <Icon className="w-3 h-3 text-[#1677FF]" />
                  <span>{w.title} · {w.label}</span>
                </div>

                <div className="absolute top-3 right-3 text-[11px] font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded">
                  0{w.num}
                </div>
              </div>

              {/* Text & Content details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {w.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    {w.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                  <p className="text-xs font-mono text-slate-400 italic">
                    "{w.emptyState}"
                  </p>
                  
                  <a
                    href={w.targetSection}
                    className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-white pt-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>{w.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
