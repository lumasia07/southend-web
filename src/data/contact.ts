export type WhatsAppContact = {
  display: string;
  phone: string;
};

export const WHATSAPP_CONTACTS: WhatsAppContact[] = [
  {
    display: '0769 558 811',
    phone: '0769558811'
  },
  {
    display: '0719 806 999',
    phone: '0719806999'
  }
];

export function toWhatsAppUrl(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  const normalized = digits.startsWith('254') ?
  digits :
  digits.startsWith('0') ?
  `254${digits.slice(1)}` :
  `254${digits}`;
  return `https://wa.me/${normalized}`;
}
