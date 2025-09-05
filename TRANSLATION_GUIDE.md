# Automatic Translation System Guide

This guide explains how to use the automatic translation system for adding new content to the IT services website.

## 🚀 Quick Start

### 1. Adding New Content

When adding new content (services, blog posts, sections), use the automatic translation utilities:

```jsx
import { useAutoTranslation } from '../hooks/useAutoTranslation';

const NewService = () => {
  const { createTranslatedText, createTranslatedArray } = useAutoTranslation('services');
  
  // Automatically creates translation keys
  const title = createTranslatedText('AI Solutions', 'title');
  const description = createTranslatedText('Advanced AI-powered IT solutions', 'description');
  
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
```

### 2. Using Translatable Components

For even easier integration, use the pre-built translatable components:

```jsx
import { TranslatableHeading, TranslatableText, TranslatableButton } from '../components/TranslatableContent';

const NewSection = () => {
  return (
    <div>
      <TranslatableHeading section="services" text="AI Solutions" level="h2" />
      <TranslatableText section="services" text="Advanced AI-powered solutions" type="description" />
      <TranslatableButton section="services" text="Learn More" type="primary" />
    </div>
  );
};
```

## 🔧 Development Workflow

### 1. Adding New Services

```jsx
// In Services.jsx
const newService = {
  id: 'ai-solutions',
  title: createTranslatedText('AI Solutions', 'title'),
  description: createTranslatedText('Advanced AI-powered IT solutions for modern businesses', 'description'),
  features: createTranslatedArray([
    'Machine Learning Integration',
    'Predictive Analytics',
    'Automated Decision Making',
    'Natural Language Processing'
  ], 'features')
};
```

### 2. Adding New Blog Posts

```jsx
// In Blog.jsx
const newBlogPost = {
  title: createTranslatedText('AI in IT: The Future is Here', 'title'),
  excerpt: createTranslatedText('Exploring how artificial intelligence is transforming IT services', 'excerpt'),
  content: createTranslatedText('Artificial intelligence is revolutionizing...', 'content'),
  author: createTranslatedText('AI Expert', 'author')
};
```

### 3. Adding New Sections

```jsx
// In Home.jsx
const newFeature = {
  title: createTranslatedText('Smart Automation', 'title'),
  description: createTranslatedText('Automate your IT processes with intelligent solutions', 'description'),
  icon: 'Bot'
};
```

## 📝 Translation Key Naming Convention

The system automatically generates translation keys using this pattern:
```
{section}.{identifier}.{type}
```

Examples:
- `services.aisolutions.title` - AI Solutions title
- `blog.aitrends.excerpt` - AI trends blog excerpt
- `home.smartautomation.description` - Smart automation description

## 🔄 Automatic Translation Generation

### 1. Development Mode

The Vite plugin automatically detects new `t()` calls and updates translation files:

```bash
npm run dev
```

### 2. Manual Translation Generation

Generate translations for all detected keys:

```bash
npm run translate
```

### 3. Watch Mode

Start development with automatic translation updates:

```bash
npm run translate:watch
```

## 🌍 Language Support

The system supports 5 languages:
- **English (en)** - Default language
- **German (de)** - For European market
- **Arabic (ar)** - For Middle East market (RTL support)
- **French (fr)** - For European market
- **Spanish (es)** - For international market

## 📁 File Structure

```
src/
├── i18n/
│   └── locales/
│       ├── en/translation.json
│       ├── de/translation.json
│       ├── ar/translation.json
│       ├── fr/translation.json
│       └── es/translation.json
├── hooks/
│   └── useAutoTranslation.js
├── components/
│   └── TranslatableContent.jsx
├── utils/
│   └── translationUtils.js
└── scripts/
    └── generate-translations.js
```

## 🛠️ Advanced Usage

### 1. Custom Translation Keys

```jsx
const { createTranslatedText } = useAutoTranslation('services');

// Custom identifier
const title = createTranslatedText('AI Solutions', 'title', 'custom-ai');

// Generates key: services.customai.title
```

### 2. Translation Suggestions

```jsx
const { getTranslationSuggestion } = useAutoTranslation('services');

const suggestion = getTranslationSuggestion('AI Solutions', 'title');
console.log(suggestion.key); // services.aisolutions.title
console.log(suggestion.instructions); // Instructions for adding to translation files
```

### 3. Checking Translation Status

```jsx
const { hasKey, addKey } = useAutoTranslation('services');

if (!hasKey('services.aisolutions.title')) {
  addKey('services.aisolutions.title', 'AI Solutions');
}
```

## 🚨 Important Notes

### 1. Always Use Translation Functions

❌ **Don't do this:**
```jsx
<h2>AI Solutions</h2>
```

✅ **Do this:**
```jsx
<h2>{createTranslatedText('AI Solutions', 'title')}</h2>
```

### 2. Consistent Section Names

Use consistent section names throughout your components:
- `services` for service-related content
- `blog` for blog-related content
- `home` for home page content
- `about` for about page content

### 3. Translation File Updates

The system automatically updates translation files, but you should:
1. Review generated translations
2. Improve placeholder translations
3. Test all languages before deployment

## 🔍 Troubleshooting

### 1. Missing Translations

If translations don't appear:
1. Check if the key exists in translation files
2. Run `npm run translate` to generate missing keys
3. Verify the section name is consistent

### 2. Translation Not Updating

If translations don't update:
1. Restart the development server
2. Clear browser cache
3. Check for syntax errors in translation files

### 3. RTL Issues

For Arabic content:
1. Ensure `dir="rtl"` is set in HTML
2. Use appropriate CSS classes for RTL layout
3. Test text alignment and spacing

## 📚 Best Practices

1. **Use descriptive identifiers** for translation keys
2. **Group related content** under the same section
3. **Test all languages** before deployment
4. **Keep translations consistent** across the site
5. **Use the automatic system** instead of manual key management

## 🎯 Cursor AI Integration

This system is designed to work seamlessly with Cursor AI:

1. **Automatic Detection**: Cursor AI will detect new content and suggest translation integration
2. **Key Generation**: The system automatically generates appropriate translation keys
3. **Translation Suggestions**: Cursor AI can suggest translations for new keys
4. **Consistent Patterns**: The system enforces consistent translation patterns

When you add new content, Cursor AI will automatically:
- Suggest using translation functions
- Generate appropriate translation keys
- Update translation files
- Provide translation suggestions for all languages
