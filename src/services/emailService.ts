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

export const sendAppointmentRequest = async (
  data: AppointmentData
): Promise<void> => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const CLINIC_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_CLINIC_TEMPLATE_ID?.trim();
  const PATIENT_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE_ID?.trim();
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  const isInvalid = (val?: string) => {
    if (!val) return true;

    const lower = val.toLowerCase();

    return (
      lower === 'undefined' ||
      lower === 'null' ||
      val.includes('YOUR_') ||
      val.startsWith('{') ||
      val.startsWith('<') ||
      val === 'test' ||
      val === 'dummy'
    );
  };

  if (
    isInvalid(SERVICE_ID) ||
    isInvalid(CLINIC_TEMPLATE_ID) ||
    isInvalid(PATIENT_TEMPLATE_ID) ||
    isInvalid(PUBLIC_KEY)
  ) {
    console.warn(
      'EmailJS environment variables are missing or invalid.'
    );

    return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  // Convert YYYY-MM-DD → DD-MM-YYYY
  const formatDate = (date: string) => {
    if (!date) return '';

    const parts = date.split('-');

    if (parts.length !== 3) {
      return date;
    }

    const [year, month, day] = parts;

    return `${day}-${month}-${year}`;
  };

  const formattedDate = formatDate(data.date);

  const templateParams = {
    patient_name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,

    // Sends DD-MM-YYYY to EmailJS
    appointment_date: formattedDate,

    appointment_time: data.time,
    skin_concern: data.message,

    clinic_email: 'itachiuchiha02054@gmail.com',
  };

  try {
    // Send appointment request to clinic
    await emailjs.send(
      SERVICE_ID!,
      CLINIC_TEMPLATE_ID!,
      templateParams,
      PUBLIC_KEY!
    );

    // Send confirmation email to patient
    await emailjs.send(
      SERVICE_ID!,
      PATIENT_TEMPLATE_ID!,
      templateParams,
      PUBLIC_KEY!
    );
  } catch (error: any) {
    console.error('EmailJS Error:', error);

    const details =
      error?.text ||
      error?.message ||
      (typeof error === 'object'
        ? JSON.stringify(error)
        : String(error));

    throw new Error(`EmailJS Error: ${details}`);
  }
};