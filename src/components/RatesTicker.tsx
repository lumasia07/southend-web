import React from 'react';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
const data = [
{
  code: 'USD',
  flag: '🇺🇸',
  buy: 129.4,
  sell: 130.1,
  change: 0.12
},
{
  code: 'EUR',
  flag: '🇪🇺',
  buy: 139.85,
  sell: 140.6,
  change: -0.08
},
{
  code: 'GBP',
  flag: '🇬🇧',
  buy: 162.7,
  sell: 163.6,
  change: 0.21
},
{
  code: 'AED',
  flag: '🇦🇪',
  buy: 35.1,
  sell: 35.6,
  change: 0.04
},
{
  code: 'ZAR',
  flag: '🇿🇦',
  buy: 6.95,
  sell: 7.15,
  change: -0.03
},
{
  code: 'CAD',
  flag: '🇨🇦',
  buy: 94.2,
  sell: 95.0,
  change: 0.06
},
{
  code: 'AUD',
  flag: '🇦🇺',
  buy: 84.1,
  sell: 84.9,
  change: -0.09
},
{
  code: 'JPY',
  flag: '🇯🇵',
  buy: 0.83,
  sell: 0.86,
  change: 0.01
}];

export function RatesTicker() {
  const repeated = [...data, ...data];
  return (
    <div className="border-y border-navy/5 bg-white">
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-8 whitespace-nowrap py-3">
          {repeated.map((r, i) => {
            const up = r.change >= 0;
            return (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-lg leading-none">{r.flag}</span>
                <span className="font-semibold text-navy">{r.code}/KES</span>
                <span className="text-navy/70">Buy {r.buy.toFixed(2)}</span>
                <span className="text-navy/70">Sell {r.sell.toFixed(2)}</span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${up ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                  
                  {up ?
                  <TrendingUpIcon className="h-3 w-3" /> :

                  <TrendingDownIcon className="h-3 w-3" />
                  }
                  {up ? '+' : ''}
                  {r.change.toFixed(2)}
                </span>
                <span className="h-3 w-px bg-navy/10" />
              </div>);

          })}
        </div>
      </div>
    </div>);

}