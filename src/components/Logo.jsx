import { useState } from 'react';

/**
 * vnn.dev mark — "vnn" written as one continuous, italic-slanted stroke
 * (the v's right arm doubles as the first n's stem), finished with a dot for ".dev".
 */
export function LogoMark({ className = '', draw = true, strokeWidth = 3.4 }) {
  return (
    <svg
      viewBox="6 1 52 36"
      fill="none"
      className={`${draw ? 'logo-draw' : ''} ${className}`}
      aria-hidden="true"
    >
      <g
        transform="translate(6 0) skewX(-12)"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path pathLength="1" d="M5 8 L13 32 L21 8 C21 4 33 4 33 10 L33 32 L33 16 C33 4 45 4 45 10 L45 32" />
      </g>
      <circle className="logo-dot" cx="51" cy="31" r="2.8" fill="currentColor" />
    </svg>
  );
}

/** Mark + wordmark. Re-draws the mark every time it's hovered. */
export default function Logo({ className = '', onClick }) {
  const [drawKey, setDrawKey] = useState(0);

  return (
    <a
      href="#"
      onClick={onClick}
      onMouseEnter={() => setDrawKey((k) => k + 1)}
      className={`inline-flex items-center ${className}`}
      aria-label="vnn.dev — back to top"
    >
      <LogoMark key={drawKey} className="h-7 w-auto" />
    </a>
  );
}

