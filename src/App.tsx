import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CommunityWelfare from './components/CommunityWelfare';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { CLINIC_INFO } from './data';

// Import image assets directly so Vite compiles and resolves their correct public paths in preview and production
import doctorPortraitPath from './assets/images/doctor_portrait_1782883002577.jpg';
import skincareTreatmentPath from './assets/images/skincare_treatment_1782883034252.jpg';

const DOCTOR_PORTRAIT_PATH = doctorPortraitPath;
const TREATMENT_PATH = skincareTreatmentPath;

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | null>(null);

  const handleOpenBookingWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingGeneral = () => {
    setPreselectedService(null);
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800 scroll-smooth relative">
      {/* Sticky Top Navbar */}
      <Navbar
        onBookClick={handleOpenBookingGeneral}
        onViewAppointmentsClick={() => {}}
        hasAppointments={false}
      />

      {/* Main Page Sections */}
      <Hero onBookClick={handleOpenBookingGeneral} />
      
      <AboutSection doctorPortraitPath={DOCTOR_PORTRAIT_PATH} />
      
      <ServicesSection
        onBookService={handleOpenBookingWithService}
        skincareTreatmentPath={TREATMENT_PATH}
      />
      
      <CommunityWelfare />
      
      <ContactSection 
        preselectedService={preselectedService} 
        setPreselectedService={setPreselectedService} 
      />
      
      {/* Elegant Footer */}
      <Footer />

      {/* Floating Call Clinic Button for Mobile (hidden on desktop) */}
      <a
        href={`tel:${CLINIC_INFO.phone}`}
        className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#8c1d5c] hover:bg-[#73164b] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ boxShadow: '0 10px 25px -5px rgba(140, 29, 92, 0.4)' }}
        aria-label="Call Clinic"
      >
        <span className="absolute inset-0 rounded-full bg-[#8c1d5c]/40 animate-ping" style={{ animationDuration: '2s' }}></span>
        <Phone className="w-6 h-6 relative z-10" />
      </a>
    </div>
  );
}
