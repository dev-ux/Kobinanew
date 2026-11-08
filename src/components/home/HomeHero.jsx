import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, GitBranch } from 'lucide-react';

const logLines = [
  { t: '$ kobina release --projet app-livraison', cls: 'text-white/90' },
  { t: '✓ 128 tests automatisés passés', cls: 'text-emerald-300' },
  { t: '✓ Revue de code validée par 2 développeurs', cls: 'text-emerald-300' },
  { t: '✓ Déployé en préproduction', cls: 'text-emerald-300' },
  { t: '→ Démo client : vendredi, 10 h', cls: 'text-sky-300' },
];

function ReleaseCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-navy/10 via-transparent to-leaf/15 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-navy/20 bg-ink shadow-[0_30px_60px_-20px_rgba(8,40,108,0.45)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[11px] text-white/40">journal-de-livraison</span>
        </div>
        <div className="space-y-2 px-5 py-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
          {logLines.map((l, i) => (
            <p key={l.t} className={`line-in ${l.cls}`} style={{ animationDelay: `${0.25 + i * 0.35}s` }}>
              {l.t}
            </p>
          ))}
          <p className="text-white/60">
            $ <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-white/70" />
          </p>
        </div>
      </div>

      <div className="relative -mt-8 ml-auto mr-4 w-60 rounded-xl border border-line bg-white p-4 shadow-lg sm:mr-8">
        <div className="flex items-center justify-between text-xs font-semibold text-ink">
          <span className="inline-flex items-center gap-1.5"><GitBranch className="h-3.5 w-3.5 text-navy" /> Itération 4 / 6</span>
          <span className="text-leaf">67 %</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper">
          <div className="h-full w-2/3 rounded-full bg-leaf" />
        </div>
        <ul className="mt-3 space-y-1.5 text-xs text-dim">
          <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-leaf" /> Paiement mobile intégré</li>
          <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-leaf" /> Suivi des commandes</li>
        </ul>
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            Studio de développement · Abidjan
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            Le logiciel qui fait tourner votre activité,{' '}
            <span className="text-navy">écrit avec soin.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">
            KobinaTech transforme un besoin métier en site, application mobile ou outil interne.
            Nous livrons par petites étapes que vous testez vous-même, puis nous restons là pour faire évoluer le produit.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              Décrire mon projet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/#expertises"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-navy hover:text-navy"
            >
              Voir ce que nous construisons
            </Link>
          </div>
          <p className="mt-6 text-sm text-dim">Réponse sous 48 h ouvrées · Estimation gratuite</p>
        </div>
        <ReleaseCard />
      </div>
    </section>
  );
}
