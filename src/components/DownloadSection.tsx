import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-red-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
          <div className="px-6 py-10 sm:px-12 sm:py-16 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-red-900">
                Descarga Nuestro Software
              </h2>
              <p className="max-w-3xl mt-4 text-lg text-gray-700">
                Accede a nuestro software de simulación de resistencia bacteriana.
                Optimiza tus investigaciones con técnicas computacionales inspiradas en la naturaleza.
              </p>
              <div className="flex flex-col gap-3 mt-6 sm:flex-row">
                <div className="rounded-md shadow">
                  <a
                    href="https://www.mediafire.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors duration-300 bg-red-800 border border-transparent rounded-md hover:bg-red-700"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Ahora
                  </a>
                </div>
    
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="p-5 rounded-lg bg-red-50">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-red-900">Versión 2.5.3</h3>
                  <p className="mt-1 text-sm text-gray-600">Última Versión</p>
                  <ul className="mt-3 space-y-2 text-sm text-left text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-600">•</span>
                      <span className="ml-2">Simulación bacteriana mejorada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-600">•</span>
                      <span className="ml-2">Algoritmos genéticos optimizados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 text-red-600">•</span>
                      <span className="ml-2">Nuevas herramientas de visualización</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;