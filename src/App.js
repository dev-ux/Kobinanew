import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout, { PageFallback } from './components/layout/SiteLayout';
import HomeHero from './components/home/HomeHero';
import Toolbox from './components/home/Toolbox';
import Expertises from './components/home/Expertises';
import Formules from './components/home/Formules';
import Engagements from './components/home/Engagements';
import ContactSection from './components/home/ContactSection';

// Pages secondaires : chargées uniquement quand on les visite
const About = lazy(() => import('./components/About'));
const Blog = lazy(() => import('./components/Blog'));
const Careers = lazy(() => import('./components/Careers'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const WebinarIA = lazy(() => import('./components/WebinarIA'));
const CGV = lazy(() => import('./components/CGV'));
const CGU = lazy(() => import('./components/CGU'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const MentionsLegales = lazy(() => import('./components/MentionsLegales'));

// Administration : bundle séparé, jamais chargé par les visiteurs
const AdminApp = lazy(() => import('./components/admin/AdminApp'));

function HomePage() {
  return (
    <>
      <HomeHero />
      <Toolbox />
      <Expertises />
      <Formules />
      <Engagements />
      <ContactSection />
    </>
  );
}

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-4 sm:px-6">
      <p className="font-mono text-sm text-leaf">Erreur 404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-6xl">Cette page n'existe pas.</h1>
      <a href="/" className="mt-8 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">Retour à l'accueil</a>
    </section>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carrieres" element={<Careers />} />
        <Route path="/carrières" element={<Navigate to="/carrieres" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/webinar-ia" element={<WebinarIA />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path="/admin/*"
        element={
          <Suspense fallback={<PageFallback />}>
            <AdminApp />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
