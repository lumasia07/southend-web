import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Globe, Landmark } from 'lucide-react';

const corePillars = [
  {
    title: 'Foreign Exchange',
    desc: 'Fully CBK-licensed forex bureau services. Buy or sell all major global currencies with high-volume competitive rates, tailored corporate pricing, and travel money ready for instant cash collection.',
    image: '/sfb-poll-banner-1-v2.png',
    icon: RefreshCw,
    glowColor: 'shadow-brand/25',
    borderColor: 'border-brand',
    activeTextColor: 'text-brand',
    lineColor: 'bg-brand'
  },
  {
    title: 'Global Remittance',
    desc: 'Licensed International Money Transfer (IMT) services. Seamlessly send and receive money across 100+ countries with robust compliance, swift bank settlements, and competitive FX conversions.',
    image: '/sfb-poll-banner-2-v2.png',
    icon: Globe,
    glowColor: 'shadow-sky-500/25',
    borderColor: 'border-sky-500',
    activeTextColor: 'text-sky-600',
    lineColor: 'bg-sky-500'
  },
  {
    title: 'Corporate Treasury',
    desc: 'Customized hedging, liquidity matching, and structured treasury solutions built for local importing enterprises. Secure stable foreign exchange operations with dedicated support.',
    image: '/sfb-poll-banner-3-v2.png',
    icon: Landmark,
    glowColor: 'shadow-emerald-500/25',
    borderColor: 'border-emerald-500',
    activeTextColor: 'text-emerald-600',
    lineColor: 'bg-emerald-500'
  }
];

export function Services() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = corePillars[activePillarIndex];

  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 text-slate-900">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl text-slate-900">
            Financial Pillars Built for Growth
          </h2>
        </div>

        {/* Storeyed 2-Column Story Layout */}
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Elegant Pillar Selection List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {corePillars.map((pillar, i) => {
              const isActive = activePillarIndex === i;
              return (
                <div
                  key={pillar.title}
                  onMouseEnter={() => setActivePillarIndex(i)}
                  onClick={() => setActivePillarIndex(i)}
                  className="group flex gap-4 cursor-pointer select-none"
                >
                  {/* Left indicator line */}
                  <div className={`w-[3px] rounded-full transition-all duration-300 ${isActive ? pillar.lineColor + ' h-auto' : 'bg-slate-200 h-10 group-hover:bg-slate-300'}`} />

                  {/* Title and descriptions */}
                  <div className="flex flex-col py-1">
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isActive ? pillar.activeTextColor : 'text-slate-500 group-hover:text-slate-900'}`}>
                      {pillar.title}
                    </h3>
                    <motion.p
                      initial={false}
                      animate={{
                        height: isActive ? 'auto' : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 8 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="text-slate-600 text-xs sm:text-sm leading-relaxed overflow-hidden max-w-md"
                    >
                      {pillar.desc}
                    </motion.p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Floating Large Tech Bezel Circle */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer decorative spinning dials */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-slate-200 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-10 rounded-full border-2 border-dotted border-slate-300/60 animate-spin-slow-reverse pointer-events-none" />

              {/* Central Floating Image Circle */}
              <div className={`relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-slate-100 overflow-hidden shadow-2xl shadow-slate-900/5 transition-all duration-500`}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePillarIndex}
                    src={activePillar.image}
                    alt={activePillar.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}