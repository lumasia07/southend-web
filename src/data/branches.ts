export type Branch = {
  name: string;
  region: string;
  address: string;
  hours: string;
  phone: string;
  phoneAlt?: string;
  email?: string;
  tag?: string;
  mapQuery: string;
};

export const BRANCHES: Branch[] = [
  {
    name: 'Wilson Airport',
    region: 'Nairobi',
    address:
      'Pewin House, Ground Floor, next to I&M Bank, Wilson Airport, Nairobi',
    hours: 'Mon–Sun · 7:00 AM – 8:00 PM',
    phone: '0769 558 811',
    phoneAlt: '0719 806 999',
    email: 'info@southendmrp.co.ke',
    tag: 'Main Branch',
    mapQuery:
      'Pewin House, Wilson Airport, next to I&M Bank, Nairobi, Kenya'
  },
  {
    name: 'Upperhill',
    region: 'Nairobi',
    address: 'The Beacon Mall, 1st Floor, Upperhill, Nairobi',
    hours: 'Mon–Sat · 9:00 AM – 4:00 PM',
    phone: '0769 558 811',
    phoneAlt: '0719 806 999',
    email: 'info@southendmrp.co.ke',
    mapQuery: 'The Beacon Mall, 1st Floor, Upperhill, Nairobi, Kenya'
  }
];

export function googleMapsEmbedUrl(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}

export function googleMapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
