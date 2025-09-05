/**
 * Simple Translation Hook for Automatic i18n Integration
 * 
 * This hook provides a simplified way to automatically generate translation keys
 * without causing circular dependencies or white screen issues.
 */

import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

/**
 * Simple hook for automatic translation integration
 * @param {string} section - The section name (e.g., 'services', 'blog', 'home')
 * @returns {Object} Translation utilities and helpers
 */
export const useSimpleTranslation = (section) => {
  const { t, i18n } = useTranslation();

  /**
   * Generate a translation key based on section and content type
   * @param {string} text - The text content
   * @param {string} type - The content type (e.g., 'title', 'description', 'button')
   * @param {string} identifier - Optional custom identifier
   * @returns {string} Generated translation key
   */
  const generateKey = (text, type = 'title', identifier = null) => {
    const cleanText = identifier || text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '');
    
    return `${section}.${cleanText}.${type}`;
  };

  /**
   * Create a translation-ready text element
   * @param {string} text - The text content
   * @param {string} type - The content type (e.g., 'title', 'description', 'button')
   * @param {string} identifier - Optional custom identifier
   * @returns {string} The translated text
   */
  const createTranslatedText = (text, type = 'title', identifier = null) => {
    const key = generateKey(text, type, identifier);
    
    // Check if key exists, if not, log a warning
    if (!i18n.exists(key, { lng: 'en' })) {
      console.warn(`🔄 Missing translation key: ${key} = "${text}"`);
      console.info(`💡 Add this key to your translation files for all languages`);
      // Return the original text as fallback
      return text;
    }
    
    return t(key);
  };

  /**
   * Create a translation-ready array of items
   * @param {Array} items - Array of text items
   * @param {string} type - The content type
   * @returns {Array} Array of translated items
   */
  const createTranslatedArray = (items, type = 'item') => {
    return useMemo(() => {
      return items.map((item, index) => {
        if (typeof item === 'string') {
          return createTranslatedText(item, type, `item${index}`);
        }
        return item;
      });
    }, [items, type]);
  };

  /**
   * Create a translation-ready object with multiple text properties
   * @param {Object} obj - Object with text properties
   * @param {string} prefix - Optional prefix for keys
   * @returns {Object} Object with translated text properties
   */
  const createTranslatedObject = (obj, prefix = '') => {
    return useMemo(() => {
      const translated = {};
      
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value === 'string') {
          const translationKey = prefix ? `${prefix}.${key}` : key;
          translated[key] = createTranslatedText(value, key, translationKey);
        } else {
          translated[key] = value;
        }
      });
      
      return translated;
    }, [obj, prefix]);
  };

  /**
   * Get translation suggestion for new content
   * @param {string} text - The text content
   * @param {string} type - The content type
   * @returns {Object} Suggestion object with key and instructions
   */
  const getTranslationSuggestion = (text, type = 'title') => {
    const key = generateKey(text, type);
    
    return {
      key,
      instructions: `
// Add this key to your translation files:
// English: "${key}": "${text}"
// German: "${key}": "[German translation]"
// Arabic: "${key}": "[Arabic translation]"
// French: "${key}": "[French translation]"
// Spanish: "${key}": "[Spanish translation]"
      `.trim()
    };
  };

  return {
    // Core translation function
    t,
    
    // Auto-translation utilities
    createTranslatedText,
    createTranslatedArray,
    createTranslatedObject,
    
    // Helper functions
    getTranslationSuggestion,
    generateKey,
    
    // i18n instance for advanced usage
    i18n
  };
};

export default useSimpleTranslation;
