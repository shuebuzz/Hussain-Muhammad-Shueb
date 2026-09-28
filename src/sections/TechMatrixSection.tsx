import { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { SkillNode } from '../types';
import { Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TechMatrixSection() {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(siteContent.skills[0]);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Core', 'Web & Frontend', 'Tools & Systems', 'Exploring'];

  const filteredSkills = filterCategory === 'All'
    ? siteContent.skills
    : siteContent.skills.filter((s) => s.category === filterCategory);

  return (
    <section id="matrix" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            COMPUTATIONAL STACK // KNOWLEDGE GRAPH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            TECH MATRIX
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl">
            A map of tools, languages, and technical frameworks I actively write, practice, and explore. Authentic knowledge without artificial percentages.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-[#1677FF] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Constellation Grid & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Nodes Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill.id === skill.id;

            return (
              <button
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className={`p-5 rounded-xl text-left border transition-all duration-200 relative overflow-hidden group focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                  isSelected
                    ? 'bg-[#0a163a] border-[#00D8FF] shadow-[0_0_20px_-3px_rgba(0,216,255,0.3)] ring-1 ring-[#00D8FF]/40'
                    : 'bg-[#070e24]/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#091330]'
                }`}
              >
                {/* Status indicator line */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 tracking-wider">
                    {skill.category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700/60 text-slate-300">
                    {skill.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 font-light line-clamp-2">
                  {skill.description}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#1677FF] to-[#00D8FF]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column: Node Inspector Panel */}
        <div className="lg:col-span-4 rounded-2xl bg-[#070e24] border border-[#1677FF]/30 p-6 sm:p-7 relative shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
            <span className="text-cyan-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              NODE INSPECTOR
            </span>
            <span className="text-slate-500">SYS://{selectedSkill.id.toUpperCase()}</span>
          </div>

          <div className="py-6 space-y-5">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Technology
              </span>
              <h4 className="font-display text-2xl font-bold text-white">
                {selectedSkill.name}
              </h4>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Proficiency Focus
              </span>
              <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00D8FF]" />
                <span>{selectedSkill.status} Stage</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Description & Application
              </span>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
                Domain Stack
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Layers className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>Category: {selectedSkill.category}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span>CONFIGURABLE IN siteContent.ts</span>
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
