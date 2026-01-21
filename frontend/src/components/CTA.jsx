import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-[#0a0a1a] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Notre prochain succès, c'est peut-être le vôtre.
        </h2>
        <Button
          className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="mr-2">●</span>
          Parlons de votre projet digital
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
