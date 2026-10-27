import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Trophy, ArrowRight } from 'lucide-react';
import { galleryItems, gymInfo } from '../data/gymData';

export default function TransformationGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'facility', label: 'Facility & Equipment' },
    { id: 'workouts', label: 'Workouts & Action' },
    { id: 'community', label: 'Group Classes' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-[#090909] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL PROOF OF DEDICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            TRANSFORMATION & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              FACILITY GALLERY
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            A glimpse inside Mohali's benchmark fitness club. Real member transformations, state-of-the-art biomechanics, and pure athletic energy.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-burn-red text-white shadow-[0_0_15px_rgba(255,42,42,0.4)]'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800/80 hover:border-burn-red/60 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Stat or Category pill */}
              {item.stat ? (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-burn-red text-white text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  <span>{item.stat}</span>
                </div>
              ) : (
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-neutral-700 text-neutral-300 text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </div>
              )}

              {/* Zoom Hover Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                <ZoomIn className="w-4 h-4 text-burn-red" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-sm font-extrabold uppercase font-heading text-white group-hover:text-burn-red transition-colors mb-1 line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-neutral-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Action */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={gymInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-pink-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Follow @burngymofficial on Instagram</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:text-burn-red transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Previous */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-white hover:text-burn-red hover:bg-neutral-900 transition-all z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-neutral-800 shadow-2xl">
              <img
                src={filteredItems[activeLightboxIndex]?.image}
                alt={filteredItems[activeLightboxIndex]?.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            
            <div className="mt-4 text-center max-w-xl">
              <h3 className="text-lg font-black uppercase text-white font-heading">
                {filteredItems[activeLightboxIndex]?.title}
              </h3>
              {filteredItems[activeLightboxIndex]?.stat && (
                <span className="inline-block px-3 py-0.5 rounded-full bg-burn-red text-white text-xs font-extrabold uppercase mt-1 mb-2">
                  {filteredItems[activeLightboxIndex]?.stat}
                </span>
              )}
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                {filteredItems[activeLightboxIndex]?.caption}
              </p>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block font-mono">
                Photo {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-white hover:text-burn-red hover:bg-neutral-900 transition-all z-20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
