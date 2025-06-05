import React from 'react';
import { LineChart, Thermometer } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-red-900">Características Principales</h2>
          <p className="mt-4 text-lg text-gray-600">
            Herramientas avanzadas para el análisis de resistencia bacteriana
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Feature 1: Growth Curves */}
          <div className="p-6 transition-shadow duration-300 shadow-lg bg-red-50 rounded-xl hover:shadow-xl">
            <div className="flex items-center mb-4">
              <LineChart className="w-8 h-8 text-red-800" />
              <h3 className="ml-3 text-xl font-semibold text-red-900">Curvas de Evolución</h3>
            </div>
            <p className="mb-6 text-gray-700">
              Visualiza en tiempo real la evolución de parámetros críticos:
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Resistencia bacteriana</li>
                <li>Crecimiento poblacional</li>
                <li>Tasa de degradación</li>
              </ul>
            </p>
            <img
              src="/Features/landing1.png"
              alt="Gráfico de curvas de evolución"
              className="object-cover w-full h-64 rounded-lg shadow-md"
            />
          </div>

          {/* Feature 2: Heat Maps */}
          <div className="p-6 transition-shadow duration-300 shadow-lg bg-red-50 rounded-xl hover:shadow-xl">
            <div className="flex items-center mb-4">
              <Thermometer className="w-8 h-8 text-red-800" />
              <h3 className="ml-3 text-xl font-semibold text-red-900">Mapas de Calor</h3>
            </div>
            <p className="mb-6 text-gray-700">
              Analiza el impacto de los medicamentos:
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Distribución de la resistencia</li>
                <li>Zonas de mayor impacto</li>
                <li>Patrones de adaptación</li>
              </ul>
            </p>
            <img
              src="/Features/landing2.png"
              alt="Mapa de calor de resistencia bacteriana"
              className="object-cover w-full h-64 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;