import emailjs from '@emailjs/browser';

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

/**
 * Sends appointment request emails using EmailJS.
 * This service layer can easily be swapped out for a real backend API (e.g., fetch('/api/book')) in the future.
 */
export const sendAppointmentRequest = async (data: AppointmentData): Promise<void> => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const CLINIC_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CLINIC_TEMPLATE_ID;
  const PATIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !CLINIC_TEMPLATE_ID || !PATIENT_TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn(
      'EmailJS environment variables are missing. Please configure them in your environment settings.',
      'Simulating successful email request...'
    );
    // Simulate a network delay
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  // Parameters matching the EmailJS template variables
  const templateParams = {
    patient_name: data.name,
    patient_email: data.email,
    patient_phone: data.phone,
    service_requested: data.service,
    preferred_date: data.date,
    preferred_time: data.time,
    message: data.message,
    clinic_email: 'itachiuchiha02054@gmail.com', // As requested
  };

  try {
    // 1. Send the notification email to the Clinic
    await emailjs.send(SERVICE_ID, CLINIC_TEMPLATE_ID, templateParams, PUBLIC_KEY);
    
    // 2. Send the acknowledgment email to the Patient
    await emailjs.send(SERVICE_ID, PATIENT_TEMPLATE_ID, templateParams, PUBLIC_KEY);
  } catch (error) {
    console.error('Failed to send appointment request via EmailJS:', error);
    throw new Error('Failed to send appointment request. Please try again later.');
  }
};
