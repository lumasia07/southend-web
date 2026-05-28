import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ArrowRightIcon,
  SearchIcon,
  ClockIcon,
  TagIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  AnimatedSection,
  StaggerGroup,
  itemVariants } from
'../components/AnimatedSection';
import { useScreenInit } from '../useScreenInit.js';
interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  category: 'Forex' | 'Remittance' | 'Compliance' | 'Tips';
  cover: string;
  author: string;
}
const POSTS: Post[] = [
{
  slug: 'reading-the-kes-usd-trend-2026',
  title: 'Reading the KES/USD trend: what to expect in 2026',
  excerpt:
  "Inflation, T-bill yields and remittance inflows are all moving — here's how to think about the shilling for the next two quarters.",
  date: 'May 24, 2026',
  read: '6 min read',
  category: 'Forex',
  cover:
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
  author: 'Brian Mutua'
},
{
  slug: 'remittance-corridors-east-africa',
  title: 'Which corridors are cheapest to East Africa right now?',
  excerpt:
  'We benchmarked Western Union, MoneyGram and M-Pesa Global across UK→Kenya, US→Uganda and UAE→Tanzania.',
  date: 'May 12, 2026',
  read: '4 min read',
  category: 'Remittance',
  cover:
  'https://images.unsplash.com/photo-1556742205-e10c9486e506?auto=format&fit=crop&w=1200&q=80',
  author: 'Aisha Mwangi'
},
{
  slug: 'kyc-explained-southend',
  title: 'KYC at Southend: what we ask for and why',
  excerpt:
  'A friendly walkthrough of the documents we collect, how we store them, and what it has to do with keeping your money safe.',
  date: 'April 28, 2026',
  read: '5 min read',
  category: 'Compliance',
  cover:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  author: 'Sarah Kamau'
},
{
  slug: 'travelling-with-cash-tips',
  title: 'Five smart things to do before travelling with foreign cash',
  excerpt:
  'Avoid the airport spread, plan your top-ups, and always carry a small backup currency. Quick checklist inside.',
  date: 'April 15, 2026',
  read: '3 min read',
  category: 'Tips',
  cover:
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
  author: 'David Otieno'
},
{
  slug: 'sme-fx-hedging-basics',
  title: 'FX for SMEs: hedging without an FX desk',
  excerpt:
  'If you import or export, currency moves can wipe out your margin. Here are three practical ways to manage that without complex instruments.',
  date: 'April 2, 2026',
  read: '7 min read',
  category: 'Forex',
  cover:
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  author: 'Brian Mutua'
},
{
  slug: 'm-pesa-global-2026',
  title: 'M-Pesa Global in 2026: corridors, costs, what works',
  excerpt:
  "Mobile money has quietly become one of the fastest ways to move funds across borders. Where it shines — and where it doesn't.",
  date: 'March 22, 2026',
  read: '5 min read',
  category: 'Remittance',
  cover:
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  author: 'Aisha Mwangi'
}];

const CATS = ['All', 'Forex', 'Remittance', 'Compliance', 'Tips'] as const;
export function Blog() {
  useScreenInit();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<(typeof CATS)[number]>('All');
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return POSTS.filter((p) => {
      const catOk = cat === 'All' || p.category === cat;
      const termOk =
      !term ||
      p.title.toLowerCase().includes(term) ||
      p.excerpt.toLowerCase().includes(term);
      return catOk && termOk;
    });
  }, [q, cat]);
  const [featured, ...rest] = filtered;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
        <>
            Money moves, <span className="text-brand">explained.</span>
          </>
        }
        subtitle="Short, practical notes on FX, remittance and compliance — written by the Southend team."
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Blog'
        }]
        } />
      

      <section className="bg-[#f7f8fa] py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter bar */}
          <AnimatedSection className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) =>
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${cat === c ? 'bg-navy text-white' : 'border border-navy/10 bg-white text-navy/70 hover:border-brand/40 hover:text-navy'}`}>
                
                  {c}
                </button>
              )}
            </div>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles"
                className="h-11 w-full rounded-full border border-navy/10 bg-white pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand sm:w-72" />
              
            </div>
          </AnimatedSection>

          {/* Featured */}
          {featured &&
          <AnimatedSection className="mt-10">
              <article className="group grid gap-0 overflow-hidden rounded-3xl border border-navy/10 bg-white lg:grid-cols-2">
                <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <img
                  src={featured.cover}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 font-semibold uppercase tracking-widest text-brand">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-navy/60">
                      <CalendarIcon className="h-3 w-3" /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1 text-navy/60">
                      <ClockIcon className="h-3 w-3" /> {featured.read}
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-navy/70">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-navy/60">
                      By{' '}
                      <span className="font-semibold text-navy">
                        {featured.author}
                      </span>
                    </div>
                    <a
                    href={`#/${featured.slug}`}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-brand pl-5 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-600">
                    
                      Read article
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform group-hover/btn:translate-x-0.5">
                        <ArrowRightIcon className="h-4 w-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          }

          {/* Grid */}
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) =>
            <motion.article
              key={p.slug}
              variants={itemVariants}
              className="group flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
              
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2 py-1 font-semibold uppercase tracking-widest text-brand">
                      <TagIcon className="h-3 w-3" /> {p.category}
                    </span>
                    <span className="text-navy/60">{p.read}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-5 text-xs text-navy/60">
                    <span>{p.date}</span>
                    <a
                    href={`#/${p.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-brand">
                    
                      Read{' '}
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )}
          </StaggerGroup>

          {filtered.length === 0 &&
          <div className="mt-12 rounded-3xl border border-dashed border-navy/15 bg-white py-16 text-center text-sm text-navy/60">
              No articles match those filters.
            </div>
          }
        </div>
      </section>

      {/* Newsletter */}
      <AnimatedSection className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Weekly digest
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            One short email a week.{' '}
            <span className="text-brand">Zero spam.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">
            A summary of last week's rate moves, one practical tip, and a
            handful of links worth your time. Unsubscribe anytime.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand" />
            
            <button
              type="submit"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-600">
              
              Subscribe
            </button>
          </form>
        </div>
      </AnimatedSection>
    </>);

}