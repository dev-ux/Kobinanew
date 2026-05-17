import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Solutions',  anchor: 'solutions' },
  { label: 'Industries', anchor: 'industries' },
  { label: 'Processus',  anchor: 'process' },
  { label: 'FAQ',        anchor: 'faq' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (anchor) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${anchor}`);
    }
  };

  const handleContact = () => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a1a]/95 backdrop-blur-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logoko.png" alt="Kobinatech" className="h-20 w-auto brightness-0 invert" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, anchor }) => (
              <button
                key={anchor}
                onClick={() => handleNav(anchor)}
                className="text-gray-300 hover:text-white transition-colors text-sm bg-transparent border-none cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300"
              onClick={handleContact}
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
            {NAV_LINKS.map(({ label, anchor }) => (
              <button
                key={anchor}
                onClick={() => handleNav(anchor)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                {label}
              </button>
            ))}
            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-full w-full"
              onClick={handleContact}
            >
              Contactez-nous
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
