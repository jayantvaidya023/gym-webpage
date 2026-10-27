import React, { useState } from 'react';
import CinematicIntro from './components/CinematicIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import PersonalTraining from './components/PersonalTraining';
import TransformationGallery from './components/TransformationGallery';
import PricingPlans from './components/PricingPlans';
import FitnessCalculator from './components/FitnessCalculator';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';
import Toast from './components/Toast';
import { gymInfo } from './data/gymData';
import { MessageCircle, Phone, Flame } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [toast, setToast] = useState(null);

  const handleOpenTrialModal = (programName = '') => {
    setSelectedProgram(programName);
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  const handleShowToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white overflow-x-hidden relative selection:bg-burn-red selection:text-white">
      {/* Cinematic Logo Animation Intro */}
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Main Navigation */}
      <Navbar
        onOpenTrialModal={() => handleOpenTrialModal()}
        onReplayIntro={handleReplayIntro}
      />

      {/* Hero Section with 4 Featured Pillars */}
      <Hero
        onOpenTrialModal={() => handleOpenTrialModal()}
        onReplayIntro={handleReplayIntro}
      />

      {/* About Burn Gym & Amenities */}
      <About onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Training Programs */}
      <Programs onSelectProgram={(prog) => handleOpenTrialModal(prog)} />

      {/* Personal Training & Coaches */}
      <PersonalTraining onOpenTrialModal={() => handleOpenTrialModal('1-on-1 Personal Training')} />

      {/* Transformation & Facility Photo Gallery */}
      <TransformationGallery />

      {/* Membership Plans & Pricing */}
      <PricingPlans onSelectPlan={(plan) => handleOpenTrialModal(plan)} />

      {/* Interactive Athletic Tool: BMI & Macro Calculator */}
      <FitnessCalculator onOpenTrialModal={() => handleOpenTrialModal('Free InBody Assessment')} />

      {/* Member Testimonials & Ratings */}
      <Testimonials />

      {/* Call to Action Section */}
      <CTASection onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Contact, Timings, Interactive Map & Enquiry Form */}
      <ContactLocation onShowToast={handleShowToast} />

      {/* Footer */}
      <Footer onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Floating Quick Action Widget (WhatsApp & Call) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${gymInfo.whatsappNumber}?text=${encodeURIComponent(gymInfo.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          title="Chat with Burn Gym on WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            WhatsApp Desk
          </span>
        </a>

        <a
          href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`}
          className="p-3.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          title="Call Reception: 0172-5010106"
          aria-label="Call Reception"
        >
          <Phone className="w-5 h-5 text-burn-red" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            {gymInfo.phone}
          </span>
        </a>
      </div>

      {/* Free Trial Pass Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        initialProgram={selectedProgram}
        onShowToast={handleShowToast}
      />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={handleCloseToast} />
    </div>
  );
}
