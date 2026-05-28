import React, { Children, Component } from 'react';
import {
  RefreshCwIcon,
  GlobeIcon,
  LandmarkIcon,
  SmartphoneIcon,
  SendIcon,
  BanknoteIcon,
  ArrowRightIcon } from
'lucide-react';
import { motion } from 'framer-motion';
const services = [
{
  icon: RefreshCwIcon,
  title: 'Foreign Exchange',
  desc: 'Forex bureau services that include buying and selling all major foreign currencies at competitive rates.'
},
{
  icon: GlobeIcon,
  title: 'Global Remittance',
  desc: 'International money remittance services allowing you to send and receive money anywhere on the globe.'
},
{
  icon: LandmarkIcon,
  title: 'Agency Banking',
  desc: 'Quick and simple banking model for your convenience — includes KCB Mtaani and Equity, among others.'
},
{
  icon: SmartphoneIcon,
  title: 'M-Pesa Services',
  desc: 'M-Pesa deposits and withdrawal services with guaranteed float availability regardless of the amount.'
},
{
  icon: SendIcon,
  title: 'Western Union',
  desc: 'Send and/or receive money through our global partner Western Union at a terminal located in our premises.'
},
{
  icon: BanknoteIcon,
  title: 'MoneyGram',
  desc: 'Southend is a MoneyGram authorised outlet allowing you to enjoy convenient MoneyGram services.'
}];

export function Services() {
  return (
    <section id="services" className="relative bg-[#f7f8fa] py-24">
      <div className="absolute inset-0 -z-10 bg-grid-light opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              What we do
            </span>
            <span className="h-px w-10 bg-brand" />
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-navy/70">
            Perfectly in tune with the dynamic pulse of the market —
            continuously adapting to meet Kenya's ever-changing financial needs.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}>
          
          {services.map((s, i) =>
          <ServiceCard key={s.title} {...s} index={i} />
          )}
        </motion.div>
      </div>
    </section>);

}
function ServiceCard({
  icon: Icon,
  title,
  desc,
  index







}: {icon: ComponentType<{className?: string;}>;title: string;desc: string;index: number;}) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 22
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
      
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs font-semibold text-navy/30">0{index + 1}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/70">{desc}</p>
      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
        
        Learn more <ArrowRightIcon className="h-3.5 w-3.5" />
      </a>
    </motion.article>);

}