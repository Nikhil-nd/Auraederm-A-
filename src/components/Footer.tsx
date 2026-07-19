import React from 'react';
import LogoImg from '../assets/images/MainLogo.png';
import { Award, ShieldCheck, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-900 text-white relative overflow-hidden">
      {/* Absolute top border with gradients */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#8c1d5c] via-rose-500 to-indigo-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Bio pane (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <img src={LogoImg} alt="Auraederm" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              State-of-the-art clinical & aesthetic dermatology services in Gurugram, spearheaded by Dr. Aishwarya Devaraj, MD in Dermatology. Combining scientific evidence with natural aesthetics.
            </p>
            
            {/* Accreditation details */}
            <div className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-2xl max-w-sm">
              <ShieldCheck className="w-8 h-8 text-rose-400 flex-shrink-0" />
              <div className="space-y-0.5">
                <p className="text-xs font-bold font-serif text-white">Board Certified Dermatologist</p>
                <p className="text-[10px] text-slate-400 font-sans leading-relaxed">MD Dermatology, Venereology & Leprosy Specialist</p>
              </div>
            </div>
          </div>

          {/* Contact details links (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-slate-200 uppercase">Clinic Desk</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-xs text-slate-400 font-sans">
                <MapPin className="w-4 h-4 text-[#8c1d5c] flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-sans">
                <Phone className="w-4 h-4 text-[#8c1d5c] flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white transition-colors">{CLINIC_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-sans">
                <Mail className="w-4 h-4 text-[#8c1d5c] flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors truncate">{CLINIC_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Short navigation links (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-slate-200 uppercase">Quick Access</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-sans">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About Dr. Aishwarya</a>
              <a href="#services" className="hover:text-white transition-colors">Treatments</a>
              <a href="#results" className="hover:text-white transition-colors">Results</a>
              <a href="#community" className="hover:text-white transition-colors">Outreach</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 my-10"></div>

        {/* Subfooter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-sans">
          <p>© {currentYear} Auraederm Skin Solutions. All rights reserved.</p>
          <div className="flex gap-1.5 items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Standard HIPAA-compliant clinical care regulations & patient safety protocols.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
