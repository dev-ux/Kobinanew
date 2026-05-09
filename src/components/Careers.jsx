import React, { useState } from 'react';
import { ArrowLeft, MapPin, Briefcase, Users, Heart, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import useInView from '../hooks/useInView';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);
  const [benefitsRef, benefitsInView] = useInView(0.1);
  const [jobsRef, jobsInView] = useInView(0.05);
  const jobs = [
    {
      id: 1,
      title: "Stage Développeur Mobile",
      department: "Développement",
      location: "Abidjan",
      type: "Stage",
      description: "Nous recherchons un stagiaire développeur mobile pour rejoindre notre équipe technique et travailler sur des projets innovants utilisant Flutter, Firebase et les API modernes.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "WebSocket", "MySQL", "PHP"]
    },
    
  
  ];

  if (selectedJob) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] text-gray-300">
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setSelectedJob(null)}
              className="mb-8 bg-blue-600 hover:bg-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux offres
            </Button>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{selectedJob.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {selectedJob.department}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {selectedJob.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {selectedJob.type}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">Description du poste</h2>
                <p className="text-gray-300 mb-6">{selectedJob.description}</p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Missions principales</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Développer des applications mobiles avec Flutter</li>
                  <li>Intégrer les API Firebase (Notifications, OTP)</li>
                  <li>Travailler avec Google Maps API pour la géolocalisation</li>
                  <li>Implémenter des communications WebSocket en temps réel</li>
                  <li>Collaborer avec l'équipe backend PHP/Laravel</li>
                  <li>Participer à la maintenance et l'évolution des applications</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-4">Profil recherché</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Étudiant en informatique ou formation équivalente</li>
                  <li>Connaissances de base en développement mobile (Flutter/Dart)</li>
                  <li>Intérêt pour les nouvelles technologies et l'apprentissage</li>
                  <li>Bonne capacité d'apprentissage et d'adaptation</li>
                  <li>Connaissances de base en PHP/MySQL (un plus)</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-white mb-4">Technologies à maîtriser</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedJob.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">Ce que nous offrons</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Environnement de travail stimulant et innovant</li>
                  <li>Formation continue et développement des compétences</li>
                  <li>Possibilité d'évolution au sein de l'entreprise</li>
                  <li>Rémunération compétitive selon le profil</li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-white text-black hover:bg-gray-100">
                  Postuler à ce poste
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const benefits = [
    {
      icon: Heart,
      title: "Santé et Bien-être",
      description: "Assurance santé complète, mutuelle d'entreprise et programme de bien-être."
    },
    {
      icon: TrendingUp,
      title: "Formation",
      description: "Budget formation annuel, conférences et certifications professionnelles."
    },
    {
      icon: Clock,
      title: "Flexibilité",
      description: "Télétravail partiel, horaires flexibles et congés généreux."
    },
    {
      icon: DollarSign,
      title: "Rémunération",
      description: "Salaire compétitif, intéressement et plan d'épargne entreprise."
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
              Rejoignez <span className="shimmer-text">KOBINATECH</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Faites partie d'une équipe passionnée qui façonne l'avenir du digital.
              Nous recherchons des talents créatifs et innovants pour grandir avec nous.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '12', label: 'Collaborateurs' },
              { value: '4.8★', label: 'Satisfaction équipe' },
              { value: '25%', label: 'Croissance annuelle' },
              { value: '∞', label: 'Opportunités' },
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

          {/* Why Join Us */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Pourquoi nous rejoindre ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation Continue</h3>
                <p className="text-gray-300 leading-relaxed">
                  Travaillez sur des projets cutting-edge avec les dernières technologies. 
                  Nous encourageons l'expérimentation et l'apprentissage constant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Culture Collaborative</h3>
                <p className="text-gray-300 leading-relaxed">
                  Rejoignez une équipe soudée où chaque voix compte. 
                  Nous croyons au partage des connaissances et à l'entraide.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Impact Réel</h3>
                <p className="text-gray-300 leading-relaxed">
                  Contribuez à des projets qui transforment réellement les entreprises 
                  et améliorent la vie de milliers d'utilisateurs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Équilibre Vie Pro/Perso</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nous valorisons votre bien-être avec des horaires flexibles 
                  et un environnement de travail respectueux de votre vie personnelle.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nos Avantages</h2>
            <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                    style={{
                      opacity: benefitsInView ? 1 : 0,
                      transform: benefitsInView ? 'translateY(0)' : 'translateY(30px)',
                      transition: `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${index * 100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Postes Ouverts</h2>
            <div ref={jobsRef} className="space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                  style={{
                    opacity: jobsInView ? 1 : 0,
                    transform: jobsInView ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${index * 100}ms`,
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-400" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-400" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-400" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => setSelectedJob(job)}
                      >
                        Détails
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pas de poste correspondant ?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nous sommes toujours à la recherche de talents exceptionnels. 
              Envoyez-nous votre candidature spontanée et nous la garderons pour nos futures opportunités.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              Candidature spontanée
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;