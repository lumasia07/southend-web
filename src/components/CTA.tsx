import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppChatButton } from './WhatsAppChatButton';

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#050d18] py-24 text-white">
      {/* Holographic Projection Backdrop using characters banner */}
      <div className="absolute inset-0 -z-20 opacity-20 overflow-hidden select-none pointer-events-none">
        <img
          src="/banner-mainv2-16-9-v2.png"
          alt="Hologram background"
          className="w-full h-full object-cover filter blur-2xl scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d18] via-transparent to-[#050d18]" />
      </div>

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-grid-light opacity-5 -z-10 pointer-events-none" />
      <div className="absolute -left-20 -top-20 -z-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Borderless Floating CTA Container matching the Hero */}
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-3">
              <span className="h-px w-6 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                Get Connected
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to send money <br />
              <span className="bg-gradient-to-r from-brand to-orange-400 bg-clip-text text-transparent">
                the easy way?
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Lock in your competitive rate today. Southend is a CBK-licensed forex bureau and licensed IMT provider connecting you globally.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto shrink-0">
            <a
              href="#calculator-section"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-600 hover:shadow-brand/40"
            >
              Start a Transfer
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <WhatsAppChatButton />
          </div>
        </div>

      </div>
    </section>
  );
}