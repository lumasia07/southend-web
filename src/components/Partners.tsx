import React from 'react';
import { motion } from 'framer-motion';
import { StaggerGroup, itemVariants } from './AnimatedSection';

const partners = [
  {
    name: 'Western Union',
    logo: '/wu.webp',
    hoverBorder: 'hover:border-[#fd0]/50',
    hoverShadow: 'hover:shadow-[0_15px_30px_rgba(255,221,0,0.22)]',
    glowColor: 'rgba(255,221,0,0.2)'
  },
  {
    name: 'MoneyGram',
    logo: '/logo-moneygram-black.svg',
    hoverBorder: 'hover:border-[#ED0000]/40',
    hoverShadow: 'hover:shadow-[0_15px_30px_rgba(237,0,0,0.18)]',
    glowColor: 'rgba(237,0,0,0.15)'
  },
  {
    name: 'M-Pesa',
    logo: '/SafM-PESA-Logo.jpg',
    hoverBorder: 'hover:border-[#4ABB55]/40',
    hoverShadow: 'hover:shadow-[0_15px_30px_rgba(74,187,85,0.18)]',
    glowColor: 'rgba(74,187,85,0.15)'
  }
];

export function Partners() {
  return (
    <section className="relative border-y border-navy/5 bg-gradient-to-b from-[#f8fafc] to-white py-16 overflow-hidden">
      {/* Creative ambient glows */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 -z-10 h-64 w-64 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 -z-10 h-64 w-64 rounded-full bg-sky-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brand/35" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Our Trusted Partners
            </span>
            <span className="h-px w-8 bg-brand/35" />
          </div>
          <h3 className="text-center text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Supported Global Networks
          </h3>
          <p className="mt-2 text-center text-sm text-navy/60 max-w-lg">
            We partner with the world's most reliable payment rails to offer you instant transfers and secure cash collections.
          </p>
        </div>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {partners.map((p) => (
            <motion.article
              key={p.name}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`flex h-24 items-center justify-center rounded-2xl border border-navy/10 bg-white/80 backdrop-blur-md px-8 cursor-pointer transition-all duration-300 ${p.hoverBorder} ${p.hoverShadow}`}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 w-full object-contain transition-transform duration-300 hover:scale-102"
                loading="lazy"
              />
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}