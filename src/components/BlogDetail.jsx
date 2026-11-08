import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';
import { ArrowLeft } from 'lucide-react';
import { formatDate, PostCover } from './Blog';

// Le contenu vient de la base : on le nettoie avant affichage (anti-XSS)
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

const sanitize = (html) =>
  DOMPurify.sanitize(html || '', {
    USE_PROFILES: { html: true },
    FORBID_TAGS: ['style', 'iframe', 'form', 'input', 'script', 'object', 'embed'],
    FORBID_ATTR: ['style'],
  });

export default function BlogDetail({ post, onBack }) {
  const html = useMemo(
    () => sanitize(post.content || '<p>Article en cours de rédaction.</p>'),
    [post.content]
  );

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
      <button type="button" onClick={onBack} className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tous les articles
      </button>
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-leaf">{post.category}</p>
      <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-dim">{[post.author, formatDate(post.created_at)].filter(Boolean).join(' · ')}</p>
      <PostCover post={post} className="mt-10 rounded-2xl" />
      <div className="article-body mt-10 text-[17px] text-ink-soft" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
