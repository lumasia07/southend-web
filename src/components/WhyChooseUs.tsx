import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  ZapIcon,
  ShieldCheckIcon,
  LockIcon,
  AwardIcon,
  PercentIcon,
  HeadphonesIcon } from
'lucide-react';
import { Logo } from './Logo';
const items = [
{
  icon: ZapIcon,
  title: 'Fast Transactions',
  desc: 'Southend offers fast transactions, ensuring your money reaches its destination quickly with minimal hassle.'
},
{
  icon: ShieldCheckIcon,
  title: 'CBK Forex Bureau',
  desc: 'Licensed by the Central Bank of Kenya as a forex bureau — and IMT licensed since 2025 for international transfers.'
},
{
  icon: LockIcon,
  title: 'Secure & Stable',
  desc: 'Secure, stable transfers that protect your data and ensure reliable transactions every time.'
},
{
  icon: AwardIcon,
  title: 'Quality Service',
  desc: 'Committed to providing quality, customer-oriented support for every transfer, every time.'
},
{
  icon: PercentIcon,
  title: 'Custom FX Rates',
  desc: 'Customised exchange rates that provide tailored solutions for your specific needs and maximum value.'
},
{
  icon: HeadphonesIcon,
  title: 'Free Consulting',
  desc: 'Free consulting to help you navigate global money transfer with expert advice and personalised service.'
}];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-navy py-24 text-white">
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(238,90,42,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(238,90,42,0.1),transparent_45%)]" />
      {/* World map silhouette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2560px-World_map_-_low_resolution.svg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'invert(1) brightness(2)'
        }}
        aria-hidden="true" />
      

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Why us
            </span>
            <span className="h-px w-10 bg-brand" />
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Why Choose <span className="text-brand">Southend</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Reliable, secure, and cost-effective. We prioritise your security
            with advanced encryption — whether you're sending money to family or
            making business payments.
          </p>
        </div>

        {/* Honeycomb */}
        <div className="mt-16 hidden lg:block">
          <Honeycomb />
        </div>

        {/* Mobile / tablet grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {items.map((it) =>
          <FeatureTile key={it.title} {...it} />
          )}
        </div>
      </div>
    </section>);

}
function FeatureTile({
  icon: Icon,
  title,
  desc






}: {icon: ComponentType<{className?: string;}>;title: string;desc: string;}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-brand">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>);

}
const centerVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  show: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 12,
      delay
    }
  }),
  hover: {
    scale: 1.06,
    y: -4,
    filter: "drop-shadow(0px 20px 30px rgba(238, 90, 42, 0.35))",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const cellVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay
    }
  }),
  hover: {
    scale: 1.06,
    y: -6,
    filter: "drop-shadow(0px 20px 30px rgba(238, 90, 42, 0.22))",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: 12,
    scale: 1.15,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

function Honeycomb() {
  return (
    <motion.div
      className="relative mx-auto max-w-5xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="grid grid-cols-12 gap-x-4 gap-y-2">
        {/* Top row */}
        <div className="col-span-3 col-start-3">
          <HexCell {...items[0]} delay={0.25} />
        </div>
        <div className="col-span-3 col-start-8">
          <HexCell {...items[1]} delay={0.3} />
        </div>
        {/* Middle row */}
        <div className="col-span-3 col-start-1 -mt-12">
          <HexCell {...items[2]} delay={0.35} />
        </div>
        <div className="col-span-3 col-start-5 -mt-12">
          <HexCenter delay={0.1} />
        </div>
        <div className="col-span-3 col-start-9 -mt-12">
          <HexCell {...items[3]} delay={0.4} />
        </div>
        {/* Bottom row */}
        <div className="col-span-3 col-start-3 -mt-12">
          <HexCell {...items[4]} delay={0.45} />
        </div>
        <div className="col-span-3 col-start-8 -mt-12">
          <HexCell {...items[5]} delay={0.5} />
        </div>
      </div>
    </motion.div>
  );
}

function HexCell({
  icon: Icon,
  title,
  desc,
  delay
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      custom={delay}
      variants={cellVariants}
      className="group relative aspect-[1/1.1547] cursor-pointer"
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      animate="rest"
      style={{ filter: "drop-shadow(0px 10px 15px rgba(10, 25, 41, 0.08))" }}
    >
      <div className="clip-hex absolute inset-0 bg-gradient-to-br from-white to-white/90" />
      <div className="clip-hex absolute inset-[2px] bg-white transition-colors duration-300 group-hover:bg-brand/[0.01]" />
      <div className="relative flex h-full flex-col items-center justify-center px-7 text-center">
        <motion.div
          variants={iconVariants}
          className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
        <h3 className="mt-3 text-base font-semibold tracking-tight text-brand">
          {title}
        </h3>
        <p className="mt-1.5 text-[11px] leading-snug text-navy/70">{desc}</p>
      </div>
    </motion.div>
  );
}

function HexCenter({ delay }: { delay: number }) {
  return (
    <motion.div
      custom={delay}
      variants={centerVariants}
      className="group relative aspect-[1/1.1547]"
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      style={{ filter: "drop-shadow(0px 10px 15px rgba(238, 90, 42, 0.15))" }}
    >
      <div className="clip-hex absolute inset-0 bg-brand" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <Logo variant="dark" className="h-20 md:h-24 mix-blend-screen transition-transform duration-300 group-hover:scale-105" />
      </div>
    </motion.div>
  );
}