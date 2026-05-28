import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, ArrowRightIcon, PhoneIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
const links = [
{
  label: 'Home',
  to: '/'
},
{
  label: 'Forex',
  to: '/forex'
},
{
  label: 'Remittance',
  to: '/remittance'
},
{
  label: 'Branches',
  to: '/branches'
},
{
  label: 'Corporate',
  to: '/corporate'
},
{
  label: 'FAQ',
  to: '/faq'
},
{
  label: 'Blog',
  to: '/blog'
}];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <motion.nav
        initial={false}
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 backdrop-blur-md transition-colors ${scrolled ? 'border-white/10 bg-navy/80 shadow-[0_10px_40px_rgba(10,25,41,0.25)]' : 'border-white/10 bg-transparent'}`}>
        
        <Link to="/" className="pl-2" aria-label="SouthEnd Forex home">
          <Logo variant="dark" />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) =>
          <li key={l.label}>
              <NavLink
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
              `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? 'text-brand' : 'text-white/75 hover:text-white'}`
              }>
              
                {({ isActive }) =>
              <>
                    {l.label}
                    {isActive &&
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-brand"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30
                  }} />

                }
                  </>
              }
              </NavLink>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="tel:+254000000000"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 md:flex"
            aria-label="Call us">
            
            <PhoneIcon className="h-4 w-4" />
          </a>
          <Link
            to="/corporate#contact"
            className="group hidden items-center gap-2 rounded-full bg-brand pl-5 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md sm:flex">
            
            Contact Us
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}>
            
            {open ?
            <XIcon className="h-5 w-5" /> :

            <MenuIcon className="h-5 w-5" />
            }
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{
            opacity: 0,
            y: -8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -8
          }}
          transition={{
            duration: 0.2
          }}
          className="mx-auto mt-2 max-w-7xl rounded-3xl border border-navy/5 bg-white p-4 shadow-lg lg:hidden">
          
            <ul className="flex flex-col">
              {links.map((l) =>
            <li key={l.label}>
                  <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                `block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? 'bg-brand/10 text-brand' : 'text-navy hover:bg-navy/5'}`
                }>
                
                    {l.label}
                  </NavLink>
                </li>
            )}
              <li className="mt-2">
                <Link
                to="/corporate#contact"
                className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">
                
                  Contact Us <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}