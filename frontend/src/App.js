import React from "react";
import "./App.css";
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

function App() {
  return (
    <div className="App bg-[#0a0a1a]">
      <Navbar />
      <Hero />
      <ClientLogos />
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

export default App;
