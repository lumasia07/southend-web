import React from 'react';
interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}
const LOGO_DARK_BG = "/2.png";

const LOGO_LIGHT_BG = "/1.png";

/**
 * SouthEnd Forex & Money Remittance brand lockup.
 * - variant="dark"  -> white wordmark, for dark backgrounds
 * - variant="light" -> navy wordmark, for light backgrounds (default)
 */
export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const src = variant === 'dark' ? LOGO_DARK_BG : LOGO_LIGHT_BG;
  return (
    <img
      src={src}
      alt="SouthEnd Forex & Money Remittance"
      className={`block h-10 w-auto md:h-11 ${className}`}
      draggable={false} />);


}
/**
 * Compact orange "S" mark only — extracted from the full logo via object-position crop.
 * Use where space is tight (favicons, hex centers, etc.).
 */
export function LogoMark({ className = '' }: {className?: string;}) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <img
        src={LOGO_LIGHT_BG}
        alt=""
        className="absolute left-1/2 top-0 h-[220%] max-w-none -translate-x-1/2"
        style={{
          objectFit: 'cover',
          objectPosition: 'top'
        }}
        draggable={false} />
      
    </div>);

}