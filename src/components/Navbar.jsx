import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a1a]/95 backdrop-blur-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logoko.png" alt="Kobinatech" className="h-20 w-auto brightness-0 invert" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm">
              Solutions
            </a>
            <a href="#industries" className="text-gray-300 hover:text-white transition-colors text-sm">
              Industries
            </a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors text-sm">
              Processus
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">●</span>
              Contactez-nous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#solutions" className="block text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#industries" className="block text-gray-300 hover:text-white transition-colors">
              Industries
            </a>
            <a href="#process" className="block text-gray-300 hover:text-white transition-colors">
              Processus
            </a>
            <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-full">
              Contactez-nous
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
