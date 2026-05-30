import React, { useMemo, useState, Component } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  SearchIcon,
  NavigationIcon,
  MailIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  AnimatedSection,
  StaggerGroup,
  itemVariants } from
'../components/AnimatedSection';
import { useScreenInit } from '../useScreenInit.js';
import { BranchMap } from '../components/BranchMap';
import { BRANCHES, googleMapsDirectionsUrl } from '../data/branches';

const REGIONS = ['All', 'Nairobi'];
export function BranchesPage() {
  useScreenInit();
  const [q, setQ] = useState('');
  const [region, setRegion] = useState<string>('All');
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return BRANCHES.filter((b) => {
      const regionOk = region === 'All' || b.region === region;
      const termOk =
      !term ||
      b.name.toLowerCase().includes(term) ||
      b.address.toLowerCase().includes(term) ||
      b.region.toLowerCase().includes(term);
      return regionOk && termOk;
    });
  }, [q, region]);
  return (
    <>
      <PageHero
        eyebrow="Branches"
        title={
        <>
            Walk in.{' '}
            <span className="text-brand">We're around the corner.</span>
          </>
        }
        subtitle="Two branches in Nairobi — Wilson Airport and Upperhill. Cash, M-Pesa, agency banking and remittance, all under one roof."
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Branches'
        }]
        } />
      

      {/* Filters + grid */}
      <section className="bg-[#f7f8fa] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {filtered.length}{' '}
                {filtered.length === 1 ? 'branch' : 'branches'} near you
              </h2>
              <p className="mt-1 text-sm text-navy/60">
                Filter by region or search by name.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
                <input
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search branch, street, town"
                  className="h-11 w-full rounded-full border border-navy/10 bg-white pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand sm:w-72" />
                
              </div>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map((r) =>
                <button
                  key={r}
                  type="button"
                  onClick={() => setRegion(r)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${region === r ? 'bg-navy text-white' : 'border border-navy/10 bg-white text-navy/70 hover:border-brand/40 hover:text-navy'}`}>
                  
                    {r}
                  </button>
                )}
              </div>
            </div>
          </AnimatedSection>

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b) =>
            <motion.article
              key={b.name}
              variants={itemVariants}
              className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
              
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {b.tag &&
                  <span className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {b.tag}
                      </span>
                  }
                    <span className="rounded-full bg-navy/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy/60">
                      {b.region}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-navy">
                  {b.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/70">
                  {b.address}
                </p>
                <div className="mt-5 space-y-2 border-t border-navy/10 pt-5 text-xs">
                  <div className="flex items-center gap-2 text-navy/70">
                    <ClockIcon className="h-3.5 w-3.5 text-brand" /> {b.hours}
                  </div>
                  <a
                  href={`tel:${b.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-navy/70 hover:text-brand">
                  
                    <PhoneIcon className="h-3.5 w-3.5 text-brand" /> {b.phone}
                  </a>
                  {'phoneAlt' in b && b.phoneAlt &&
                  <a
                  href={`tel:${b.phoneAlt.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-navy/70 hover:text-brand">
                  
                    <PhoneIcon className="h-3.5 w-3.5 text-brand" /> {b.phoneAlt}
                  </a>
                  }
                  <a
                  href={`mailto:${b.email}`}
                  className="flex items-center gap-2 text-navy/70 hover:text-brand">
                  
                    <MailIcon className="h-3.5 w-3.5 text-brand" /> {b.email}
                  </a>
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                  href={googleMapsDirectionsUrl(b.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy-700">
                  
                    <NavigationIcon className="h-3.5 w-3.5" /> Directions
                  </a>
                  <a
                  href={`tel:${b.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/10 px-4 py-2.5 text-xs font-semibold text-navy transition-colors hover:border-brand hover:text-brand">
                  
                    Call
                  </a>
                </div>
              </motion.article>
            )}
          </StaggerGroup>

          {filtered.length === 0 &&
          <div className="mt-16 rounded-3xl border border-dashed border-navy/15 bg-white py-16 text-center">
              <p className="text-sm text-navy/60">
                No branches match those filters yet. Try a different region or
                search term.
              </p>
            </div>
          }
        </div>
      </section>

      {/* Branch map */}
      <AnimatedSection className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-navy/10 bg-navy">
            <div className="grid items-stretch gap-0 lg:grid-cols-2">
              <div className="p-10 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  Find us
                </div>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">
                  Branch locator map
                </h3>
                <p className="mt-3 max-w-md text-white/70">
                  Select a branch to view its location on Google Maps. Tap
                  Directions on any branch above, or open the full map below.
                </p>
              </div>
              <div className="bg-white p-6 lg:p-8">
                <BranchMap />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>);

}