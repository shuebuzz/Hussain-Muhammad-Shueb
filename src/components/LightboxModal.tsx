import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar } from 'lucide-react';
import { PhotographyItem } from '../types';

interface LightboxModalProps {
  items: PhotographyItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Photography Lightbox Viewer"
    >
      {/* Top Bar with title and close */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            FRAME {currentIndex + 1} / {items.length}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-sm font-medium text-slate-200">{currentItem.title}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/80 border border-slate-700 hover:border-slate-500 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Showcase */}
      <div className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center my-auto">
        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl shadow-black ring-1 ring-white/10"
        />

        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-2 sm:-left-12 p-3 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-2 sm:-right-12 p-3 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bottom Metadata & EXIF bar */}
      <div className="absolute bottom-4 inset-x-4 sm:inset-x-8 max-w-4xl mx-auto z-20 bg-slate-950/80 border border-slate-800 rounded-xl px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <p className="text-slate-300 font-light">{currentItem.caption}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-slate-400 font-mono text-[11px]">
          {currentItem.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentItem.location}</span>
            </div>
          )}
          {currentItem.date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{currentItem.date}</span>
            </div>
          )}
          {currentItem.cameraInfo?.camera && (
            <div className="flex items-center gap-1 text-slate-300">
              <Camera className="w-3.5 h-3.5 text-blue-400" />
              <span>{currentItem.cameraInfo.camera}</span>
              {currentItem.cameraInfo.lens && <span>· {currentItem.cameraInfo.lens}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
