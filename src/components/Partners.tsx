import React from 'react';

const partners = [
{
  name: 'Western Union',
  logo: '/logo.wu.big.svg'
},
{
  name: 'MoneyGram',
  logo: '/logo-moneygram-black.svg'
},
{
  name: 'M-Pesa',
  logo: '/SafM-PESA-Logo.jpg'
}];

export function Partners() {
  return (
    <section className="border-y border-navy/5 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-navy/50">
          Our trusted partners
        </p>
        <div className="mt-8 grid grid-cols-3 items-center gap-6 max-w-3xl mx-auto">
          {partners.map((p) =>
          <div
            key={p.name}
            className="flex h-20 items-center justify-center rounded-xl border border-navy/10 bg-white px-6 transition-colors hover:border-brand/30 hover:shadow-md">
            
              <img
                src={p.logo}
                alt={p.name}
                className="h-8 max-w-[120px] object-contain grayscale transition-all hover:grayscale-0"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>);

}