import React from 'react';
import { Building, User, Server, Shield, Cookie, Scale } from 'lucide-react';
import { site } from '../config/site';

const MentionsLegales = () => {
  const sections = [
    {
      icon: Building,
      title: "1. Éditeur du site",
      content: (
        <div className="space-y-2">
          <p>Le site kobinatech.com est édité par :</p>
          <div className="bg-white rounded-lg p-4 space-y-1">
            <p><strong>KobinaTech SARL</strong></p>
            <p>{site.address}</p>
            <p>{site.city}</p>
            <p>Tél. : {site.phone}</p>
            <p>Email : {site.email}</p>
          </div>
        </div>
      )
    },
    {
      icon: Server,
      title: "2. Hébergement",
      content: (
        <div className="space-y-2">
          <p>Le site est hébergé par :</p>
          <div className="bg-white rounded-lg p-4 space-y-1">
            <p><strong>Vercel Inc.</strong></p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p>vercel.com</p>
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      title: "3. Propriété intellectuelle",
      content: (
        <div className="space-y-3">
          <p>
            L'ensemble des éléments constituant le site kobinatech.com (textes, images, logos, marques, etc.) 
            est la propriété exclusive de KobinaTech ou de ses partenaires.
          </p>
          <p>
            Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, 
            de tout ou partie des éléments du site sans l'accord préalable écrit de KobinaTech est strictement 
            interdite et constituerait un acte de contrefaçon sanctionné par les articles L.335-2 et suivants 
            du Code de la propriété intellectuelle.
          </p>
        </div>
      )
    },
    {
      icon: User,
      title: "4. Données personnelles",
      content: (
        <div className="space-y-3">
          <p>
            Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion 
            des clients et prospects. Les destinataires des données sont les services compétents de KobinaTech.
          </p>
          <p>
            Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous disposez 
            d'un droit d'accès, de rectification, de modification et de suppression des données qui vous 
            concernent. Vous pouvez exercer ce droit en nous contactant à l'adresse 
            <span className="text-navy"> contact@kobinatech.com</span>.
          </p>
        </div>
      )
    },
    {
      icon: Cookie,
      title: "5. Cookies",
      content: (
        <div className="space-y-3">
          <p>
            Le site kobinatech.com utilise des cookies pour améliorer l'expérience utilisateur. 
            En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre 
            politique de confidentialité.
          </p>
        </div>
      )
    },
    {
      icon: Scale,
      title: "6. Droit applicable et juridiction compétente",
      content: (
        <div className="space-y-3">
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, 
            les tribunaux français seront seuls compétents.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="text-ink-soft">
      <div className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">
              Mentions Légales
            </h1>
            <p className="text-dim text-lg">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-line p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance 
              dans l'économie numérique, nous vous informons sur l'identité de l'éditeur du site 
              kobinatech.com.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-line p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-navy" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-ink mb-4">
                        {section.title}
                      </h2>
                      <div className="text-ink-soft leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-2xl border border-line p-8">
            <h3 className="text-2xl font-bold text-ink mb-4 text-center">
              Pour toute question juridique
            </h3>
            <p className="text-ink-soft text-center mb-6">
              Notre service juridique est à votre disposition pour toute information complémentaire.
            </p>
            <div className="text-center space-y-2">
              <p className="text-ink-soft">
                <strong>Email :</strong> <span className="text-navy">contact@kobinatech.com</span>
              </p>
              <p className="text-ink-soft">
                <strong>Téléphone :</strong> +33 1 23 45 67 89
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;