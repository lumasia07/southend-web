import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { WhatsAppChatButton } from './WhatsAppChatButton';
export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(238,90,42,0.25),transparent_45%)]" />
      <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to send money{' '}
            <span className="text-brand">the easy way?</span>
          </h2>
          <p className="mt-3 text-white/70">
            Lock in a competitive rate today. CBK-licensed forex bureau — IMT
            licensed 2025.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#calculator"
            className="group inline-flex items-center justify-between gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-600">
            
            Start a Transfer
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </a>
          <WhatsAppChatButton />
        </div>
      </div>
    </section>);

}