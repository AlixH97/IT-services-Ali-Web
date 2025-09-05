#!/usr/bin/env node

/**
 * Translation Generation Script
 * 
 * This script automatically generates translation suggestions for new keys
 * and updates translation files with placeholders.
 */

const fs = require('fs');
const path = require('path');

const LANGUAGES = ['en', 'de', 'ar', 'fr', 'es'];
const LOCALES_DIR = path.join(__dirname, '..', 'src', 'i18n', 'locales');

/**
 * Generate translation suggestions based on English content
 */
function generateTranslationSuggestions(englishKey, englishValue) {
  const suggestions = {
    de: generateGermanTranslation(englishValue),
    ar: generateArabicTranslation(englishValue),
    fr: generateFrenchTranslation(englishValue),
    es: generateSpanishTranslation(englishValue)
  };
  
  return suggestions;
}

/**
 * Generate German translation suggestions
 */
function generateGermanTranslation(text) {
  const translations = {
    'AI Solutions': 'KI-Lösungen',
    'AI in IT': 'KI in der IT',
    'Artificial Intelligence': 'Künstliche Intelligenz',
    'Machine Learning': 'Maschinelles Lernen',
    'Data Analytics': 'Datenanalyse',
    'Automation': 'Automatisierung',
    'Smart Solutions': 'Intelligente Lösungen',
    'Digital Innovation': 'Digitale Innovation',
    'Technology Trends': 'Technologietrends',
    'Future of IT': 'Zukunft der IT'
  };
  
  return translations[text] || `[Übersetzen: ${text}]`;
}

/**
 * Generate Arabic translation suggestions
 */
function generateArabicTranslation(text) {
  const translations = {
    'AI Solutions': 'حلول الذكاء الاصطناعي',
    'AI in IT': 'الذكاء الاصطناعي في تقنية المعلومات',
    'Artificial Intelligence': 'الذكاء الاصطناعي',
    'Machine Learning': 'التعلم الآلي',
    'Data Analytics': 'تحليل البيانات',
    'Automation': 'الأتمتة',
    'Smart Solutions': 'الحلول الذكية',
    'Digital Innovation': 'الابتكار الرقمي',
    'Technology Trends': 'اتجاهات التكنولوجيا',
    'Future of IT': 'مستقبل تقنية المعلومات'
  };
  
  return translations[text] || `[ترجمة: ${text}]`;
}

/**
 * Generate French translation suggestions
 */
function generateFrenchTranslation(text) {
  const translations = {
    'AI Solutions': 'Solutions IA',
    'AI in IT': 'IA dans l\'informatique',
    'Artificial Intelligence': 'Intelligence Artificielle',
    'Machine Learning': 'Apprentissage Automatique',
    'Data Analytics': 'Analyse de Données',
    'Automation': 'Automatisation',
    'Smart Solutions': 'Solutions Intelligentes',
    'Digital Innovation': 'Innovation Numérique',
    'Technology Trends': 'Tendances Technologiques',
    'Future of IT': 'Avenir de l\'Informatique'
  };
  
  return translations[text] || `[Traduire: ${text}]`;
}

/**
 * Generate Spanish translation suggestions
 */
function generateSpanishTranslation(text) {
  const translations = {
    'AI Solutions': 'Soluciones de IA',
    'AI in IT': 'IA en Informática',
    'Artificial Intelligence': 'Inteligencia Artificial',
    'Machine Learning': 'Aprendizaje Automático',
    'Data Analytics': 'Análisis de Datos',
    'Automation': 'Automatización',
    'Smart Solutions': 'Soluciones Inteligentes',
    'Digital Innovation': 'Innovación Digital',
    'Technology Trends': 'Tendencias Tecnológicas',
    'Future of IT': 'Futuro de la Informática'
  };
  
  return translations[text] || `[Traducir: ${text}]`;
}

/**
 * Scan component files for createTranslatedText calls
 */
function scanComponentFiles(dir, keys) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      scanComponentFiles(fullPath, keys);
    } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
      scanFileForTranslations(fullPath, keys);
    }
  }
}

/**
 * Scan a single file for createTranslatedText calls
 */
function scanFileForTranslations(filePath, keys) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Find createTranslatedText calls
    const createTranslatedTextRegex = /createTranslatedText\(['"`]([^'"`]+)['"`],\s*['"`]([^'"`]+)['"`]\)/g;
    let match;
    
    while ((match = createTranslatedTextRegex.exec(content)) !== null) {
      const text = match[1];
      const type = match[2];
      
      // Generate key based on the pattern
      const key = generateKeyFromText(text, type);
      keys.set(key, text);
    }
    
    // Find createTranslatedArray calls
    const createTranslatedArrayRegex = /createTranslatedArray\(\s*\[([\s\S]*?)\],\s*['"`]([^'"`]+)['"`]\)/g;
    
    while ((match = createTranslatedArrayRegex.exec(content)) !== null) {
      const arrayContent = match[1];
      const type = match[2];
      
      // Extract strings from array
      const stringRegex = /['"`]([^'"`]+)['"`]/g;
      let stringMatch;
      let index = 0;
      
      while ((stringMatch = stringRegex.exec(arrayContent)) !== null) {
        const text = stringMatch[1];
        const key = generateKeyFromText(text, type, index);
        keys.set(key, text);
        index++;
      }
    }
  } catch (error) {
    console.warn(`Error scanning file ${filePath}:`, error.message);
  }
}

/**
 * Generate translation key from text
 */
function generateKeyFromText(text, type, index = null) {
  const cleanText = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+/g, '');
  
  const identifier = index !== null ? `${cleanText}${index}` : cleanText;
  return `services.${identifier}.${type}`;
}

  /**
   * Update translation files with new keys
   */
  function updateTranslationFiles() {
    console.log('🔍 Scanning for new translation keys...');
    
    const keys = new Map();
    
    // Read the main i18n.js file to extract all keys
    const i18nFile = path.join(__dirname, '..', 'src', 'i18n.js');
    const i18nContent = fs.readFileSync(i18nFile, 'utf-8');
    
    // Extract all translation keys from the i18n.js file
    const keyRegex = /'([^']+)':\s*'([^']+)'/g;
    let match;
    
    while ((match = keyRegex.exec(i18nContent)) !== null) {
      const key = match[1];
      const value = match[2];
      keys.set(key, value);
    }
    
    // Also scan component files for createTranslatedText calls
    const srcDir = path.join(__dirname, '..', 'src');
    scanComponentFiles(srcDir, keys);
  
  console.log(`📝 Found ${keys.size} translation keys`);
  
  // Update each language file
  LANGUAGES.forEach(lang => {
    const langDir = path.join(LOCALES_DIR, lang);
    const translationFile = path.join(langDir, 'translation.json');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }
    
    // Read existing translations
    let existingTranslations = {};
    if (fs.existsSync(translationFile)) {
      try {
        existingTranslations = JSON.parse(fs.readFileSync(translationFile, 'utf-8'));
      } catch (error) {
        console.warn(`⚠️  Error reading ${translationFile}:`, error.message);
      }
    }
    
    // Add new keys
    let hasUpdates = false;
    keys.forEach((value, key) => {
      if (!existingTranslations[key]) {
        if (lang === 'en') {
          existingTranslations[key] = value;
        } else {
          // Generate translation suggestion
          const suggestions = generateTranslationSuggestions(key, value);
          existingTranslations[key] = suggestions[lang];
        }
        hasUpdates = true;
      }
    });
    
    if (hasUpdates) {
      // Sort keys alphabetically
      const sortedTranslations = {};
      Object.keys(existingTranslations)
        .sort()
        .forEach(key => {
          sortedTranslations[key] = existingTranslations[key];
        });
      
      // Write updated translations
      fs.writeFileSync(
        translationFile,
        JSON.stringify(sortedTranslations, null, 2) + '\n'
      );
      
      console.log(`✅ Updated ${translationFile}`);
    } else {
      console.log(`ℹ️  No updates needed for ${lang}`);
    }
  });
  
  console.log('🎉 Translation files updated successfully!');
}

/**
 * Main execution
 */
if (require.main === module) {
  updateTranslationFiles();
}

module.exports = {
  generateTranslationSuggestions,
  updateTranslationFiles
};
