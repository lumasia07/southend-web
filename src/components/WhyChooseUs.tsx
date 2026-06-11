import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Lock,
  Award,
  Percent,
  Headphones } from 'lucide-react';
import { Logo } from './Logo';

const items = [
  {
    icon: Zap,
    title: 'Fast Transactions',
    desc: 'Instant processing pipelines ensuring your money transfers complete without delays.',
    glowClass: 'group-hover:from-brand group-hover:to-orange-500/30',
    activeText: 'group-hover:text-brand'
  },
  {
    icon: ShieldCheck,
    title: 'CBK Forex Bureau',
    desc: 'Licensed by the Central Bank of Kenya as a forex bureau and IMT provider since 2025.',
    glowClass: 'group-hover:from-sky-500 group-hover:to-blue-500/30',
    activeText: 'group-hover:text-sky-400'
  },
  {
    icon: Lock,
    title: 'Secure & Stable',
    desc: 'Regulated money transfers that safeguard your funds and protect user privacy.',
    glowClass: 'group-hover:from-emerald-500 group-hover:to-teal-500/30',
    activeText: 'group-hover:text-emerald-400'
  },
  {
    icon: Award,
    title: 'Quality Service',
    desc: 'Premium customer care offering personalized FX support for every retail and corporate client.',
    glowClass: 'group-hover:from-yellow-500 group-hover:to-amber-500/30',
    activeText: 'group-hover:text-yellow-400'
  },
  {
    icon: Percent,
    title: 'Custom FX Rates',
    desc: 'Tailored exchange rates for bulk transactions, maximizing your currency value.',
    glowClass: 'group-hover:from-brand group-hover:to-orange-500/30',
    activeText: 'group-hover:text-brand'
  },
  {
    icon: Headphones,
    title: 'Expert Consulting',
    desc: 'Direct channels to assist you with corporate treasury hedging and market liquidity.',
    glowClass: 'group-hover:from-sky-500 group-hover:to-blue-500/30',
    activeText: 'group-hover:text-sky-400'
  }
];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#050d18] py-24 text-white"
    >
      {/* Background cyber grid & neon gradients */}
      <div className="absolute inset-0 bg-cyber-grid bg-scanlines opacity-10 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(238,90,42,0.1),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.08),transparent_45%)]" />

      {/* World map silhouette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2560px-World_map_-_low_resolution.svg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'invert(1) brightness(2)'
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Why Us
            </span>
            <span className="h-px w-10 bg-brand" />
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Why Choose <span className="bg-gradient-to-r from-brand to-orange-400 bg-clip-text text-transparent">Southend</span>
          </h2>
        </div>

        {/* Honeycomb Grid for Desktop */}
        <div className="mt-16 hidden lg:block">
          <Honeycomb />
        </div>

        {/* Mobile / tablet list */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {items.map((it) => (
            <FeatureTile key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureTile({
  icon: Icon,
  title,
  desc,
  activeText
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  activeText: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:border-brand/40">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className={`mt-4 text-lg font-semibold tracking-tight text-white transition-colors ${activeText}`}>
        {title}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
        {desc}
      </p>
    </div>
  );
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
    filter: "drop-shadow(0px 15px 25px rgba(238, 90, 42, 0.25))",
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
    filter: "drop-shadow(0px 15px 25px rgba(5, 13, 24, 0.4))",
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
  delay,
  glowClass,
  activeText
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  delay: number;
  glowClass: string;
  activeText: string;
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
    >
      {/* Outer border glowing clip hexagons */}
      <div className={`clip-hex absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 transition-all duration-300 ${glowClass}`} />
      
      {/* Inner background hexagon fill */}
      <div className="clip-hex absolute inset-[2px] bg-[#050d18] transition-colors duration-300 group-hover:bg-[#050d18]/90" />
      
      {/* Content wrapper */}
      <div className="relative flex h-full flex-col items-center justify-center px-7 text-center z-10">
        <motion.div
          variants={iconVariants}
          className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-white/60 group-hover:bg-brand/10 group-hover:text-brand transition-colors duration-300"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
        
        <h3 className={`mt-3 text-[13px] font-bold tracking-tight text-white transition-colors duration-300 ${activeText}`}>
          {title}
        </h3>
        
        <p className="mt-1.5 text-[9px] leading-snug text-white/50 group-hover:text-white/80 transition-colors duration-300">
          {desc}
        </p>
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
    >
      {/* Glowing border hexagon */}
      <div className="clip-hex absolute inset-0 bg-gradient-to-br from-brand to-orange-500 animate-pulse" />
      
      {/* Inner fill hexagon */}
      <div className="clip-hex absolute inset-[2px] bg-[#050d18]" />
      
      {/* Centered Logo */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white z-10">
        <Logo variant="dark" className="h-14 transition-transform duration-300 group-hover:scale-105" />
      </div>
    </motion.div>
  );
}