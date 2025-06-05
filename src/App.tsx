import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResearchSection from './components/ResearchSection';
import FeaturesSection from './components/FeaturesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'SRB - Simulador de Resistencia Bacteriana';
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <ResearchSection />
        <FeaturesSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;