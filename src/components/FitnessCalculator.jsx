import React, { useState } from 'react';
import { Calculator, Flame, Dumbbell, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function FitnessCalculator({ onOpenTrialModal }) {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(26);
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(74);
  const [activity, setActivity] = useState(1.55); // Moderate (3-5 days/wk)
  const [goal, setGoal] = useState('fatloss'); // 'fatloss' | 'muscle' | 'maintain'

  // Calculations
  const heightM = heightCm / 100;
  const bmi = (weightKg / (heightM * heightM)).toFixed(1);

  let bmiCategory = 'Normal Athletic';
  let bmiColor = 'text-emerald-400';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = 'text-blue-400';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight / Heavy Muscle';
    bmiColor = 'text-yellow-400';
  } else if (bmi >= 30) {
    bmiCategory = 'Obese (High Visceral Fat)';
    bmiColor = 'text-red-400';
  }

  // Mifflin-St Jeor Equation
  const bmr = gender === 'male'
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  let proteinGrams = Math.round(weightKg * 2.0); // 2g per kg standard athletic intake

  if (goal === 'fatloss') {
    targetCalories = Math.round(tdee - 450);
    proteinGrams = Math.round(weightKg * 2.2); // Higher protein during cut to preserve lean mass
  } else if (goal === 'muscle') {
    targetCalories = Math.round(tdee + 350);
    proteinGrams = Math.round(weightKg * 2.0);
  }

  const shareText = `Hi Burn Gym Mohali! I used your website fitness calculator: My Weight is ${weightKg}kg, Height ${heightCm}cm, BMI is ${bmi} (${bmiCategory}). My daily calorie goal is ~${targetCalories} kcal with ${proteinGrams}g protein for ${goal === 'fatloss' ? 'Fat Loss' : goal === 'muscle' ? 'Muscle Gain' : 'Maintenance'}. I want to discuss a training plan!`;

  return (
    <section id="calculator" className="relative py-24 bg-[#090909] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE METABOLIC TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            CALCULATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              BMI & DAILY TARGET CALORIES
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Get instant scientific metrics for your body recomposition before you step foot onto the gym floor.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Inputs Card */}
          <div className="lg:col-span-7 bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-black uppercase font-heading text-white flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-burn-red" />
              <span>Input Your Biometrics</span>
            </h3>

            {/* Gender Toggle */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Biological Sex
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                    gender === 'male'
                      ? 'bg-burn-red text-white shadow-[0_0_15px_rgba(255,42,42,0.4)]'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                    gender === 'female'
                      ? 'bg-burn-red text-white shadow-[0_0_15px_rgba(255,42,42,0.4)]'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Weight & Height Sliders/Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-neutral-400">Weight (kg)</label>
                  <span className="text-base font-extrabold text-white font-mono">{weightKg} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-burn-red cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-neutral-400">Height (cm)</label>
                  <span className="text-base font-extrabold text-white font-mono">{heightCm} cm</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="215"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-burn-red cursor-pointer"
                />
              </div>
            </div>

            {/* Age & Activity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-neutral-400">Age (Years)</label>
                  <span className="text-base font-extrabold text-white font-mono">{age} yrs</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-burn-red cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <label className="text-xs font-bold uppercase text-neutral-400 block mb-2">Training Frequency</label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(Number(e.target.value))}
                  className="w-full bg-[#181818] border border-neutral-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-burn-red"
                >
                  <option value={1.2}>Sedentary (Desk Job, 0-1 days/wk)</option>
                  <option value={1.375}>Lightly Active (1-3 days/wk)</option>
                  <option value={1.55}>Moderately Active (3-5 days/wk)</option>
                  <option value={1.725}>Very Active (6-7 days hard training)</option>
                </select>
              </div>
            </div>

            {/* Transformation Goal */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Primary Goal
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setGoal('fatloss')}
                  className={`py-3 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all text-center ${
                    goal === 'fatloss'
                      ? 'bg-burn-red text-white shadow-md'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  🔥 Shred Fat
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('maintain')}
                  className={`py-3 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all text-center ${
                    goal === 'maintain'
                      ? 'bg-burn-red text-white shadow-md'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  ⚖️ Recomposition
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('muscle')}
                  className={`py-3 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all text-center ${
                    goal === 'muscle'
                      ? 'bg-burn-red text-white shadow-md'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  💪 Muscle Hypertrophy
                </button>
              </div>
            </div>
          </div>

          {/* Right Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-burn-red/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_35px_rgba(255,42,42,0.25)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-burn-red">
                DIAGNOSTIC TARGETS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Calculated BMI */}
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
              <span className="text-xs font-bold uppercase text-neutral-400">Body Mass Index (BMI)</span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl font-black font-heading text-white">{bmi}</span>
                <span className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded-full bg-neutral-800 ${bmiColor}`}>
                  {bmiCategory}
                </span>
              </div>
            </div>

            {/* Caloric & Protein Split */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <span className="text-[11px] font-bold uppercase text-neutral-400">Daily Calorie Target</span>
                <div className="mt-1">
                  <span className="text-3xl font-black font-heading text-burn-red">{targetCalories}</span>
                  <span className="text-xs text-neutral-400 ml-1">kcal/day</span>
                </div>
                <span className="text-[10px] text-neutral-500 block mt-1">
                  {goal === 'fatloss' ? '(-450 deficit)' : goal === 'muscle' ? '(+350 surplus)' : '(Maintenance)'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                <span className="text-[11px] font-bold uppercase text-neutral-400">Daily Protein Target</span>
                <div className="mt-1">
                  <span className="text-3xl font-black font-heading text-white">{proteinGrams}</span>
                  <span className="text-xs text-neutral-400 ml-1">g/day</span>
                </div>
                <span className="text-[10px] text-neutral-500 block mt-1">
                  Athletic preservation
                </span>
              </div>
            </div>

            {/* Expert Insight */}
            <div className="p-4 rounded-xl bg-burn-red/10 border border-burn-red/20 text-xs text-neutral-300 space-y-1">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-burn-red" />
                Coach Note:
              </p>
              <p className="leading-relaxed text-neutral-400">
                BMI alone does not distinguish skeletal muscle from adipose tissue. Bring these target metrics to Burn Gym Phase 9 for a clinical <strong>InBody Composition Scan</strong>.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-red-gradient text-white font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,42,42,0.4)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Send My Target Numbers To Coach (WhatsApp)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenTrialModal}
                className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Book Free Trial & InBody Scan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
