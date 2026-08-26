import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ArrowRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import hairScalpImage from '../assets/images/regenerated_image_1786512370228.png';
// Import local clinical background & skincare treatment assets
import clinicHeroPath from '../assets/images/clinic_hero_1782883016455.jpg';
import skincareTreatmentPath from '../assets/images/skincare_treatment_1782883034252.jpg';
import aurabg1 from '../assets/images/WhatsApp Image 2026-08-12 at 11.20.29 AM.jpeg';
import aurabg2 from '../assets/images/aurabg2.jpeg';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const HERO_SLIDES = [
    {
      condition: 'Acne & Acne Scars',
      description: 'Consultation & targeted medical therapy for clearing stubborn acne, blackheads, and reducing post-acne scarring.',
      bgImage: clinicHeroPath,
      frontImage: 'https://images.unsplash.com/photo-1785861485926-93a13556d656?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      condition: 'Aesthetic Skin Rejuvenation',
      description: 'Advanced medical facials, customized chemical peels, and laser toning to restore your natural glow and even out pigmentation.',
      bgImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
      frontImage: skincareTreatmentPath
    },
    {
      condition: 'Hair Density & Scalp Therapy',
      description: 'Scientifically backed therapies including growth factor micro-infusions and PRP scalp treatments to address thinning hair and hair loss.',
      bgImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
      frontImage: hairScalpImage
    },
    {
      condition: 'Pediatric & Geriatric Skin Care',
      description: 'Gentle, evidence-based dermatological care for delicate infant & child skin conditions as well as specialized age-related skin disorders in seniors.',
      bgImage: aurabg1,
      frontImage: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800'
    },
    {
      condition: 'Pregnancy-Induced Dermatoses',
      description: 'Safe, specialized care for maternal skin changes during pregnancy and postpartum, including PUPPP, gestational rashes, and melasma.',
      bgImage: aurabg2,
      frontImage: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  // Self-resetting autoplay loop: clear and reschedule on every index transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex, HERO_SLIDES.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const scrollToLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    const locationElement = document.getElementById('clinic-map');
    if (locationElement) {
      locationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen bg-slate-50 overflow-hidden flex items-center justify-center">
      {/* 1. Live Background with high-performance Framer Motion Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentIndex].bgImage})` }}
          />
        </AnimatePresence>
        {/* Semi-transparent overlay mask to make live background beautiful & visible while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/45 to-white/10 backdrop-blur-[1.5px]" />
      </div>

      {/* 2. Interactive Hero Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 xl:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 min-h-[90vh]">
        
        {/* Left Side Content Card (opaque white for pristine readability) */}
        <div className="lg:col-span-7 flex justify-center lg:justify-start relative">
          {/* Mobile slide navigation arrows on both sides of the card */}
          <button
            onClick={handlePrev}
            className="lg:hidden absolute -left-2 sm:-left-4 top-[calc(50%+16px)] -translate-y-1/2 mt-[15px] z-30 w-10 h-10 rounded-full border border-gray-200/90 bg-white/95 backdrop-blur-md flex items-center justify-center p-0 text-gray-700 hover:text-[#8c1d5c] active:scale-90 shadow-md transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
          </button>
          <button
            onClick={handleNext}
            className="lg:hidden absolute -right-2 sm:-right-4 top-[calc(50%+16px)] -translate-y-1/2 mt-[15px] z-30 w-10 h-10 rounded-full border border-gray-200/90 bg-white/95 backdrop-blur-md flex items-center justify-center p-0 text-gray-700 hover:text-[#8c1d5c] active:scale-90 shadow-md transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 translate-x-0.5" />
          </button>

          <div className="bg-white/95 backdrop-blur-md border border-white/85 shadow-2xl rounded-3xl p-6 sm:p-10 lg:p-12 max-w-2xl w-full flex flex-col relative">
            {/* Clinic Motto Badge - Static & always visible */}
            <div className="inline-flex self-start items-center bg-[#8c1d5c]/10 text-[#8c1d5c] border border-[#8c1d5c]/15 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span>For every age, for every hue, for every YOU!</span>
            </div>

            {/* Animating Text Area with a stable min-height to prevent layout/height shift */}
            <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[140px] flex flex-col justify-center relative overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentIndex}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full"
                >
                  {/* Main Slide Title */}
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-[1.2] mb-4 font-bold">
                    {HERO_SLIDES[currentIndex].condition}
                  </h1>

                  {/* Description Text */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                    {HERO_SLIDES[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual CTAs - Static & always visible */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onBookClick();
                }}
                className="h-[52px] flex items-center justify-center gap-2 bg-[#8c1d5c] hover:bg-[#73164b] text-white px-6 sm:px-8 rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Consultation</span>
              </button>
              <button
                onClick={scrollToLocation}
                className="h-[52px] flex items-center justify-center gap-2 bg-[#8c1d5c]/5 hover:bg-[#8c1d5c]/10 text-[#8c1d5c] border border-[#8c1d5c]/15 px-6 sm:px-8 rounded-full font-semibold text-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Our Location</span>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-[52px] flex items-center justify-center gap-2 text-gray-700 hover:text-[#8c1d5c] bg-white border border-gray-200 hover:border-[#8c1d5c]/30 px-6 sm:px-8 rounded-full font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#8c1d5c] shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Main Floating Image Display */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Front Image container with shadow & sleek border */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${currentIndex}`}
                  src={HERO_SLIDES[currentIndex].frontImage}
                  alt={HERO_SLIDES[currentIndex].condition}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Embedded custom dot navigation indicators at the bottom portion of front image */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-gray-100/50 z-20">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i
                      ? 'w-6 bg-[#8c1d5c]'
                      : 'w-2 bg-[#8c1d5c]/30 hover:bg-[#8c1d5c]/60'
                  }`}
                  aria-label={`Go to treatment slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sleek Absolute Arrows on Left & Right Borders of the Hero Section */}
      <button
        onClick={handlePrev}
        className="hidden lg:flex absolute lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-100 bg-white/95 backdrop-blur-md items-center justify-center text-gray-600 hover:text-[#8c1d5c] hover:border-[#8c1d5c]/30 hover:shadow-xl transition-all shadow-md cursor-pointer group"
        aria-label="Previous treatment"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={handleNext}
        className="hidden lg:flex absolute lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-100 bg-white/95 backdrop-blur-md items-center justify-center text-gray-600 hover:text-[#8c1d5c] hover:border-[#8c1d5c]/30 hover:shadow-xl transition-all shadow-md cursor-pointer group"
        aria-label="Next treatment"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>
    </section>
  );
}
