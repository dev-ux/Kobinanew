import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import PageHeader from './layout/PageHeader';
import { site } from '../config/site';

const values = [
  {
    title: 'Clarté',
    text: "Des devis lisibles, des plannings tenus, des explications sans jargon. Vous savez toujours où en est votre projet.",
  },
  {
    title: 'Exigence',
    text: 'Tests, revues de code, sécurité : nous livrons ce que nous serions fiers de maintenir nous-mêmes pendant des années.',
  },
  {
    title: 'Proximité',
    text: "Une petite équipe, joignable, qui connaît le terrain : paiement mobile, connexions variables, usages locaux.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une équipe de développeurs, à Abidjan."
        intro="KobinaTech est née en 2023 d'une conviction simple : les entreprises d'ici méritent des logiciels aussi solides que ceux des grands groupes, à un coût qui leur est accessible."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            Nous avons commencé à quelques-uns, en développant des applications pour des commerces et des PME autour de nous.
            Très vite, la même demande revenait : un partenaire technique fiable, qui comprend le métier avant d'écrire la première ligne de code.
          </p>
          <p>
            C'est ce que nous essayons d'être. Nous concevons des sites, des applications mobiles et des outils internes,
            et nous les accompagnons après leur mise en ligne.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-8">
          <MapPin className="h-6 w-6 text-navy" aria-hidden="true" />
          <h2 className="mt-4 font-display text-2xl font-bold text-ink">Où nous trouver</h2>
          <p className="mt-3 text-ink-soft">{site.address}<br />{site.city}</p>
          <p className="mt-3 text-sm text-dim">{site.hours}</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline">
            Prendre rendez-vous <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Ce qui nous guide</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="border-t-2 border-navy pt-6">
                <span className="font-mono text-sm text-leaf">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-dim">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
