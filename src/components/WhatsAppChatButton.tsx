import React, { useEffect, useId, useState } from 'react';
import { ArrowRightIcon, MessageCircleIcon, PhoneIcon, XIcon } from 'lucide-react';
import { WHATSAPP_CONTACTS, toWhatsAppUrl } from '../data/contact';

type WhatsAppChatButtonProps = {
  variant?: 'light' | 'brand' | 'outline-light';
  className?: string;
  showArrow?: boolean;
  label?: string;
};

const variantClasses: Record<
  NonNullable<WhatsAppChatButtonProps['variant']>,
  string> =
{
  light:
  'group inline-flex items-center justify-between gap-3 rounded-full border border-white/20 bg-white/5 pl-6 pr-1.5 py-1.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10',
  brand:
  'group inline-flex items-center gap-3 rounded-full bg-brand pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-600',
  'outline-light':
  'rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10'
};

export function WhatsAppChatButton({
  variant = 'light',
  className = '',
  showArrow = true,
  label = 'Chat on WhatsApp'
}: WhatsAppChatButtonProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${variantClasses[variant]} ${className}`.trim()}>
        
        {variant === 'brand' ?
        <>
            {label}
            {showArrow &&
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
          }
          </> :

        <>
            <span className="inline-flex items-center gap-2">
              <MessageCircleIcon className="h-4 w-4" /> {label}
            </span>
            {showArrow &&
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
          }
          </>
        }
      </button>

      {open &&
      <div
        className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
        onClick={() => setOpen(false)}>
        
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
          <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-2xl"
          onClick={(event) => event.stopPropagation()}>
          
            <div className="flex items-start justify-between border-b border-navy/10 px-6 py-5">
              <div>
                <div className="flex items-center gap-2 text-brand">
                  <MessageCircleIcon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                    WhatsApp
                  </span>
                </div>
                <h2
                id={titleId}
                className="mt-2 text-xl font-bold tracking-tight text-navy">
                
                  Choose a number to chat
                </h2>
                <p className="mt-1 text-sm text-navy/60">
                  Select either line below to open WhatsApp.
                </p>
              </div>
              <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full border border-navy/10 text-navy/60 transition-colors hover:border-brand/40 hover:text-navy"
              aria-label="Close">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 p-6">
              {WHATSAPP_CONTACTS.map((contact) =>
            <a
              key={contact.phone}
              href={toWhatsAppUrl(contact.phone)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-2xl border border-navy/10 bg-[#f7f8fa] p-4 transition-all hover:border-brand/40 hover:bg-white hover:shadow-md">
              
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-navy">
                        {contact.display}
                      </div>
                      <div className="text-xs text-navy/60">
                        Tap to chat on WhatsApp
                      </div>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-navy/40 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                </a>
            )}
            </div>
          </div>
        </div>
      }
    </>);

}
