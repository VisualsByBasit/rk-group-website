// Contact details and feature switches. Turning WhatsApp or the enquiry form on is a one-line change here.
export const LANDLINE = { display: "051-4449011", tel: "+92514449011", hours: "Monday to Saturday, 10am to 6pm" };
export const WHATSAPP_NUMBER = ""; // e.g. "923001234567" once provided
export const ENQUIRY_EMAIL = "";   // once provided
export const WHATSAPP_LIVE = false;
export const ENQUIRY_FORM_LIVE = false;

// A switch only takes effect once its number or address is filled in, so a half-configured feature never ships broken.
export const whatsappReady = WHATSAPP_LIVE && WHATSAPP_NUMBER.length > 0;
export const emailReady = ENQUIRY_EMAIL.length > 0;
export const formReady = ENQUIRY_FORM_LIVE && (whatsappReady || emailReady);

export const whatsappUrl = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
