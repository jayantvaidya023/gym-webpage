import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Play, Clock, MapPin, Sparkles, Flame } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function Navbar({ onOpenTrialModal, onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Personal Training', href: '#personal-training' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Plans', href: '#pricing' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro banner for Mohali Phase 9 timing alert */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-[#0e0e0e] border-b border-neutral-800 text-[11px] text-neutral-400 font-medium tracking-wide z-40 relative">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <MapPin className="w-3 h-3 text-burn-red" />
            <span>Punjab Olympic Association, Phase 9, Mohali</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-burn-red" />
            <span>Mon–Sat: 5:00 AM – 11:00 PM | Sun: 7:00 AM – 7:00 PM</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-burn-red transition-colors"
          >
            <Phone className="w-3 h-3 text-burn-red" />
            <span>Reception: {gymInfo.phone}</span>
          </a>
          <button
            onClick={onReplayIntro}
            className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
            title="Replay Brand Intro Animation"
          >
            <Play className="w-3 h-3 text-burn-red fill-burn-red" />
            <span>Watch Intro</span>
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`fixed top-0 lg:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/burn-gym-logo.png"
              alt="BURN GYM"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,42,42,0.3)]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase font-bold tracking-widest text-neutral-300 hover:text-burn-red transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burn-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onReplayIntro}
              className="xl:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-burn-red transition-all"
              title="Watch Intro"
            >
              <Play className="w-4 h-4 text-burn-red" />
            </button>

            <a
              href={`https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(gymInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenTrialModal}
              className="relative px-5 py-2.5 rounded-lg bg-red-gradient hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(255,42,42,0.4)] hover:shadow-[0_0_25px_rgba(255,42,42,0.7)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Flame className="w-4 h-4 fill-white" />
              <span>Free Trial Pass</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTrialModal}
              className="px-3 py-1.5 rounded-md bg-burn-red text-white text-[11px] font-bold uppercase tracking-wider shadow-sm"
            >
              Trial Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-white hover:text-burn-red focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:hidden animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <img src="/burn-gym-logo.png" alt="BURN GYM" className="h-10 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base uppercase font-bold tracking-wider text-neutral-200 hover:text-burn-red transition-colors py-2 border-b border-neutral-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3.5 rounded-xl bg-red-gradient text-white font-extrabold uppercase text-center tracking-wider text-sm shadow-[0_0_20px_rgba(255,42,42,0.4)]"
            >
              Claim Free 1-Day Trial Pass
            </button>

            <a
              href={`https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(gymInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-center text-sm font-semibold text-white flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Chat on WhatsApp ({gymInfo.phone})
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="w-full py-2.5 text-center text-xs text-neutral-400 hover:text-white flex items-center justify-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-burn-red" />
              <span>Watch Logo Reveal Video</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
