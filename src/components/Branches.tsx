import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { BranchLocation } from './BranchLocation';
import { BRANCHES } from '../data/branches';

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
              Wilson Airport and The Beacon Mall, Upperhill — walk in for cash,
              forex, and remittance with a personal touch.
            </p>
          </div>
          <Link
            to="/branches"
            className="group inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand/40">
            
            View all branches
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 space-y-6">
          {BRANCHES.map((branch, index) =>
          <BranchLocation
            key={branch.name}
            branch={branch}
            mapFirst={index % 2 === 1} />
          )}
        </div>
      </div>
    </section>);

}
