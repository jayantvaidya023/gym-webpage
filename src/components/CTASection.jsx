import React from 'react';
import { Flame, ArrowRight, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function CTASection({ onOpenTrialModal }) {
  return (
    <section className="relative py-20 bg-black overflow-hidden border-t border-neutral-900">
      {/* Dynamic Red Energy Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
          alt="Gym Action"
          className="w-full h-full object-cover filter brightness-[0.18] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-black/85 to-red-950/70" />
        <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pass Limit Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burn-red/20 border border-burn-red/40 text-xs font-bold uppercase tracking-widest text-white mb-6 backdrop-blur-md">
          <Clock className="w-3.5 h-3.5 text-burn-red" />
          <span>LIMITED COMPLIMENTARY TRIAL PASSES AVAILABLE TODAY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight uppercase text-white leading-tight">
          READY TO REDEFINE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-400 drop-shadow-[0_0_40px_rgba(255,42,42,0.7)]">
            YOUR PHYSICAL LIMITS?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Step into Burn Gym Mohali Phase 9. Test our Olympic lifting platforms, experience the electric atmosphere, and meet our master trainers with zero commitment.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-gradient text-white font-extrabold text-sm md:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(255,42,42,0.7)] hover:shadow-[0_0_45px_rgba(255,42,42,1)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Flame className="w-5 h-5 fill-white group-hover:animate-bounce" />
            <span>Claim Free 1-Day Trial Pass</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(gymInfo.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-sm md:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Direct WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-burn-red" /> No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-burn-red" /> 100% Free 1-Day Pass
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-burn-red" /> Free InBody Body Scan
          </span>
        </div>
      </div>
    </section>
  );
}
