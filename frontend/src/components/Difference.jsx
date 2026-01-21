import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Difference = () => {
  return (
    <section className="bg-[#0a0a1a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-400 text-sm font-medium mb-4">Notre différence</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Une vision complète de votre écosystème digital
            </h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed mb-8">
              <p>
                Le digital a évolué. Les entreprises performantes ne pensent plus en silos technologiques 
                mais en écosystème intégré. Elles construisent des solutions où backend, frontend, mobile 
                et cloud travaillent en harmonie.
              </p>
              <p>
                Chez Kobinatech, nous avons choisi de nous spécialiser avec des experts dédiés sur quatre 
                piliers techniques : Web, Mobile, Cloud et IA. Chacun peut être activé séparément ou combiné, 
                mais toujours avec une vision globale de votre transformation digitale.
              </p>
            </div>
            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">●</span>
              Contactez un expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-blue-400 text-sm mt-4">Audit offert</p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68d3a4000c39b2551ff5eb6a_HRZ%20-%20Photos%20divers.webp"
                alt="Équipe Kobinatech"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/50 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="text-3xl font-bold text-black">150+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
