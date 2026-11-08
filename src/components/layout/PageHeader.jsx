import React from 'react';

// En-tête commun des pages secondaires
export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dim">{intro}</p>}
      </div>
    </section>
  );
}
