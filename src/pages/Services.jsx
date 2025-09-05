import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Globe, 
  Users, 
  Server, 
  Database, 
  Code, 
  Cloud, 
  Network,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Monitor,
  Smartphone,
  BarChart3
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState('cybersecurity');

  const services = [
    {
      id: 'cybersecurity',
      icon: Shield,
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      color: 'from-red-500 to-pink-600',
      features: [
        'Advanced threat detection and prevention',
        'GDPR compliance for European markets',
        'Data sovereignty solutions for Saudi Arabia',
        '24/7 security monitoring',
        'Incident response and recovery',
        'Security awareness training',
        'Penetration testing and vulnerability assessment',
        'Compliance audits and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'it-support',
      icon: Globe,
      title: t('services.itSupport.title'),
      description: t('services.itSupport.description'),
      color: 'from-blue-500 to-cyan-600',
      features: [
        '24/7 remote and on-site support',
        'Proactive system monitoring',
        'Hardware and software troubleshooting',
        'Network connectivity issues',
        'Email and communication systems',
        'Backup and recovery assistance',
        'System updates and maintenance',
        'User training and documentation'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'on-site',
      icon: Users,
      title: t('services.onSite.title'),
      description: t('services.onSite.description'),
      color: 'from-green-500 to-emerald-600',
      features: [
        'Local technicians across Germany and Saudi Arabia',
        'Same-day response for critical issues',
        'Hardware installation and configuration',
        'Network infrastructure setup',
        'Security system installation',
        'Equipment maintenance and repair',
        'On-site training and consultation',
        'Emergency response services'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'web-development',
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Responsive website design',
        'E-commerce solutions',
        'Custom web applications',
        'Content management systems',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Mobile app development'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'erp',
      icon: Server,
      title: t('services.erp.title'),
      description: t('services.erp.description'),
      color: 'from-orange-500 to-red-600',
      features: [
        'SAP implementation and customization',
        'Oracle ERP solutions',
        'Microsoft Dynamics integration',
        'Business process optimization',
        'Data migration and conversion',
        'User training and change management',
        'Ongoing support and maintenance',
        'Custom module development'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Cloud migration strategy and planning',
        'AWS, Azure, and Google Cloud expertise',
        'Hybrid cloud solutions',
        'Cloud security and compliance',
        'Cost optimization and monitoring',
        'Disaster recovery planning',
        'Performance optimization',
        'Multi-cloud management'
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'backup',
      icon: Database,
      title: t('services.backup.title'),
      description: t('services.backup.description'),
      color: 'from-teal-500 to-cyan-600',
      features: [
        'Automated backup systems',
        'Cloud and on-premise solutions',
        'Disaster recovery planning',
        'Data retention policies',
        'Backup testing and validation',
        'Compliance and audit support',
        'Recovery time objectives (RTO)',
        'Recovery point objectives (RPO)'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'network',
      icon: Network,
      title: t('services.network.title'),
      description: t('services.network.description'),
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Network design and architecture',
        'Wireless network implementation',
        'Network security and firewalls',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization',
        'Network performance analysis',
        'Scalable infrastructure planning'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'software',
      icon: Code,
      title: t('services.software.title'),
      description: t('services.software.description'),
      color: 'from-pink-500 to-rose-600',
      features: [
        'Custom software development',
        'Mobile application development',
        'API development and integration',
        'Legacy system modernization',
        'Quality assurance and testing',
        'Agile development methodology',
        'Continuous integration/deployment',
        'Technical documentation'
      ],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'consulting',
      icon: Briefcase,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      color: 'from-gray-500 to-slate-600',
      features: [
        'Technology strategy and planning',
        'Digital transformation consulting',
        'IT infrastructure assessment',
        'Security and compliance audits',
        'Technology vendor selection',
        'Project management consulting',
        'Change management support',
        'ROI analysis and business case development'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className={`w-8 h-8 mx-auto mb-2 ${
                  activeService === service.id ? 'text-white' : 'text-primary-600'
                }`} />
                <div className="text-sm font-medium">{service.title.split(' ')[0]}</div>
              </motion.button>
            ))}
          </div>

          {/* Service Details */}
          {activeServiceData && (
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <div className={`w-20 h-20 bg-gradient-to-br ${activeServiceData.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <activeServiceData.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {activeServiceData.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {activeServiceData.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {activeServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    Get Quote
                  </button>
                  <button className="btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={activeServiceData.image}
                  alt={activeServiceData.title}
                  className="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${activeServiceData.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-20 rounded-2xl`}></div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results and long-term value for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Implementation',
                description: 'Quick deployment with minimal disruption to your business operations.'
              },
              {
                icon: Lock,
                title: 'Secure & Compliant',
                description: 'Built-in security measures and compliance with local regulations.'
              },
              {
                icon: Monitor,
                title: '24/7 Support',
                description: 'Round-the-clock technical support and monitoring services.'
              },
              {
                icon: BarChart3,
                title: 'Proven Results',
                description: 'Track record of successful implementations and satisfied clients.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Service Delivery Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful project delivery and maximum value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Analysis', description: 'Understanding your requirements and current infrastructure.' },
              { step: '02', title: 'Planning & Design', description: 'Creating detailed project plans and solution architecture.' },
              { step: '03', title: 'Implementation', description: 'Executing the solution with quality assurance and testing.' },
              { step: '04', title: 'Support & Optimization', description: 'Ongoing support and continuous improvement services.' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your IT needs and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Consultation
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
