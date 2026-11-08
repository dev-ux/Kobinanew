import React from 'react';
import SectionTitle from './SectionTitle';

const engagements = [
  {
    title: 'Le code est à vous',
    text: "Dépôt Git à votre nom, accès complets, aucune dépendance cachée. Vous pouvez changer de prestataire quand vous voulez.",
  },
  {
    title: 'Vous voyez avancer le projet',
    text: 'Une version testable toutes les deux semaines, sur un lien que vous pouvez partager avec votre équipe.',
  },
  {
    title: 'Un seul interlocuteur',
    text: 'La même personne suit votre projet du premier appel à la mise en ligne, et répond à vos messages.',
  },
  {
    title: 'La sécurité dès le départ',
    text: 'Données chiffrées, accès limités au strict nécessaire, sauvegardes testées. Pas en option.',
  },
  {
    title: 'Une documentation livrée',
    text: "Guide d'utilisation et documentation technique remis avec chaque version, en français.",
  },
];

export default function Engagements() {
  return (
    <section id="engagements" aria-labelledby="engagements-titre" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            light
            id="engagements-titre"
            kicker="Nos engagements"
            title="Cinq principes, sur chaque projet."
            intro="Peu importe la taille du projet, nous travaillons toujours de la même façon. Vous êtes en droit de nous les rappeler."
          />
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {engagements.map((e, i) => (
            <li key={e.title} className="grid grid-cols-[3rem_1fr] gap-4 py-7">
              <span className="font-mono text-sm text-emerald-300">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-xl font-bold">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{e.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
