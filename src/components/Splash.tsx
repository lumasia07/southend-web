import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { ChevronRight } from 'lucide-react';

interface SplashProps {
  onComplete: () => void;
}

export function Splash({ onComplete }: SplashProps) {
  const [stage, setStage] = useState<'rings' | 'logo'>('rings');
  const [showLogoRings, setShowLogoRings] = useState(true);

  useEffect(() => {
    // Disable body scroll when splash is active
    document.body.style.overflow = 'hidden';

    // Sequence of animations (reduced to 11 seconds total):
    // 1. Concentric rings expand and spin for 2.2 seconds.
    // 2. Logo emerges and expands at 2.2 seconds.
    const logoTimer = setTimeout(() => {
      setStage('logo');
    }, 2200);

    // 3. Discard the rings for the last 5 seconds (starts at 6.0 seconds)
    const discardRingsTimer = setTimeout(() => {
      setShowLogoRings(false);
    }, 6000);

    // 4. Complete splash screen at 11.0 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 11000);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(logoTimer);
      clearTimeout(discardRingsTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -20,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
      }}
      onClick={onComplete}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050d18] cursor-pointer overflow-hidden select-none bg-scanlines"
    >
      {/* Background cyber grid & glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />

      {/* Stage 1: Concentric Rings Expand (0.0s - 2.2s) */}
      {stage === 'rings' && (
        <div className="relative w-96 h-96 aspect-square flex-shrink-0 flex items-center justify-center">
          {/* Inner solid border ring - guaranteed perfectly circular */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0, rotate: 0 }}
            animate={{ scale: 1.5, opacity: [0, 1, 0], rotate: 360 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute w-48 h-48 aspect-square flex-shrink-0 rounded-full border border-brand/40 shadow-[0_0_20px_rgba(238,90,42,0.15)] pointer-events-none"
          />

          {/* Middle dotted ring rotating reverse */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0, rotate: 360 }}
            animate={{ scale: 1.5, opacity: [0, 0.8, 0], rotate: 0 }}
            transition={{ duration: 2.2, ease: 'easeOut', delay: 0.15 }}
            className="absolute w-56 h-56 aspect-square flex-shrink-0 rounded-full border-2 border-dotted border-white/10 pointer-events-none"
          />

          {/* Outer dashed ring */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0, rotate: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.6, 0], rotate: -360 }}
            transition={{ duration: 2.2, ease: 'easeOut', delay: 0.3 }}
            className="absolute w-64 h-64 aspect-square flex-shrink-0 rounded-full border border-dashed border-sky-500/20 pointer-events-none"
          />
        </div>
      )}

      {/* Stage 2: Logo Burst & Reveal Stage (2.2s - 26.0s) */}
      <AnimatePresence>
        {stage === 'logo' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Shockwave gradient flare expansion */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3.5, opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-64 h-64 aspect-square flex-shrink-0 rounded-full bg-gradient-to-r from-brand via-orange-500/30 to-transparent blur-2xl pointer-events-none"
            />
            
            {/* Southend Logo scaling up and fading in */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4 z-10 flex-shrink-0"
            >
              {/* Logo container enclosing rotating concentric rings (guaranteed perfectly circular by setting explicit dimensions) */}
              <div className="relative w-80 h-80 aspect-square flex-shrink-0 flex items-center justify-center">
                <AnimatePresence>
                  {showLogoRings && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 1.0 } }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none aspect-square flex-shrink-0"
                    >
                      {/* Inner dotted ring */}
                      <div className="absolute w-[240px] h-[240px] aspect-square flex-shrink-0 rounded-full border-2 border-dotted border-white/10 animate-spin-slow-reverse" />
                      
                      {/* Outer dashed ring */}
                      <div className="absolute w-[272px] h-[272px] aspect-square flex-shrink-0 rounded-full border border-dashed border-brand/35 animate-spin-slow" />
                      
                      {/* Outer thin ring */}
                      <div className="absolute w-[304px] h-[304px] aspect-square flex-shrink-0 rounded-full border border-white/5 animate-spin-slow" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Ambient orange glow */}
                <div className="absolute w-[200px] h-[200px] aspect-square flex-shrink-0 bg-brand/5 rounded-full blur-xl pointer-events-none" />

                {/* Logo directly rendered without borders */}
                <Logo variant="dark" className="h-28 md:h-32 relative z-10 object-contain" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Skip Button (Bottom Right) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className="absolute bottom-8 right-8 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 shadow-lg"
      >
        <span>Skip Intro</span>
        <ChevronRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}
