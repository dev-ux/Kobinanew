import React, { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons très bientôt.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <p className="text-blue-400 text-sm font-medium mb-4">Contactez-nous</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Vous avez un projet digital ? Une idée à transformer en réalité ? 
              Contactez-nous pour un échange sans engagement.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <a href="mailto:contact@kobinatech.com" className="text-gray-400 hover:text-white transition-colors">
                    contact@kobinatech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Téléphone</div>
                  <a href="tel:+2250799610684" className="text-gray-400 hover:text-white transition-colors">
                    +225 0799610684
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Adresse</div>
                  <p className="text-gray-400">
                      Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Parlez-nous de votre projet..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 rounded-xl py-4 text-base font-medium transition-all duration-300 hover:scale-105"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
