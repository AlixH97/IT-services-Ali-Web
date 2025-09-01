import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.title': 'Professional IT Solutions for Your Business',
      'hero.subtitle': 'Comprehensive IT services across Germany, Europe, and Saudi Arabia. From cybersecurity to ERP implementation, we\'ve got you covered.',
      'hero.cta': 'Get Started',
      'hero.learnMore': 'Learn More',
      
      // About Section
      'about.title': 'About Our Company',
      'about.subtitle': 'Leading IT services provider with expertise in European and Middle Eastern markets',
      'about.mission': 'Our mission is to deliver cutting-edge IT solutions that drive business growth and digital transformation.',
      'about.vision': 'To be the trusted technology partner for businesses across Europe and the Middle East.',
      'about.experience': 'Years of Experience',
      'about.clients': 'Happy Clients',
      'about.projects': 'Completed Projects',
      'about.team': 'Expert Team',
      
      // Services
      'services.title': 'Our Services',
      'services.subtitle': 'Comprehensive IT solutions tailored to your business needs',
      'services.itSupport.title': 'IT Support & Maintenance',
      'services.itSupport.description': '24/7 IT support and maintenance services ensuring your systems run smoothly. We provide remote and on-site support with rapid response times.',
      'services.cybersecurity.title': 'Cybersecurity Solutions',
      'services.cybersecurity.description': 'Advanced security measures including GDPR compliance for Europe and data sovereignty solutions for Saudi Arabia. Protect your business from evolving cyber threats.',
      'services.onSite.title': 'On-Site Support',
      'services.onSite.description': 'Professional technicians available for on-site support across Germany and Saudi Arabia. Quick response times and local expertise.',
      'services.webDev.title': 'Website Development',
      'services.webDev.description': 'Modern, responsive websites and web applications built with the latest technologies. SEO optimized and mobile-first design.',
      'services.erp.title': 'ERP Implementation',
      'services.erp.description': 'End-to-end ERP solutions including SAP, Oracle, and custom implementations. Streamline your business processes and improve efficiency.',
      'services.cloud.title': 'Cloud Services',
      'services.cloud.description': 'Cloud migration, management, and optimization services. Secure cloud solutions compliant with local regulations.',
      'services.backup.title': 'Data Backup & Recovery',
      'services.backup.description': 'Comprehensive data protection with automated backup systems and disaster recovery plans. Ensure business continuity.',
      'services.network.title': 'Network Setup & Management',
      'services.network.description': 'Complete network infrastructure design, implementation, and management. Secure, scalable, and high-performance networks.',
      'services.software.title': 'Software Development',
      'services.software.description': 'Custom software solutions tailored to your business requirements. From mobile apps to enterprise software.',
      'services.consulting.title': 'IT Consulting',
      'services.consulting.description': 'Strategic IT consulting to align technology with business goals. Digital transformation and technology roadmap planning.',
      
      // Contact
      'contact.title': 'Get In Touch',
      'contact.subtitle': 'Ready to transform your business? Let\'s discuss your IT needs.',
      'contact.form.name': 'Full Name',
      'contact.form.email': 'Email Address',
      'contact.form.phone': 'Phone Number',
      'contact.form.service': 'Service Required',
      'contact.form.message': 'Message',
      'contact.form.language': 'Preferred Language',
      'contact.form.submit': 'Send Message',
      'contact.info.title': 'Contact Information',
      'contact.info.address': 'Office Address',
      'contact.info.phone': 'Phone',
      'contact.info.email': 'Email',
      'contact.info.hours': 'Business Hours',
      
      // Footer
      'footer.company': 'IT Services Company',
      'footer.description': 'Professional IT solutions for businesses across Europe and the Middle East.',
      'footer.quickLinks': 'Quick Links',
      'footer.services': 'Services',
      'footer.about': 'About Us',
      'footer.contact': 'Contact',
      'footer.blog': 'Blog',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.copyright': '© 2024 IT Services Company. All rights reserved.',
      
      // Blog
      'blog.title': 'Latest Insights',
      'blog.subtitle': 'Stay updated with the latest trends in IT and technology',
      'blog.readMore': 'Read More',
      'blog.posts.cybersecurity': 'Cybersecurity Trends in Europe 2024',
      'blog.posts.cloud': 'Cloud Migration Best Practices',
      'blog.posts.erp': 'ERP Implementation Success Stories',
      
      // Common
      'common.learnMore': 'Learn More',
      'common.getQuote': 'Get Quote',
      'common.viewAll': 'View All',
      'common.backToTop': 'Back to Top',
      'common.loading': 'Loading...',
      'common.error': 'An error occurred',
      'common.success': 'Success!',
    }
  },
  de: {
    translation: {
      'nav.home': 'Startseite',
      'nav.about': 'Über uns',
      'nav.services': 'Dienstleistungen',
      'nav.blog': 'Blog',
      'nav.contact': 'Kontakt',
      'hero.title': 'Professionelle IT-Lösungen für Ihr Unternehmen',
      'hero.subtitle': 'Umfassende IT-Dienstleistungen in Deutschland, Europa und Saudi-Arabien. Von Cybersicherheit bis ERP-Implementierung - wir sind für Sie da.',
      'hero.cta': 'Jetzt starten',
      'hero.learnMore': 'Mehr erfahren',
      'about.title': 'Über unser Unternehmen',
      'about.subtitle': 'Führender IT-Dienstleister mit Expertise in europäischen und nahöstlichen Märkten',
      'services.title': 'Unsere Dienstleistungen',
      'services.subtitle': 'Umfassende IT-Lösungen, die auf Ihre Geschäftsanforderungen zugeschnitten sind',
      'contact.title': 'Kontakt aufnehmen',
      'contact.subtitle': 'Bereit, Ihr Unternehmen zu transformieren? Lassen Sie uns über Ihre IT-Anforderungen sprechen.',
      'footer.company': 'IT-Services Unternehmen',
      'footer.description': 'Professionelle IT-Lösungen für Unternehmen in Europa und dem Nahen Osten.',
    }
  },
  ar: {
    translation: {
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.services': 'الخدمات',
      'nav.blog': 'المدونة',
      'nav.contact': 'اتصل بنا',
      'hero.title': 'حلول تقنية معلومات احترافية لعملك',
      'hero.subtitle': 'خدمات تقنية معلومات شاملة عبر ألمانيا وأوروبا والمملكة العربية السعودية. من الأمن السيبراني إلى تطبيق أنظمة تخطيط موارد المؤسسات.',
      'hero.cta': 'ابدأ الآن',
      'hero.learnMore': 'اعرف المزيد',
      'about.title': 'عن شركتنا',
      'about.subtitle': 'مزود خدمات تقنية معلومات رائد مع خبرة في الأسواق الأوروبية والشرق أوسطية',
      'services.title': 'خدماتنا',
      'services.subtitle': 'حلول تقنية معلومات شاملة مصممة لاحتياجات عملك',
      'contact.title': 'تواصل معنا',
      'contact.subtitle': 'مستعد لتحويل عملك؟ دعنا نناقش احتياجاتك التقنية.',
      'footer.company': 'شركة خدمات تقنية المعلومات',
      'footer.description': 'حلول تقنية معلومات احترافية للشركات عبر أوروبا والشرق الأوسط.',
    }
  },
  fr: {
    translation: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.services': 'Services',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'hero.title': 'Solutions informatiques professionnelles pour votre entreprise',
      'hero.subtitle': 'Services informatiques complets à travers l\'Allemagne, l\'Europe et l\'Arabie saoudite. De la cybersécurité à l\'implémentation ERP.',
      'hero.cta': 'Commencer',
      'hero.learnMore': 'En savoir plus',
      'about.title': 'À propos de notre entreprise',
      'about.subtitle': 'Fournisseur de services informatiques leader avec une expertise dans les marchés européens et du Moyen-Orient',
      'services.title': 'Nos services',
      'services.subtitle': 'Solutions informatiques complètes adaptées à vos besoins commerciaux',
      'contact.title': 'Contactez-nous',
      'contact.subtitle': 'Prêt à transformer votre entreprise ? Discutons de vos besoins informatiques.',
      'footer.company': 'Société de services informatiques',
      'footer.description': 'Solutions informatiques professionnelles pour les entreprises à travers l\'Europe et le Moyen-Orient.',
    }
  },
  es: {
    translation: {
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de',
      'nav.services': 'Servicios',
      'nav.blog': 'Blog',
      'nav.contact': 'Contacto',
      'hero.title': 'Soluciones informáticas profesionales para su empresa',
      'hero.subtitle': 'Servicios informáticos completos en Alemania, Europa y Arabia Saudita. Desde ciberseguridad hasta implementación ERP.',
      'hero.cta': 'Comenzar',
      'hero.learnMore': 'Saber más',
      'about.title': 'Acerca de nuestra empresa',
      'about.subtitle': 'Proveedor líder de servicios informáticos con experiencia en mercados europeos y del Medio Oriente',
      'services.title': 'Nuestros servicios',
      'services.subtitle': 'Soluciones informáticas completas adaptadas a sus necesidades comerciales',
      'contact.title': 'Contáctenos',
      'contact.subtitle': '¿Listo para transformar su empresa? Hablemos de sus necesidades informáticas.',
      'footer.company': 'Empresa de servicios informáticos',
      'footer.description': 'Soluciones informáticas profesionales para empresas en Europa y el Medio Oriente.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
