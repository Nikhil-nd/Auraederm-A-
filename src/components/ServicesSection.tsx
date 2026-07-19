import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, ArrowRight, Check, X, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
  skincareTreatmentPath: string;
}

export default function ServicesSection({ onBookService }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'clinical' | 'aesthetic' | 'hair'>('all');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    { id: 'all', name: 'All Treatments' },
    { id: 'clinical', name: 'Clinical Dermatology' },
    { id: 'aesthetic', name: 'Aesthetic & Cosmetic' },
    { id: 'hair', name: 'Hair & Scalp care' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const currentServices = filteredServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      {/* Visual backdrop */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#8c1d5c]/5 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-medium">Treatments & Specializations</h2>
          <div className="w-16 h-1 bg-[#8c1d5c] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-base text-gray-500 font-sans">
            Compassionate, world-class medical and aesthetic treatments tailored to enhance your natural skin health and hair density.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id as any);
                setExpandedServiceId(null); // Collapse open accordion when switching categories
                setCurrentPage(1); // Reset page on category change
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#8c1d5c] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid - Desktop/Tablet Only */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, idx) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group"
            >
              {/* Category tag */}
              <div className="p-6 pb-0 flex justify-between items-start">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  service.category === 'clinical' 
                    ? 'bg-blue-50 text-blue-700' 
                    : service.category === 'aesthetic'
                    ? 'bg-purple-50 text-purple-700'
                    : 'bg-amber-50 text-amber-700'
                }`}>
                  {service.category === 'clinical' ? 'Clinical' : service.category === 'aesthetic' ? 'Aesthetic' : 'Hair Health'}
                </span>
              </div>

              {/* Service content */}
              <div className="p-6 flex-grow">
                <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#8c1d5c] transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 font-sans mt-3 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action area */}
              <div className="p-6 pt-0 mt-auto border-t border-gray-50 bg-slate-50/30 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#8c1d5c] group-hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Learn More & FAQ <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => onBookService(service.name)}
                  className="bg-white hover:bg-[#8c1d5c] text-[#8c1d5c] hover:text-white border border-[#8c1d5c]/20 hover:border-transparent text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services List - Mobile Only (Optimized interactive accordion) */}
        <div className="block md:hidden space-y-4">
          {currentServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <div
                key={`mobile-${service.id}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50/20 active:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="space-y-1.5 flex-grow pr-2 min-w-0">
                    <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      service.category === 'clinical' 
                        ? 'bg-blue-50 text-blue-700' 
                        : service.category === 'aesthetic'
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {service.category === 'clinical' ? 'Clinical' : service.category === 'aesthetic' ? 'Aesthetic' : 'Hair Health'}
                    </span>
                    <h3 className="font-serif text-base font-bold text-gray-900 leading-tight">
                      {service.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#8c1d5c]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="border-t border-slate-50 bg-slate-50/10"
                    >
                      <div className="p-5 pt-4 space-y-4">
                        <p className="text-sm text-gray-600 font-sans leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center justify-between gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setSelectedService(service)}
                            className="text-xs font-semibold text-[#8c1d5c] hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            Details & FAQ <ArrowRight className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onBookService(service.name)}
                            className="bg-[#8c1d5c] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm cursor-pointer"
                          >
                            Book Session
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Previous
            </button>
            <div className="flex items-center gap-1 hidden sm:flex">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors cursor-pointer ${
                    currentPage === i + 1
                      ? 'bg-[#8c1d5c] text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="flex items-center sm:hidden text-xs font-semibold text-gray-600 px-2">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* SERVICE DETAIL MODAL OVERLAY */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 border border-gray-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 bg-slate-100 text-gray-500 hover:text-gray-800 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="p-8 pb-4 border-b border-gray-100">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  selectedService.category === 'clinical' 
                    ? 'bg-blue-50 text-blue-700' 
                    : selectedService.category === 'aesthetic'
                    ? 'bg-purple-50 text-purple-700'
                    : 'bg-amber-50 text-amber-700'
                }`}>
                  {selectedService.category === 'clinical' ? 'Clinical' : selectedService.category === 'aesthetic' ? 'Aesthetic' : 'Hair & Scalp'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mt-3">{selectedService.name}</h3>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-xs text-[#8c1d5c] uppercase tracking-wider font-sans">Overview</h4>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed mt-2">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-xs text-[#8c1d5c] uppercase tracking-wider font-sans mb-2.5">Key Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-sans">
                        <div className="mt-0.5 bg-emerald-50 text-emerald-600 p-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xs text-[#8c1d5c] uppercase tracking-wider font-sans flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#8c1d5c]" /> Frequently Asked Questions
                  </h4>
                  <div className="space-y-3.5 mt-3">
                    {selectedService.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100/50">
                        <p className="text-xs font-bold text-gray-900 font-sans">Q: {faq.question}</p>
                        <p className="text-xs text-gray-600 font-sans mt-1.5 leading-relaxed">A: {faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 pt-4 border-t border-gray-100 bg-slate-50/30 flex justify-between items-center">
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-semibold text-gray-500 hover:text-gray-800 cursor-pointer font-sans"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    onBookService(name);
                  }}
                  className="flex items-center gap-2 bg-[#8c1d5c] hover:bg-[#73164b] text-white text-xs font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer font-sans"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Treatment</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
