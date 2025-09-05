import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown, Shield, Users, Server, Code, Cloud, Network, Briefcase, BarChart3, Lock } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  const services = [
    { id: 'cybersecurity', icon: Shield, title: t('services.cybersecurity.title') },
    { id: 'it-support', icon: Globe, title: t('services.itSupport.title') },
    { id: 'on-site', icon: Users, title: t('services.onSite.title') },
    { id: 'web-development', icon: Code, title: t('services.webDev.title') },
    { id: 'erp', icon: Server, title: t('services.erp.title') },
    { id: 'cloud', icon: Cloud, title: t('services.cloud.title') },
    { id: 'backup', icon: Server, title: t('services.backup.title') },
    { id: 'network', icon: Network, title: t('services.network.title') },
    { id: 'software', icon: Briefcase, title: t('services.software.title') },
    { id: 'consulting', icon: Briefcase, title: t('services.consulting.title') },
    { id: 'ai-solutions', icon: BarChart3, title: t('services.aiSolutions.title') },
    { id: 'blockchain-solutions', icon: Lock, title: t('services.blockchainSolutions.title') },
  ];

  const handleServiceClick = (serviceId) => {
    console.log('Service clicked:', serviceId); // Debug log
    navigate(`/services?service=${serviceId}`);
    setIsServicesOpen(false);
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-600/95 backdrop-blur-md shadow-lg border-b border-accent-500/20' : 'bg-transparent'
    }`}>
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-secondary-accent-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">IT</span>
            </div>
            <span className="text-xl font-bold text-text-primary-600">Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.path === '/services' ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center space-x-1 text-text-primary-600 hover:text-accent-500 transition-colors duration-300 ${
                        location.pathname === item.path ? 'text-accent-500 font-semibold' : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-primary-500 rounded-lg shadow-lg border border-accent-500/20 py-2 z-50"
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {services.map((service) => (
                              <button
                                key={service.id}
                                onClick={() => handleServiceClick(service.id)}
                                className="w-full text-left px-4 py-3 hover:bg-accent-500/10 transition-colors duration-300 flex items-center space-x-3"
                              >
                                <service.icon className="w-5 h-5 text-accent-500" />
                                <span className="text-text-primary-600">{service.title}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-text-primary-600 hover:text-accent-500 transition-colors duration-300 ${
                      location.pathname === item.path ? 'text-accent-500 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-accent-500/10 transition-colors duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === i18n.language)?.flag}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-primary-500 rounded-lg shadow-lg border border-accent-500/20 py-2"
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`w-full text-left px-4 py-2 hover:bg-accent-500/10 transition-colors duration-300 ${
                          i18n.language === language.code ? 'bg-accent-500/20 text-accent-500' : 'text-text-primary-600'
                        }`}
                      >
                        <span className="mr-2">{language.flag}</span>
                        {language.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent-500/10 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-accent-500/20 py-4"
            >
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.path === '/services' ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`block py-3 text-text-primary-600 hover:text-accent-500 transition-colors duration-300 w-full text-left ${
                          location.pathname === item.path ? 'text-accent-500 font-semibold' : ''
                        }`}
                      >
                        {item.label} <ChevronDown className="w-4 h-4 inline ml-1" />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {services.map((service) => (
                              <button
                                key={service.id}
                                onClick={() => handleServiceClick(service.id)}
                                className="block w-full text-left py-2 px-4 text-text-primary-600 hover:text-accent-500 transition-colors duration-300 flex items-center space-x-3"
                              >
                                <service.icon className="w-4 h-4 text-accent-500" />
                                <span>{service.title}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-text-primary-600 hover:text-accent-500 transition-colors duration-300 ${
                        location.pathname === item.path ? 'text-accent-500 font-semibold' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
