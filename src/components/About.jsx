import React from 'react';
import { ArrowLeft, Users, Target, Award, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import useInView from '../hooks/useInView';

const About = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);
  const [storyRef, storyInView] = useInView(0.1);
  const [valuesRef, valuesInView] = useInView(0.1);
  const [locationRef, locationInView] = useInView(0.1);

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Nous repoussons les limites technologiques pour créer des solutions uniques."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour garantir leur succès."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous nous engageons à livrer des produits de la plus haute qualité."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-gray-300">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            variant="ghost"
            className="mb-6 text-gray-400 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>

          {/* Hero Section */}
          <div
            ref={heroRef}
            className="text-center mb-16"
            style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À Propos de <span className="shimmer-text">KOBINATECH</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              L'agence de développement qui transforme vos idées en innovation digitale.
              Depuis 2023, nous accompagnons les entreprises dans leur transformation numérique.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '8+', label: 'Projets réalisés' },
              { value: '3+', label: 'Clients satisfaits' },
              { value: '3', label: 'Experts' },
              { value: '2+', label: "Années d'expérience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
                style={{
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${index * 100}ms`,
                }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story */}
          <div
            ref={storyRef}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-16"
            style={{
              opacity: storyInView ? 1 : 0,
              transform: storyInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Fondée en 2023, KOBINATECH est née d'une vision simple : rendre la technologie accessible à toutes les entreprises, quelle que soit leur taille.
              </p>
              <p>
                Ce qui a commencé comme une petite équipe de développeurs passionnés est devenu
                une agence reconnue pour son expertise en développement web, mobile et ses solutions cloud innovantes.
              </p>
              <p>
                Aujourd'hui, nous continuons de grandir tout en restant fidèles à nos valeurs :
                l'innovation, la collaboration et l'excellence dans chaque projet que nous entreprenons.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nos Valeurs</h2>
            <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
                    style={{
                      opacity: valuesInView ? 1 : 0,
                      transform: valuesInView ? 'translateY(0)' : 'translateY(40px)',
                      transition: `opacity 0.7s ease-out ${index * 150}ms, transform 0.7s ease-out ${index * 150}ms`,
                    }}
                  >
                    <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Location */}
          <div
            ref={locationRef}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 p-8"
            style={{
              opacity: locationInView ? 1 : 0,
              transform: locationInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Notre Siège</h2>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>ABIDJAN, COCODY RIVIERA AKOUEDO, EN FACE DE L'ANCIEN CAMP</p>
              <p>Abidjan, Côte d'Ivoire</p>
              <p className="pt-4">
                Rejoignez-nous dans notre espace de travail moderne à Abidjan,
                où l'innovation rencontre la créativité.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
