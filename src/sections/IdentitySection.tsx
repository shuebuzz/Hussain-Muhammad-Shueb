import { siteContent } from '../data/siteContent';
import { User, MapPin, GraduationCap, Compass, Heart, Award } from 'lucide-react';

export default function IdentitySection() {
  const fields = [
    {
      icon: User,
      label: 'Full Name',
      value: siteContent.personal.name,
      accent: 'text-white',
    },
    {
      icon: MapPin,
      label: 'Origin & Heritage',
      value: siteContent.personal.origin,
      accent: 'text-slate-200',
    },
    {
      icon: MapPin,
      label: 'Current Location',
      value: siteContent.personal.currentLocation,
      accent: 'text-slate-200',
    },
    {
      icon: GraduationCap,
      label: 'Academic Degree',
      value: siteContent.personal.degree,
      accent: 'text-cyan-300',
    },
    {
      icon: Award,
      label: 'Institution',
      value: siteContent.personal.university,
      accent: 'text-slate-200',
    },
    {
      icon: Compass,
      label: 'Academic Stage',
      value: siteContent.personal.year,
      accent: 'text-cyan-300',
    },
    {
      icon: Compass,
      label: 'Future Direction',
      value: siteContent.personal.goal,
      accent: 'text-blue-400 font-semibold',
    },
    {
      icon: Heart,
      label: 'Creative Dimensions',
      value: 'Coding · Photography · Music',
      accent: 'text-slate-200',
    },
  ];

  return (
    <section id="identity" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          PERSONNEL ARCHIVE // HMS-21
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          IDENTITY FILE
        </h2>
        <p className="text-base text-slate-300 max-w-2xl font-light leading-relaxed">
          {siteContent.personal.fullBio}
        </p>
      </div>

      {/* Futuristic Identity Dossier Card */}
      <div className="rounded-2xl bg-gradient-to-b from-[#09122c] to-[#060b1c] border border-[#1677FF]/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle background ambient line */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Dossier Identifier */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-bold tracking-wider">STATUS: ACTIVE STUDENT</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">AGE: {siteContent.personal.age}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">CITIZENSHIP: BANGLADESH</span>
          </div>
          <div className="text-slate-500">
            SYSTEM ID: 4C30-HMS-SHUEB
          </div>
        </div>

        {/* 8-Grid Metadata Details (Clean unboxed text metadata) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {fields.map((field, idx) => {
            const Icon = field.icon;
            return (
              <div 
                key={field.label}
                className="flex flex-col p-4 rounded-xl bg-[#050914]/60 border border-slate-800/60 hover:border-[#1677FF]/40 transition-colors group"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                  <Icon className="w-3.5 h-3.5 text-[#1677FF] group-hover:text-cyan-400 transition-colors" />
                  <span>{field.label}</span>
                </div>
                <div className={`text-sm sm:text-base font-medium ${field.accent}`}>
                  {field.value}
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-600">
                  FILE SECTOR 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Mission statement */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="text-cyan-400">GOAL:</span>
            <span>Dedicated to mastering modern software engineering, web platforms, and computational problem solving.</span>
          </div>
          <a
            href="#worlds"
            className="text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
          >
            <span>Explore The Three Worlds</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
