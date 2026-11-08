import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { site } from '../../config/site';

const columns = [
  {
    title: 'Expertises',
    links: [
      { label: 'Sites & plateformes web', to: '/#expertises' },
      { label: 'Applications mobiles', to: '/#expertises' },
      { label: 'Logiciels métier', to: '/#expertises' },
      { label: 'Maintenance', to: '/#expertises' },
    ],
  },
  {
    title: 'KobinaTech',
    links: [
      { label: 'À propos', to: '/a-propos' },
      { label: 'Blog', to: '/blog' },
      { label: 'Carrières', to: '/carrieres' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Informations',
    links: [
      { label: 'Mentions légales', to: '/mentions-legales' },
      { label: 'Confidentialité', to: '/politique-de-confidentialite' },
      { label: 'CGU', to: '/cgu' },
      { label: 'CGV', to: '/cgv' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo invert className="h-8 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Studio de développement logiciel basé à Abidjan. Nous concevons, livrons et maintenons vos outils numériques.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <a href={`mailto:${site.email}`} className="block text-white hover:text-leaf-soft">{site.email}</a>
              <a href={`tel:${site.phoneHref}`} className="block hover:text-white">{site.phone}</a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{col.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="transition-colors hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} KobinaTech. Tous droits réservés.</p>
          <p>{site.city}</p>
        </div>
      </div>
    </footer>
  );
}
