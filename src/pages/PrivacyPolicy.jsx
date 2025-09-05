import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck,
  FileText,
  ArrowLeft
} from 'lucide-react';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Shield,
      title: t('privacy.sections.collect.title'),
      content: t('privacy.sections.collect.content')
    },
    {
      icon: Database,
      title: t('privacy.sections.use.title'),
      content: t('privacy.sections.use.content')
    },
    {
      icon: Lock,
      title: t('privacy.sections.security.title'),
      content: t('privacy.sections.security.content')
    },
    {
      icon: UserCheck,
      title: 'Your Rights Under GDPR',
      content: `Under the General Data Protection Regulation (GDPR), you have the following rights:
      • Right to access your personal data
      • Right to rectification of inaccurate data
      • Right to erasure ("right to be forgotten")
      • Right to restrict processing
      • Right to data portability
      • Right to object to processing
      • Right to withdraw consent
      • Right to lodge a complaint with supervisory authorities`
    },
    {
      icon: Eye,
      title: 'Data Sharing and Third Parties',
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
      • Service providers who assist in our operations
      • Legal requirements and law enforcement
      • Business transfers or mergers
      • Protection of rights and safety
      All third-party service providers are contractually bound to protect your data.`
    },
    {
      icon: FileText,
      title: 'Data Retention and Deletion',
      content: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Our retention periods are:
      • Contact information: 3 years after last contact
      • Service records: 7 years for legal compliance
      • Marketing communications: Until consent withdrawal
      • Technical data: 2 years after service termination
      You may request deletion of your data at any time.`
    }
  ];

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
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              How we collect, use, and protect your personal information in compliance with GDPR and other data protection regulations.
            </p>
            <div className="mt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Contact</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600">
              <strong>Last Updated:</strong> March 15, 2024
            </p>
            <p className="text-gray-500 mt-2">
              This policy is effective immediately and applies to all users of our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                At IT Services Company, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This policy applies to all personal information we collect from clients, website visitors, and other individuals who interact with our services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-xl p-8 bg-gray-50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Policy?</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h4>
                  <p className="text-gray-600">Email: privacy@itservices.com</p>
                  <p className="text-gray-600">Phone: +49 30 12345678</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">General Inquiries</h4>
                  <p className="text-gray-600">Email: info@itservices.com</p>
                  <p className="text-gray-600">Phone: +49 30 12345678</p>
                </div>
              </div>
            </motion.div>

            {/* Updates and Changes */}
            <motion.div
              className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-yellow-800 mb-2">{t('privacy.sections.updates.title')}</h4>
              <p className="text-yellow-700">
                {t('privacy.sections.updates.content')}
              </p>
            </motion.div>
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
              Your Privacy Matters to Us
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're committed to transparency and protecting your data. Contact us if you have any questions about our privacy practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </Link>
              <Link to="/terms" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
