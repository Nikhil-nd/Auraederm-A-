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
 * This service layer can easily be replaced with a backend API in the future.
 */
export const sendAppointmentRequest = async (
  data: AppointmentData
): Promise<void> => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const CLINIC_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CLINIC_TEMPLATE_ID?.trim();
  const PATIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE_ID?.trim();
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  const isInvalid = (val?: string) => {
    if (!val) return true;
    const lower = val.toLowerCase();
    return (
      lower === "undefined" ||
      lower === "null" ||
      val.includes("YOUR_") ||
      val.startsWith("{") ||
      val.startsWith("<") ||
      val === "test" ||
      val === "dummy"
    );
  };

  if (
    isInvalid(SERVICE_ID) ||
    isInvalid(CLINIC_TEMPLATE_ID) ||
    isInvalid(PATIENT_TEMPLATE_ID) ||
    isInvalid(PUBLIC_KEY)
  ) {
    console.warn(
      "EmailJS environment variables are missing or invalid.",
      "Simulating successful request..."
    );

    return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  // These names MUST exactly match your EmailJS template variables
  const templateParams = {
    patient_name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    appointment_date: data.date,
    appointment_time: data.time,
    skin_concern: data.message,

    // Used by clinic template if you use {{clinic_email}}
    clinic_email: "itachiuchiha02054@gmail.com",
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
    console.error("EmailJS Error:", error);

    const details =
      error?.text ||
      error?.message ||
      (typeof error === "object"
        ? JSON.stringify(error)
        : String(error));

    throw new Error(
      `EmailJS Error: ${details}`
    );
  }
};