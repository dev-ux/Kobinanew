import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { site } from '../../config/site';

const projectTypes = ['Site web', 'Application mobile', 'Logiciel métier', 'IA', 'Maintenance', 'Autre'];
const budgets = ['Je ne sais pas encore', 'Moins de 1 M FCFA', '1 à 5 M FCFA', '5 à 15 M FCFA', 'Plus de 15 M FCFA'];

const questions = [
  {
    q: 'Combien de temps faut-il pour une première version ?',
    a: "Pour un site ou une application simple, comptez généralement 4 à 8 semaines. Nous vous donnons un planning précis après le premier échange.",
  },
  {
    q: 'Travaillez-vous avec des clients hors de Côte d\'Ivoire ?',
    a: "Oui. Nous travaillons à distance avec des entreprises d'Afrique de l'Ouest et d'Europe, avec des points réguliers en visioconférence.",
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Par jalons : un acompte au lancement, puis un versement à chaque étape validée. Virement et paiement mobile acceptés.',
  },
  {
    q: 'Et si je veux reprendre le projet en interne plus tard ?',
    a: 'Le code et la documentation vous appartiennent. Nous organisons la passation avec votre équipe si besoin.',
  },
];

const inputCls =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-dim/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20';

const empty = { name: '', email: '', phone: '', company: '', message: '', website: '' };

export default function ContactSection({ standalone = false }) {
  const [form, setForm] = useState(empty);
  const [type, setType] = useState('');
  const [budget, setBudget] = useState(budgets[0]);
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    // Champ piège invisible : rempli uniquement par les robots
    if (form.website) {
      setStatus('success');
      return;
    }
    setStatus('loading');
    try {
      // Client Supabase chargé seulement à l'envoi : page d'accueil plus légère
      const { submitContact } = await import('../../lib/api');
      await submitContact({
        ...form,
        subject: type ? `Projet : ${type}` : 'Demande de contact',
        message: `Budget indicatif : ${budget}\n\n${form.message}`,
      });
      setStatus('success');
      setForm(empty);
      setType('');
      setBudget(budgets[0]);
    } catch {
      setStatus('error');
    }
  };

  const Heading = standalone ? 'h1' : 'h2';

  return (
    <section id="contact" aria-labelledby="contact-titre" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          {standalone ? (
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-leaf">Contact</p>
              <Heading id="contact-titre" className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
                Parlez-nous de votre projet.
              </Heading>
            </div>
          ) : (
            <SectionTitle id="contact-titre" kicker="Contact" title="Parlez-nous de votre projet." />
          )}
          <p className="mt-4 text-lg leading-relaxed text-dim">
            Quelques lignes suffisent. Nous revenons vers vous sous 48 h ouvrées avec des questions ou une première estimation.
          </p>

          <ul className="mt-10 space-y-5 text-[15px]">
            <li className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="font-medium text-ink hover:text-navy">{site.email}</a>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`} className="font-medium text-ink hover:text-navy">{site.phone}</a>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
              <span className="text-ink-soft">{site.address}<br />{site.city}</span>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
              <span className="text-ink-soft">{site.hours}</span>
            </li>
          </ul>

          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-dim">Questions pratiques</h3>
            <div className="mt-3 divide-y divide-line border-y border-line">
              {questions.map(({ q, a }) => (
                <details key={q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="mt-0.5 font-mono text-navy transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-2 leading-relaxed text-dim">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_20px_60px_-30px_rgba(8,40,108,0.35)] sm:p-9">
          {status === 'success' ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
              <CheckCircle2 className="h-12 w-12 text-leaf" aria-hidden="true" />
              <p className="mt-5 font-display text-2xl font-bold text-ink">Message bien reçu.</p>
              <p className="mt-2 max-w-sm text-dim">Merci ! Nous revenons vers vous très vite à l'adresse indiquée.</p>
              <button type="button" onClick={() => setStatus('idle')} className="mt-8 text-sm font-semibold text-navy hover:underline">
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-ink">Type de projet</legend>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={type === t}
                      onClick={() => setType(type === t ? '' : t)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        type === t ? 'border-navy bg-navy text-white' : 'border-line bg-paper text-ink-soft hover:border-navy/40'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-ink">Nom *</label>
                  <input id="c-name" name="name" required maxLength={120} autoComplete="name" value={form.name} onChange={onChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold text-ink">Email *</label>
                  <input id="c-email" name="email" type="email" required maxLength={200} autoComplete="email" value={form.email} onChange={onChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-phone" className="mb-1.5 block text-sm font-semibold text-ink">Téléphone</label>
                  <input id="c-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" value={form.phone} onChange={onChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-company" className="mb-1.5 block text-sm font-semibold text-ink">Entreprise</label>
                  <input id="c-company" name="company" maxLength={160} autoComplete="organization" value={form.company} onChange={onChange} className={inputCls} />
                </div>
              </div>

              <div>
                <label htmlFor="c-budget" className="mb-1.5 block text-sm font-semibold text-ink">Budget indicatif</label>
                <select id="c-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={inputCls}>
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold text-ink">Votre besoin *</label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Ce que vous voulez construire, pour qui, et pour quand."
                  className={`${inputCls} resize-y`}
                />
              </div>

              {/* Champ piège anti-spam, masqué aux humains */}
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="c-website">Site web</label>
                <input id="c-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} />
              </div>

              {status === 'error' && (
                <p className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  L'envoi n'a pas abouti. Vérifiez vos informations ou écrivez-nous directement à {site.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-deep disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Envoi en cours…</>
                ) : (
                  <>Envoyer ma demande <ArrowRight className="h-4 w-4" aria-hidden="true" /></>
                )}
              </button>
              <p className="text-xs text-dim">
                Vos informations servent uniquement à vous répondre. Voir notre{' '}
                <a href="/politique-de-confidentialite" className="underline hover:text-navy">politique de confidentialité</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
