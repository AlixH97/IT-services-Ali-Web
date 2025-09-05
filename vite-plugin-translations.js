/**
 * Vite Plugin for Automatic Translation Detection and Generation
 * 
 * This plugin automatically detects new translation keys in components
 * and generates corresponding entries in translation files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function translationPlugin() {
  return {
    name: 'vite-plugin-translations',
    buildStart() {
      this.scanForTranslations();
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('.jsx') || file.includes('.js')) {
        this.scanForTranslations();
      }
    },
    scanForTranslations() {
      try {
        const translationKeys = this.extractTranslationKeys();
        this.updateTranslationFiles(translationKeys);
      } catch (error) {
        console.warn('Translation plugin error:', error.message);
      }
    },
    extractTranslationKeys() {
      const srcDir = path.join(__dirname, 'src');
      const keys = new Set();
      
      const scanFile = (filePath) => {
        if (!fs.existsSync(filePath)) return;
        
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Find t('...') calls
        const tCallRegex = /t\(['"`]([^'"`]+)['"`]\)/g;
        let match;
        while ((match = tCallRegex.exec(content)) !== null) {
          keys.add(match[1]);
        }
        
        // Find t("...") calls
        const tCallRegex2 = /t\(["'`]([^"'`]+)["'`]\)/g;
        while ((match = tCallRegex2.exec(content)) !== null) {
          keys.add(match[1]);
        }
      };
      
      const scanDirectory = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
            scanFile(fullPath);
          }
        }
      };
      
      scanDirectory(srcDir);
      return Array.from(keys);
    },
    updateTranslationFiles(keys) {
      const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');
      
      if (!fs.existsSync(localesDir)) {
        console.warn('Locales directory not found, skipping translation file updates');
        return;
      }
      
      const languages = ['en', 'de', 'ar', 'fr', 'es'];
      
      languages.forEach(lang => {
        const translationFile = path.join(localesDir, lang, 'translation.json');
        
        if (!fs.existsSync(translationFile)) {
          console.warn(`Translation file for ${lang} not found: ${translationFile}`);
          return;
        }
        
        try {
          const existingTranslations = JSON.parse(fs.readFileSync(translationFile, 'utf-8'));
          let hasUpdates = false;
          
          keys.forEach(key => {
            if (!existingTranslations[key]) {
              if (lang === 'en') {
                // For English, use a placeholder that needs to be filled
                existingTranslations[key] = `[TRANSLATE: ${key}]`;
              } else {
                // For other languages, use a placeholder
                existingTranslations[key] = `[TRANSLATE: ${key}]`;
              }
              hasUpdates = true;
            }
          });
          
          if (hasUpdates) {
            // Sort keys alphabetically for better organization
            const sortedTranslations = {};
            Object.keys(existingTranslations)
              .sort()
              .forEach(key => {
                sortedTranslations[key] = existingTranslations[key];
              });
            
            fs.writeFileSync(
              translationFile, 
              JSON.stringify(sortedTranslations, null, 2) + '\n'
            );
            
            console.log(`Updated translation file for ${lang} with ${keys.length} new keys`);
          }
        } catch (error) {
          console.warn(`Error updating translation file for ${lang}:`, error.message);
        }
      });
    }
  };
}
