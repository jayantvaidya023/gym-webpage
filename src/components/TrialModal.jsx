import React, { useState, useEffect } from 'react';
import { X, Flame, CheckCircle2, Send, Phone, Clock, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { gymInfo } from '../data/gymData';

export default function TrialModal({ isOpen, onClose, initialProgram, onShowToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(initialProgram || 'General Strength Floor');
  const [slot, setSlot] = useState('Evening (5:00 PM - 10:00 PM)');
  const [notes, setNotes] = useState('');
  const [sendWhatsApp, setSendWhatsApp] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProgram) {
      setProgram(initialProgram);
    }
  }, [initialProgram]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      if (onShowToast) onShowToast("Please provide your name and phone number.", "error");
      return;
    }

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
    if (onShowToast) {
      onShowToast("Free Trial Pass confirmed! We look forward to seeing you.", "success");
    }

    if (sendWhatsApp) {
      const waText = `Hi Burn Gym Mohali Phase 9! I reserved a Free 1-Day Trial Pass:%0A- Name: ${name}%0A- Phone: ${phone}%0A- Program: ${program}%0A- Preferred Slot: ${slot}%0A- Notes: ${notes || 'Ready to start'}`;
      const waUrl = `https://wa.me/${gymInfo.whatsappNumber}?text=${waText}`;
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 700);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-lg bg-[#141414] border border-neutral-700/80 rounded-3xl shadow-[0_0_50px_rgba(255,42,42,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-burn-red to-orange-500" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-burn-red/20 text-burn-red flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white font-heading">
                VIP Trial Pass Reserved!
              </h3>
              <p className="text-sm text-neutral-300 mt-2">
                Thank you <strong className="text-white">{name}</strong>! Your 1-day pass for <strong className="text-burn-red">{program}</strong> is active.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 text-left space-y-1">
                <p><strong className="text-white">Facility:</strong> Punjab Olympic Association, Phase 9 Mohali</p>
                <p><strong className="text-white">Time Slot:</strong> {slot}</p>
                <p><strong className="text-white">What to Bring:</strong> Clean gym shoes, workout wear & towel.</p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${gymInfo.whatsappNumber}?text=Hi%20Burn%20Gym%2C%20my%20trial%20pass%20is%20reserved%20under%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-red-gradient text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Verify Pass on WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 text-xs text-neutral-400 hover:text-white uppercase font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-[11px] font-bold uppercase tracking-wider text-burn-red mb-2">
                  <Flame className="w-3.5 h-3.5" />
                  <span>100% Free • No Obligation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-white">
                  Claim Free 1-Day Trial Pass
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Enjoy unlimited floor access, world-class Hammer Strength machines & a free InBody body composition scan at Phase 9 Mohali.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase text-neutral-400 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-burn-red"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-neutral-400 block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-burn-red"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase text-neutral-400 block mb-1">
                      Program / Interest
                    </label>
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-burn-red"
                    >
                      <option value="General Strength Floor">Strength & Free Weights</option>
                      <option value="Fat Loss & HIIT Sprint">Fat Loss & HIIT</option>
                      <option value="1-on-1 Personal Training">Personal Coaching</option>
                      <option value="Masala Bhangra & Zumba">Group Fitness / Bhangra</option>
                      <option value="Athletic Turf Track">Turf & Athletic Sprint</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-neutral-400 block mb-1">
                      Time Slot
                    </label>
                    <select
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-burn-red"
                    >
                      <option value="Morning (5:00 AM - 10:00 AM)">Morning (5am - 10am)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12pm - 4pm)</option>
                      <option value="Evening (5:00 PM - 10:00 PM)">Evening (5pm - 10pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-neutral-400 block mb-1">
                    Goals / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. want to check out squat racks, lose 8kg"
                    className="w-full px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-burn-red"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="modalSendWhatsApp"
                    checked={sendWhatsApp}
                    onChange={(e) => setSendWhatsApp(e.target.checked)}
                    className="w-4 h-4 accent-burn-red cursor-pointer rounded"
                  />
                  <label htmlFor="modalSendWhatsApp" className="text-xs text-neutral-300 cursor-pointer">
                    Sync pass details directly to my WhatsApp
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-gradient text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,42,42,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Get My Free Trial Pass Now</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
