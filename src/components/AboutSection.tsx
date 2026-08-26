import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Award, Sparkles, BookOpen, HeartPulse } from 'lucide-react';
import { CLINIC_INFO, EDUCATION_MILESTONES, EXPERIENCES } from '../data';

interface AboutSectionProps {
  doctorPortraitPath: string;
}

export default function AboutSection({ doctorPortraitPath }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const skills = [
    "Clinical dermatology",
    "Diseases in the skin of colour",
    "Anti-aging treatments",
    "Acne & scar treatments",
    "Chemical resurfacing / peeling",
    "Holistic skin & hair wellness"
  ];

  const languages = ["English", "Kannada", "Hindi", "Tamil", "Telugu"];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-rose-50 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-medium">Dr. Aishwarya Devaraj</h2>
          <div className="w-16 h-1 bg-[#8c1d5c] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-base text-gray-500 font-sans">
            Founder & Lead Dermatologist at Auraederm Skin Solutions. Dedicated to customized, science-backed skin, hair, and cosmetic therapies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Image & Highlight Stats (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-100 flex items-center justify-center">
              <img
                src={doctorPortraitPath}
                alt="Dr. Aishwarya Devaraj Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif text-xl font-bold drop-shadow">Dr. Aishwarya Devaraj</p>
                <p className="text-xs text-rose-200 uppercase tracking-wide font-medium drop-shadow">MBBS, MD, FRGUHS</p>
              </div>
            </div>

            {/* Micro badges for credibility */}
            <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-sm">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow transition-shadow">
                <Award className="w-6 h-6 text-[#8c1d5c] mx-auto mb-2" />
                <p className="text-xl font-bold text-gray-900 font-serif">MD</p>
                <p className="text-xs text-gray-500 font-medium font-sans">Dermatology Specialist</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow transition-shadow">
                <Sparkles className="w-6 h-6 text-[#8c1d5c] mx-auto mb-2" />
                <p className="text-xl font-bold text-gray-900 font-serif">FRGUHS</p>
                <p className="text-xs text-gray-500 font-medium font-sans">Aesthetic Fellow</p>
              </div>
            </div>
          </div>

          {/* Column 2: Doctor Profile & Interactive Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-gray-900 font-medium flex items-center gap-2">
                <HeartPulse className="w-6 h-6 text-[#8c1d5c]" /> Professional Profile
              </h3>
              <p className="mt-4 text-base text-gray-600 font-sans leading-relaxed">
                A humble and worthwhile clinical and aesthetic dermatologist, Dr. Aishwarya Devaraj has a roaring history of happy patients. She has always been giving her best in deciding what’s ideal for the patients by patiently listening and diligently curating the treatment options.
              </p>
              <p className="mt-3 text-base text-gray-600 font-sans leading-relaxed">
                She is soft-spoken and calm whilst being sharp and bold. Dr. Aishwarya cares with all her heart and believes in gaining extensive hands-on experience with state-of-the-art clinical procedures and devices, making her a trusted figure in the modern dermatology fraternity.
              </p>
            </div>

            {/* Core Skills & Languages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
              <div>
                <h4 className="font-semibold text-sm text-gray-800 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#8c1d5c]" /> Core Expertise
                </h4>
                <ul className="space-y-2">
                  {skills.map((skill, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8c1d5c]"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-gray-800 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#8c1d5c]" /> Languages Spoken
                </h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-full font-medium shadow-sm font-sans"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <h4 className="font-semibold text-sm text-gray-800 uppercase tracking-wide mb-1">Clinic Base</h4>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8c1d5c] hover:underline font-medium font-sans inline-flex items-center gap-1"
                  >
                    {CLINIC_INFO.address}
                  </a>
                </div>
              </div>
            </div>

            {/* Educational / Experience Interactive Tabs */}
            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-all ${
                    activeTab === 'education'
                      ? 'bg-rose-50/50 text-[#8c1d5c] border-b-2 border-[#8c1d5c]'
                      : 'text-gray-500 hover:text-gray-900 bg-white'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-all ${
                    activeTab === 'experience'
                      ? 'bg-rose-50/50 text-[#8c1d5c] border-b-2 border-[#8c1d5c]'
                      : 'text-gray-500 hover:text-gray-900 bg-white'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Clinical Experience</span>
                </button>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'education' ? (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      {EDUCATION_MILESTONES.map((edu, idx) => (
                        <div key={idx} className="relative pl-6 border-l-2 border-gray-100 last:pb-0 pb-6">
                          {/* Circle dot on vertical line */}
                          <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#8c1d5c]"></div>
                          <span className="text-xs font-semibold text-[#8c1d5c] font-sans bg-rose-50 px-2.5 py-1 rounded-full">
                            {edu.period}
                          </span>
                          <h4 className="font-serif text-lg font-semibold text-gray-900 mt-2">{edu.degree}</h4>
                          <p className="text-xs text-gray-500 font-medium font-sans">{edu.institution}</p>
                          <p className="text-sm text-gray-600 font-sans mt-2 leading-relaxed">{edu.description}</p>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      {EXPERIENCES.map((exp, idx) => (
                        <div key={idx} className="relative pl-6 border-l-2 border-gray-100 last:pb-0 pb-6">
                          {/* Circle dot on vertical line */}
                          <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#8c1d5c]"></div>
                          <span className="text-xs font-semibold text-[#8c1d5c] font-sans bg-rose-50 px-2.5 py-1 rounded-full">
                            {exp.period}
                          </span>
                          <h4 className="font-serif text-lg font-semibold text-gray-900 mt-2">{exp.role}</h4>
                          <p className="text-xs text-gray-500 font-medium font-sans">{exp.organization}</p>
                          <p className="text-sm text-gray-600 font-sans mt-2 leading-relaxed">{exp.description}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
