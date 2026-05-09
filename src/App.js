import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Difference from "./components/Difference";
import Testimonials from "./components/Testimonials";
import Industries from "./components/Industries";
import DetailSections from "./components/DetailSections";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CGV from "./components/CGV";
import CGU from "./components/CGU";
import PrivacyPolicy from "./components/PrivacyPolicy";
import MentionsLegales from "./components/MentionsLegales";
import About from "./components/About";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import ContactPage from "./components/ContactPage";

function HomePage() {
  return (
    <div className="bg-[#0a0a1a]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Difference />
      <Testimonials />
      <Industries />
      <DetailSections />
      <Process />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carrières" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;