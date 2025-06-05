import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="pt-24 pb-16 text-white bg-gradient-to-br from-red-800 to-red-950"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Simulador de Resistencia Bacteriana
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl text-red-100">
            Explorando la evolución de la resistencia bacteriana a través de simulaciones avanzadas.
          </p>
          <div className="mt-10">
            <a 
              href="#download" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-red-900 transition-colors duration-300 bg-red-100 border border-transparent rounded-md shadow-sm hover:bg-white"
            >
              Descubre más
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;