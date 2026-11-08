import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../../config/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="KobinaTech, accueil" className="shrink-0">
          <Logo className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-white hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/#contact"
            className="hidden items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep sm:inline-flex"
          >
            Démarrer un projet
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line px-4 pb-6 pt-2 md:hidden">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="block border-b border-line py-3 text-base font-medium text-ink">
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
          >
            Démarrer un projet
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
}
