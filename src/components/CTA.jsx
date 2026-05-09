import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import useInView from '../hooks/useInView';

const CTA = () => {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="bg-[#0a0a1a] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className="relative rounded-3xl p-16 text-center overflow-hidden border border-blue-500/20"
          style={{
            background: 'linear-gradient(135deg, #0d1a3a 0%, #0a0a1a 50%, #0d1a3a 100%)',
            backgroundSize: '200% 200%',
            animation: inView ? 'gradient-shift 6s ease infinite, glow-pulse 4s ease-in-out infinite' : 'none',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top accent line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          <div className="relative z-10">
            <p className="text-blue-400 text-sm font-medium mb-4 tracking-wide">Prêt à démarrer ?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Notre prochain succès,<br />
              <span className="shimmer-text">c'est peut-être le vôtre.</span>
            </h2>
            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105 shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">●</span>
              Parlons de votre projet digital
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
