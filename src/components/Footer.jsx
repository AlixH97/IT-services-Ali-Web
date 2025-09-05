import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Globe,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      t('footer.services.itSupport'),
      t('footer.services.cybersecurity'),
      t('footer.services.onSite'),
      t('footer.services.webDev'),
      t('footer.services.erp'),
      t('footer.services.cloud')
    ],
    company: [
      t('footer.company.about'),
      t('footer.company.team'),
      t('footer.company.careers'),
      t('footer.company.news'),
      t('footer.company.caseStudies'),
      t('footer.company.testimonials')
    ],
    support: [
      t('footer.support.helpCenter'),
      t('footer.support.contact'),
      t('footer.support.documentation'),
      t('footer.support.training'),
      t('footer.support.community'),
      t('footer.support.status')
    ],
    legal: [
      t('footer.legal.privacy'),
      t('footer.legal.terms'),
      t('footer.legal.cookies'),
      t('footer.legal.gdpr'),
      t('footer.legal.dataProtection'),
      t('footer.legal.security')
    ]
  };

  const socialLinks = useMemo(() => [
    { icon: Facebook, href: '#', label: t('footer.social.facebook') },
    { icon: Twitter, href: '#', label: t('footer.social.twitter') },
    { icon: Linkedin, href: '#', label: t('footer.social.linkedin') },
    { icon: Instagram, href: '#', label: t('footer.social.instagram') }
  ], [t]);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IT</span>
              </div>
              <span className="text-xl font-bold">{t('footer.companyName')}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">{t('footer.contact.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">{t('footer.contact.email')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.legal.gdprCompliance')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.legal.dataProtection')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-text/80 hover:text-primary-blue transition-colors duration-200">
                  {t('footer.legal.securityPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-300 mb-6">
              {t('footer.newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                {t('footer.newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                {t('footer.copyright').replace('2024', currentYear)}
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4" />
                <span>{t('footer.currentLanguage')}</span>
              </div>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label={t('common.backToTop')}
              >
                <span className="text-sm">{t('common.backToTop')}</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
