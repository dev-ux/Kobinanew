import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mock';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#0a0a1a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-6 tracking-wide animate-fade-in">
            {mockData.company.tagline}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
            {mockData.company.heroTitle}
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {mockData.company.heroSubtitle}
            </span>
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-20 animate-fade-in-up delay-200">
          <Button
            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105 shadow-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="mr-2">●</span>
            Contactez votre expert Kobinatech
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Globe Image */}
        <div className="relative max-w-4xl mx-auto animate-fade-in-up delay-300">
          <div className="relative">
            <img
              src="https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/647a0143a633dea5f54d16fd_Earth-Image-Community.webp"
              alt="Globe terrestre"
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent rounded-3xl" />
          </div>
          
          {/* Client Trust Badge */}
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-white text-sm md:text-base font-medium bg-black/50 backdrop-blur-md px-6 py-3 rounded-full">
              Plus de 150 entreprises ont fait confiance à Kobinatech
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
