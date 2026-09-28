import { siteContent } from '../data/siteContent';
import { Milestone, Calendar, Sparkles } from 'lucide-react';

export default function EvolutionSection() {
  return (
    <section id="evolution" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          CHRONOLOGICAL VECTOR
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          MY EVOLUTION
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
          The verified academic and technical progression of my journey as a student and future software developer.
        </p>
      </div>

      {/* Futuristic Timeline Spine */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#1677FF]/30 space-y-12 max-w-4xl">
        {siteContent.timeline.map((item, index) => {
          const isCurrent = item.status === 'Current';
          const isUpcoming = item.status === 'Upcoming';

          return (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Point */}
              <div 
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  isCurrent
                    ? 'bg-[#00D8FF] shadow-[0_0_20px_4px_#00D8FF] ring-4 ring-[#1677FF]/30'
                    : isUpcoming
                    ? 'bg-slate-800 border-2 border-[#1677FF] ring-2 ring-slate-900'
                    : 'bg-[#1677FF] ring-4 ring-[#1677FF]/20'
                }`}
              >
                {isCurrent ? (
                  <div className="w-2 h-2 rounded-full bg-[#050914] animate-ping" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>

              {/* Milestone Content Card */}
              <div 
                className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                  isCurrent
                    ? 'bg-gradient-to-r from-[#091538] to-[#070e24] border-[#00D8FF]/60 shadow-[0_0_30px_-8px_rgba(22,119,255,0.4)]'
                    : 'bg-[#070e24]/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Year & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-semibold text-sm">{item.year}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300">{item.stage}</span>
                  </div>

                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono border ${
                    isCurrent
                      ? 'bg-cyan-950/60 border-cyan-400/50 text-cyan-300'
                      : isUpcoming
                      ? 'bg-slate-900 border-slate-700 text-slate-400'
                      : 'bg-blue-950/40 border-blue-600/40 text-blue-300'
                  }`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Institution / Context */}
                <p className="text-xs sm:text-sm font-mono text-[#1677FF] mb-4 flex items-center gap-1.5">
                  <Milestone className="w-3.5 h-3.5" />
                  <span>{item.institutionOrContext}</span>
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                  TRAJECTORY INDEX: 0{index + 1}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-xs font-mono text-slate-500 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>Additional academic, research, and project milestones can be plugged into siteContent.ts</span>
      </div>
    </section>
  );
}
