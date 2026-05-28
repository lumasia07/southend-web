import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  TargetIcon,
  HeartIcon,
  TrendingUpIcon,
  AwardIcon,
  UsersIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircle2Icon,
  ArrowRightIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  AnimatedSection,
  StaggerGroup,
  itemVariants } from
'../components/AnimatedSection';
import { useScreenInit } from '../useScreenInit.js';
const VALUES = [
{
  icon: ShieldCheckIcon,
  title: 'Integrity',
  desc: 'Every shilling, every rate, every receipt — completely transparent. CBK regulated, audited annually.'
},
{
  icon: HeartIcon,
  title: 'Personal touch',
  desc: "You will remember your dealer's name. We are not a kiosk — we are your financial partner."
},
{
  icon: TrendingUpIcon,
  title: 'Sharper rates',
  desc: 'We earn on volume, not on hidden spreads. The savings stay with you.'
},
{
  icon: UsersIcon,
  title: 'Customer obsession',
  desc: 'From walk-in tourists to import-export SMEs — every customer gets the same attentive service.'
}];

const MILESTONES = [
{
  year: '2009',
  label: 'Founded',
  desc: 'Southend Forex Bureau opens its doors on Moi Avenue, Nairobi.'
},
{
  year: '2013',
  label: 'Western Union',
  desc: 'Joins the Western Union agent network — first remittance corridor.'
},
{
  year: '2017',
  label: 'MoneyGram',
  desc: 'Becomes a MoneyGram authorised outlet, expanding the global rails.'
},
{
  year: '2020',
  label: 'M-Pesa integration',
  desc: 'Adds M-Pesa float, deposits and withdrawals across all branches.'
},
{
  year: '2023',
  label: 'IMT licence',
  desc: 'Granted full International Money Transfer licence by the CBK.'
},
{
  year: '2026',
  label: 'Today',
  desc: '8 branches across Kenya, 50,000+ customers served.'
}];

const LEADERSHIP = [
{
  name: 'Aisha Mwangi',
  role: 'Chief Executive Officer',
  bio: '15+ years in cross-border payments. Previously led FX desks at two East African banks.',
  photo:
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80'
},
{
  name: 'David Otieno',
  role: 'Head of Operations',
  bio: 'Built our agent network from 1 branch to 8. Obsessed with branch experience and uptime.',
  photo:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
},
{
  name: 'Sarah Kamau',
  role: 'Head of Compliance',
  bio: 'CBK-certified AML/KYC specialist. Keeps Southend the safest place to move your money.',
  photo:
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
},
{
  name: 'Brian Mutua',
  role: 'Head of Treasury',
  bio: 'Manages our wholesale FX book. Ensures liquidity across all 15+ currency pairs.',
  photo:
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
}];

export function Corporate() {
  useScreenInit();
  return (
    <>
      <PageHero
        eyebrow="Corporate"
        title={
        <>
            The story behind <span className="text-brand">Southend.</span>
          </>
        }
        subtitle="Born in Nairobi in 2009. Built around one idea: global finance should still feel personal."
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Corporate'
        }]
        } />
      

      {/* Mission + image */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Southend team at work"
                className="h-[560px] w-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 left-6 h-1.5 w-28 bg-brand"
              aria-hidden="true" />
            
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Our mission
              </span>
              <span className="h-px w-12 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Make global finance feel like a conversation.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/70">
              Banks and apps treat money movement as a transaction. We treat it
              as a relationship. Southend Forex &amp; Money Remittance was
              founded in 2009 to bring world-class FX and IMT services to Kenya
              — without the bureaucracy or the hidden spreads.
            </p>
            <p className="mt-3 text-base leading-relaxed text-navy/70">
              Today, we serve over 50,000 customers across 8 branches and four
              global remittance networks. We are fully CBK regulated, audited
              annually, and rated 4.9 out of 5 by our customers.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
              <Stat value="15+" label="Years operating" />
              <Stat value="50K+" label="Customers served" />
              <Stat value="100+" label="Countries reached" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f8fa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                What we stand for
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Our values
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) =>
            <motion.div
              key={v.title}
              variants={itemVariants}
              className="rounded-3xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
              
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {v.desc}
                </p>
              </motion.div>
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection className="text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Our journey
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Sixteen years, one mission.
            </h2>
          </AnimatedSection>

          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand/30 via-brand/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
            
            <StaggerGroup className="space-y-12">
              {MILESTONES.map((m, i) =>
              <motion.div
                key={m.year}
                variants={itemVariants}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                  <div className="flex md:flex-1 md:justify-end">
                    <div
                    className={`relative rounded-3xl border border-navy/10 bg-white p-6 shadow-sm md:max-w-sm ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    
                      <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                        {m.year}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold tracking-tight text-navy">
                        {m.label}
                      </h3>
                      <p className="mt-2 text-sm text-navy/70">{m.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-brand text-white shadow-md md:left-1/2">
                    <CheckCircle2Icon className="h-4 w-4" />
                  </div>
                  <div className="hidden md:block md:flex-1" />
                </motion.div>
              )}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#f7f8fa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Leadership
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              The people behind Southend.
            </h2>
          </AnimatedSection>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((l) =>
            <motion.figure
              key={l.name}
              variants={itemVariants}
              className="group overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
              
                <div className="aspect-[4/5] overflow-hidden bg-navy/5">
                  <img
                  src={l.photo}
                  alt={l.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <figcaption className="p-5">
                  <div className="text-base font-semibold tracking-tight text-navy">
                    {l.name}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-widest text-brand">
                    {l.role}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-navy/60">
                    {l.bio}
                  </p>
                </figcaption>
              </motion.figure>
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="grid items-center gap-10 rounded-3xl border border-navy/10 bg-navy p-10 text-white lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="h-6 w-6 text-brand" />
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  Regulation &amp; trust
                </div>
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                CBK regulated. AML compliant. Annually audited.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Southend Forex &amp; Money Remittance holds a Class A Forex
                Bureau licence and a full IMT licence from the Central Bank of
                Kenya. We follow strict KYC/AML processes on every transaction
                and publish annual compliance reports.
              </p>
            </div>
            <ul className="space-y-3 text-sm">
              {[
              'CBK Class A Forex Bureau licence',
              'CBK International Money Transfer licence',
              'Annual independent audit (Big 4)',
              'Tier-1 partner: Western Union, MoneyGram',
              'Member, Kenya Forex Bureaus Association'].
              map((c) =>
              <li key={c} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <span>{c}</span>
                </li>
              )}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#f7f8fa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Get in touch
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Talk to us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-navy/70">
              Whether you're an SME with recurring FX needs or just want to ask
              a question — we read every message.
            </p>
          </AnimatedSection>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1.3fr_1fr]">
            <AnimatedSection>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8">
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Aisha Mwangi" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com" />
                  
                  <Field
                    label="Phone"
                    name="phone"
                    placeholder="+254 700 000 000" />
                  
                  <Field
                    label="Subject"
                    name="subject"
                    placeholder="FX inquiry" />
                  
                </div>
                <label className="mt-4 block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-navy/60">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help."
                    className="mt-1.5 w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand" />
                  
                </label>
                <button
                  type="submit"
                  className="group mt-5 inline-flex items-center gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-600">
                  
                  Send message
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-navy">
                  Head office
                </h3>
                <p className="mt-2 text-sm text-navy/70">
                  Southend House, Moi Avenue, Nairobi, Kenya
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <a
                    href="tel:+254700000000"
                    className="flex items-center gap-3 text-navy/80 hover:text-brand">
                    
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                      <PhoneIcon className="h-4 w-4" />
                    </span>
                    +254 700 000 000
                  </a>
                  <a
                    href="mailto:hello@southendforex.co.ke"
                    className="flex items-center gap-3 text-navy/80 hover:text-brand">
                    
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                      <MailIcon className="h-4 w-4" />
                    </span>
                    hello@southendforex.co.ke
                  </a>
                  <div className="flex items-start gap-3 text-navy/80">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                      <MapPinIcon className="h-4 w-4" />
                    </span>
                    Mon–Fri · 8:00 AM – 6:00 PM
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-navy/10 bg-navy/[0.02] p-4 text-xs text-navy/70">
                  <div className="flex items-center gap-2 font-semibold text-navy">
                    <AwardIcon className="h-4 w-4 text-brand" /> 4.9 / 5
                    customer rating
                  </div>
                  <p className="mt-1.5">
                    Based on 2,400+ reviews across Google and Facebook.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>);

}
function Field({
  label,
  name,
  type = 'text',
  placeholder





}: {label: string;name: string;type?: string;placeholder?: string;}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-navy/60">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand" />
      
    </label>);

}
function Stat({ value, label }: {value: string;label: string;}) {
  return (
    <div>
      <div className="text-3xl font-bold tracking-tight text-navy">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-widest text-navy/60">
        {label}
      </div>
    </div>);

}