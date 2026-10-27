import React from 'react';
import { Star, CheckCircle, Quote, ShieldAlert, Award, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/gymData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0d0d0d] border-t border-neutral-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-burn-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>TRI-CITY MEMBER VOICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            WHAT OUR ATHLETES & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              MEMBERS ARE SAYING
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Real feedback from members who train at Burn Gym Phase 9 Mohali. From competitive powerlifters to busy working professionals.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 shadow-md">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">4.9 / 5.0 Rating</span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs text-neutral-400">450+ Verified Member Reviews</span>
          </div>

          {/* Placeholder tag notice */}
          <div className="mt-3 block text-center">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              [Representative member testimonials • Editable placeholders]
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-7 rounded-3xl bg-[#141414] border border-neutral-800/80 hover:border-burn-red/50 transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stars & Achievement Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-burn-red text-burn-red" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-burn-red text-[11px] font-extrabold uppercase">
                    {test.achievement}
                  </span>
                </div>

                {/* Comment */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-neutral-800 absolute -top-3 -left-2 -z-0 opacity-40 group-hover:text-burn-red/20 transition-colors" />
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed relative z-10">
                    "{test.comment}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-extrabold uppercase font-heading text-white flex items-center gap-2">
                    <span>{test.name}</span>
                    {test.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-400" title="Verified Gym Member" />
                    )}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {test.role}
                  </p>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                  {test.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
