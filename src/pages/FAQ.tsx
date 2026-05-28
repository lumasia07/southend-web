import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronDownIcon,
  SearchIcon,
  MessageCircleIcon,
  ArrowRightIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  AnimatedSection,
  StaggerGroup,
  itemVariants } from
'../components/AnimatedSection';
import { useScreenInit } from '../useScreenInit.js';
interface FAQItem {
  q: string;
  a: string;
  category: string;
}
const CATEGORIES = [
'All',
'Getting started',
'Forex',
'Remittance',
'Fees & security',
'Branches'];

const FAQS: FAQItem[] = [
{
  category: 'Getting started',
  q: 'Do I need an account to use Southend?',
  a: 'No — for small transactions you just walk in with a valid ID. For amounts above KES 100,000 or recurring transfers, we onboard you once and the next visit is faster.'
},
{
  category: 'Getting started',
  q: 'What ID do I need to bring?',
  a: 'A valid national ID, passport, or alien registration card. Corporate customers will additionally need company registration documents.'
},
{
  category: 'Forex',
  q: 'Are your rates better than my bank?',
  a: 'Almost always, yes. Banks bake a wider spread into retail FX. We post live indicative rates daily and welcome you to compare.'
},
{
  category: 'Forex',
  q: 'Can I negotiate on larger trades?',
  a: 'Yes. For trades above USD 5,000 (or equivalent) you get a direct line to a dealer who will quote a custom wholesale rate.'
},
{
  category: 'Forex',
  q: 'Which currencies do you buy and sell?',
  a: 'We trade over 15 currencies including USD, EUR, GBP, AED, ZAR, CAD, AUD, JPY, CHF, INR, CNY, UGX, TZS, NGN and SAR.'
},
{
  category: 'Remittance',
  q: 'Which countries can I send to?',
  a: 'Over 100 countries across Africa, Europe, the Americas, the Middle East, and Asia-Pacific. See the destinations list on our Remittance page.'
},
{
  category: 'Remittance',
  q: 'How long does an international transfer take?',
  a: 'Western Union pickups land in minutes, MoneyGram and M-Pesa Global usually same day, and SWIFT bank wires settle within 1–2 business days.'
},
{
  category: 'Remittance',
  q: 'Can the receiver collect in cash?',
  a: 'Yes — via Western Union and MoneyGram, the receiver can collect in cash at any of their global agent locations.'
},
{
  category: 'Fees & security',
  q: 'What are your fees?',
  a: 'FX has no transaction fee — our margin is in the rate. Remittance fees start at KES 250 (Western Union) and vary by amount and corridor. You always see the total before you pay.'
},
{
  category: 'Fees & security',
  q: 'Is Southend regulated?',
  a: 'Yes. We hold a Class A Forex Bureau licence and a full International Money Transfer licence from the Central Bank of Kenya. We are audited annually.'
},
{
  category: 'Fees & security',
  q: 'How do you protect my personal data?',
  a: 'We comply with the Kenya Data Protection Act 2019 and ISO 27001-aligned controls. KYC documents are stored encrypted and access-restricted.'
},
{
  category: 'Branches',
  q: 'Where are you located?',
  a: 'We have 8 branches across Nairobi, the Coast, Western Kenya, and the Rift Valley. The full list with hours is on our Branches page.'
},
{
  category: 'Branches',
  q: 'Do you operate on Sundays?',
  a: 'Eastleigh branch is open 7 days a week. Most other branches operate Mon–Sat.'
}];

export function FAQ() {
  useScreenInit();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return FAQS.filter((f) => {
      const catOk = cat === 'All' || f.category === cat;
      const termOk =
      !term ||
      f.q.toLowerCase().includes(term) ||
      f.a.toLowerCase().includes(term);
      return catOk && termOk;
    });
  }, [q, cat]);
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title={
        <>
            Frequently asked <span className="text-brand">questions.</span>
          </>
        }
        subtitle="Quick answers about forex, remittance, fees, branches and security. Can't find what you're looking for? Chat with us on WhatsApp."
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'FAQ'
        }]
        }
        align="center" />
      

      <section className="bg-[#f7f8fa] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="rounded-3xl border border-navy/10 bg-white p-2 shadow-sm">
            <div className="flex items-center gap-3 px-4 py-2">
              <SearchIcon className="h-5 w-5 text-navy/40" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search the help center"
                className="w-full bg-transparent py-3 text-base outline-none placeholder:text-navy/40" />
              
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-6 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) =>
            <button
              key={c}
              type="button"
              onClick={() => {
                setCat(c);
                setOpenIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${cat === c ? 'bg-navy text-white' : 'border border-navy/10 bg-white text-navy/70 hover:border-brand/40 hover:text-navy'}`}>
              
                {c}
              </button>
            )}
          </AnimatedSection>

          <StaggerGroup className="mt-10 space-y-3">
            {filtered.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={f.q}
                  variants={itemVariants}
                  className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
                  
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}>
                    
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-brand">
                        {f.category}
                      </div>
                      <div className="mt-1 text-base font-semibold tracking-tight text-navy">
                        {f.q}
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0
                      }}
                      transition={{
                        duration: 0.25
                      }}
                      className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full transition-colors ${isOpen ? 'bg-brand text-white' : 'bg-navy/[0.04] text-navy/60'}`}>
                      
                      <ChevronDownIcon className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      key="answer"
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="overflow-hidden">
                      
                        <div className="px-5 pb-5 text-sm leading-relaxed text-navy/70">
                          {f.a}
                        </div>
                      </motion.div>
                    }
                  </AnimatePresence>
                </motion.div>);

            })}
          </StaggerGroup>

          {filtered.length === 0 &&
          <div className="mt-12 rounded-3xl border border-dashed border-navy/15 bg-white py-16 text-center text-sm text-navy/60">
              No results for "{q}". Try a different search.
            </div>
          }
        </div>
      </section>

      {/* Still need help */}
      <AnimatedSection className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand mx-auto">
            <MessageCircleIcon className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-navy/70">
            Chat with a real human on WhatsApp or drop us a message. Most
            queries are answered within an hour during business hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/254700000000"
              className="group inline-flex items-center gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-600">
              
              Chat on WhatsApp
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
            <Link
              to="/corporate#contact"
              className="rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand/40">
              
              Send a message
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>);

}