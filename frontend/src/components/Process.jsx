import React from 'react';
import { mockData } from '../mock';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="bg-[#0a0a1a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-4">4 étapes clés</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Notre méthode pour avancer ensemble
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mockData.process.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < mockData.process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
              
              <div className="relative">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-400 text-sm mb-4 font-medium">{step.duration}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="mr-2">●</span>
            Contactez-nous
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
