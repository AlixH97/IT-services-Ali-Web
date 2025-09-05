/**
 * Custom Hook for Automatic Translation Integration
 * 
 * This hook provides utilities for automatically generating and managing
 * translation keys when adding new content to components.
 */

import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { 
  generateTranslationKey, 
  addTranslationKey, 
  hasTranslationKey,
  suggestTranslationKey 
} from '../utils/translationUtils';

/**
 * Hook for automatic translation integration
 * @param {string} section - The section name (e.g., 'services', 'blog', 'home')
 * @returns {Object} Translation utilities and helpers
 */
export const useAutoTranslation = (section) => {
  const { t, i18n } = useTranslation();

  /**
   * Create a translation-ready text element
   * @param {string} text - The text content
   * @param {string} type - The content type (e.g., 'title', 'description', 'button')
   * @param {string} identifier - Optional custom identifier
   * @returns {string} The translated text
   */
  const createTranslatedText = (text, type = 'title', identifier = null) => {
    const key = identifier 
      ? generateTranslationKey(section, type, identifier)
      : generateTranslationKey(section, type, text);
    
    // Check if key exists, if not, add it
    if (!hasTranslationKey(key, 'en', i18n)) {
      addTranslationKey(key, text, 'en', i18n);
      console.warn(`🔄 New translation key added: ${key} = "${text}"`);
      console.info(`💡 Add this key to your translation files for other languages`);
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
    return suggestTranslationKey(text, section, type);
  };

  /**
   * Auto-translate component props
   * @param {Object} props - Component props
   * @param {Array} textProps - Array of prop names that contain text
   * @returns {Object} Props with translated text
   */
  const translateProps = (props, textProps = ['title', 'description', 'text', 'label']) => {
    return useMemo(() => {
      const translated = { ...props };
      
      textProps.forEach(propName => {
        if (props[propName] && typeof props[propName] === 'string') {
          translated[propName] = createTranslatedText(props[propName], propName);
        }
      });
      
      return translated;
    }, [props, textProps]);
  };

  /**
   * Create a memoized translation function for a specific content type
   * @param {string} contentType - The content type
   * @returns {Function} Memoized translation function
   */
  const createTranslator = (contentType) => {
    return useMemo(() => {
      return (text, identifier = null) => {
        return createTranslatedText(text, contentType, identifier);
      };
    }, [contentType]);
  };

  return {
    // Core translation function
    t,
    
    // Auto-translation utilities
    createTranslatedText,
    createTranslatedArray,
    createTranslatedObject,
    translateProps,
    createTranslator,
    
    // Helper functions
    getTranslationSuggestion,
    hasKey: (key, language = 'en') => hasTranslationKey(key, language, i18n),
    addKey: (key, value, language = 'en') => addTranslationKey(key, value, language, i18n),
    
    // i18n instance for advanced usage
    i18n
  };
};

export default useAutoTranslation;
