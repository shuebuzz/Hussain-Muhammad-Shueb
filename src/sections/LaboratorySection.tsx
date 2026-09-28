import { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { ProjectStatus } from '../types';
import { FlaskConical, Github, ExternalLink, Sparkles, Filter } from 'lucide-react';

export default function LaboratorySection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Exploring', 'In Development', 'Completed'];

  const filteredProjects = activeFilter === 'All'
    ? siteContent.projects
    : siteContent.projects.filter((p) => p.status === (activeFilter as ProjectStatus));

  return (
    <section id="laboratory" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            COMPUTATIONAL WORKSHOP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            THE LABORATORY
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl">
            Experiments, ideas and things I'm building.
          </p>
        </div>

        {/* Filter Controls */}
        {siteContent.projects.length > 0 && (
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            <Filter className="w-3.5 h-3.5 text-slate-500 ml-2 mr-1" />
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === f
                    ? 'bg-[#1677FF] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Projects Display or Beautiful Official Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#1677FF]/30 bg-[#070e24]/60 p-12 sm:p-16 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-slate-900/90 border border-[#1677FF]/40 flex items-center justify-center mx-auto mb-6 text-cyan-400 shadow-[0_0_30px_-5px_rgba(22,119,255,0.4)]">
            <FlaskConical className="w-8 h-8" />
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
            Active Laboratory Phase
          </h3>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-6">
            "{siteContent.worlds.code.emptyStateText}"
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for project configurations in src/data/siteContent.ts</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#070e24] border border-slate-800 hover:border-[#1677FF]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              {/* Optional Project Image */}
              {project.image && (
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e24] via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono">
                    <span className="text-cyan-400 font-medium">
                      {project.status}
                    </span>
                    <span className="text-slate-500">ID://{project.id}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-cyan-200/80 font-mono mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech tags: unboxed clean text with separators */}
                  <div className="text-xs font-mono text-slate-400 mb-6 flex flex-wrap gap-x-2 gap-y-1">
                    {project.technologies.map((tech, i) => (
                      <span key={tech}>
                        {tech}
                        {i < project.technologies.length - 1 && <span className="text-slate-600 ml-2">/</span>}
                      </span>
                    ))}
                  </div>

                  {/* Actions: only render button if URL is actually present */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1677FF] hover:bg-blue-600 text-xs font-mono text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
