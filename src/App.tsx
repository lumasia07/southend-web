import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Forex } from './pages/Forex';
import { Remittance } from './pages/Remittance';
import { BranchesPage } from './pages/BranchesPage';
import { Corporate } from './pages/Corporate';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-full w-full bg-white">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>);

}
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 12
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
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}>
        
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/remittance" element={<Remittance />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </motion.main>
    </AnimatePresence>);

}