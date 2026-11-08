import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const EVENT = {
  title: 'Intelligence artificielle : les décisions algorithmiques opaques',
  date: 'Samedi 18 juillet 2026',
  time: '10 h 00 GMT · 12 h 00 CEST',
  start: new Date('2026-07-18T10:00:00Z'),
  formUrl: 'https://app.livestorm.co/p/af723c13-f320-4577-a9b5-1a6664753ef9/form',
};

const POINTS = [
  "Comment les algorithmes d'IA prennent des décisions sans transparence",
  'Les risques éthiques et juridiques des « boîtes noires »',
  "Les solutions pour rendre l'IA explicable et auditable",
  "Retours d'expérience de projets IA en entreprise",
];

// Vérifie strictement l'origine des messages de l'iframe (pas un simple « includes »)
const isLivestormOrigin = (origin) => {
  try {
    const { protocol, hostname } = new URL(origin);
    return protocol === 'https:' && (hostname === 'livestorm.co' || hostname.endsWith('.livestorm.co'));
  } catch {
    return false;
  }
};

function remaining() {
  const diff = Math.max(0, EVENT.start - Date.now());
  return {
    Jours: Math.floor(diff / 86400000),
    Heures: Math.floor((diff % 86400000) / 3600000),
    Minutes: Math.floor((diff % 3600000) / 60000),
    Secondes: Math.floor((diff % 60000) / 1000),
  };
}

function Countdown() {
  const [t, setT] = useState(remaining);
  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex gap-3" aria-label="Compte à rebours">
      {Object.entries(t).map(([label, v]) => (
        <div key={label} className="w-16 rounded-xl border border-line bg-white py-3 text-center">
          <div className="font-mono text-2xl font-bold tabular-nums text-ink">{String(v).padStart(2, '0')}</div>
          <div className="text-[11px] text-dim">{label}</div>
        </div>
      ))}
    </div>
  );
}

function RegistrationForm() {
  const [registered, setRegistered] = useState(false);
  useEffect(() => {
    const onMessage = (e) => {
      if (!isLivestormOrigin(e.origin)) return;
      const raw = (typeof e.data === 'string' ? e.data : JSON.stringify(e.data ?? '')).toLowerCase();
      if (/regist|success/.test(raw)) setRegistered(true);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  if (registered) {
    return (
      <div className="rounded-2xl border border-line bg-white p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-leaf" aria-hidden="true" />
        <p className="mt-4 font-display text-2xl font-bold text-ink">Vous êtes inscrit·e !</p>
        <p className="mt-2 text-dim">Votre lien de connexion arrive par email. Pensez à vérifier vos courriers indésirables.</p>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <iframe
        src={EVENT.formUrl}
        title="Inscription au webinar IA"
        width="100%"
        height="480"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="block border-0"
      />
    </div>
  );
}

export default function WebinarIA() {
  const isPast = Date.now() > EVENT.start.getTime() + 2 * 3600000;

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 md:pt-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft">
            <span className={`h-1.5 w-1.5 rounded-full ${isPast ? 'bg-dim' : 'bg-leaf'}`} />
            {isPast ? 'Webinar terminé' : 'Webinar gratuit · En ligne'}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            {EVENT.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dim">
            Quand des machines décident à notre place sans qu'on sache pourquoi : enjeux, risques et pistes pour une IA transparente.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm text-ink-soft">
            <li className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2"><Calendar className="h-4 w-4 text-navy" aria-hidden="true" />{EVENT.date}</li>
            <li className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2"><Clock className="h-4 w-4 text-navy" aria-hidden="true" />{EVENT.time}</li>
            <li className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2"><Globe className="h-4 w-4 text-navy" aria-hidden="true" />En ligne · Français</li>
          </ul>
          {!isPast && <div className="mt-10"><Countdown /></div>}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Au programme</h2>
          <ul className="mt-6 space-y-4">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-3 text-ink-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div id="inscription">
          {isPast ? (
            <div className="rounded-2xl border border-line bg-white p-8">
              <h2 className="font-display text-2xl font-bold text-ink">Ce webinar a eu lieu.</h2>
              <p className="mt-3 leading-relaxed text-dim">
                Merci à toutes les personnes présentes. Vous souhaitez être prévenu·e de nos prochains événements
                ou échanger sur un projet IA ?
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-deep">
                Nous écrire <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <>
              <h2 className="mb-6 font-display text-2xl font-bold text-ink">Réservez votre place</h2>
              <RegistrationForm />
            </>
          )}
        </div>
      </section>
    </>
  );
}
