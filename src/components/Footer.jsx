import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a1a] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logoko.png" alt="Kobinatech" className="h-20 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm">
              L'agence de développement qui transforme vos idées en innovation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/#solutions" className="text-gray-400 hover:text-white transition-colors text-sm">Développement Web</a></li>
              <li><a href="/#solutions" className="text-gray-400 hover:text-white transition-colors text-sm">Applications Mobile</a></li>
              <li><a href="/#solutions" className="text-gray-400 hover:text-white transition-colors text-sm">Solutions Cloud</a></li>
              <li><a href="/#solutions" className="text-gray-400 hover:text-white transition-colors text-sm">IA & Data</a></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="/a-propos" className="text-gray-400 hover:text-white transition-colors text-sm">À propos</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="/carrières" className="text-gray-400 hover:text-white transition-colors text-sm">Carrières</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">Mentions légales</a></li>
              <li><a href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">Confidentialité</a></li>
              <li><a href="/cgu" className="text-gray-400 hover:text-white transition-colors text-sm">CGU</a></li>
              <li><a href="/cgv" className="text-gray-400 hover:text-white transition-colors text-sm">CGV</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Kobinatech. Tous droits réservés.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Facebook className="h-5 w-5 text-gray-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-5 w-5 text-gray-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Twitter className="h-5 w-5 text-gray-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
