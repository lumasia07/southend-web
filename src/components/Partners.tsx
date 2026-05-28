import React from 'react';

const partners = [
{
  name: 'Western Union',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Western_Union_Logo_2019.svg/320px-Western_Union_Logo_2019.svg.png'
},
{
  name: 'MoneyGram',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/MoneyGram_logo.svg/320px-MoneyGram_logo.svg.png'
},
{
  name: 'M-Pesa',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/320px-M-PESA_LOGO-01.svg.png'
},
{
  name: 'Mastercard',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/320px-Mastercard-logo.svg.png'
},
{
  name: 'Visa',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/320px-Visa_Inc._logo.svg.png'
}];

export function Partners() {
  return (
    <section className="border-y border-navy/5 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-navy/50">
          Our trusted partners
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
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