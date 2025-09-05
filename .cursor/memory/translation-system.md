# Translation System Memory for Cursor AI

## 🎯 System Overview

This React.js IT services website has an **automatic translation system** that eliminates the need for manual translation commands. When adding new content, Cursor AI should automatically:

1. **Generate t() calls** for all text content
2. **Create translation keys** using the naming convention
3. **Update translation files** for all 5 languages
4. **Provide translation suggestions** for new content

## 🔧 Key Components

### 1. Translation Hook
```jsx
import { useAutoTranslation } from '../hooks/useAutoTranslation';

const { createTranslatedText, createTranslatedArray } = useAutoTranslation('section-name');
```

### 2. Translatable Components
```jsx
import { TranslatableHeading, TranslatableText, TranslatableButton } from '../components/TranslatableContent';

<TranslatableHeading section="services" text="AI Solutions" level="h2" />
<TranslatableText section="services" text="Description text" type="description" />
<TranslatableButton section="services" text="Learn More" type="primary" />
```

### 3. Automatic Key Generation
- Pattern: `{section}.{identifier}.{type}`
- Example: `services.aisolutions.title`
- Auto-generated from text content

## 📝 When Adding New Content

### Services
```jsx
const newService = {
  title: createTranslatedText('AI Solutions', 'title'),
  description: createTranslatedText('Advanced AI-powered solutions', 'description'),
  features: createTranslatedArray([
    'Machine Learning',
    'Predictive Analytics',
    'Automated Decisions'
  ], 'features')
};
```

### Blog Posts
```jsx
const newPost = {
  title: createTranslatedText('AI in IT: Future Trends', 'title'),
  excerpt: createTranslatedText('Exploring AI trends in IT', 'excerpt'),
  content: createTranslatedText('Full blog post content...', 'content')
};
```

### Sections
```jsx
const newSection = {
  title: createTranslatedText('Smart Automation', 'title'),
  description: createTranslatedText('Automate your processes', 'description')
};
```

## 🌍 Supported Languages

- **English (en)** - Default
- **German (de)** - European market
- **Arabic (ar)** - Middle East market (RTL)
- **French (fr)** - European market  
- **Spanish (es)** - International market

## 🚀 Automatic Workflow

1. **Detect new text** in components
2. **Generate t() calls** automatically
3. **Create translation keys** with proper naming
4. **Update all language files** with placeholders
5. **Suggest translations** for new keys

## 📁 File Locations

- Translation files: `src/i18n/locales/{lang}/translation.json`
- Translation hook: `src/hooks/useAutoTranslation.js`
- Translatable components: `src/components/TranslatableContent.jsx`
- Translation utils: `src/utils/translationUtils.js`
- Generation script: `scripts/generate-translations.js`

## 🎯 Cursor AI Instructions

When adding new content to this website:

1. **Always use translation functions** instead of hardcoded text
2. **Generate appropriate translation keys** using the naming convention
3. **Update all 5 language files** with new keys
4. **Provide translation suggestions** for German, Arabic, French, and Spanish
5. **Ensure RTL support** for Arabic content
6. **Test all languages** before finalizing

## 🔄 Commands

- `npm run translate` - Generate translations
- `npm run translate:watch` - Watch mode with translations
- `npm run dev` - Development with auto-translation

## ⚠️ Important Rules

1. **Never use hardcoded text** in components
2. **Always wrap text in t() calls** or translation functions
3. **Use consistent section names** throughout
4. **Generate keys automatically** based on content
5. **Update all language files** simultaneously
6. **Provide market-tailored translations** (GDPR/EU, Saudi data sovereignty)

This system ensures that all new content is automatically translation-ready and maintains consistency across all supported languages.
