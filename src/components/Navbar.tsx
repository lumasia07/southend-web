import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, ArrowRightIcon, PhoneIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Forex', to: '/forex' },
  { label: 'Remittance', to: '/remittance' },
  { label: 'Branches', to: '/branches' },
  { label: 'Corporate', to: '/corporate' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 select-none">
      <motion.nav
        initial={false}
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(5, 13, 24, 0)',
          borderColor: scrolled ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.02)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 10px 40px rgba(15, 23, 42, 0.05)' : '0 10px 40px rgba(5, 13, 24, 0)'
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6"
      >
        <Link to="/" className="pl-2" aria-label="SouthEnd Forex home">
          <Logo 
            variant="dark" 
            className={`transition-all duration-300 ${scrolled ? 'brightness-0 opacity-80' : ''}`}
          />
        </Link>

        {/* Desktop links list with Sliding Glassmorphic Pill */}
        <ul className="hidden items-center gap-1.5 lg:flex">
          {links.map((l) => (
            <li key={l.label} className="relative">
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className="relative block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300"
              >
                {({ isActive }) => (
                  <div className="relative flex items-center justify-center">
                    <span className={`transition-colors duration-300 ${
                      isActive 
                        ? 'text-brand' 
                        : scrolled 
                          ? 'text-slate-600 hover:text-slate-900' 
                          : 'text-white/70 hover:text-white'
                    }`}>
                      {l.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className={`absolute -inset-x-4 -inset-y-2 -z-10 rounded-full border transition-colors duration-300 ${
                          scrolled 
                            ? 'bg-slate-950/[0.04] border-slate-950/5' 
                            : 'bg-white/[0.06] border-white/5'
                        }`}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions buttons */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+254700000000"
            className={`hidden h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-105 active:scale-95 md:flex ${
              scrolled 
                ? 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900' 
                : 'border-white/10 text-white/70 hover:bg-white/5 hover:text-white'
            }`}
            aria-label="Call us"
          >
            <PhoneIcon className="h-4 w-4" />
          </a>
          
          <Link
            to="/corporate#contact"
            className="group hidden items-center gap-2 rounded-full bg-brand pl-5 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/10 transition-all hover:bg-brand-600 hover:shadow-brand/20 hover:scale-103 active:scale-98 sm:flex"
          >
            Contact Us
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-12 w-12 place-items-center rounded-full border transition-all hover:scale-105 active:scale-95 lg:hidden ${
              scrolled 
                ? 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900' 
                : 'border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav dropdown overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`mx-auto mt-2 max-w-7xl rounded-3xl border p-4 shadow-2xl backdrop-blur-xl lg:hidden transition-colors duration-300 ${
              scrolled 
                ? 'border-slate-100 bg-white/95 text-slate-900' 
                : 'border-white/5 bg-[#050d18]/95 text-white'
            }`}
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive 
                          ? scrolled
                            ? 'bg-brand/10 text-brand border border-brand/20'
                            : 'bg-brand/15 text-brand border border-brand/25' 
                          : scrolled
                            ? 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/corporate#contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 active:scale-98 transition-transform"
                >
                  Contact Us <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}