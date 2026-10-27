import React, { useState } from 'react';
import { Flame, Clock, Zap, ArrowRight, Check, Dumbbell, Shield } from 'lucide-react';
import { programs } from '../data/gymData';

export default function Programs({ onSelectProgram }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hypertrophy', 'Cardio & Shred', 'Functional', 'Coaching', 'Group Studio', 'Combat'];

  const filteredPrograms = activeCategory === 'All'
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <section id="programs" className="relative py-24 bg-[#090909] border-t border-neutral-900">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-burn-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>TRAIN WITH PURPOSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            SIGNATURE TRAINING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              PROGRAMS & DISCIPLINES
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Engineered around physiological adaptation, progressive overload, and high caloric expenditure. Every program is overseen by our certified floor leads.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-burn-red text-white shadow-[0_0_15px_rgba(255,42,42,0.4)]'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group rounded-3xl bg-[#141414] border border-neutral-800/80 hover:border-burn-red/60 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,42,42,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Program Card Hero Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-neutral-800 text-[11px] font-bold uppercase tracking-wider text-white">
                      {prog.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-burn-red/90 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Level & Duration Pills */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-neutral-300 bg-black/70 backdrop-blur-sm px-2.5 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-burn-red" />
                      {prog.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-neutral-300 bg-black/70 backdrop-blur-sm px-2.5 py-0.5 rounded-md">
                      <Zap className="w-3 h-3 text-yellow-400" />
                      {prog.intensity}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold uppercase font-heading text-white group-hover:text-burn-red transition-colors mb-2.5">
                    {prog.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {prog.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-neutral-800/80 mb-6">
                    {prog.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-burn-red shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProgram(prog.name)}
                  className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-burn-red hover:text-white border border-neutral-700/80 text-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Book Free Trial For This Program</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
