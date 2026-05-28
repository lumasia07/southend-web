import React from 'react';
import { useScreenInit } from '../useScreenInit.js';
import { Hero } from '../components/Hero';
import { RatesTicker } from '../components/RatesTicker';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Partners } from '../components/Partners';
import { Branches } from '../components/Branches';
import { CTA } from '../components/CTA';
import { AnimatedSection } from '../components/AnimatedSection';
export function Home() {
  useScreenInit();
  return (
    <>
      <Hero />
      <RatesTicker />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <Services />
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <Partners />
      </AnimatedSection>
      <AnimatedSection>
        <Branches />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>);

}