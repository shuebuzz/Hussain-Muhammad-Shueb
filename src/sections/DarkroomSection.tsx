import { useState } from 'react';
import { siteContent } from '../data/siteContent';
import LightboxModal from '../components/LightboxModal';
import { Camera, Maximize2, Sparkles, Film, Image as ImageIcon } from 'lucide-react';

export default function DarkroomSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photos = siteContent.photography;

  const handleOpenLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="darkroom" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Darkroom Atmosphere / Light leak overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1677FF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            WORLD 02 // OPTICAL ARCHIVE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            PHOTOGRAPHY DARKROOM
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl">
            Exploring light, composition, shadows, and perspective through my own lens. Authentic visual captures.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl">
          <Film className="w-3.5 h-3.5 text-cyan-400" />
          <span>FRAMES ARCHIVE: {photos.length}</span>
        </div>
      </div>

      {/* Photos Grid or Official Empty State */}
      {photos.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-[#070e24]/70 p-10 sm:p-16 text-center max-w-3xl mx-auto relative overflow-hidden">
          
          {/* Subtle film negative strip decoration */}
          <div className="flex justify-center items-center gap-3 mb-6 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-12 h-8 rounded border border-slate-600 flex items-center justify-center text-[10px] font-mono text-slate-500">
                0{i + 1}
              </div>
            ))}
          </div>

          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 text-cyan-400 shadow-[0_0_30px_-5px_rgba(0,216,255,0.3)]">
            <Camera className="w-8 h-8" />
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Frames Captured Through My Lens
          </h3>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-6">
            "{siteContent.worlds.frame.emptyStateText}"
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Drop your photographs into src/assets/ and link them in siteContent.ts</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-xl overflow-hidden bg-[#070e24] border border-slate-800 hover:border-[#00D8FF]/60 cursor-pointer transition-all duration-300 shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="text-xs font-mono text-cyan-300">Expand Frame</span>
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-1">
                  <span>{item.category}</span>
                  {item.location && <span>{item.location}</span>}
                </div>
                <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 font-light mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Viewer */}
      <LightboxModal
        items={photos}
        currentIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActivePhotoIndex(idx)}
      />
    </section>
  );
}
