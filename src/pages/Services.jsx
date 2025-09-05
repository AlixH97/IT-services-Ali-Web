import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSimpleTranslation } from '../hooks/useSimpleTranslation';
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
  const { createTranslatedText, createTranslatedArray } = useSimpleTranslation('services');
  const [activeService, setActiveService] = useState('cybersecurity');

  const services = useMemo(() => [
    {
      id: 'cybersecurity',
      icon: Shield,
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      color: 'from-red-500 to-pink-600',
      features: [
        t('services.cybersecurity.features.threatDetection'),
        t('services.cybersecurity.features.gdpr'),
        t('services.cybersecurity.features.dataSovereignty'),
        t('services.cybersecurity.features.monitoring'),
        t('services.cybersecurity.features.incidentResponse'),
        t('services.cybersecurity.features.training'),
        t('services.cybersecurity.features.penetrationTesting'),
        t('services.cybersecurity.features.audits')
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
        t('services.itSupport.features.support'),
        t('services.itSupport.features.monitoring'),
        t('services.itSupport.features.troubleshooting'),
        t('services.itSupport.features.network'),
        t('services.itSupport.features.email'),
        t('services.itSupport.features.backup'),
        t('services.itSupport.features.maintenance'),
        t('services.itSupport.features.training')
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
        t('services.onSite.features.technicians'),
        t('services.onSite.features.response'),
        t('services.onSite.features.installation'),
        t('services.onSite.features.network'),
        t('services.onSite.features.security'),
        t('services.onSite.features.maintenance'),
        t('services.onSite.features.training'),
        t('services.onSite.features.emergency')
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
        t('services.webDev.features.design'),
        t('services.webDev.features.ecommerce'),
        t('services.webDev.features.applications'),
        t('services.webDev.features.cms'),
        t('services.webDev.features.seo'),
        t('services.webDev.features.performance'),
        t('services.webDev.features.security'),
        t('services.webDev.features.mobile')
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
        t('services.erp.features.sap'),
        t('services.erp.features.oracle'),
        t('services.erp.features.dynamics'),
        t('services.erp.features.optimization'),
        t('services.erp.features.migration'),
        t('services.erp.features.training'),
        t('services.erp.features.support'),
        t('services.erp.features.custom')
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
        t('services.cloud.features.migration'),
        t('services.cloud.features.expertise'),
        t('services.cloud.features.hybrid'),
        t('services.cloud.features.security'),
        t('services.cloud.features.cost'),
        t('services.cloud.features.disaster'),
        t('services.cloud.features.performance'),
        t('services.cloud.features.multicloud')
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
        t('services.backup.features.automated'),
        t('services.backup.features.solutions'),
        t('services.backup.features.disaster'),
        t('services.backup.features.retention'),
        t('services.backup.features.testing'),
        t('services.backup.features.compliance'),
        t('services.backup.features.rto'),
        t('services.backup.features.rpo')
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
        t('services.network.features.design'),
        t('services.network.features.wireless'),
        t('services.network.features.security'),
        t('services.network.features.vpn'),
        t('services.network.features.monitoring'),
        t('services.network.features.bandwidth'),
        t('services.network.features.performance'),
        t('services.network.features.scalable')
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
        t('services.software.features.custom'),
        t('services.software.features.mobile'),
        t('services.software.features.api'),
        t('services.software.features.modernization'),
        t('services.software.features.qa'),
        t('services.software.features.agile'),
        t('services.software.features.cicd'),
        t('services.software.features.documentation')
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
        t('services.consulting.features.strategy'),
        t('services.consulting.features.transformation'),
        t('services.consulting.features.assessment'),
        t('services.consulting.features.audits'),
        t('services.consulting.features.vendor'),
        t('services.consulting.features.project'),
        t('services.consulting.features.change'),
        t('services.consulting.features.roi')
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai-solutions',
      icon: BarChart3,
      title: t('services.aiSolutions.title'),
      description: t('services.aiSolutions.description'),
      color: 'from-cyan-500 to-blue-600',
      features: [
        t('services.aiSolutions.features.machineLearning'),
        t('services.aiSolutions.features.predictiveAnalytics'),
        t('services.aiSolutions.features.automatedDecision'),
        t('services.aiSolutions.features.naturalLanguage'),
        t('services.aiSolutions.features.computerVision'),
        t('services.aiSolutions.features.automation'),
        t('services.aiSolutions.features.dataProcessing'),
        t('services.aiSolutions.features.businessIntelligence')
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'blockchain-solutions',
      icon: Lock,
      title: createTranslatedText('Blockchain Solutions', 'title'),
      description: createTranslatedText('Secure blockchain technology solutions for enterprise applications, smart contracts, and decentralized systems.', 'description'),
      color: 'from-indigo-500 to-purple-600',
      features: createTranslatedArray([
        'Smart Contract Development',
        'Decentralized Applications',
        'Cryptocurrency Integration',
        'Blockchain Consulting',
        'Security Audits',
        'Token Development'
      ], 'features'),
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ], [t]);

  const activeServiceData = useMemo(() => 
    services.find(service => service.id === activeService), 
    [services, activeService]
  );

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
                    {t('common.getQuote')}
                  </button>
                  <button className="btn-secondary">
                    {t('common.learnMore')}
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
              {t('services.whyChoose.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.whyChoose.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useMemo(() => [
              {
                icon: Zap,
                title: t('services.benefits.fastImplementation.title'),
                description: t('services.benefits.fastImplementation.description')
              },
              {
                icon: Lock,
                title: t('services.benefits.secureCompliant.title'),
                description: t('services.benefits.secureCompliant.description')
              },
              {
                icon: Monitor,
                title: t('services.benefits.support24.title'),
                description: t('services.benefits.support24.description')
              },
              {
                icon: BarChart3,
                title: t('services.benefits.provenResults.title'),
                description: t('services.benefits.provenResults.description')
              }
            ], [t]).map((benefit, index) => (
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
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.process.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useMemo(() => [
              { step: '01', title: t('services.process.steps.discovery.title'), description: t('services.process.steps.discovery.description') },
              { step: '02', title: t('services.process.steps.planning.title'), description: t('services.process.steps.planning.description') },
              { step: '03', title: t('services.process.steps.implementation.title'), description: t('services.process.steps.implementation.description') },
              { step: '04', title: t('services.process.steps.support.title'), description: t('services.process.steps.support.description') }
            ], [t]).map((process, index) => (
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
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t('services.cta.consultation')}
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                {t('services.cta.quote')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
