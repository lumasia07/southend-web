import React from 'react';
import { CheckCircle2Icon, ArrowRightIcon } from 'lucide-react';
const points = [
'Real-time forex rates across all major currencies',
'Secure, swift transactions to over 100 countries',
'Advanced encryption and 24/7 customer support',
'Personal touch — relationships, not just transactions'];

export function About() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Storeyed Layout — Two visual "floors" */}
        
        {/* Floor 1: Full-width intro with image background */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556742205-e10c9486e506?auto=format&fit=crop&w=1200&q=80"
              alt="Customer using mobile remittance"
              className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy/80 to-navy-700/70" />
          </div>
          <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  About us
                </span>
                <span className="h-px w-12 bg-brand" />
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Global Remittance, with a{' '}
                <span className="text-brand">Personal Touch</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                <span className="font-semibold text-white">Southend</span> is your
                trusted partner in financial innovation. Our platform offers
                seamless forex trading and international money transfers with
                real-time rates, a user-friendly experience, and secure, swift
                transactions to over 100 countries.
              </p>
              <a
                href="/corporate#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-600 hover:shadow-brand/40">
                Get in Touch
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Floor 2: Feature highlights & stats — stacked below */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Left: Feature checklist */}
          <div className="rounded-3xl border border-navy/10 bg-[#f7f8fa] p-8 sm:p-10">
            <h3 className="text-lg font-semibold tracking-tight text-navy">
              Why thousands choose Southend
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Enjoy advanced security, 24/7 customer support, and comprehensive
              financial management. Experience the future of finance with Southend
              Forex &amp; Money Remittance, Kenya.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((p) =>
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-navy/80">
                
                <CheckCircle2Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                <span>{p}</span>
              </li>
              )}
            </ul>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="15+" label="Years of trust" accent />
            <StatCard value="50K+" label="Customers served" />
            <StatCard value="100+" label="Countries reached" />
            <StatCard value="24/7" label="Customer support" accent />
          </div>
        </div>
      </div>
    </section>);

}

function StatCard({ value, label, accent = false }: {value: string; label: string; accent?: boolean;}) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl border p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${accent ? 'border-brand/30 bg-brand/5' : 'border-navy/10 bg-white'}`}>
      <div className="text-3xl font-bold tracking-tight text-navy">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-widest text-navy/60">
        {label}
      </div>
    </div>);

}