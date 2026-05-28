import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GlobeIcon,
  SendIcon,
  BanknoteIcon,
  SmartphoneIcon,
  ShieldCheckIcon,
  ZapIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  ClockIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  AnimatedSection,
  StaggerGroup,
  itemVariants } from
'../components/AnimatedSection';
import { useScreenInit } from '../useScreenInit.js';
const CHANNELS = [
{
  icon: SendIcon,
  name: 'Western Union',
  desc: 'Send and receive at any Southend counter — pickup in cash at over 500,000 agent locations worldwide.',
  fee: 'From KES 250',
  speed: 'Minutes'
},
{
  icon: BanknoteIcon,
  name: 'MoneyGram',
  desc: 'Southend is a MoneyGram authorised outlet — direct deposits to bank accounts and mobile wallets globally.',
  fee: 'From KES 300',
  speed: 'Same day'
},
{
  icon: SmartphoneIcon,
  name: 'M-Pesa Global',
  desc: 'Top up M-Pesa from abroad or send to mobile wallets across East Africa via integrated M-Pesa.',
  fee: 'From 1%',
  speed: 'Instant'
},
{
  icon: GlobeIcon,
  name: 'SWIFT Wire',
  desc: 'Direct bank-to-bank wires for high-value transfers, payroll, and corporate vendor payments.',
  fee: 'Custom',
  speed: '1–2 days'
}];

const STEPS = [
{
  title: 'Visit or chat',
  desc: 'Walk into any branch, or start your transfer on WhatsApp with one of our agents.'
},
{
  title: 'Choose your channel',
  desc: 'Pick the best route — speed, cost, and country of destination determine which channel wins.'
},
{
  title: 'Verify & fund',
  desc: 'Quick KYC for first-time senders. Fund with cash, M-Pesa, or bank transfer.'
},
{
  title: 'Confirmation',
  desc: 'We send you (and the receiver) an instant SMS receipt with the tracking reference.'
}];

const DESTINATIONS = [
{
  region: 'East Africa',
  countries: [
  'Uganda',
  'Tanzania',
  'Rwanda',
  'Burundi',
  'South Sudan',
  'Ethiopia']

},
{
  region: 'Rest of Africa',
  countries: [
  'Nigeria',
  'Ghana',
  'South Africa',
  'Zambia',
  'Zimbabwe',
  'Egypt',
  'Morocco']

},
{
  region: 'Europe & UK',
  countries: [
  'United Kingdom',
  'Germany',
  'France',
  'Netherlands',
  'Italy',
  'Spain',
  'Sweden']

},
{
  region: 'North America',
  countries: ['United States', 'Canada']
},
{
  region: 'Asia & Pacific',
  countries: [
  'UAE',
  'Saudi Arabia',
  'Qatar',
  'India',
  'Pakistan',
  'China',
  'Philippines',
  'Australia']

}];

export function Remittance() {
  useScreenInit();
  return (
    <>
      <PageHero
        eyebrow="Remittance"
        title={
        <>
            Send money anywhere —{' '}
            <span className="text-brand">stress-free.</span>
          </>
        }
        subtitle="From Nairobi to over 100 countries through trusted global networks. Reliable rails, transparent fees, and that human touch when you need it."
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Remittance'
        }]
        } />
      

      {/* Channels grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Our channels
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Four rails. One counter.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-navy/70">
              We're integrated with the world's leading remittance networks so
              you can pick the right one for every transfer.
            </p>
          </AnimatedSection>

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {CHANNELS.map((c) =>
            <motion.article
              key={c.name}
              variants={itemVariants}
              className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
              
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right text-[11px] font-semibold uppercase tracking-widest text-navy/40">
                    Live
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-navy">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {c.desc}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-navy/10 pt-5 text-xs">
                  <div>
                    <div className="font-semibold uppercase tracking-widest text-navy/50">
                      Fee
                    </div>
                    <div className="mt-1 text-sm font-semibold text-navy">
                      {c.fee}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold uppercase tracking-widest text-navy/50">
                      Speed
                    </div>
                    <div className="mt-1 text-sm font-semibold text-navy">
                      {c.speed}
                    </div>
                  </div>
                </div>
              </motion.article>
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f7f8fa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                How it works
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Four steps. About six minutes.
            </h2>
          </AnimatedSection>

          <StaggerGroup className="relative mt-16 grid gap-6 md:grid-cols-4">
            {/* connecting line */}
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block" />
            
            {STEPS.map((s, i) =>
            <motion.div
              key={s.title}
              variants={itemVariants}
              className="relative rounded-3xl border border-navy/10 bg-white p-6">
              
                <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-brand bg-white text-base font-bold text-brand">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {s.desc}
                </p>
              </motion.div>
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Where we send
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              100+ destinations, 5 continents.
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) =>
            <motion.div
              key={d.region}
              variants={itemVariants}
              className="rounded-3xl border border-navy/10 bg-white p-6 transition-shadow hover:shadow-lg">
              
                <div className="flex items-center gap-2">
                  <GlobeIcon className="h-4 w-4 text-brand" />
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-navy">
                    {d.region}
                  </h3>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-sm">
                  {d.countries.map((c) =>
                <li
                  key={c}
                  className="flex items-center gap-2 text-navy/70">
                  
                      <CheckCircle2Icon className="h-3.5 w-3.5 text-brand" />
                      <span>{c}</span>
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* Trust strip */}
      <AnimatedSection className="bg-navy py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
          <TrustItem
            icon={ShieldCheckIcon}
            title="CBK Regulated"
            desc="Every transaction is fully compliant with Central Bank of Kenya AML/KYC rules." />
          
          <TrustItem
            icon={ZapIcon}
            title="Instant SMS receipts"
            desc="Sender and receiver get an instant tracking reference the moment funds are released." />
          
          <TrustItem
            icon={ClockIcon}
            title="Open daily"
            desc="Most branches operate Mon–Sat 8:00 AM – 7:00 PM. Eastleigh is open 7 days a week." />
          
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-center gap-3 px-6 sm:flex-row">
          <Link
            to="/branches"
            className="group inline-flex items-center justify-between gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-600">
            
            Start a transfer at a branch
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
          <a
            href="https://wa.me/254700000000"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
            
            Chat on WhatsApp
          </a>
        </div>
      </AnimatedSection>
    </>);

}
function TrustItem({
  icon: Icon,
  title,
  desc






}: {icon: ComponentType<{className?: string;}>;title: string;desc: string;}) {
  return (
    <div>
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>);

}