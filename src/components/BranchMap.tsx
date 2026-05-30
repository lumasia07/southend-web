import React, { useState } from 'react';
import { ExternalLinkIcon, MapPinIcon, NavigationIcon } from 'lucide-react';
import {
  BRANCHES,
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl } from
'../data/branches';

type BranchMapProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export function BranchMap({ className = '', variant = 'light' }: BranchMapProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const branch = BRANCHES[selectedIndex];
  const isDark = variant === 'dark';

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2">
        {BRANCHES.map((b, index) =>
        <button
          key={b.name}
          type="button"
          onClick={() => setSelectedIndex(index)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${index === selectedIndex ? isDark ? 'bg-brand text-white' : 'bg-navy text-white' : isDark ? 'border border-white/20 bg-white/5 text-white/80 hover:border-brand/40 hover:text-white' : 'border border-navy/10 bg-white text-navy/70 hover:border-brand/40 hover:text-navy'}`}>
          
            {b.name}
          </button>
        )}
      </div>

      <div
        className={`relative mt-4 overflow-hidden rounded-2xl border ${isDark ? 'border-white/10' : 'border-navy/10'}`}>
        
        <iframe
          title={`${branch.name} branch location`}
          src={googleMapsEmbedUrl(branch.mapQuery)}
          className="h-[320px] w-full border-0 sm:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen />
        
      </div>

      <div
        className={`mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${isDark ? 'text-white/70' : 'text-navy/70'}`}>
        
        <div className="flex items-start gap-2 text-sm">
          <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
          <span>{branch.address}</span>
        </div>
        <a
          href={googleMapsDirectionsUrl(branch.mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600">
          
          <NavigationIcon className="h-4 w-4" />
          Open in Google Maps
          <ExternalLinkIcon className="h-3.5 w-3.5 opacity-80" />
        </a>
      </div>
    </div>);

}
