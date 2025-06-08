import React from 'react';
import { Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-red-100 bg-red-900" id="contact">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <img src="/logo_SRB_1.png" alt="SRB Logo" className="w-auto h-6" />
              <span className="ml-2 text-lg font-bold text-white">SRB</span>
            </div>
            <p className="mt-4 text-sm">
              Simulador de Resistencia Bacteriana: Explorando la evolución de la resistencia bacteriana a través de simulaciones avanzadas.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm transition-colors duration-200 hover:text-white">Documentación</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200 hover:text-white">Artículos Científicos</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200 hover:text-white">Casos de Uso</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200 hover:text-white">Referencia API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Conéctate con Nosotros</h3>
            <div className="flex space-x-6">

              <a
                href="https://github.com/JhoneiroLove/simulator_resistance"
                className="text-red-200 transition-colors duration-200 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>

            </div>
            <p className="mt-4 text-sm">
              Únete a nuestro boletín para recibir las últimas actualizaciones y avances.
            </p>
          </div>

        </div>
        <div className="pt-8 mt-8 text-sm text-center border-t border-red-800">
          <p>&copy; {new Date().getFullYear()} SRB - Simulador de Resistencia Bacteriana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;