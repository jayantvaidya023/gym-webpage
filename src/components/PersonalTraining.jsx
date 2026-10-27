import React from 'react';
import { 
  Dumbbell, 
  Activity, 
  Target, 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Quote
} from 'lucide-react';
import { trainers } from '../data/gymData';

export default function PersonalTraining({ onOpenTrialModal }) {
  const coachingPillars = [
    {
      step: "01",
      title: "Biomechanical Assessment",
      desc: "Comprehensive movement screen analyzing hip mobility, spine mechanics, ankle dorsiflexion, and clinical InBody body fat scans."
    },
    {
      step: "02",
      title: "Periodized Programming",
      desc: "Scientific workout splits cycling hypertrophy, strength peaks, and active deload phases custom-built around your personal schedule."
    },
    {
      step: "03",
      title: "Macro & Nutrition Blueprint",
      desc: "Tailored daily caloric targets, lean protein formulas, and sustainable meal timing that accommodates real-world social lifestyles."
    },
    {
      step: "04",
      title: "Daily Accountability",
      desc: "Direct WhatsApp support, weekly weigh-in assessments, load progression logs, and mindset coaching when motivation dips."
    }
  ];

  return (
    <section id="personal-training" className="relative py-24 bg-[#0d0d0d] border-t border-neutral-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-burn-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>ELITE 1-ON-1 COACHING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            MASTER PERSONAL COACHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              WHERE HUMAN EXPERTISE LEADS
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Technology and data support our trainers—they never replace the human intuition, real-time posture adjustments, and relentless motivation of a seasoned coach.
          </p>
        </div>

        {/* Philosophy Callout Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-[#181818] to-neutral-900 border border-neutral-800 mb-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-glow opacity-30 pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-burn-red font-bold">
              THE BURN GYM COACHING MANIFESTO
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white mt-1 mb-3">
              "Apps don't correct your spine angle. Certified Coaches do."
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Every body possesses unique limb lengths, injury histories, and metabolic rates. At Burn Gym Phase 9, our trainers combine advanced biomechanics with psychological empathy. We track your progress with medical-grade InBody tech, but every rep in front of the mirror is guided by human mastery.
            </p>
          </div>
        </div>

        {/* 4 Steps of Burn Gym PT */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase font-heading text-white">
              The 4-Pillar Transformation Method
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coachingPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-burn-red/50 transition-all duration-300 relative group"
              >
                <span className="text-2xl font-black font-heading text-burn-red opacity-80 mb-3 block">
                  {item.step}
                </span>
                <h4 className="text-base font-extrabold uppercase text-white mb-2 group-hover:text-burn-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Master Coaches */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-burn-red">
                CREDENTIALED PROFESSIONALS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-white mt-1">
                Meet Our Certified Master Trainers
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-2 md:mt-0">
              Holding international certifications from CSCS, ACE, ACSM, and K11 with combined decades of real athletic achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-[#141414] border border-neutral-800/80 hover:border-burn-red/60 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                    
                    {/* Experience Tag */}
                    <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 text-[11px] font-bold text-white">
                      {trainer.experience}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <h4 className="text-lg font-black uppercase font-heading text-white group-hover:text-burn-red transition-colors">
                      {trainer.name}
                    </h4>
                    <p className="text-xs font-semibold text-burn-red mt-0.5 mb-2">
                      {trainer.role}
                    </p>
                    <p className="text-[11px] text-neutral-400 font-mono mb-3">
                      <span className="text-neutral-500 font-bold">Certs:</span> {trainer.certifications}
                    </p>
                    <p className="text-xs text-neutral-300 mb-4">
                      <span className="text-neutral-400 font-medium">Specialty:</span> {trainer.specialty}
                    </p>
                    
                    {/* Trainer Quote */}
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800/80 text-[11px] italic text-neutral-400 flex items-start gap-2">
                      <Quote className="w-3.5 h-3.5 text-burn-red shrink-0 mt-0.5" />
                      <span>"{trainer.quote}"</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenTrialModal}
                    className="w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-burn-red text-white border border-neutral-800 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Consult Coach</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Banner */}
        <div className="text-center pt-8">
          <button
            onClick={onOpenTrialModal}
            className="px-8 py-4 rounded-xl bg-red-gradient text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <Dumbbell className="w-4 h-4" />
            <span>Book A Free 1-on-1 PT Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
