export const WHATSAPP_NUMBER = '212XXXXXXXXX';
export const INSTAGRAM_URL = 'https://www.instagram.com/gold_events1/';

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
