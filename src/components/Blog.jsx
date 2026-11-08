import React, { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import PageHeader from './layout/PageHeader';
import { PageFallback } from './layout/SiteLayout';
import BlogDetail from './BlogDetail';
import { getPosts } from '../lib/api';

export const formatDate = (val) => {
  if (!val) return '';
  try { return format(new Date(val), 'd MMMM yyyy', { locale: fr }); } catch { return ''; }
};

// N'accepte que des URLs d'images en https (évite javascript:, data:, etc.)
export const safeImage = (url) => (typeof url === 'string' && /^https:\/\//i.test(url) ? url : null);

export function PostCover({ post, className = '' }) {
  const src = safeImage(post.image);
  if (src) {
    return (
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        width="640"
        height="360"
        className={`aspect-video w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div className={`flex aspect-video w-full items-end bg-gradient-to-br from-navy to-ink p-5 ${className}`} aria-hidden="true">
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-300">{post.category || 'Article'}</span>
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tous');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let alive = true;
    getPosts()
      .then((data) => alive && setPosts(Array.isArray(data) ? data : []))
      .catch(() => alive && setFailed(true))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  const categories = useMemo(() => ['Tous', ...new Set(posts.map((p) => p.category).filter(Boolean))], [posts]);

  const filtered = posts.filter((p) => {
    const q = search.trim().toLowerCase();
    const okCat = category === 'Tous' || p.category === category;
    const okSearch = !q || [p.title, p.excerpt, p.author, p.category].some((f) => f && f.toLowerCase().includes(q));
    return okCat && okSearch;
  });

  useEffect(() => { window.scrollTo(0, 0); }, [selected]);

  if (selected) return <BlogDetail post={selected} onBack={() => setSelected(null)} />;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes de terrain."
        intro="Ce que nous apprenons en construisant des produits : choix techniques, retours d'expérience et conseils pratiques."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        {loading ? (
          <PageFallback />
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
            <p className="font-display text-2xl font-bold text-ink">Les premiers articles arrivent bientôt.</p>
            <p className="mt-2 text-dim">
              {failed ? 'Le blog est momentanément indisponible.' : 'Revenez dans quelques jours, ou suivez-nous pour être prévenu.'}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center">
              <label className="relative flex-1">
                <span className="sr-only">Rechercher un article</span>
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dim" aria-hidden="true" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un article…"
                  className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-4 text-ink focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={category === c}
                    onClick={() => setCategory(c)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      category === c ? 'border-navy bg-navy text-white' : 'border-line bg-white text-ink-soft hover:border-navy/40'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="py-16 text-center text-dim">Aucun article ne correspond à votre recherche.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <article key={post.id} className="group overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(8,40,108,0.25)]">
                    <button type="button" onClick={() => setSelected(post)} className="block w-full text-left">
                      <PostCover post={post} />
                      <div className="p-6">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-leaf">{post.category}</p>
                        <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-navy">{post.title}</h2>
                        <p className="mt-2 line-clamp-3 text-dim">{post.excerpt}</p>
                        <p className="mt-5 text-sm text-dim">{[post.author, formatDate(post.created_at)].filter(Boolean).join(' · ')}</p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
