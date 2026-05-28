import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, ClockIcon, PhoneIcon, ArrowRightIcon } from 'lucide-react';
const branches = [
{
  name: 'Beacon Mall',
  address: 'Beacon Mall, 1st Floor, Nairobi',
  hours: 'Mon–Sat · 8:00 AM – 7:00 PM',
  phone: '+254 700 000 001',
  tag: 'Main Branch'
},
{
  name: 'Upperhill',
  address: 'Upperhill, Nairobi',
  hours: 'Mon–Sat · 9:00 AM – 6:00 PM',
  phone: '+254 700 000 002'
},
{
  name: 'Wilson Airport',
  address: 'Wilson Airport, Nairobi',
  hours: 'Mon–Sun · 7:00 AM – 8:00 PM',
  phone: '+254 700 000 003'
}];

export function Branches() {
  return (
    <section id="branches" className="bg-[#f7f8fa] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Visit us
              </span>
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Find a Branch Near You
            </h2>
            <p className="mt-4 max-w-xl text-base text-navy/70">
              Walk into any of our conveniently located branches across Nairobi
              for cash transactions, advisory, and personal service.
            </p>
          </div>
          <Link
            to="/branches"
            className="group inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand/40">
            
            View all branches
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) =>
          <article
            key={b.name}
            className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
            
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                {b.tag &&
              <span className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {b.tag}
                  </span>
              }
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-navy">
                {b.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/70">
                {b.address}
              </p>
              <div className="mt-5 space-y-2 border-t border-navy/10 pt-4 text-xs text-navy/70">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-3.5 w-3.5 text-brand" /> {b.hours}
                </div>
                <a
                href={`tel:${b.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-brand">
                
                  <PhoneIcon className="h-3.5 w-3.5 text-brand" /> {b.phone}
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}