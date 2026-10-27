import React from 'react';
import { ArrowRight, Flame, ShieldCheck, Play, Sparkles, Trophy, ChevronDown, CheckCircle2 } from 'lucide-react';
import { gymInfo, fourPillars } from '../data/gymData';

export default function Hero({ onOpenTrialModal, onReplayIntro }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 lg:pt-32 pb-12 overflow-hidden bg-black">
      {/* Background Hero Image with Dark Gradient & Red Smoke Flare Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Burn Gym Strength Facility"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.15] scale-105 transform animate-pulse-subtle"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/80" />
        
        {/* Atmospheric Red Ambient Light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burn-red/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-burn-red/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-bold uppercase tracking-[0.2em] text-neutral-300 mb-6 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-burn-red animate-ping" />
            <span className="text-burn-red">BURN GYM</span>
            <span className="text-neutral-500">•</span>
            <span>PHASE 9, MOHALI</span>
          </div>

          {/* Big Bold Headline inspired by reference */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight uppercase leading-[0.95] text-white">
            START YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500 drop-shadow-[0_0_35px_rgba(255,42,42,0.6)]">
              PROGRAM TODAY
            </span>
          </h1>

          {/* Supporting Pitch */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Welcome to Mohali’s premier 15,000+ sq.ft athletic destination. Olympic-grade biomechanical equipment, certified master coaches, science-backed nutrition, and guaranteed transformation.
          </p>

          {/* Key Value Points Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs sm:text-sm text-neutral-300">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-burn-red" />
              <span>Olympic Free Weights & Hammer Strength</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-burn-red" />
              <span>K11 & ACE Certified Trainers</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-burn-red" />
              <span>Free Parking & Luxury Steam</span>
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrialModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-gradient hover:opacity-95 text-white font-extrabold text-sm md:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(255,42,42,0.6)] hover:shadow-[0_0_40px_rgba(255,42,42,0.9)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Flame className="w-5 h-5 fill-white group-hover:animate-bounce" />
              <span>Book A Free Trial Pass</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-burn-red text-white font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Explore Membership</span>
            </a>

            <button
              onClick={onReplayIntro}
              className="w-full sm:w-auto px-5 py-4 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white text-xs md:text-sm font-semibold tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-burn-red fill-burn-red" />
              <span>Brand Video Intro</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Featured Pillars Strip (Directly adapting ET-Fitness-WordPress-Theme.jpg 4 bottom columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fourPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900/80 border border-neutral-800/80 p-5 transition-all duration-300 hover:border-burn-red/70 hover:shadow-[0_0_25px_rgba(255,42,42,0.25)] flex flex-col justify-between"
            >
              {/* Background preview image behind card */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-35 transition-opacity duration-300">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-burn-red tracking-widest">
                    {pillar.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-burn-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-base font-extrabold uppercase font-heading text-white group-hover:text-burn-red transition-colors tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="relative z-10 mt-4 pt-3 border-t border-neutral-800/80">
                <a
                  href="#programs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-burn-red transition-colors"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
