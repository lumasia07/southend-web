import React, { useMemo, useState } from 'react';
import {
  ArrowDownIcon,
  SendIcon,
  ArrowRightIcon,
  TrendingUpIcon } from
'lucide-react';
const RATES: Record<string, number> = {
  USD: 129.85,
  EUR: 140.32,
  GBP: 163.4,
  AED: 35.36,
  ZAR: 7.05
};
const FLAGS: Record<string, string> = {
  USD: '🇺🇸',
  EUR: '🇪🇺',
  GBP: '🇬🇧',
  AED: '🇦🇪',
  ZAR: '🇿🇦'
};
export function RateCalculator() {
  const [amount, setAmount] = useState<string>('1000');
  const [currency, setCurrency] = useState<string>('USD');
  const rate = RATES[currency];
  const received = useMemo(() => {
    const n = parseFloat(amount || '0');
    if (Number.isNaN(n)) return 0;
    return n * rate;
  }, [amount, rate]);
  return (
    <div className="relative w-full max-w-md text-navy">
      {/* halo */}
      <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent blur-2xl animate-pulse-glow" />
      <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-2xl">
        {/* status bar */}
        <div className="flex items-center justify-between border-b border-navy/5 bg-navy-50/50 px-5 py-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-navy">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Send Money
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
            <TrendingUpIcon className="h-3 w-3 animate-pulse" /> LIVE
          </div>
        </div>

        <div className="p-5">
          {/* You send */}
          <label className="block">
            <span className="text-[10px] font-bold tracking-widest text-brand">
              YOU SEND
            </span>
            <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-navy/10 bg-white px-4 py-3 focus-within:border-brand/50 focus-within:ring-1 focus-within:ring-brand/30">
              <input
                inputMode="decimal"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value.replace(/[^\d.]/g, ''))
                }
                className="w-full bg-transparent text-2xl font-semibold text-navy outline-none"
                aria-label="Amount to send" />
              
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="rounded-xl border border-navy/10 bg-navy-50 px-2.5 py-1.5 text-sm font-semibold text-navy outline-none cursor-pointer"
                aria-label="Source currency">
                
                {Object.keys(RATES).map((c) =>
                  <option key={c} value={c} className="bg-white text-navy">
                    {FLAGS[c]} {c}
                  </option>
                )}
              </select>
            </div>
          </label>

          {/* divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-navy/5" />
            <div className="relative grid h-8 w-8 place-items-center rounded-full border border-navy/10 bg-white text-brand shadow-sm">
              <ArrowDownIcon className="h-4 w-4" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-navy/5 bg-navy-50 px-3 py-1 text-[11px] font-medium text-navy/70">
              1 {currency} = {rate.toFixed(4)} KES
            </div>
          </div>

          {/* They receive */}
          <div>
            <span className="text-[10px] font-bold tracking-widest text-brand">
              THEY RECEIVE
            </span>
            <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-navy/10 bg-navy-50/50 px-4 py-3">
              <div className="text-2xl font-bold text-navy">
                {received.toLocaleString('en-KE', {
                  maximumFractionDigits: 2
                })}
              </div>
              <div className="rounded-xl bg-navy-100/60 px-2.5 py-1.5 text-sm font-semibold text-navy">
                🇰🇪 KES
              </div>
            </div>
          </div>

          {/* meta strip */}
          <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl bg-navy text-white">
            <div className="px-3 py-2.5">
              <div className="text-[9px] font-semibold uppercase tracking-widest text-white/60">
                Fee
              </div>
              <div className="text-sm font-semibold">0.00</div>
            </div>
            <div className="border-x border-white/10 px-3 py-2.5">
              <div className="text-[9px] font-semibold uppercase tracking-widest text-white/60">
                Time
              </div>
              <div className="text-sm font-semibold text-emerald-300">
                Same day
              </div>
            </div>
            <div className="px-3 py-2.5">
              <div className="text-[9px] font-semibold uppercase tracking-widest text-white/60">
                Total
              </div>
              <div className="text-sm font-semibold">
                {amount || '0'} {currency}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="group mt-5 flex w-full items-center justify-between rounded-full bg-brand pl-4 pr-1.5 py-1.5 font-semibold text-white shadow-md hover:bg-brand-600 transition-all duration-200">
            
            <span className="flex items-center gap-2 text-sm tracking-wide">
              <SendIcon className="h-4 w-4" /> SEND MONEY
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </div>);

}