import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp,
  Flame,
  MessageCircle
} from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function Footer({ onOpenTrialModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060606] border-t border-neutral-900 text-neutral-400 text-xs relative">
      {/* Top Banner Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-burn-red to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/burn-gym-logo.png"
                alt="BURN GYM"
                className="h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,42,42,0.3)]"
              />
            </a>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Mohali's premier 15,000+ sq.ft athletic powerhouse. Equipped with Hammer Strength biomechanics, certified master coaches, and a vibrant community dedicated to authentic transformation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={gymInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-pink-500 hover:border-pink-500 transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={gymInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-blue-500 hover:border-blue-500 transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a
                href={gymInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-red-500 hover:border-red-500 transition-all flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={gymInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-emerald-500 hover:border-emerald-500 transition-all flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-burn-red transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-burn-red transition-colors">Training Programs</a></li>
              <li><a href="#personal-training" className="hover:text-burn-red transition-colors">Personal Coaching</a></li>
              <li><a href="#gallery" className="hover:text-burn-red transition-colors">Photo Gallery</a></li>
              <li><a href="#pricing" className="hover:text-burn-red transition-colors">Membership Plans</a></li>
              <li><a href="#calculator" className="hover:text-burn-red transition-colors">Fitness Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-burn-red transition-colors">Reviews & Proof</a></li>
              <li><a href="#contact" className="hover:text-burn-red transition-colors">Gym Location</a></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Disciplines
            </h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-burn-red transition-colors">Strength & Hypertrophy</a></li>
              <li><a href="#programs" className="hover:text-burn-red transition-colors">Metabolic Shred & HIIT</a></li>
              <li><a href="#programs" className="hover:text-burn-red transition-colors">Athletic Turf Sprinting</a></li>
              <li><a href="#programs" className="hover:text-burn-red transition-colors">Masala Bhangra Studio</a></li>
              <li><a href="#programs" className="hover:text-burn-red transition-colors">Power Yoga & Mobility</a></li>
              <li><a href="#programs" className="hover:text-burn-red transition-colors">Boxing & Core Conditioning</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Mohali Phase 9 Desk
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-burn-red shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Punjab Olympic Association, Opp. House 714, Backside Sports Complex, Phase 9, Mohali 160062
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-burn-red shrink-0" />
                <a href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {gymInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Clock className="w-4 h-4 text-burn-red shrink-0" />
                <span>Mon-Sat: 5am - 11pm | Sun: 7am - 7pm</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTrialModal}
                className="w-full py-2.5 rounded-xl bg-red-gradient text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>Book 1-Day Trial Pass</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-500 text-center sm:text-left">
            © {new Date().getFullYear()} BURN GYM Mohali Phase 9. All rights reserved. Official brand identity & assets applied.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-burn-red transition-all text-xs"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-burn-red" />
          </button>
        </div>
      </div>
    </footer>
  );
}
