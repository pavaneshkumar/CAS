import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ItsmPage from './components/services/ItsmPage';
import ItomPage from './components/services/ItomPage';
import CsmPage from './components/services/CsmPage';
import CustomAppDevPage from './components/services/CustomAppDevPage';
import IntegrationPage from './components/services/IntegrationPage';
import ManagedServicesPage from './components/services/ManagedServicesPage';

const App: React.FC = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/itsm" element={<ItsmPage />} />
          <Route path="/services/itom" element={<ItomPage />} />
          <Route path="/services/csm" element={<CsmPage />} />
          <Route path="/services/custom-app-development" element={<CustomAppDevPage />} />
          <Route path="/services/integration" element={<IntegrationPage />} />
          <Route path="/services/managed-services" element={<ManagedServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;