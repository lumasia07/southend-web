import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon } from
'lucide-react';
import { Logo } from './Logo';
const columns: {
  title: string;
  links: {
    label: string;
    to: string;
  }[];
}[] = [
{
  title: 'Services',
  links: [
  {
    label: 'Foreign Exchange',
    to: '/forex'
  },
  {
    label: 'Global Remittance',
    to: '/remittance'
  },
  {
    label: 'Agency Banking',
    to: '/remittance'
  },
  {
    label: 'M-Pesa',
    to: '/remittance'
  },
  {
    label: 'Western Union',
    to: '/remittance'
  },
  {
    label: 'MoneyGram',
    to: '/remittance'
  }]

},
{
  title: 'Company',
  links: [
  {
    label: 'About Us',
    to: '/corporate'
  },
  {
    label: 'Branches',
    to: '/branches'
  },
  {
    label: 'Blog',
    to: '/blog'
  },
  {
    label: 'FAQ',
    to: '/faq'
  },
  {
    label: 'Contact',
    to: '/corporate#contact'
  }]

},
{
  title: 'Support',
  links: [
  {
    label: 'Help Center',
    to: '/faq'
  },
  {
    label: 'FAQ',
    to: '/faq'
  },
  {
    label: 'Contact',
    to: '/corporate#contact'
  },
  {
    label: 'Compliance',
    to: '/corporate'
  },
  {
    label: 'Privacy Policy',
    to: '/corporate'
  }]

}];

export function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Logo variant="dark" className="h-12 md:h-12" />
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Your trusted partner in foreign exchange and global money
              remittance — with a personal touch.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href="tel:0769558811"
                className="flex items-center gap-2 hover:text-brand">
                
                <PhoneIcon className="h-4 w-4 text-brand" /> 0769 55 88 11
              </a>
              <a
                href="tel:0719806999"
                className="flex items-center gap-2 hover:text-brand">
                
                <PhoneIcon className="h-4 w-4 text-brand" /> 0719 806 999
              </a>
              <a
                href="mailto:info@southendmrp.co.ke"
                className="flex items-center gap-2 hover:text-brand">
                
                <MailIcon className="h-4 w-4 text-brand" />{' '}
                info@southendmrp.co.ke
              </a>
              <div className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 text-brand" />
                <span>Southend House, Moi Avenue, Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {columns.map((c) =>
          <div key={c.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) =>
              <li key={l.label}>
                    <Link
                  to={l.to}
                  className="text-white/60 transition-colors hover:text-brand">
                  
                      {l.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Southend Forex &amp; Money Remittance.
            All rights reserved. CBK Licensed.
          </p>
          <div className="flex items-center gap-2">
            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map(
              (Icon, i) =>
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-brand hover:text-brand"
                aria-label="Social link">
                
                  <Icon className="h-4 w-4" />
                </a>

            )}
          </div>
        </div>
      </div>
    </footer>);

}