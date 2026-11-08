import React from 'react';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import PageHeader from './layout/PageHeader';
import { site } from '../config/site';

const jobs = [
  {
    id: 'stage-mobile',
    title: 'Stage · Développeur mobile',
    location: 'Abidjan',
    type: 'Stage',
    description:
      "Rejoignez l'équipe technique pour développer des applications Flutter connectées à Firebase et à nos API.",
    missions: [
      'Développer des écrans et fonctionnalités avec Flutter',
      'Intégrer Firebase (notifications, authentification par code SMS)',
      'Travailler avec Google Maps pour la géolocalisation',
      'Mettre en place des échanges temps réel (WebSocket)',
      "Collaborer avec l'équipe back-end PHP / Laravel",
    ],
    profile: [
      'Étudiant·e en informatique ou formation équivalente',
      'Bases en Flutter / Dart',
      'Curiosité et envie d\'apprendre vite',
      'Notions de PHP / MySQL appréciées',
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'WebSocket', 'MySQL', 'PHP'],
  },
];

const perks = [
  { title: 'Projets réels', text: 'Vous travaillez sur des produits utilisés par de vrais clients, pas sur des exercices.' },
  { title: 'Accompagnement', text: 'Revues de code systématiques et un référent technique pour progresser.' },
  { title: 'Polyvalence', text: 'Web, mobile, back-end : vous touchez à toute la chaîne de développement.' },
];

export default function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Carrières"
        title="Construisez avec nous."
        intro="Nous cherchons des développeuses et développeurs curieux, qui aiment le travail bien fait et les problèmes concrets."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="border-t-2 border-navy pt-5">
              <h2 className="text-lg font-bold text-ink">{p.title}</h2>
              <p className="mt-2 leading-relaxed text-dim">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-ink">Postes ouverts</h2>
          <div className="mt-8 space-y-4">
            {jobs.map((job) => (
              <details key={job.id} className="group rounded-2xl border border-line bg-paper p-6 open:bg-white">
                <summary className="flex cursor-pointer list-none flex-col gap-3 sm:flex-row sm:items-center sm:justify-between [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{job.title}</h3>
                    <p className="mt-1 flex flex-wrap gap-4 text-sm text-dim">
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />{job.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" aria-hidden="true" />{job.type}</span>
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-navy group-open:hidden">Voir le détail</span>
                  <span className="hidden text-sm font-semibold text-navy group-open:inline">Masquer</span>
                </summary>
                <div className="mt-6 grid gap-8 border-t border-line pt-6 md:grid-cols-2">
                  <div>
                    <p className="leading-relaxed text-ink-soft">{job.description}</p>
                    <h4 className="mt-6 font-semibold text-ink">Missions</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-dim">{job.missions.map((m) => <li key={m}>{m}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">Profil</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-dim">{job.profile.map((m) => <li key={m}>{m}</li>)}</ul>
                    <h4 className="mt-6 font-semibold text-ink">Technologies</h4>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {job.stack.map((s) => <li key={s} className="rounded-full bg-paper px-2.5 py-1 font-mono text-xs text-ink-soft">{s}</li>)}
                    </ul>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(`Candidature : ${job.title}`)}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-deep"
                    >
                      Postuler par email <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy p-8 text-white md:p-10">
            <h3 className="font-display text-2xl font-bold">Pas de poste pour votre profil ?</h3>
            <p className="mt-2 max-w-xl text-white/70">Envoyez-nous une candidature spontanée : nous lisons tout et revenons vers vous dès qu'une place s'ouvre.</p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent('Candidature spontanée')}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy"
            >
              Candidature spontanée <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
