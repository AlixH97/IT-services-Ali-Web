/**
 * NewContentExample Component
 * 
 * This component demonstrates how to add new content using the automatic translation system.
 * This serves as an example for Cursor AI to understand the pattern.
 */

import React from 'react';
import { useAutoTranslation } from '../hooks/useAutoTranslation';
import { TranslatableHeading, TranslatableText, TranslatableButton } from './TranslatableContent';

const NewContentExample = () => {
  const { createTranslatedText, createTranslatedArray } = useAutoTranslation('blog');

  // Example: Adding a new blog post
  const newBlogPost = {
    title: createTranslatedText('AI in IT: The Future is Here', 'title'),
    excerpt: createTranslatedText('Exploring how artificial intelligence is transforming IT services and business operations across Europe and the Middle East.', 'excerpt'),
    content: createTranslatedText('Artificial intelligence is revolutionizing the IT landscape, offering unprecedented opportunities for businesses to optimize their operations, enhance security, and drive innovation. From machine learning algorithms that predict system failures to automated cybersecurity solutions that protect against emerging threats, AI is becoming an integral part of modern IT infrastructure.', 'content'),
    author: createTranslatedText('AI Expert', 'author'),
    date: createTranslatedText('January 2025', 'date'),
    category: createTranslatedText('Technology Trends', 'category'),
    tags: createTranslatedArray([
      'Artificial Intelligence',
      'Machine Learning',
      'IT Innovation',
      'Digital Transformation',
      'Automation'
    ], 'tags')
  };

  // Example: Adding a new service feature
  const newServiceFeature = {
    title: createTranslatedText('Smart Automation', 'title'),
    description: createTranslatedText('Intelligent automation solutions that streamline your IT processes and reduce manual workload.', 'description'),
    benefits: createTranslatedArray([
      'Reduced Operational Costs',
      'Improved Efficiency',
      '24/7 Automated Monitoring',
      'Predictive Maintenance',
      'Seamless Integration'
    ], 'benefits')
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">New Content Example</h1>
      
      {/* Example Blog Post */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <TranslatableHeading 
          section="blog" 
          text="AI in IT: The Future is Here" 
          level="h2" 
          className="text-xl font-semibold mb-4"
        />
        <TranslatableText 
          section="blog" 
          text="Exploring how artificial intelligence is transforming IT services" 
          type="excerpt"
          className="text-gray-600 mb-4"
        />
        <TranslatableButton 
          section="blog" 
          text="Read More" 
          type="primary"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        />
      </div>

      {/* Example Service Feature */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <TranslatableHeading 
          section="services" 
          text="Smart Automation" 
          level="h2" 
          className="text-xl font-semibold mb-4"
        />
        <TranslatableText 
          section="services" 
          text="Intelligent automation solutions for modern businesses" 
          type="description"
          className="text-gray-600 mb-4"
        />
        <ul className="space-y-2">
          {newServiceFeature.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions for Cursor AI */}
      <div className="p-4 bg-blue-50 border-l-4 border-blue-400">
        <h3 className="font-semibold text-blue-800 mb-2">Instructions for Cursor AI:</h3>
        <p className="text-blue-700 text-sm">
          When adding new content to this website, always use the translation functions above. 
          The system will automatically generate translation keys and update all language files.
        </p>
      </div>
    </div>
  );
};

export default NewContentExample;
