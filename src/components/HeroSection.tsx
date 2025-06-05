import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative pt-24 pb-16 text-white overflow-hidden"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Hero/bacteria_fondo.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Overlay de gradiente */}
     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-950/80 to-transparent z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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