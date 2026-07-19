export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  concern?: string;
  skinType?: string;
  createdAt: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  category: 'clinical' | 'aesthetic' | 'hair';
  description: string;
  longDescription: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  duration: string;
}

export interface SkinRoutineResult {
  skinType: string;
  morning: { step: string; product: string; description: string }[];
  evening: { step: string; product: string; description: string }[];
  proTips: string[];
}
