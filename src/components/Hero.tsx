import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  MapPinIcon,
  StarIcon } from
'lucide-react';
import { RateCalculator } from './RateCalculator';
const FADE_UP = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image from the blog forex chart */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      {/* Smooth gradient overlay maintaining the navy/brand theme */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900/95 via-navy/90 to-navy-700/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(238,90,42,0.18),transparent_45%)]" />

      {/* Floating ambient blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        animate={{
          y: [0, 18, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
      
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 right-10 -z-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
        animate={{
          y: [0, -16, 0]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }} />
      

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.05
            }
          }
        }}
        className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-24 lg:grid-cols-2 lg:gap-10 lg:pt-28">
        
        <div className="text-white">
          <motion.h1
            variants={FADE_UP}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]">
            
            Global remittance,
            <br />
            <span className="text-brand">with a personal touch.</span>
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
            
            Seamless forex and international money transfers — with real-time
            rates, secure transactions to over 100 countries, and 24/7 support.
            Built in Kenya, trusted globally.
          </motion.p>

          <motion.div
            variants={FADE_UP}
            className="mt-8 flex flex-col gap-3 sm:flex-row">
            
            <a
              href="#calculator"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-600 hover:shadow-brand/40">
              
              Send Money
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
            <a
              href="/branches"
              className="group inline-flex items-center justify-between gap-3 rounded-full border border-white/20 bg-white/5 pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
              
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" /> Find a Branch
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={FADE_UP}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/70">
            
            <div
              className="flex items-center gap-0.5 text-brand"
              aria-label="5 star rated">
              
              {[0, 1, 2, 3, 4].map((i) =>
              <StarIcon key={i} className="h-4 w-4 fill-brand" />
              )}
            </div>
            <span className="font-semibold text-white">Trusted Partner</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Trusted by thousands across Kenya</span>
          </motion.div>
        </div>

        <motion.div
          id="calculator"
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.97
            },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }
            }
          }}
          className="flex justify-center lg:justify-end">
          
          <RateCalculator />
        </motion.div>
      </motion.div>
    </section>);

}