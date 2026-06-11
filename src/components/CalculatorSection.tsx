import React from 'react';
import { ShieldCheck, Cpu, Globe, RefreshCw } from 'lucide-react';
import { RateCalculator } from './RateCalculator';

export function CalculatorSection() {
  return (
    <section id="calculator-section" className="relative bg-white bg-grid-light py-24 border-y border-navy/5 overflow-hidden">
      {/* Dynamic ambient spotlights (subtle for light background) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 -z-10 w-[500px] h-[500px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -z-10 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        
        {/* Left Info Column */}
        <div className="text-navy">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-mono mb-4 uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            SYS // EXCHANGE_ENGINE
          </div>
          
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Secure Converter,{' '}
            <span className="text-brand">Live Exchange.</span>
          </h2>
          
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Convert major international currencies dynamically based on current market rates. 
            Lock in rates securely and complete transactions via our CBK-licensed forex bureau or 
            send direct remittances using our IMT global payout network.
          </p>

          {/* High-tech telemetry logs/highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-2xl bg-[#f7f8fa] border border-navy/10 hover:border-brand/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex gap-3.5 items-start">
              <ShieldCheck className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-navy">CBK Regulated</h4>
                <p className="mt-1 text-xs text-navy/60 leading-normal">
                  Licensed under Central Bank of Kenya standards for secure forex operations.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f7f8fa] border border-navy/10 hover:border-brand/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex gap-3.5 items-start">
              <Cpu className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-navy">Live Stream Rates</h4>
                <p className="mt-1 text-xs text-navy/60 leading-normal">
                  Real-time algorithmic rate calculations with leading institutional spreads.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f7f8fa] border border-navy/10 hover:border-brand/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex gap-3.5 items-start">
              <Globe className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-navy">100+ Countries</h4>
                <p className="mt-1 text-xs text-navy/60 leading-normal">
                  Send global remittances directly to banks and mobile wallets worldwide.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f7f8fa] border border-navy/10 hover:border-brand/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex gap-3.5 items-start">
              <RefreshCw className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-navy">Same-Day Settlement</h4>
                <p className="mt-1 text-xs text-navy/60 leading-normal">
                  Swift processing ensuring funds reach recipient accounts same day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Calculator Column */}
        <div className="flex justify-center lg:justify-end">
          <RateCalculator />
        </div>

      </div>
    </section>
  );
}
