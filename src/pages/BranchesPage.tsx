import React from 'react';
import { PageHero } from '../components/PageHero';
import { AnimatedSection } from '../components/AnimatedSection';
import { BranchLocation } from '../components/BranchLocation';
import { useScreenInit } from '../useScreenInit.js';
import { BRANCHES } from '../data/branches';

export function BranchesPage() {
  useScreenInit();
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
        subtitle="Two branches in Nairobi — Wilson Airport and Upperhill at The Beacon Mall. Cash, M-Pesa, agency banking and remittance, all under one roof."
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Branches'
        }]
        } />
      

      <section className="bg-[#f7f8fa] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Our branches
            </h2>
            <p className="mt-2 text-sm text-navy/60">
              Find directions, hours and contact details for each location below.
            </p>
          </AnimatedSection>

          <div className="mt-10 space-y-8">
            {BRANCHES.map((branch, index) =>
            <AnimatedSection key={branch.name} delay={index * 0.08}>
                <BranchLocation branch={branch} mapFirst={index % 2 === 1} />
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </>);

}
