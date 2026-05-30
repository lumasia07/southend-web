import React from 'react';
import {
  ClockIcon,
  ExternalLinkIcon,
  MailIcon,
  NavigationIcon,
  PhoneIcon } from
'lucide-react';
import type { Branch } from '../data/branches';
import { googleMapsDirectionsUrl, googleMapsEmbedUrl } from '../data/branches';

type BranchLocationProps = {
  branch: Branch;
  mapFirst?: boolean;
};

export function BranchLocation({ branch, mapFirst = false }: BranchLocationProps) {
  const details = (
    <div className="flex flex-col justify-center p-8 sm:p-10">
      <div className="flex flex-wrap items-center gap-2">
        {branch.tag &&
        <span className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            {branch.tag}
          </span>
        }
        <span className="rounded-full bg-navy/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy/60">
          {branch.region}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
        {branch.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/70">{branch.address}</p>
      <div className="mt-6 space-y-3 border-t border-navy/10 pt-6 text-sm text-navy/70">
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-brand" /> {branch.hours}
        </div>
        <a
          href={`tel:${branch.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-2 hover:text-brand">
          
          <PhoneIcon className="h-4 w-4 text-brand" /> {branch.phone}
        </a>
        {branch.phoneAlt &&
        <a
          href={`tel:${branch.phoneAlt.replace(/\s/g, '')}`}
          className="flex items-center gap-2 hover:text-brand">
          
          <PhoneIcon className="h-4 w-4 text-brand" /> {branch.phoneAlt}
        </a>
        }
        {branch.email &&
        <a
          href={`mailto:${branch.email}`}
          className="flex items-center gap-2 hover:text-brand">
          
          <MailIcon className="h-4 w-4 text-brand" /> {branch.email}
        </a>
        }
      </div>
      <a
        href={googleMapsDirectionsUrl(branch.mapQuery)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
        
        <NavigationIcon className="h-4 w-4" />
        Open in Google Maps
        <ExternalLinkIcon className="h-3.5 w-3.5 opacity-80" />
      </a>
    </div>
  );

  const map = (
    <div className="relative min-h-[320px] border-t border-navy/10 lg:min-h-[420px] lg:border-l lg:border-t-0">
      <iframe
        title={`${branch.name} branch location`}
        src={googleMapsEmbedUrl(branch.mapQuery)}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen />
      
    </div>
  );

  return (
    <article className="overflow-hidden rounded-3xl border border-navy/10 bg-white">
      <div className="grid lg:grid-cols-2">
        {mapFirst ?
        <>
            {map}
            {details}
          </> :

        <>
            {details}
            {map}
          </>
        }
      </div>
    </article>);

}
