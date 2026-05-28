import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
interface Crumb {
  label: string;
  to?: string;
}
interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
  align?: 'left' | 'center';
}
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  align = 'left'
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pb-20 pt-28 text-white sm:pb-24 sm:pt-32">
      {/* atmospheric layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 via-navy to-navy-700" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(238,90,42,0.18),transparent_45%)]" />
      <DotMesh />

      <div
        className={`mx-auto max-w-7xl px-6 ${align === 'center' ? 'text-center' : ''}`}>
        
        {crumbs.length > 0 &&
        <motion.nav
          initial={{
            opacity: 0,
            y: 8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          aria-label="Breadcrumb"
          className={`mb-5 flex items-center gap-1.5 text-xs text-white/60 ${align === 'center' ? 'justify-center' : ''}`}>
          
            {crumbs.map((c, i) =>
          <Fragment key={i}>
                {c.to ?
            <Link to={c.to} className="hover:text-brand">
                    {c.label}
                  </Link> :

            <span className="text-white/80">{c.label}</span>
            }
                {i < crumbs.length - 1 &&
            <ChevronRightIcon className="h-3 w-3 text-white/30" />
            }
              </Fragment>
          )}
          </motion.nav>
        }

        {eyebrow &&
        <motion.div
          initial={{
            opacity: 0,
            y: 8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.05
          }}
          className={`mb-4 inline-flex items-center gap-3 ${align === 'center' ? '' : ''}`}>
          
            <span className="h-px w-10 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              {eyebrow}
            </span>
          </motion.div>
        }

        <motion.h1
          initial={{
            opacity: 0,
            y: 18
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          
          {title}
        </motion.h1>

        {subtitle &&
        <motion.p
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1]
          }}
          className={`mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          
            {subtitle}
          </motion.p>
        }
      </div>
    </section>);

}
function DotMesh() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
      viewBox="0 0 1200 500"
      preserveAspectRatio="none"
      aria-hidden="true">
      
      <defs>
        <radialGradient id="dotFadePH" cx="100%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#3a7d8f" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#3a7d8f" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0a1929" stopOpacity="0" />
        </radialGradient>
      </defs>
      {Array.from({
        length: 22
      }).map((_, ring) => {
        const r = 160 + ring * 28;
        const dots = 30 + ring * 2;
        return (
          <g key={ring}>
            {Array.from({
              length: dots
            }).map((__, i) => {
              const angle = Math.PI * 0.55 * i / dots - Math.PI * 0.3;
              const cx = 1200 + Math.cos(angle) * r;
              const cy = 260 + Math.sin(angle) * r;
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={1.4}
                  fill="url(#dotFadePH)" />);


            })}
          </g>);

      })}
    </svg>);

}