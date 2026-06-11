import React from 'react';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050d18] py-24 text-white">
      {/* Background cyber grid & glow */}
      <div className="absolute inset-0 bg-cyber-grid bg-scanlines opacity-10 pointer-events-none" />
      <div className="absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Floor 1: Cinematic, full-width storeyed banner with 50/50 split */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-brand/10 bg-scanlines">
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Story & Typography */}
            <div className="lg:col-span-6 px-8 py-16 sm:px-12 lg:px-16 z-10 flex flex-col justify-center">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl text-white">
                  Global Network, <br />
                  <span className="bg-gradient-to-r from-brand to-orange-400 bg-clip-text text-transparent">
                    Personal Touch.
                  </span>
                </h2>
              </div>

              <p className="mt-6 text-white/80 text-sm leading-relaxed">
                Southend bridges the gap between state-of-the-art money transfer rails and trusted local relationships. By deploying advanced transaction systems alongside a dedicated personal service model, we ensure that your retail foreign exchange, global remittance, and corporate treasury needs are met with speed, security, and integrity.
              </p>

              <div className="mt-8">
                <a
                  href="#calculator-section"
                  className="group inline-flex items-center gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-600 hover:shadow-brand/40"
                >
                  Get Started
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual illustration on half right to avoid stretching */}
            <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-auto overflow-hidden border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10">
              <img
                src="/banner-mainv2-16-9-v2.png"
                alt="Southend Characters Ecosystem"
                className="absolute inset-0 w-full h-full object-cover object-center select-none"
              />
              {/* Subtle gradients to blend the image edges with the dark console */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050d18] to-transparent hidden lg:block" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050d18] to-transparent lg:hidden" />
            </div>

          </div>
        </div>

        {/* Floor 2: Stats stacked below - completely borderless and clean */}
        <div className="mt-16 grid gap-8 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto text-center lg:text-left border-t border-white/10 pt-12">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-4xl font-bold font-mono text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              08
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mt-1.5">
              Years Operational
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="text-4xl font-bold font-mono text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              50K+
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mt-1.5">
              Customers Served
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="text-4xl font-bold font-mono text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              100+
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mt-1.5">
              Global Channels
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="text-4xl font-bold font-mono text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
              24/7
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mt-1.5">
              Direct Support
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}