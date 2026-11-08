import React from 'react';

export default function SectionTitle({ id, kicker, title, intro, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`font-mono text-xs font-semibold uppercase tracking-[0.16em] ${light ? 'text-emerald-300' : 'text-leaf'}`}>
        {kicker}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-dim'}`}>{intro}</p>}
    </div>
  );
}
