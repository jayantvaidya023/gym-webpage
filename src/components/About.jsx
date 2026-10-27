import React from 'react';
import { 
  Dumbbell, 
  Activity, 
  Flame, 
  Users, 
  Sparkles, 
  Car, 
  ShieldCheck, 
  Coffee, 
  Clock, 
  Check, 
  ArrowRight,
  Award
} from 'lucide-react';
import { gymInfo, gymAmenities } from '../data/gymData';

export default function About({ onOpenTrialModal }) {
  const iconMap = {
    Dumbbell: Dumbbell,
    Activity: Activity,
    Flame: Flame,
    Users: Users,
    Sparkles: Sparkles,
    Car: Car,
    ShieldCheck: ShieldCheck,
    Coffee: Coffee,
  };

  return (
    <section id="about" className="relative py-24 bg-[#0c0c0c] border-t border-neutral-900 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-burn-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-burn-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>MOHALI'S FITNESS POWERHOUSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            BUILT FOR RELENTLESS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              STRENGTH & TRANSFORMATION
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            Situated inside the prestigious Punjab Olympic Association Complex in Phase 9, Burn Gym Mohali was engineered to provide athletes, beginners, and fitness enthusiasts with the gold standard of biomechanical training.
          </p>
        </div>

        {/* 2-Column Story & Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-white tracking-wide">
              Where Science Meets Iron <br />
              <span className="text-burn-red">In The Heart of Mohali</span>
            </h3>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              At Burn Gym, we reject fitness fads and temporary quick-fixes. Our training philosophy rests on progressive overload, precise movement biomechanics, and sustainable metabolic nutrition. 
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Spanning across 15,000+ square feet of air-conditioned floor space, our facility features official Hammer Strength equipment, calibrated Olympic weight plates, rubberized power lifting platforms, and dedicated turf sprinting tracks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="p-2 rounded-lg bg-burn-red/10 text-burn-red">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white">Full 15,000 Sq.Ft Floor</h4>
                  <p className="text-xs text-neutral-400">Zero wait times during peak hours with abundant racks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="p-2 rounded-lg bg-burn-red/10 text-burn-red">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white">Clinical InBody Diagnostics</h4>
                  <p className="text-xs text-neutral-400">Accurate skeletal muscle mass and visceral fat analysis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-burn-card border border-neutral-800">
                <div className="p-2 rounded-lg bg-burn-red/10 text-burn-red">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white">5:00 AM Early Open</h4>
                  <p className="text-xs text-neutral-400">Train before work or late into the night until 11:00 PM.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-burn-card border border-neutral-800">
                <div className="p-2 rounded-lg bg-burn-red/10 text-burn-red">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white">Dedicated Parking Lot</h4>
                  <p className="text-xs text-neutral-400">Free, spacious, and secure on-site vehicle parking.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenTrialModal}
                className="px-6 py-3.5 rounded-xl bg-burn-red hover:bg-burn-red-hover text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,42,42,0.4)] flex items-center gap-2"
              >
                <span>Claim Free 1-Day Trial Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Mohali Map & Directions
              </a>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                alt="Burn Gym Interior"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-burn-red font-bold">
                    OFFICIAL CLUB LOCATION
                  </span>
                  <h4 className="text-sm font-extrabold text-white uppercase">
                    Punjab Olympic Association Building
                  </h4>
                  <p className="text-xs text-neutral-400">Phase 9, Mohali, Punjab</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 justify-end">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Daily
                  </span>
                  <span className="text-[11px] text-neutral-400">5am - 11pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Numbers Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 mb-20">
          {gymInfo.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 border-r last:border-r-0 border-neutral-800/80">
              <div className="text-3xl sm:text-5xl font-black font-heading text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 8 Amenities Grid */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-extrabold uppercase font-heading text-white tracking-wide">
            World-Class Amenities & Facilities
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Every amenity crafted to optimize your workout performance, hygiene, and recovery.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {gymAmenities.map((amenity, idx) => {
            const Icon = iconMap[amenity.icon] || Dumbbell;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-burn-red/50 hover:bg-neutral-900 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-burn-red/10 border border-burn-red/20 flex items-center justify-center text-burn-red group-hover:scale-110 group-hover:bg-burn-red group-hover:text-white transition-all mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase text-white group-hover:text-burn-red transition-colors mb-1">
                  {amenity.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
