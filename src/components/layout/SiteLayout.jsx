import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Laisse le temps à la page (éventuellement chargée à la demande) de s'afficher
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
}

export function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Chargement">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-navy border-t-transparent" />
    </div>
  );
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white">
        Aller au contenu
      </a>
      <ScrollManager />
      <SiteHeader />
      <main id="contenu">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
