import React from 'react';
import { Globe, Smartphone, LayoutDashboard, Sparkles, Server, Wrench } from 'lucide-react';
import SectionTitle from './SectionTitle';
import useInView from '../../hooks/useInView';

const items = [
  {
    icon: Globe,
    title: 'Sites & plateformes web',
    text: "Sites vitrines rapides, plateformes de réservation, espaces clients, boutiques en ligne avec paiement mobile.",
    tags: ['React', 'Next.js', 'Laravel'],
    span: 'md:col-span-2',
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    text: 'Une seule base de code pour Android et iOS, pensée pour les réseaux instables et les petits forfaits data.',
    tags: ['Flutter', 'Firebase'],
    span: '',
  },
  {
    icon: LayoutDashboard,
    title: 'Logiciels métier',
    text: "Gestion de stock, facturation, suivi d'interventions : l'outil interne qui remplace vos fichiers Excel.",
    tags: ['Back-office', 'API'],
    span: '',
  },
  {
    icon: Sparkles,
    title: 'IA appliquée',
    text: "Assistants qui répondent à partir de vos documents, tri automatique des demandes, extraction de données de factures.",
    tags: ['LLM', 'Python'],
    span: '',
  },
  {
    icon: Server,
    title: 'Cloud & mise en production',
    text: 'Hébergement, sauvegardes, déploiements automatisés et supervision, pour que tout tienne le jour du lancement.',
    tags: ['Docker', 'AWS', 'CI/CD'],
    span: '',
  },
  {
    icon: Wrench,
    title: 'Reprise & maintenance',
    text: "Vous avez une application existante qui vieillit ? Nous l'auditons, la sécurisons et reprenons sa maintenance.",
    tags: ['Audit', 'TMA'],
    span: 'md:col-span-2 lg:col-span-1',
  },
];

export default function Expertises() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="expertises" aria-labelledby="expertises-titre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="expertises-titre"
          kicker="Ce que nous construisons"
          title="Six terrains de jeu, une seule équipe."
          intro="Nous intervenons sur toute la chaîne : de la première maquette jusqu'au serveur qui fait tourner l'application."
        />
        <div ref={ref} className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text, tags, span }, i) => (
            <article
              key={title}
              className={`reveal ${inView ? 'is-visible' : ''} group flex flex-col rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(8,40,108,0.25)] ${span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-dim">{text}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <li key={t} className="rounded-full bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-soft">{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
