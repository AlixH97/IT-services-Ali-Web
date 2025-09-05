/**
 * Translation Utilities for Automatic i18n Integration
 * 
 * This utility provides functions to automatically generate translation keys
 * and integrate them into the i18n system for new content.
 */

// Note: i18n instance will be passed as parameter to avoid circular dependencies

/**
 * Generate a translation key based on section and content type
 * @param {string} section - The section name (e.g., 'services', 'blog', 'home')
 * @param {string} type - The content type (e.g., 'title', 'description', 'button')
 * @param {string} identifier - Unique identifier for the content
 * @returns {string} Generated translation key
 */
export const generateTranslationKey = (section, type, identifier) => {
  const cleanIdentifier = identifier
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/\s+/g, '');
  
  return `${section}.${cleanIdentifier}.${type}`;
};

/**
 * Add a new translation key to the i18n instance
 * @param {string} key - The translation key
 * @param {string} value - The default English value
 * @param {string} language - The language code (default: 'en')
 * @param {Object} i18nInstance - The i18n instance
 */
export const addTranslationKey = (key, value, language = 'en', i18nInstance = null) => {
  if (!i18nInstance) {
    console.warn('i18n instance not provided to addTranslationKey');
    return;
  }
  
  if (!i18nInstance.hasResourceBundle(language, 'translation')) {
    i18nInstance.addResourceBundle(language, 'translation', {}, true, true);
  }
  
  i18nInstance.addResource(language, 'translation', key, value);
};

/**
 * Check if a translation key exists
 * @param {string} key - The translation key to check
 * @param {string} language - The language code (default: 'en')
 * @param {Object} i18nInstance - The i18n instance
 * @returns {boolean} Whether the key exists
 */
export const hasTranslationKey = (key, language = 'en', i18nInstance = null) => {
  if (!i18nInstance) {
    console.warn('i18n instance not provided to hasTranslationKey');
    return false;
  }
  return i18nInstance.exists(key, { lng: language });
};

/**
 * Get all missing translation keys for a given language
 * @param {string} language - The language code to check against
 * @param {Object} i18nInstance - The i18n instance
 * @returns {Array} Array of missing keys
 */
export const getMissingTranslationKeys = (language, i18nInstance = null) => {
  if (!i18nInstance) {
    console.warn('i18n instance not provided to getMissingTranslationKeys');
    return [];
  }
  
  const englishKeys = Object.keys(i18nInstance.getResourceBundle('en', 'translation') || {});
  const targetKeys = Object.keys(i18nInstance.getResourceBundle(language, 'translation') || {});
  
  return englishKeys.filter(key => !targetKeys.includes(key));
};

/**
 * Auto-generate translation key for new content
 * @param {string} section - The section name
 * @param {string} content - The content text
 * @param {string} type - The content type
 * @returns {string} The generated translation key
 */
export const autoGenerateKey = (section, content, type = 'title') => {
  const identifier = content
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+/g, '');
  
  return generateTranslationKey(section, type, identifier);
};

/**
 * Create a translation-ready component wrapper
 * @param {string} section - The section name
 * @param {Function} Component - The component to wrap
 * @returns {Function} Wrapped component with translation utilities
 */
export const withTranslationUtils = (section, Component) => {
  return function TranslationWrappedComponent(props) {
    const { t } = useTranslation();
    
    // Add utility functions to props
    const translationUtils = {
      generateKey: (content, type) => autoGenerateKey(section, content, type),
      addKey: (key, value) => addTranslationKey(key, value),
      hasKey: (key) => hasTranslationKey(key),
      t: t
    };
    
    return <Component {...props} translationUtils={translationUtils} />;
  };
};

/**
 * Development helper to log missing translations
 */
export const logMissingTranslations = () => {
  const languages = ['de', 'ar', 'fr', 'es'];
  
  languages.forEach(lang => {
    const missing = getMissingTranslationKeys(lang);
    if (missing.length > 0) {
      console.warn(`Missing translations for ${lang}:`, missing);
    }
  });
};

/**
 * Auto-suggest translation key for new content
 * @param {string} text - The text content
 * @param {string} section - The section name
 * @param {string} type - The content type
 * @returns {Object} Suggestion object with key and instructions
 */
export const suggestTranslationKey = (text, section, type = 'title') => {
  const key = autoGenerateKey(section, text, type);
  
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

export default {
  generateTranslationKey,
  addTranslationKey,
  hasTranslationKey,
  getMissingTranslationKeys,
  autoGenerateKey,
  withTranslationUtils,
  logMissingTranslations,
  suggestTranslationKey
};
