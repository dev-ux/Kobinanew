import React from 'react';
import { mockData } from '../mock';

const ClientLogos = () => {
  return (
    <section className="bg-[#0a0a1a] py-16 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Logo Carousel - First Row */}
        <div className="flex animate-scroll-left mb-8">
          {[...mockData.clients, ...mockData.clients].map((client, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Logo Carousel - Second Row (Reverse) */}
        <div className="flex animate-scroll-right">
          {[...mockData.clients, ...mockData.clients].map((client, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
