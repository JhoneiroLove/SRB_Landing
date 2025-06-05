import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-red-900 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <img src="/logo_SRB_1.png" alt="SRB Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-white">SRB</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className="text-red-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Inicio
              </a>
              <a href="#research" className="text-red-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Investigación
              </a>
              <a href="#download" className="text-red-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Descargar
              </a>
              <a href="#contact" className="text-red-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contacto
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-100 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-900">
          <a
            href="#about"
            className="text-red-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#research"
            className="text-red-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Investigación
          </a>
          <a
            href="#download"
            className="text-red-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Descargar
          </a>
          <a
            href="#contact"
            className="text-red-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;