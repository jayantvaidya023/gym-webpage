import React, { useState } from 'react';
import { Check, X, Flame, ShieldAlert, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { pricingPlans, gymInfo } from '../data/gymData';

export default function PricingPlans({ onSelectPlan }) {
  return (
    <section id="pricing" className="relative py-24 bg-[#0d0d0d] border-t border-neutral-900 overflow-hidden">
      {/* Background glow behind popular card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-burn-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>TRANSPARENT MEMBERSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            MEMBERSHIP TIERS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              VALUE PACKAGES
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Select the commitment that matches your physique goals. All passes include full access to our 15,000+ sq.ft equipment floor, locker rooms, steam, and parking.
          </p>

          {/* Editable Placeholder Notice */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Notice: Membership rates below are customizable placeholder estimates. Inquire at reception for current seasonal discounts.</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#1c1c1c] to-[#121212] border-2 border-burn-red shadow-[0_0_35px_rgba(255,42,42,0.35)] scale-105 z-20'
                  : 'bg-[#141414] border border-neutral-800/80 hover:border-neutral-700'
              }`}
            >
              {/* Popular Ribbon */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 via-burn-red to-orange-500 text-white text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-4">
                  {!plan.isPopular && (
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-black uppercase font-heading text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-neutral-800/80 my-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black font-heading text-white">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">
                    {plan.billingCycle}
                  </span>
                  <div className="mt-1.5">
                    <span className="text-[10px] font-mono text-amber-400/80 uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded">
                      [Placeholder Rate]
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Included Benefits:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-burn-red shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-2 border-t border-neutral-800/50 space-y-1.5">
                      {plan.notIncluded.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-500">
                          <X className="w-3.5 h-3.5 text-neutral-600 shrink-0 mt-0.5" />
                          <span className="line-through">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-red-gradient text-white shadow-[0_0_20px_rgba(255,42,42,0.5)] hover:scale-105 active:scale-95'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80 hover:border-burn-red'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate & Student Plan Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold uppercase text-white">Student, Couple & Corporate Group Discounts</h4>
            <p className="text-xs text-neutral-400 mt-0.5">Special concession rates available for Tri-City college students and corporate packages.</p>
          </div>
          <a
            href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-burn-red" />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </section>
  );
}
