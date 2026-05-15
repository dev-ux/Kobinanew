import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Globe, Mail, Video } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const POINTS = [
  "Comment les algorithmes d'IA prennent des décisions sans transparence",
  "Les risques éthiques et juridiques des boîtes noires algorithmiques",
  "Les solutions pour rendre l'IA explicable et auditée",
  "Retours d'expériences concrets de projets IA en entreprise",
];

const SPEAKERS = [
  { name: "Junior Marvin", role: "CEO, KobinaTech", initials: "JM" },
];

const TARGET_DATE = new Date('2025-07-18T10:00:00Z');

function calcTime() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  };
}

function Countdown() {
  const [time, setTime] = useState(calcTime);
  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Jours',    value: time.days },
    { label: 'Heures',   value: time.hours },
    { label: 'Minutes',  value: time.minutes },
    { label: 'Secondes', value: time.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs text-gray-400 mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

function LivestormForm() {
  const [registered, setRegistered] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!String(e.origin).includes('livestorm.co')) return;
      try {
        const raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data ?? '');
        const lower = raw.toLowerCase();
        if (
          lower.includes('registrant') ||
          lower.includes('registered') ||
          lower.includes('registration') ||
          lower.includes('success') ||
          lower.includes('merci')
        ) {
          setRegistered(true);
        }
      } catch (_) {}
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  if (registered) {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-950/40">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          </div>
          <span className="text-white text-sm font-medium opacity-90">Inscription confirmée</span>
        </div>

        {/* Success body */}
        <div className="bg-[#0d1117] px-8 py-12 flex flex-col items-center text-center">
          {/* Animated check */}
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" />
          </div>

          <h4 className="text-2xl font-bold text-white mb-2">Vous êtes inscrit !</h4>
          <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
            Merci pour votre inscription. Vous allez recevoir un email avec votre lien de connexion unique.
          </p>

          {/* Info cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left">
              <Calendar className="w-4 h-4 text-yellow-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="text-sm text-white font-medium">Samedi 18 juillet 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Heure</p>
                <p className="text-sm text-white font-medium">10h00 GMT · 12h00 CEST</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left">
              <Mail className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Confirmation</p>
                <p className="text-sm text-white font-medium">Email envoyé</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left">
              <Video className="w-4 h-4 text-green-400 shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Accès</p>
                <p className="text-sm text-white font-medium">Lien personnel</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600">
            Pensez à vérifier vos spams si vous ne recevez pas l'email dans les prochaines minutes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-950/40">
      {/* Header décoratif */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
        </div>
        <span className="text-white text-sm font-medium opacity-90">Formulaire d'inscription</span>
      </div>
      {/* Iframe */}
      <div className="bg-[#0d1117]">
        <iframe
          ref={iframeRef}
          width="100%"
          height="480"
          style={{ border: 'none', display: 'block' }}
          src="https://app.livestorm.co/p/af723c13-f320-4577-a9b5-1a6664753ef9/form"
          title="Inscription Webinar IA"
        />
      </div>
    </div>
  );
}

export default function WebinarIA() {
  return (
    <div className="min-h-screen bg-[#020818] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pb-24">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Webinar gratuit · En ligne
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Intelligence{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Artificielle
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 leading-snug">
                Décision algorithmique opaques
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Quand les machines décident à notre place sans qu'on comprenne pourquoi —
                enjeux, risques et solutions pour une IA transparente et responsable.
              </p>

              {/* Date / Time / Lang */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Samedi 18 juillet 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">10h00 GMT · 12h00 CEST</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Français</span>
                </div>
              </div>

              <a
                href="#inscription"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/30"
              >
                S'inscrire gratuitement
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: visual banner */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/40">
                <img
                  src="/webinar-ia-banner.png"
                  alt="Webinar IA — Décision algorithmique opaques"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback visuel si pas d'image */}
                <div
                  className="hidden w-full aspect-video bg-gradient-to-br from-[#0d1b4b] to-[#0a0f2e] items-center justify-center p-8 text-center"
                >
                  <div>
                    <div className="text-6xl mb-4">🤖</div>
                    <p className="text-2xl font-bold text-white">Intelligence Artificielle</p>
                    <p className="text-indigo-300 mt-2">Décision algorithmique opaques</p>
                    <div className="mt-6 inline-flex items-center gap-6 bg-white/10 rounded-xl px-6 py-3">
                      <span className="text-sm text-gray-300">📅 Samedi 18 juillet</span>
                      <span className="text-sm text-gray-300">🕙 10h00 GMT · 12h00 CEST</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">Le webinar commence dans</p>
            <Countdown />
          </div>
        </div>
      </section>

      {/* ── AU PROGRAMME ── */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">Au programme</h3>
              <ul className="space-y-4">
                {POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Intervenant</h3>
              <div className="space-y-4">
                {SPEAKERS.map((s) => (
                  <div key={s.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {s.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{s.name}</p>
                      <p className="text-sm text-gray-400">{s.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Places limitées</span>
                </div>
                <p className="text-xs text-gray-400">Inscrivez-vous maintenant pour garantir votre place. Le lien de connexion vous sera envoyé par email.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSCRIPTION ── */}
      <section id="inscription" className="py-20 border-t border-white/5 relative overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
              Inscription gratuite
            </span>
            <h3 className="text-4xl font-extrabold mb-3">Réservez votre place</h3>
            <p className="text-gray-400 text-lg">100% gratuit · Lien de connexion envoyé par email</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Left: infos event */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h4 className="font-semibold text-white text-lg">Détails de l'événement</h4>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                    <p className="text-sm font-medium text-white">Samedi 18 juillet 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Heure</p>
                    <p className="text-sm font-medium text-white">10h00 GMT · 12h00 CEST</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Format</p>
                    <p className="text-sm font-medium text-white">En ligne · Français</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Places</p>
                    <p className="text-sm font-medium text-white">Limitées</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-5">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-white font-semibold">Après inscription,</span> vous recevrez un email de confirmation avec votre lien personnel d'accès au webinar.
                </p>
              </div>
            </div>

            {/* Right: iframe Livestorm */}
            <div className="lg:col-span-3">
              <LivestormForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
