import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ArrowLeft,
  Shield,
  Users
} from 'lucide-react';

const TermsOfService = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: `By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

      These terms apply to all visitors, users, and others who access or use our services. Your continued use of our services following the posting of any changes to these terms constitutes acceptance of those changes.`
    },
    {
      icon: Shield,
      title: 'Service Description',
      content: `IT Services Company provides comprehensive IT solutions including but not limited to:
      • IT support and maintenance services
      • Cybersecurity solutions and consulting
      • ERP implementation and customization
      • Cloud services and migration
      • Website development and hosting
      • Network infrastructure design and management
      • Software development and customization
      • IT consulting and strategy

      We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`
    },
    {
      icon: CheckCircle,
      title: 'User Responsibilities',
      content: `As a user of our services, you agree to:
      • Provide accurate and complete information
      • Maintain the security of your account credentials
      • Use our services only for lawful purposes
      • Not interfere with or disrupt our services
      • Comply with all applicable laws and regulations
      • Pay all fees and charges in a timely manner
      • Maintain appropriate backup of your data
      • Cooperate with our support team when needed`
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law, IT Services Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
      • Loss of profits, data, or business opportunities
      • Service interruptions or downtime
      • Data loss or corruption
      • Third-party actions or failures
      • Force majeure events

      Our total liability shall not exceed the amount paid by you for the specific service in question.`
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: `All content, features, and functionality of our services are owned by IT Services Company and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

      You retain ownership of your data and content. We grant you a limited, non-exclusive, non-transferable license to use our services for your business purposes.

      You may not copy, modify, distribute, sell, or lease any part of our services without our written consent.`
    },
    {
      icon: XCircle,
      title: 'Termination and Cancellation',
      content: `Either party may terminate this agreement with written notice:
      • For convenience: 30 days written notice
      • For cause: Immediate termination for material breach
      • For non-payment: 7 days after payment due date

      Upon termination:
      • You must cease using our services
      • We will return or delete your data as requested
      • Outstanding payments become immediately due
      • Surviving provisions remain in effect`
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
              <FileText className="w-16 h-16 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              The terms and conditions governing your use of our IT services and solutions.
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
              These terms are effective immediately and apply to all users of our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and IT Services Company ("Company," "we," "us," or "our") regarding your use of our IT services, website, and related offerings.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </motion.div>

            {/* Terms Sections */}
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

            {/* Additional Terms */}
            <motion.div
              className="mt-16 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h3>
                <div className="space-y-4 text-gray-600">
                  <p>• All fees are due upon receipt of invoice unless otherwise agreed in writing</p>
                  <p>• Late payments may result in service suspension and late fees</p>
                  <p>• Prices are subject to change with 30 days written notice</p>
                  <p>• Refunds are provided according to our refund policy</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Confidentiality</h3>
                <div className="space-y-4 text-gray-600">
                  <p>• Both parties agree to maintain confidentiality of proprietary information</p>
                  <p>• Confidential information includes business plans, technical data, and client information</p>
                  <p>• Confidentiality obligations survive termination of this agreement</p>
                  <p>• Exceptions apply for legally required disclosures</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution</h3>
                <div className="space-y-4 text-gray-600">
                  <p>• Disputes will first be addressed through good faith negotiations</p>
                  <p>• If unresolved, disputes will be submitted to mediation</p>
                  <p>• Final resolution through binding arbitration in Berlin, Germany</p>
                  <p>• Governing law is the law of Germany</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
              <p className="text-lg text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Department</h4>
                  <p className="text-gray-600">Email: legal@itservices.com</p>
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
              className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-blue-800 mb-2">Terms Updates</h4>
              <p className="text-blue-700">
                We may update these Terms of Service from time to time to reflect changes in our services, business practices, or legal requirements. We will notify you of any material changes by posting the updated terms on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated terms.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              By using our services, you agree to these terms. Contact us if you have any questions or need clarification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us
              </Link>
              <Link to="/privacy" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
