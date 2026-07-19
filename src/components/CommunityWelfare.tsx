import React from 'react';
import { Heart, Landmark, Globe, HandHelping, Users, ShieldAlert, BookHeart, Baby } from 'lucide-react';

export default function CommunityWelfare() {
  const activities = [
    {
      title: "Psoriasis & Vitiligo Support",
      description: "Organized public awareness campaigns to fight myths and social taboos around skin disorders like Vitiligo & Psoriasis, fostering clinical understanding.",
      icon: Heart
    },
    {
      title: "Rural Health Camps",
      description: "Conducted extensive free medical check-ups, diagnostic setups, and consultations in remote, low-resource villages across Puducherry and Kolar.",
      icon: Landmark
    },
    {
      title: "COVID-19 Field Surveys",
      description: "Volunteered in village-level medical surveys under the Government of India during peak lockdowns, ensuring direct monitoring and critical care referral.",
      icon: ShieldAlert
    },
    {
      title: "Infection Hygiene Campaigns",
      description: "Exhibited diagnostic guidelines and distributed educational pamphlets on Dermatophytosis (fungal infection) and scabies to rural OPD patient groups.",
      icon: Globe
    },
    {
      title: "HIV/AIDS & STD Counselling",
      description: "Provided compassionate clinical counselling, mental wellness assistance, and preventive guidance for patients and families affected by STDs.",
      icon: HandHelping
    },
    {
      title: "Maternal Skin Wellness",
      description: "Managed complex pregnancy-induced dermatosis in partnership with senior obstetricians, protecting maternal and child dermatological health.",
      icon: Baby
    }
  ];

  return (
    <section id="community" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Visual divider design */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-[#8c1d5c]/5 text-[#8c1d5c] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <BookHeart className="w-3.5 h-3.5" />
            <span>Social Welfare & Care</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-medium">
            Community & Outreach Initiatives
          </h2>
          <div className="w-16 h-1 bg-[#8c1d5c] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm text-gray-500 font-sans max-w-xl mx-auto">
            Dermatology goes beyond the clinic walls. Dr. Aishwarya Devaraj actively volunteers her expertise to elevate public health, combat taboos, and deliver care to underserved societies.
          </p>
        </div>

        {/* Welfare grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/40 hover:bg-white border border-slate-100 hover:border-rose-100/60 p-8 rounded-3xl transition-all duration-300 hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#8c1d5c]/5 group-hover:bg-[#8c1d5c] text-[#8c1d5c] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8c1d5c] transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  {act.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16 bg-[#8c1d5c]/5 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-[#8c1d5c]/10">
          <p className="font-serif text-lg md:text-xl text-gray-800 italic leading-relaxed">
            "Skin health is a basic human right. Promoting clinical education, eliminating disease stigmata in remote communities, and bringing modern medical relief to rural families is as vital to me as my daily clinical work."
          </p>
          <p className="text-xs font-bold text-[#8c1d5c] uppercase tracking-wider mt-4">
            — Dr. Aishwarya Devaraj, MD (Dermatology)
          </p>
        </div>

      </div>
    </section>
  );
}
