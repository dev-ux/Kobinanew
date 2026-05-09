import React, { useState } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import useInView from '../hooks/useInView';
import { submitContact } from '../lib/api';

const ContactPage = () => {
  const [headerRef, headerInView] = useInView(0.1);
  const [cardsRef, cardsInView] = useInView(0.1);
  const [formRef, formInView] = useInView(0.05);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (err) {
      console.error('Erreur contact:', err);
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "ABIDJAN, COCODY RIVIERA AKOUEDO, EN FACE DE L'ANCIEN CAMP\nCôte d'Ivoire",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+225 07 89 58 23 64",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@kobinatech.com",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 9h - 18h\nSam: 09h - 12h",
    }
  ];

  const services = [
    "Développement Web",
    "Applications Mobiles",
    "Solutions Cloud",
    "Conseil Technique",
    "Maintenance",
    "Autre"
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
          
          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-16"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez <span className="shimmer-text">KOBINATECH SARL</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Parlons de votre projet. Notre équipe d'experts est prête à vous aider
              à transformer vos idées en solutions digitales innovantes.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                  style={{
                    opacity: cardsInView ? 1 : 0,
                    transform: cardsInView ? 'translateY(0)' : 'translateY(30px)',
                    transition: `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                  <div className="text-gray-300 text-sm mb-4 whitespace-pre-line">
                    {info.content}
                  </div>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
                    {info.action}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div
            ref={formRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
            style={{
              opacity: formInView ? 1 : 0,
              transform: formInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="+225 01 52 11 00 11"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Entreprise</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Service intéressé *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="" className="bg-[#0a0a1a]">Sélectionnez un service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-[#0a0a1a]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Message envoyé avec succès ! Nous vous répondrons sous 24h.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.</span>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-white text-black hover:bg-gray-100 rounded-full px-8 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                  <span className="text-gray-400 text-sm">* Champs obligatoires</span>
                </div>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8476108666!2d-4.012345678901234!3d5.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnNDQuNSJOIDQwrDAwJzQ0LjQiRQ!5e0!3m2!1sen!2sci!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de KOBINATECH SARL - Cocody 2 Plateaux, Abidjan"
                  className="w-full h-full"
                />
              </div>

              {/* Quick Response */}
              {/* <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Réponse rapide</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Nous nous engageons à répondre à votre demande dans les 24 heures 
                  ouvrées. Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Phone className="mr-2 h-4 w-4" />
                    Appel d'urgence
                  </Button>
                </div>
              </div> */}

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Suivez-nous</h3>
                <p className="text-gray-300 mb-4">
                  Restez connecté avec nos dernières actualités et projets sur les réseaux sociaux.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;