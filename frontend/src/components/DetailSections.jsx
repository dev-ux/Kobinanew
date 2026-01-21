import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const DetailSections = () => {
  return (
    <>
      {/* Acquérir Section */}
      <section className="bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68c31aefd4eaa0fc37366381_28.webp"
                  alt="Développement"
                  className="rounded-2xl w-full h-auto"
                />
                <img
                  src="https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68c31aefdf97bdba45cb4019_27.webp"
                  alt="Technologie"
                  className="rounded-2xl w-full h-auto mt-8"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-blue-400 text-sm font-medium mb-4">Concevoir</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Créez des solutions qui marquent
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Dans un monde où l'expérience utilisateur fait la différence, concevoir une solution digitale 
                ne se résume pas à aligner du code. Nous combinons design, UX et architecture technique pour 
                créer des produits qui non seulement fonctionnent, mais impressionnent.
                <br /><br />
                Chez Kobinatech, nous maîtrison la conception end-to-end. De l'idéation au déploiement, nous 
                construisons des solutions techniques qui transforment vos ambitions en réalité tangible.
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">●</span>
                Contactez un expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Convertir Section */}
      <section className="bg-[#0a0a1a] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 text-sm font-medium mb-4">Développer</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformez vos idées en produits scalables
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Avoir une belle maquette ne suffit pas : il faut la transformer en une application robuste, 
                performante et évolutive. Un code mal structuré, une architecture non scalable ou des bugs 
                récurrents font perdre un temps et un argent précieux.
                <br /><br />
                Nous développons avec les meilleures pratiques de l'industrie. Notre expertise technique permet 
                de livrer des solutions de qualité professionnelle, testées et optimisées pour supporter votre croissance.
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">●</span>
                Contactez un expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-1">
                <div className="bg-[#0f0f2a] rounded-3xl p-8">
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span className="text-white font-medium">Code Quality</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 w-[95%]" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <span className="text-white font-medium">Performance</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[92%]" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full" />
                        <span className="text-white font-medium">Scalability</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[98%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fidéliser Section */}
      <section className="bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68e3909cd64cd858d303ce6e_HRZ%20-%20Photos%20divers%20(1).png"
                  alt="Support et maintenance"
                  className="rounded-3xl w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-blue-400 text-sm font-medium mb-4">Pérenniser</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Assurez le succès sur le long terme
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Le développement initial coûte cher, mais c'est la maintenance qui assure la durabilité. 
                Une application non maintenue devient rapidement obsolète, vulnérable et coûteuse.
                <br /><br />
                Experts en support technique et maintenance évolutive, nous gardons vos solutions à jour, 
                sécurisées et performantes. Résultat : une croissance continue sans dette technique qui s'accumule.
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">●</span>
                Contactez un expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailSections;
