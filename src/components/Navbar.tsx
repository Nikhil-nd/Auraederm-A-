import React, { useState, useEffect } from 'react';
import LogoImg from '../assets/images/MainLogo.png';
import { Menu, X, Phone, Calendar, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface NavbarProps {
  onBookClick: () => void;
  onViewAppointmentsClick?: () => void;
  hasAppointments?: boolean;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dr. Aishwarya', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLocationClick = () => {
    setIsMenuOpen(false);
    const element = document.getElementById('clinic-map') || document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Clinic Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}>
            <img src={LogoImg} alt="Auraederm" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 ml-auto mr-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-gray-600 hover:text-[#8c1d5c] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#8c1d5c] bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full transition-all"
            >
              <Phone className="w-4 h-4 text-[#8c1d5c]" />
              <span>Call Clinic</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#8c1d5c] hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide Drawer */}
      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#8c1d5c] hover:bg-[#8c1d5c]/5 rounded-xl transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col gap-2.5 px-4">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center gap-2 border border-gray-200 text-[#8c1d5c] font-semibold py-3 rounded-xl text-sm bg-rose-50/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
