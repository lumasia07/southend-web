import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircularTechBanner } from './CircularTechBanner';

const bannersData = [
  {
    src: "/sfb-poll-banner-1-v2.png",
    alt: "sfb-poll-banner-1",
    label: "RATES // EXCHANGE",
    colorClass: "border-brand",
    shadowClass: "shadow-brand/35",
    pulseColor: "238, 90, 42",
    title: "Southend Forex Bureau",
    description: "Experience competitive, transparent currency exchange rates with a personal touch. Walk into any of our branches for swift retail forex services, bulk transactions, and travel currencies, supported by our friendly team dedicated to business growth in Kenya."
  },
  {
    src: "/sfb-poll-banner-2-v2.png",
    alt: "sfb-poll-banner-2",
    label: "REMITTANCE // IMT",
    colorClass: "border-sky-500",
    shadowClass: "shadow-sky-500/35",
    pulseColor: "14, 165, 233",
    title: "Global Money Transfer Network",
    description: "Connecting you directly to over 100 countries. Fully licensed by the Central Bank of Kenya (CBK) for International Money Transfers (IMT) in 2025, our remittance channels guarantee safe, reliable, and swift settlements to help families and businesses thrive."
  },
  {
    src: "/sfb-poll-banner-3-v2.png",
    alt: "sfb-poll-banner-3",
    label: "PARTNERS // GROW",
    colorClass: "border-emerald-500",
    shadowClass: "shadow-emerald-500/35",
    pulseColor: "16, 185, 129",
    title: "Your Growth Partner",
    description: "Built in Kenya and trusted globally by thousands of clients. We provide custom treasury services, hedging capabilities, and dedicated support lines to secure stable foreign exchange operations for local importing companies and enterprises."
  }
];

export function TechHologram() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused || activeModalIndex !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, activeModalIndex]);

  // Compute position, scale, opacity, and zIndex for each banner dynamically (large W-48 size)
  const getPositionStyle = (i: number) => {
    const diff = (i - activeIndex + 3) % 3;
    if (diff === 0) {
      // Active center position (Scale 1.4 on W-48 base is massive and centered)
      return {
        x: 179,
        y: 179,
        scale: 1.4,
        opacity: 1,
        zIndex: 30,
      };
    } else if (diff === 1) {
      // Faded Top Right position
      return {
        x: 348,
        y: 20,
        scale: 0.6,
        opacity: 0.45,
        zIndex: 10,
      };
    } else {
      // Faded Top Left position
      return {
        x: 10,
        y: 20,
        scale: 0.6,
        opacity: 0.45,
        zIndex: 10,
      };
    }
  };

  // Compute line connection destination coordinates
  const getLineCoords = (i: number) => {
    const diff = (i - activeIndex + 3) % 3;
    if (diff === 0) {
      // Point center (line length is 0)
      return { x: 275, y: 275, opacity: 0, color: "stroke-brand/0" };
    } else if (diff === 1) {
      // Top-Right Node center (348 + 96, 20 + 96) = (444, 116)
      return { x: 444, y: 116, opacity: 0.4, color: "stroke-sky-500/30" };
    } else {
      // Top-Left Node center (10 + 96, 20 + 96) = (106, 116)
      return { x: 106, y: 116, opacity: 0.4, color: "stroke-emerald-500/30" };
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Desktop Orbit Console */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="hidden lg:flex relative w-[550px] h-[550px] items-center justify-center select-none"
      >
        {/* Core tech rotating dials (behind active banner) */}
        <div className="absolute w-[240px] h-[240px] top-[155px] left-[155px] z-0 pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-dashed border-brand/20 animate-spin-slow" />
          <div className="absolute -inset-4 rounded-full border-2 border-dotted border-white/5 animate-spin-slow-reverse" />
          <div className="absolute inset-4 rounded-full bg-brand/[0.02] blur-xl" />
        </div>

        {/* Dynamic Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {bannersData.map((_, i) => {
            const coords = getLineCoords(i);
            return (
              <motion.path
                key={`line-${i}`}
                d={`M 275 275 L ${coords.x} ${coords.y}`}
                animate={{ 
                  d: `M 275 275 L ${coords.x} ${coords.y}`, 
                  opacity: coords.opacity,
                  strokeDashoffset: [0, -24]
                }}
                transition={{ 
                  d: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }, // Smooth expoOut easing
                  opacity: { duration: 0.3 },
                  strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
                }}
                className={coords.color}
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="transparent"
              />
            );
          })}
        </svg>

        {/* Orbiting Satellites */}
        {bannersData.map((b, i) => {
          const style = getPositionStyle(i);
          const isActive = i === activeIndex;
          
          return (
            <motion.div
              key={`satellite-${i}`}
              className="absolute top-0 left-0 pointer-events-auto"
              animate={style}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }} // Smooth expoOut easing
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <CircularTechBanner
                src={b.src}
                alt={b.alt}
                label={b.label}
                colorClass={b.colorClass}
                shadowClass={b.shadowClass}
                pulseColor={b.pulseColor}
                title={b.title}
                description={b.description}
                isActive={isActive}
                onActivate={() => setActiveIndex(i)}
                isModalOpen={activeModalIndex === i}
                onOpenModal={() => setActiveModalIndex(i)}
                onCloseModal={() => setActiveModalIndex(null)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile & Tablet View: Normal Display */}
      <div className="flex lg:hidden flex-col items-center gap-6 w-full max-w-md mt-6 px-4">
        {/* Row/Flex Wrap of Satellites */}
        <div className="flex flex-wrap justify-center gap-8 w-full mt-4">
          {bannersData.map((b, i) => (
            <CircularTechBanner
              key={`mobile-banner-${i}`}
              src={b.src}
              alt={b.alt}
              label={b.label}
              colorClass={b.colorClass}
              shadowClass={b.shadowClass}
              pulseColor={b.pulseColor}
              title={b.title}
              description={b.description}
              isActive={true}
              isModalOpen={activeModalIndex === i}
              onOpenModal={() => setActiveModalIndex(i)}
              onCloseModal={() => setActiveModalIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
