import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ShieldCheck, Cpu, Network } from 'lucide-react';

interface CircularTechBannerProps {
  src: string;
  alt: string;
  label: string;
  colorClass?: string; // Border color e.g., "border-brand"
  shadowClass?: string; // Glowing shadow e.g., "shadow-brand/30"
  className?: string;
  pulseColor?: string; // RGB value string for gradient glow
  title?: string;
  description?: string;
  isActive?: boolean;
  onActivate?: () => void;
  isModalOpen?: boolean;
  onOpenModal?: () => void;
  onCloseModal?: () => void;
}

export function CircularTechBanner({
  src,
  alt,
  label,
  colorClass = "border-brand",
  shadowClass = "shadow-brand/20",
  className = "",
  pulseColor = "238, 90, 42",
  title = "Featured Banner",
  description = "Click to view full details",
  isActive = true,
  onActivate,
  isModalOpen = false,
  onOpenModal,
  onCloseModal
}: CircularTechBannerProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (isActive && onOpenModal) {
      onOpenModal();
    } else if (onActivate) {
      e.stopPropagation();
      onActivate();
    }
  };

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* Outer slow-spinning dashed ring */}
        <div className="absolute -inset-4 rounded-full border border-dashed border-white/10 group-hover:border-brand/40 animate-spin-slow pointer-events-none" />
        
        {/* Inner fast-spinning double ring (reverse direction) */}
        <div className="absolute -inset-2 rounded-full border-2 border-dotted border-white/20 group-hover:border-white/50 animate-spin-slow-reverse pointer-events-none" />
        
        {/* Ambient radial blur glow */}
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" 
          style={{
            background: `radial-gradient(circle, rgba(${pulseColor}, 0.7) 0%, transparent 70%)`
          }}
        />

        {/* Circular Banner Card */}
        <motion.div
          whileHover={{ scale: isActive ? 1.05 : 1.01 }}
          whileTap={{ scale: 0.98 }}
          className={`relative w-32 h-32 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 ${colorClass} bg-navy-900 shadow-xl ${shadowClass} flex items-center justify-center cursor-pointer`}
          onClick={handleClick}
        >
          {/* Circular banner image */}
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-3 select-none">
            <Maximize2 className="w-5 h-5 text-white mb-1 animate-bounce" />
            <span className="text-[9px] uppercase font-bold tracking-widest text-brand-300">Expand</span>
          </div>
        </motion.div>
      </div>

      {/* Expandable High-Tech Modal */}
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
              {/* Blurry dark backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onCloseModal}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative max-w-4xl w-full bg-[#050d18] border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-5 md:p-8 z-10 bg-scanlines text-white"
              >
                {/* Corner tech accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand" />

                {/* Close Button */}
                <button
                  onClick={onCloseModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200 z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-5 gap-8 items-center">
                  {/* Visual side (Image) - Rounded Circle */}
                  <div className="md:col-span-2 flex items-center justify-center">
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-brand bg-black/60 shadow-2xl">
                      <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Info side (Story details) */}
                  <div className="md:col-span-3 text-white flex flex-col justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand/20 border border-brand/40 text-brand text-[9px] font-mono uppercase tracking-widest font-semibold animate-pulse">
                        Southend Services
                      </span>
                      <span className="text-white/40 text-xs font-mono">ID: {label.replace(" ", "_")}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
                      {title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-white/70">
                      {description}
                    </p>

                    <button
                      onClick={onCloseModal}
                      className="mt-4 w-full py-3 rounded-full bg-brand text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-brand/20 hover:bg-brand-600 transition-all duration-200 hover:shadow-brand/40 active:scale-98"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
