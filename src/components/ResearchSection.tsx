import React from 'react';
import { Brain, Dna, Battery as Bacteria, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 transition-shadow duration-300 border border-red-800 rounded-lg shadow-md bg-red-950 hover:shadow-lg">
      <div className="mb-4 text-red-300">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-red-100">{description}</p>
    </div>
  );
};

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-16 bg-red-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Nuestra Investigación</h2>
          <p className="max-w-2xl mx-auto mt-4 text-red-100">
            Explorando la intersección entre biología y computación para comprender mejor la resistencia bacteriana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Dna className="w-8 h-8" />}
            title="Algoritmos Genéticos"
            description="Implementando principios de selección natural para evolucionar soluciones óptimas en problemas complejos."
          />
          <FeatureCard
            icon={<Bacteria className="w-8 h-8" />}
            title="Computación Bacteriana"
            description="Estudiando colonias bacterianas como sistemas computacionales con inteligencia distribuida y optimización de recursos."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Inteligencia Colectiva"
            description="Modelando patrones de comportamiento colectivo encontrados en comunidades bacterianas."
          />
        </div>
      </div>
    </section>

  );
};

export default ResearchSection;