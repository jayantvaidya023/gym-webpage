import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown,
  ChevronUp,
  Flame,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { gymInfo, faqs } from '../data/gymData';

export default function ContactLocation({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Membership',
    slot: 'Evening (5:00 PM - 10:00 PM)',
    message: '',
    sendToWhatsApp: true
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      if (onShowToast) onShowToast("Please enter your name and phone number.", "error");
      return;
    }

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // fallback if confetti fails
    }

    setFormSubmitted(true);
    if (onShowToast) {
      onShowToast("Trial Pass Request Submitted! Reception will contact you shortly.", "success");
    }

    // If WhatsApp option enabled, provide direct WhatsApp message
    if (formData.sendToWhatsApp) {
      const waText = `Hi Burn Gym Phase 9 Mohali! I submitted an enquiry on your website:%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Program: ${formData.service}%0A- Preferred Slot: ${formData.slot}%0A- Goals: ${formData.message || 'Free 1-Day Trial Pass'}`;
      const waUrl = `https://wa.me/${gymInfo.whatsappNumber}?text=${waText}`;
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 800);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#090909] border-t border-neutral-900">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-burn-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burn-red/10 border border-burn-red/20 text-xs font-bold uppercase tracking-widest text-burn-red mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT BURN GYM MOHALI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-white leading-tight">
            LOCATION, TIMINGS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-burn-red to-orange-500">
              DIRECT ENQUIRY
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Conveniently located at Punjab Olympic Association in Phase 9 Mohali, featuring wide on-site parking and seamless connectivity from Chandigarh and Panchkula.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Contact Cards & Live Map */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
                <div className="w-9 h-9 rounded-xl bg-burn-red/10 text-burn-red flex items-center justify-center mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Call Reception</h4>
                <a
                  href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-base font-extrabold text-white hover:text-burn-red transition-colors block mt-1"
                >
                  {gymInfo.phone}
                </a>
                <span className="text-xs text-neutral-500 block mt-0.5">Alt: {gymInfo.altPhone}</span>
              </div>

              {/* Operating Hours card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
                <div className="w-9 h-9 rounded-xl bg-burn-red/10 text-burn-red flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Operating Hours</h4>
                <p className="text-xs font-bold text-white mt-1">
                  Mon – Sat: 5:00 AM – 11:00 PM
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Sunday: 7:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-burn-red/10 text-burn-red flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Gym Address (Phase 9)</h4>
                  <p className="text-sm font-extrabold text-white mt-1">
                    {gymInfo.address.line1}
                  </p>
                  <p className="text-xs text-neutral-300">
                    {gymInfo.address.line2}, {gymInfo.address.area}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {gymInfo.address.city}, {gymInfo.address.state} - {gymInfo.address.pincode}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <a
                  href={gymInfo.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-burn-red hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(gymInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-neutral-800 h-64 sm:h-72 relative">
              <iframe
                title="Burn Gym Mohali Map"
                src="https://maps.google.com/maps?q=Burn%20Gym%20Mohali%20Punjab%20Olympic%20Association&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 px-3 py-1 bg-black/85 backdrop-blur-md rounded-md text-[11px] text-neutral-300 border border-neutral-800">
                Opp. House No. 714, Backside Sports Complex, Phase 9
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking / Enquiry Form */}
          <div className="lg:col-span-6 bg-[#141414] border border-neutral-800 rounded-3xl p-6 sm:p-8">
            <div className="mb-6 pb-4 border-b border-neutral-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-burn-red">
                  ONLINE TRIAL DESK
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  Instant Confirmation
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-white mt-1">
                Book A Free 1-Day Trial Pass
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Fill out the details below. Our desk will confirm your slot within 15 minutes.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-neutral-900/80 rounded-2xl border border-burn-red/40 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-burn-red/20 text-burn-red flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black uppercase text-white font-heading">
                  Trial Pass Reserved!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your pass for <strong className="text-burn-red">{formData.service}</strong> has been logged.
                </p>
                <p className="text-xs text-neutral-400 mt-2">
                  Show your phone number <strong className="text-white">{formData.phone}</strong> at the Phase 9 reception counter.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`https://wa.me/${gymInfo.whatsappNumber}?text=Hi%20Burn%20Gym%2C%20I%20just%20submitted%20my%20trial%20pass%20request%20for%20${encodeURIComponent(formData.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-red-gradient text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Confirm on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Amanpreet Singh"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-burn-red transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-burn-red transition-colors"
                  />
                </div>

                {/* Preferred Service / Discipline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Interested Program
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-burn-red"
                    >
                      <option value="General Membership">General Strength Floor</option>
                      <option value="Strength & Muscle Building">Strength & Hypertrophy</option>
                      <option value="Fat Loss & HIIT">Fat Loss & HIIT Sprint</option>
                      <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                      <option value="Group Classes / Bhangra">Masala Bhangra / Zumba</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Preferred Timing Slot
                    </label>
                    <select
                      name="slot"
                      value={formData.slot}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs focus:outline-none focus:border-burn-red"
                    >
                      <option value="Morning (5:00 AM - 10:00 AM)">Morning (5:00 AM - 10:00 AM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (5:00 PM - 10:00 PM)">Evening (5:00 PM - 10:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Fitness Goals or Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you want to achieve (e.g. lose 10kg, build chest, rehab shoulder)..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-burn-red transition-colors resize-none"
                  />
                </div>

                {/* WhatsApp Auto-Sync Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="sendToWhatsApp"
                    name="sendToWhatsApp"
                    checked={formData.sendToWhatsApp}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-burn-red cursor-pointer rounded"
                  />
                  <label htmlFor="sendToWhatsApp" className="text-xs text-neutral-300 cursor-pointer">
                    Also open WhatsApp to instantly confirm pass with front desk
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-red-gradient text-white font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(255,42,42,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Reserve Free 1-Day Trial Pass</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mohali FAQ Accordion */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-neutral-800">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-burn-red">
              HAVE QUESTIONS?
            </span>
            <h3 className="text-2xl font-black uppercase font-heading text-white mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-burn-red transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-burn-red shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0 ml-2" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/60 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
