import React from 'react';
import { mockData } from '../mock';

const Industries = () => {
  return (
    <section id="industries" className="bg-[#0a0a1a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-4">Nos industries</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Notre méthode s'adapte à votre business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockData.industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/50 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
