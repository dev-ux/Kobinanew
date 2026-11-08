import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const formules = [
  {
    name: 'Projet au forfait',
    idealFor: 'Un besoin clair, un budget à tenir.',
    points: [
      'Cahier des charges rédigé avec vous',
      'Prix et planning fixés avant de commencer',
      'Livraison découpée en jalons validés',
      '3 mois de garantie après la mise en ligne',
    ],
  },
  {
    name: 'Équipe dédiée',
    idealFor: 'Un produit qui évolue chaque semaine.',
    points: [
      'Développeurs réservés à votre produit',
      'Priorités revues avec vous tous les quinze jours',
      'Facturation mensuelle, sans engagement long',
      "Accès direct à l'équipe sur votre messagerie",
    ],
    highlight: true,
  },
  {
    name: 'Suivi & évolution',
    idealFor: 'Une application déjà en ligne à faire vivre.',
    points: [
      'Mises à jour de sécurité et sauvegardes',
      'Corrections prises en charge sous 48 h ouvrées',
      'Petites évolutions incluses chaque mois',
      'Rapport mensuel clair, sans jargon',
    ],
  },
];

export default function Formules() {
  return (
    <section id="formules" aria-labelledby="formules-titre" className="border-t border-line bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="formules-titre"
          kicker="Façons de travailler ensemble"
          title="Choisissez le cadre qui vous ressemble."
          intro="Trois formules, que l'on peut enchaîner : on commence souvent au forfait, puis on passe au suivi une fois le produit lancé."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {formules.map((f) => (
            <div
              key={f.name}
              className={`flex flex-col rounded-2xl p-8 ${
                f.highlight ? 'bg-navy text-white' : 'border border-line bg-paper text-ink'
              }`}
            >
              <h3 className="font-display text-2xl font-bold">{f.name}</h3>
              <p className={`mt-2 text-sm ${f.highlight ? 'text-white/70' : 'text-dim'}`}>
                <span className="font-semibold">Idéal pour :</span> {f.idealFor}
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-snug">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${f.highlight ? 'text-emerald-300' : 'text-leaf'}`} aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                className={`mt-8 inline-flex items-center gap-1.5 text-sm font-semibold ${
                  f.highlight ? 'text-white hover:text-emerald-200' : 'text-navy hover:text-navy-deep'
                }`}
              >
                Demander une estimation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
