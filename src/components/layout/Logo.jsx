import React from 'react';

export default function Logo({ className = 'h-9 w-auto', invert = false }) {
  return (
    <picture>
      <source srcSet="/logo.webp" type="image/webp" />
      <img
        src="/logo.png"
        alt="KobinaTech"
        width="600"
        height="163"
        decoding="async"
        className={`${className} ${invert ? 'brightness-0 invert' : ''}`}
      />
    </picture>
  );
}
