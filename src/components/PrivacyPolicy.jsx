import React from 'react';
import { ArrowLeft, Shield, Database, Eye, UserCheck, Lock } from 'lucide-react';
import { Button } from './ui/button';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "1. Collecte des données",
      content: (
        <div className="space-y-3">
          <p>
            Nous collectons les données personnelles que vous nous fournissez volontairement lorsque vous :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li>Remplissez notre formulaire de contact</li>
            <li>Vous abonnez à notre newsletter</li>
            <li>Demandez un devis ou des informations</li>
            <li>Utilisez nos services en ligne</li>
          </ul>
          <p className="mt-4">
            Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, 
            nom de l'entreprise, et toute autre information pertinente pour répondre à votre demande.
          </p>
        </div>
      )
    },
    {
      icon: Database,
      title: "2. Utilisation des données",
      content: (
        <div className="space-y-3">
          <p>
            Vos données personnelles sont utilisées pour :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li>Répondre à vos demandes et vous fournir nos services</li>
            <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
            <li>Améliorer nos services et votre expérience utilisateur</li>
            <li>Respecter nos obligations légales et réglementaires</li>
          </ul>
        </div>
      )
    },
    {
      icon: Eye,
      title: "3. Partage des données",
      content: (
        <div className="space-y-3">
          <p>
            Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
            sauf dans les cas suivants :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li>Avec votre consentement explicite</li>
            <li>Pour fournir les services demandés (sous-traitants)</li>
            <li>Pour respecter une obligation légale</li>
            <li>Pour protéger nos droits, notre sécurité ou ceux d'autres personnes</li>
          </ul>
        </div>
      )
    },
    {
      icon: Lock,
      title: "4. Sécurité des données",
      content: (
        <div className="space-y-3">
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
            appropriées pour protéger vos données personnelles contre :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li>L'accès non autorisé</li>
            <li>La modification, la destruction ou la perte accidentelle</li>
            <li>La divulgation ou l'accès non autorisé</li>
          </ul>
          <p className="mt-4">
            Cependant, aucune méthode de transmission sur Internet n'est 100% sécurisée. 
            Nous nous efforçons de protéger vos données mais ne pouvons garantir une sécurité absolue.
          </p>
        </div>
      )
    },
    {
      icon: UserCheck,
      title: "5. Vos droits",
      content: (
        <div className="space-y-3">
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li><strong>Droit d'accès</strong> : savoir si nous traitons vos données</li>
            <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-gray-300">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-6 text-gray-400 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-400 text-lg">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Chez KOBINATECH, nous nous engageons à protéger votre vie privée et à garantir 
              la sécurité de vos données personnelles. Cette politique explique comment nous 
              collectons, utilisons et protégeons vos informations.
            </p>
            <p className="text-gray-300">
              En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {section.title}
                      </h2>
                      <div className="text-gray-300 leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact pour la protection des données</h3>
            <p className="text-gray-300 mb-4">
              Pour exercer vos droits ou poser des questions sur notre politique de confidentialité :
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email :</strong> contact@kobinatech.com</p>
              <p><strong>Téléphone :</strong> +225 07 89 58 23 64</p>
              <p><strong>Adresse :</strong> 123 Rue de la Technologie, 75000 Paris, France</p>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              Nous nous engageons à répondre à votre demande dans un délai de 30 jours.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;