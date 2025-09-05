import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const { i18n } = useTranslation();
  
  // Set RTL for Arabic and update language attribute
  React.useEffect(() => {
    const currentLanguage = i18n.language;
    
    // Set direction
    if (currentLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    
    // Set language attribute
    document.documentElement.lang = currentLanguage;
    
    // Force re-render of all components by updating a state
    // This ensures all components re-render when language changes
    const event = new CustomEvent('languageChanged', { detail: currentLanguage });
    window.dispatchEvent(event);
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-primary text-text-primary">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
