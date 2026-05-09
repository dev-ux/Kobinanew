import React from 'react';
import { mockData } from '../mock';
import { ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const Services = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="solutions" className="bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-4">Une expertise cross-leviers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Nos solutions pour votre entreprise
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockData.services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease-out ${index * 120}ms, transform 0.7s ease-out ${index * 120}ms`,
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Animated top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
