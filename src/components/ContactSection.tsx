import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';

import { sendAppointmentRequest } from '../services/emailService';

interface ContactSectionProps {
  preselectedService?: string | null;
  setPreselectedService?: (service: string | null) => void;
}

export default function ContactSection({ preselectedService = null, setPreselectedService }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedServiceLocal] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation States
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    preferredDate?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [bookingDetails, setBookingDetails] = useState<{
    name: string;
    phone: string;
    email: string;
    service: string;
    date: string;
    time: string;
    message: string;
  } | null>(null);

  // Sync prop with local state
  useEffect(() => {
    if (preselectedService) {
      setSelectedServiceLocal(preselectedService);
    } else {
      setSelectedServiceLocal('');
    }
  }, [preselectedService]);

  const validateForm = () => {
    const tempErrors: typeof errors = {};
    let isValid = true;

    // Name Validation
    if (!name.trim()) {
      tempErrors.name = 'Full Name is required';
      isValid = false;
    } else if (name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Phone Validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;
    const digitCount = phone.replace(/\D/g, '').length;
    if (!phone.trim()) {
      tempErrors.phone = 'Phone Number is required';
      isValid = false;
    } else if (digitCount < 10) {
      tempErrors.phone = 'Phone number must be at least 10 digits';
      isValid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number (e.g., 9876543210)';
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      tempErrors.email = 'Email Address is required';
      isValid = false;
    } else if (!emailRegex.test(email.trim())) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message / Concern Validation
    if (!message.trim()) {
      tempErrors.message = 'Please share your concern or enquiry details';
      isValid = false;
    } else if (message.trim().length < 5) {
      tempErrors.message = 'Please provide a bit more detail (min 5 characters)';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    
    const details = {
      name,
      phone,
      email,
      service: selectedService || 'General Consultation / Enquiry',
      date: preferredDate || 'Flexible / Not selected',
      time: preferredTime || 'Flexible',
      message
    };

    try {
      await sendAppointmentRequest(details);
      
      setIsSubmitted(true);
      setBookingDetails(details);
      
      // Clear fields
      setName('');
      setEmail('');
      setPhone('');
      setSelectedServiceLocal('');
      setPreferredDate('');
      setPreferredTime('');
      setMessage('');
      if (setPreselectedService) {
        setPreselectedService(null);
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8c1d5c]/5 rounded-full filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-medium">Book Appointment & Enquire</h2>
          <div className="w-16 h-1 bg-[#8c1d5c] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-base text-gray-500 font-sans">
            Schedule a high-end, dedicated private consultation with Dr. Aishwarya Devaraj at our Sector 23, Gurugram clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Clinic details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 flex-grow">
              <h3 className="font-serif text-xl font-bold text-gray-900">Auraederm Skin Solutions</h3>
              
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#8c1d5c] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Clinic Address</h4>
                    <p className="text-sm text-gray-700 font-medium mt-1 font-sans">{CLINIC_INFO.address}</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#8c1d5c] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Contact Numbers</h4>
                    <p className="text-sm text-gray-700 font-medium mt-1 font-sans">
                      <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-[#8c1d5c] transition-colors">{CLINIC_INFO.phone}</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#8c1d5c] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Email Address</h4>
                    <p className="text-sm text-gray-700 font-medium mt-1 font-sans truncate">
                      <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-[#8c1d5c] transition-colors">{CLINIC_INFO.email}</a>
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#8c1d5c] flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Instagram</h4>
                    <p className="text-sm text-gray-700 font-medium mt-1 font-sans">
                      <a href={`https://instagram.com/${CLINIC_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#8c1d5c] transition-colors">@{CLINIC_INFO.instagram}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100"></div>

              {/* Clinic Timings */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#8c1d5c]" />
                  <span>Clinic Timings</span>
                </h4>
                <div className="space-y-2">
                  {CLINIC_INFO.timings.map((t, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs text-gray-600 font-sans">
                      <span className="font-semibold">{t.days}</span>
                      <span className="text-gray-500">{t.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Send Message Form & Google Maps (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Contact Form */}
            <div id="booking-form" className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-grow scroll-mt-24">
              {isSubmitted && bookingDetails ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-gray-900">Appointment Request Sent!</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto font-sans leading-relaxed">
                    Thank you, <strong className="text-gray-900">{bookingDetails.name}</strong>. Your request has been logged successfully. 
                  </p>
                  
                  {/* Summary Box */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-left max-w-md mx-auto space-y-2.5 text-xs text-gray-600 font-sans">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="font-medium text-gray-400 uppercase tracking-wide text-[10px]">Your Phone</span>
                      <span className="font-bold text-[#8c1d5c]">{bookingDetails.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="font-medium text-gray-400 uppercase tracking-wide text-[10px]">Service</span>
                      <span className="font-semibold text-gray-800">{bookingDetails.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="font-medium text-gray-400 uppercase tracking-wide text-[10px]">Date & Time</span>
                      <span className="font-semibold text-gray-800">{bookingDetails.date} ({bookingDetails.time})</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-400 uppercase tracking-wide block text-[10px] mb-0.5">Your Concern</span>
                      <p className="text-gray-700 italic">"{bookingDetails.message}"</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed pt-2">
                    Dr. Aishwarya Devaraj's front desk will call you directly at <strong className="text-[#8c1d5c]">{bookingDetails.phone}</strong> to confirm your specific slot and details within 24 business hours.
                  </p>
                  
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-[#8c1d5c] hover:underline block mx-auto pt-2"
                  >
                    Send Another Request / Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Private Consultation Request</h3>
                  <p className="text-xs text-gray-500 font-sans mb-4">
                    Fill out this form and our front desk will call you directly to secure your appointment. All fields with * are validated.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                        }}
                        className={`w-full bg-slate-50/50 border ${
                          errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-150 focus:border-[#8c1d5c]'
                        } focus:bg-white text-xs px-4 py-3 rounded-xl focus:outline-none transition-all font-sans`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-[10px] font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                        }}
                        className={`w-full bg-slate-50/50 border ${
                          errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-150 focus:border-[#8c1d5c]'
                        } focus:bg-white text-xs px-4 py-3 rounded-xl focus:outline-none transition-all font-sans`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[10px] font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                        }}
                        className={`w-full bg-slate-50/50 border ${
                          errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-150 focus:border-[#8c1d5c]'
                        } focus:bg-white text-xs px-4 py-3 rounded-xl focus:outline-none transition-all font-sans`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[10px] font-medium mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Treatment / Service Interested In */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Treatment / Service
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedServiceLocal(e.target.value)}
                        className="w-full bg-slate-50/50 border border-gray-150 focus:border-[#8c1d5c] focus:bg-white text-xs px-4 py-3 rounded-xl focus:outline-none transition-all font-sans"
                      >
                        <option value="">General Skin Consultation / Enquiry</option>
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.name}>
                            {srv.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-slate-50/50 border border-gray-150 focus:border-[#8c1d5c] focus:bg-white text-xs px-4 py-3 rounded-xl focus:outline-none transition-all font-sans"
                      />
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Preferred Time (Optional)
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-slate-50/50 border border-gray-150 focus:border-[#8c1d5c] focus:bg-white text-xs px-4 py-3 rounded-xl focus:outline-none transition-all font-sans"
                      >
                        <option value="">Select a general slot</option>
                        <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                        <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                        <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Skin Concerns / Details *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please details your skin symptoms, concern history, or questions..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                      }}
                      className={`w-full bg-slate-50/50 border ${
                        errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-150 focus:border-[#8c1d5c]'
                      } focus:bg-white text-xs px-4 py-3 rounded-xl focus:outline-none transition-all font-sans resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-[10px] font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-medium flex items-start gap-2 border border-red-100">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8c1d5c] hover:bg-[#73164b] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg disabled:bg-gray-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Submitting Request...' : 'Send Appointment Request'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Frame */}
            <div id="clinic-map" className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm aspect-video sm:aspect-auto sm:h-56 relative border-4 border-white scroll-mt-28">
              <iframe
                title="Auraederm Skin Solutions Location Map"
                src={CLINIC_INFO.googleMapsMockUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
