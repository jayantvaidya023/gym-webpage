import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, SkipForward, Play, ShieldAlert } from 'lucide-react';

export default function CinematicIntro({ onComplete }) {
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if user has reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      handleFinish();
      return;
    }

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay may be restricted if unmuted; keep muted
        video.muted = true;
        video.play().catch(() => setVideoError(true));
      });
    }

    // Safety timeout: auto advance after 9 seconds if video stalls
    const timeout = setTimeout(() => {
      handleFinish();
    }, 9000);

    return () => clearTimeout(timeout);
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const handleFinish = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/burn-gym-intro.mp4"
            poster="/burn-gym-poster.png"
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleFinish}
            onError={() => setVideoError(true)}
            className="w-full h-full object-contain max-w-5xl max-h-[85vh] drop-shadow-[0_0_40px_rgba(255,42,42,0.3)]"
          />
        ) : (
          /* Fallback static poster animation if video fails or format unsupported */
          <div className="flex flex-col items-center justify-center text-center p-6 animate-pulse-subtle">
            <img
              src="/burn-gym-logo.png"
              alt="BURN GYM"
              className="w-72 md:w-96 object-contain drop-shadow-[0_0_50px_rgba(255,42,42,0.6)]"
            />
            <p className="mt-6 text-sm tracking-[0.3em] uppercase text-burn-red font-semibold">
              Ignite Your Strength • Mohali Phase 9
            </p>
          </div>
        )}

        {/* Ambient Top Vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />
        
        {/* Ambient Bottom Vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        {/* Top Controls Bar */}
        <div className="absolute top-6 left-0 right-0 px-6 md:px-12 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-burn-red animate-ping" />
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold hidden sm:inline">
              BURN GYM • CINEMATIC EXPERIENCE
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-full bg-neutral-900/80 border border-neutral-700/80 text-white/80 hover:text-white hover:border-burn-red transition-all flex items-center gap-2 text-xs"
              title={isMuted ? "Enable sound" : "Mute sound"}
              aria-label="Toggle audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-burn-red" />}
              <span className="hidden md:inline">{isMuted ? 'Muted' : 'Sound On'}</span>
            </button>

            {/* Skip Intro Button */}
            <button
              onClick={handleFinish}
              className="px-5 py-2.5 rounded-full bg-burn-red hover:bg-burn-red-hover text-white text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,42,42,0.5)] hover:scale-105 active:scale-95"
            >
              <span>Skip Intro</span>
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 z-20">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
            <span className="tracking-widest uppercase text-[10px]">Loading Burn Gym Mohali</span>
            <span className="font-mono text-burn-red">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-burn-red to-orange-500 transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
