import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  SearchIcon,
  RefreshCwIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  PercentIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import {
  AnimatedSection,
  StaggerGroup,
  itemVariants } from
'../components/AnimatedSection';
import { RateCalculator } from '../components/RateCalculator';
import { useScreenInit } from '../useScreenInit.js';
interface Rate {
  code: string;
  name: string;
  flag: string;
  buy: number;
  sell: number;
  change: number;
}
const RATES: Rate[] = [
{
  code: 'USD',
  name: 'US Dollar',
  flag: '🇺🇸',
  buy: 129.4,
  sell: 130.1,
  change: 0.12
},
{
  code: 'EUR',
  name: 'Euro',
  flag: '🇪🇺',
  buy: 139.85,
  sell: 140.6,
  change: -0.08
},
{
  code: 'GBP',
  name: 'British Pound',
  flag: '🇬🇧',
  buy: 162.7,
  sell: 163.6,
  change: 0.21
},
{
  code: 'AED',
  name: 'UAE Dirham',
  flag: '🇦🇪',
  buy: 35.1,
  sell: 35.6,
  change: 0.04
},
{
  code: 'ZAR',
  name: 'South African Rand',
  flag: '🇿🇦',
  buy: 6.95,
  sell: 7.15,
  change: -0.03
},
{
  code: 'CAD',
  name: 'Canadian Dollar',
  flag: '🇨🇦',
  buy: 94.2,
  sell: 95.0,
  change: 0.06
},
{
  code: 'AUD',
  name: 'Australian Dollar',
  flag: '🇦🇺',
  buy: 84.1,
  sell: 84.9,
  change: -0.09
},
{
  code: 'JPY',
  name: 'Japanese Yen',
  flag: '🇯🇵',
  buy: 0.83,
  sell: 0.86,
  change: 0.01
},
{
  code: 'CHF',
  name: 'Swiss Franc',
  flag: '🇨🇭',
  buy: 145.7,
  sell: 146.8,
  change: 0.15
},
{
  code: 'INR',
  name: 'Indian Rupee',
  flag: '🇮🇳',
  buy: 1.54,
  sell: 1.59,
  change: -0.01
},
{
  code: 'CNY',
  name: 'Chinese Yuan',
  flag: '🇨🇳',
  buy: 17.95,
  sell: 18.25,
  change: 0.03
},
{
  code: 'UGX',
  name: 'Ugandan Shilling',
  flag: '🇺🇬',
  buy: 0.0341,
  sell: 0.0361,
  change: 0.0
},
{
  code: 'TZS',
  name: 'Tanzanian Shilling',
  flag: '🇹🇿',
  buy: 0.0476,
  sell: 0.0498,
  change: 0.0
},
{
  code: 'NGN',
  name: 'Nigerian Naira',
  flag: '🇳🇬',
  buy: 0.084,
  sell: 0.092,
  change: -0.005
},
{
  code: 'SAR',
  name: 'Saudi Riyal',
  flag: '🇸🇦',
  buy: 34.4,
  sell: 34.9,
  change: 0.02
}];

const FEATURES = [
{
  icon: TrendingUpIcon,
  title: 'Live, market-leading rates',
  desc: 'Our pricing engine streams interbank rates with a transparent spread — no hidden margins, no surprises.'
},
{
  icon: ShieldCheckIcon,
  title: 'CBK forex bureau',
  desc: 'Licensed by the Central Bank of Kenya. IMT licensed in 2025 for compliant international transfers.'
},
{
  icon: ClockIcon,
  title: 'Instant settlement',
  desc: 'Walk-in cash, M-Pesa, or bank wire — most exchanges settle the same day, often within minutes.'
},
{
  icon: PercentIcon,
  title: 'Negotiated rates',
  desc: 'Trading over USD 5,000? Lock in a customised wholesale rate with one of our dealers.'
}];

export function Forex() {
  useScreenInit();
  const [q, setQ] = useState('');
  const [sortKey, setSortKey] = useState<'code' | 'buy' | 'sell' | 'change'>(
    'code'
  );
  const [dir, setDir] = useState<1 | -1>(1);
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    const base = term ?
    RATES.filter(
      (r) =>
      r.code.toLowerCase().includes(term) ||
      r.name.toLowerCase().includes(term)
    ) :
    RATES;
    const sorted = [...base].sort((a, b) => {
      const av = a[sortKey] as any;
      const bv = b[sortKey] as any;
      if (typeof av === 'string') return av.localeCompare(bv) * dir;
      return (av - bv) * dir;
    });
    return sorted;
  }, [q, sortKey, dir]);
  const toggleSort = (key: typeof sortKey) => {
    if (key === sortKey) setDir((d) => d === 1 ? -1 : 1);else
    {
      setSortKey(key);
      setDir(1);
    }
  };
  return (
    <>
      <PageHero
        eyebrow="Forex"
        title={
        <>
            Live exchange rates,{' '}
            <span className="text-brand">moving with the market.</span>
          </>
        }
        subtitle="Buy and sell over 15 major currencies at our branches across Kenya — at rates that reflect the real market, not a marked-up tourist board."
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Forex'
        }]
        } />
      

      {/* Rates table + calculator */}
      <section className="bg-[#f7f8fa] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm">
              <div className="flex flex-col gap-3 border-b border-navy/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <h2 className="text-base font-semibold tracking-tight text-navy">
                      Today's Exchange Rates
                    </h2>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      LIVE
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-navy/60">
                    Updated continuously · Indicative rates · 1 unit foreign
                    currency = KES
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
                    <input
                      type="text"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Search currency"
                      className="h-10 w-56 rounded-full border border-navy/10 bg-navy/[0.02] pl-9 pr-4 text-sm outline-none transition-colors focus:border-brand"
                      aria-label="Search currencies" />
                    
                  </div>
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-full border border-navy/10 text-navy/70 transition-colors hover:bg-navy/5"
                    aria-label="Refresh rates">
                    
                    <RefreshCwIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-white text-left text-[11px] font-semibold uppercase tracking-widest text-navy/60">
                    <tr className="border-b border-navy/10">
                      <th className="px-5 py-3">
                        <SortBtn
                          label="Currency"
                          active={sortKey === 'code'}
                          dir={dir}
                          onClick={() => toggleSort('code')} />
                        
                      </th>
                      <th className="px-5 py-3 text-right">
                        <SortBtn
                          label="Buy"
                          active={sortKey === 'buy'}
                          dir={dir}
                          onClick={() => toggleSort('buy')}
                          align="right" />
                        
                      </th>
                      <th className="px-5 py-3 text-right">
                        <SortBtn
                          label="Sell"
                          active={sortKey === 'sell'}
                          dir={dir}
                          onClick={() => toggleSort('sell')}
                          align="right" />
                        
                      </th>
                      <th className="px-5 py-3 text-right">
                        <SortBtn
                          label="24h"
                          active={sortKey === 'change'}
                          dir={dir}
                          onClick={() => toggleSort('change')}
                          align="right" />
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((r, i) =>
                    <motion.tr
                      key={r.code}
                      initial={{
                        opacity: 0,
                        y: 8
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 0.35,
                        delay: i * 0.03
                      }}
                      className="border-b border-navy/[0.04] last:border-0 odd:bg-navy/[0.015] transition-colors hover:bg-brand/[0.04]">
                      
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-lg leading-none">
                              {r.flag}
                            </span>
                            <div>
                              <div className="font-semibold text-navy">
                                {r.code}
                              </div>
                              <div className="text-xs text-navy/60">
                                {r.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-right font-semibold tabular-nums text-navy">
                          {fmt(r.buy)}
                        </td>
                        <td className="px-5 py-4 text-right font-semibold tabular-nums text-navy">
                          {fmt(r.sell)}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <ChangePill change={r.change} />
                        </td>
                      </motion.tr>
                    )}
                    {filtered.length === 0 &&
                    <tr>
                        <td
                        colSpan={4}
                        className="px-5 py-12 text-center text-sm text-navy/60">
                        
                          No currencies match "{q}".
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.1}
            className="lg:sticky lg:top-28 lg:self-start">
            
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Quick converter
            </h3>
            <RateCalculator />
          </AnimatedSection>
        </div>
      </section>

      {/* Why our forex */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Why our forex
              </span>
              <span className="h-px w-10 bg-brand" />
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
              Trade smart. Trade local.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-navy/70">
              Whether you're a frequent traveller, an importer, or running an
              SME with cross-border needs — we offer the rates and the service
              to match.
            </p>
          </AnimatedSection>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) =>
            <motion.article
              key={f.title}
              variants={itemVariants}
              className="rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
              
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {f.desc}
                </p>
              </motion.article>
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* Trader callout */}
      <AnimatedSection className="bg-navy py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Bulk &amp; corporate FX
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trading more than <span className="text-brand">USD 5,000</span>?
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              We open a direct line to one of our senior dealers. Get a
              negotiated rate, same-day settlement, and dedicated account
              management for repeat transactions.
            </p>
            <a
              href="/corporate#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-600">
              
              Talk to a dealer
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                <ArrowUpIcon className="h-4 w-4 -rotate-45" />
              </span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Stat value="USD 5k+" label="Min for custom rates" />
            <Stat value="<5 min" label="Average dealer reply" />
            <Stat value="24/7" label="Trading hours" />
            <Stat value="15+" label="Currencies traded" />
            <Stat value="100%" label="CBK compliant" />
            <Stat value="0" label="Hidden fees" />
          </div>
        </div>
      </AnimatedSection>
    </>);

}
function fmt(n: number) {
  if (n < 1) return n.toFixed(4);
  return n.toLocaleString('en-KE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function ChangePill({ change }: {change: number;}) {
  const up = change >= 0;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ${up ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
      
      {up ?
      <ArrowUpIcon className="h-3 w-3" /> :

      <ArrowDownIcon className="h-3 w-3" />
      }
      {up ? '+' : ''}
      {change.toFixed(2)}
    </span>);

}
function SortBtn({
  label,
  active,
  dir,
  onClick,
  align = 'left'






}: {label: string;active: boolean;dir: 1 | -1;onClick: () => void;align?: 'left' | 'right';}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1 transition-colors hover:text-brand ${active ? 'text-brand' : ''} ${align === 'right' ? 'justify-end' : ''}`}>
      
      {label}
      {active && (
      dir === 1 ?
      <ArrowUpIcon className="h-3 w-3" /> :

      <ArrowDownIcon className="h-3 w-3" />)
      }
    </button>);

}
function Stat({ value, label }: {value: string;label: string;}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-xl font-bold tracking-tight">{value}</div>
      <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-white/60">
        {label}
      </div>
    </div>);

}