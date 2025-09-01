import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Tag,
  Search,
  Filter
} from 'lucide-react';

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.posts.cybersecurity'),
      excerpt: 'Discover the latest cybersecurity trends and threats affecting European businesses in 2024, and learn how to protect your organization.',
      content: `The cybersecurity landscape in Europe continues to evolve rapidly, with new threats emerging alongside innovative defense strategies. In 2024, we're seeing a significant increase in sophisticated phishing attacks, ransomware targeting critical infrastructure, and AI-powered cyber threats.

European businesses face unique challenges, particularly with GDPR compliance requirements and the need to protect customer data across multiple jurisdictions. Our analysis shows that organizations implementing zero-trust security models and advanced threat detection systems are significantly more resilient to cyber attacks.

Key trends include the rise of quantum-resistant cryptography, increased adoption of security automation, and a growing focus on supply chain security. Companies that invest in employee cybersecurity training and implement multi-layered security approaches are seeing the best results.`,
      author: 'Carlos Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Europe', 'GDPR', 'Threats'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: t('blog.posts.cloud'),
      excerpt: 'Learn the best practices for migrating your business to the cloud, including planning, execution, and optimization strategies.',
      content: `Cloud migration has become a critical strategic initiative for businesses looking to improve scalability, reduce costs, and enhance operational efficiency. However, successful cloud migration requires careful planning and execution.

Our experience shows that organizations that take a phased approach to cloud migration achieve better results than those attempting to move everything at once. Start with non-critical applications and gradually move to more complex systems. This approach allows teams to learn and adapt while minimizing business disruption.

Key considerations include data security, compliance requirements, cost optimization, and performance monitoring. We recommend implementing cloud-native security tools and establishing clear governance policies from the start. Regular cost analysis and optimization reviews are essential to ensure you're getting maximum value from your cloud investment.`,
      author: 'Ahmed Al-Rashid',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Cloud Services',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      title: t('blog.posts.erp'),
      excerpt: 'Explore real-world ERP implementation success stories and learn the key factors that contribute to successful digital transformation.',
      content: `ERP implementations are complex projects that can transform how businesses operate, but they also come with significant risks. Through our work with clients across Europe and the Middle East, we've identified several key success factors.

Successful ERP implementations typically involve strong executive sponsorship, clear project governance, and comprehensive change management programs. Organizations that invest in user training and adoption strategies see much higher success rates than those that focus solely on technical implementation.

We've found that taking an agile approach to ERP implementation, with regular stakeholder feedback and iterative development, leads to better outcomes. It's also crucial to establish clear metrics for success and regularly measure progress against these goals.`,
      author: 'Sarah Müller',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'March 5, 2024',
      readTime: '10 min read',
      category: 'ERP',
      tags: ['ERP', 'SAP', 'Digital Transformation', 'Success Stories'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 4,
      title: 'The Future of IT Support: AI-Powered Solutions',
      excerpt: 'Discover how artificial intelligence is revolutionizing IT support and what this means for businesses and IT professionals.',
      content: `Artificial intelligence is transforming the IT support landscape, offering new opportunities to improve efficiency and user experience. AI-powered chatbots and virtual assistants can handle routine support requests, freeing up human technicians to focus on complex issues.

However, the human element remains crucial in IT support. AI should complement human expertise, not replace it entirely. The most successful organizations are those that use AI to enhance their support capabilities while maintaining personal connections with users.

We're seeing significant improvements in first-call resolution rates and user satisfaction scores when AI tools are properly integrated with human support teams. The key is finding the right balance between automation and human interaction.`,
      author: 'Dr. Michael Weber',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'IT Support',
      tags: ['AI', 'IT Support', 'Automation', 'Future'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Data Sovereignty: What European and Middle Eastern Businesses Need to Know',
      excerpt: 'Understanding data sovereignty requirements and how they impact business operations in different regions.',
      content: `Data sovereignty has become a critical concern for businesses operating across multiple jurisdictions. European companies must comply with GDPR requirements, while Middle Eastern businesses face their own data localization and sovereignty regulations.

The key is understanding the specific requirements in each market and implementing solutions that ensure compliance while maintaining operational efficiency. This often involves using local cloud providers or implementing hybrid solutions that keep sensitive data within required jurisdictions.

We recommend conducting a comprehensive data audit to identify where your data is stored and processed, then developing a strategy that balances compliance requirements with business needs. Regular reviews and updates are essential as regulations continue to evolve.`,
      author: 'Ahmed Al-Rashid',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'February 20, 2024',
      readTime: '9 min read',
      category: 'Compliance',
      tags: ['Data Sovereignty', 'GDPR', 'Compliance', 'Middle East'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Building Resilient IT Infrastructure for the Modern Enterprise',
      excerpt: 'Learn how to design and implement IT infrastructure that can withstand disruptions and support business continuity.',
      content: `Modern businesses require IT infrastructure that's not only powerful and efficient but also resilient and adaptable. The key is designing systems that can handle unexpected disruptions while maintaining business continuity.

We recommend implementing redundant systems, automated failover mechanisms, and comprehensive disaster recovery plans. Regular testing of these systems is crucial to ensure they work when needed. Cloud-based solutions can provide additional resilience by offering geographic redundancy and automatic scaling capabilities.

The most successful organizations take a holistic approach to infrastructure resilience, considering not just technical factors but also people, processes, and business impact. Regular risk assessments and updates to resilience strategies are essential as business needs and threats evolve.`,
      author: 'Carlos Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'February 15, 2024',
      readTime: '11 min read',
      category: 'Infrastructure',
      tags: ['Infrastructure', 'Resilience', 'Business Continuity', 'Disaster Recovery'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const categories = ['All', 'Cybersecurity', 'Cloud Services', 'ERP', 'IT Support', 'Compliance', 'Infrastructure'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              {t('blog.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
              <p className="text-lg text-gray-600">Our most popular and insightful content</p>
            </motion.div>

            {filteredPosts.filter(post => post.featured).map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">Author</p>
                      </div>
                    </div>
                    <button className="btn-primary w-fit">
                      {t('blog.readMore')}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest insights and trends in IT and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1">
                      <span>{t('blog.readMore')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-600">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and industry news delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
