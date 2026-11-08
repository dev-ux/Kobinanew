import React from 'react';

const tools = [
  'React', 'Next.js', 'Flutter', 'Node.js', 'Python', 'PHP / Laravel',
  'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Docker', 'AWS',
];

export default function Toolbox() {
  return (
    <section aria-labelledby="outils-titre" className="border-y border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:gap-10">
        <h2 id="outils-titre" className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-dim">
          Notre boîte à outils
        </h2>
        <ul className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <li key={t} className="rounded-md border border-line bg-paper px-3 py-1.5 font-mono text-xs text-ink-soft">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
