# IT Services Website

A modern, multilingual IT services website built with React.js, featuring comprehensive translation support and an attractive UI design. The website serves businesses across Germany, Europe, and Saudi Arabia with professional IT solutions.

## 🌟 Features

- **Multilingual Support**: English, German, Arabic, French, and Spanish
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Attractive color palette with WCAG 2.1 AA contrast compliance
- **Smooth Animations**: Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **RTL Support**: Full right-to-left support for Arabic language
- **Translation Automation**: Automatic translation key generation for new content

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.17.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AlixH97/IT-services-Ali-Web.git
   cd IT-services-Ali-Web
   ```

2. **Install Node.js version**
   ```bash
   # Using nvm (recommended)
   nvm use
   
   # Or install Node.js 18.17.0 manually
   # Download from https://nodejs.org/
   ```

3. **Install dependencies**
   ```bash
   npm ci
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
IT-services-Ali-Web/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Footer.jsx     # Footer component
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── About.jsx      # About page
│   │   ├── Services.jsx   # Services page
│   │   ├── Blog.jsx       # Blog page
│   │   ├── Contact.jsx    # Contact page
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   ├── useSimpleTranslation.js
│   │   └── useAutoTranslation.js
│   ├── utils/             # Utility functions
│   │   └── translationUtils.js
│   ├── i18n/              # Translation files
│   │   └── locales/
│   │       ├── en/        # English translations
│   │       ├── de/        # German translations
│   │       ├── ar/        # Arabic translations
│   │       ├── fr/        # French translations
│   │       └── es/        # Spanish translations
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   ├── i18n.js            # i18n configuration
│   └── index.css          # Global styles
├── scripts/               # Build and utility scripts
├── .nvmrc                 # Node.js version specification
├── .gitignore             # Git ignore rules
├── .gitattributes         # Git attributes for line endings
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Design System

### Color Palette

- **Primary**: `#1A252F` - Dark blue-gray for backgrounds
- **Text Primary**: `#E6ECEF` - Light gray for primary text
- **Accent**: `#00C4B4` - Teal for buttons and highlights
- **Secondary Accent**: `#F4A261` - Orange for hover states

### Typography

- **Primary Font**: Poppins (Google Fonts)
- **Fallback**: Inter, system fonts
- **Weights**: 300, 400, 500, 600, 700

### Components

- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive with mobile menu

## 🌐 Translation System

### Adding New Content

1. **Use the translation hook**:
   ```jsx
   import { useSimpleTranslation } from '../hooks/useSimpleTranslation';
   
   const MyComponent = () => {
     const { createTranslatedText, createTranslatedArray } = useSimpleTranslation('section-name');
     
     const title = createTranslatedText('New Title', 'title');
     const features = createTranslatedArray(['Feature 1', 'Feature 2'], 'features');
     
     return <h1>{title}</h1>;
   };
   ```

2. **Check console warnings** for missing translation keys
3. **Add keys to translation files** in `src/i18n/locales/`
4. **Test all languages** to ensure proper translation

### Translation Files

- **English**: `src/i18n/locales/en/translation.json`
- **German**: `src/i18n/locales/de/translation.json`
- **Arabic**: `src/i18n/locales/ar/translation.json`
- **French**: `src/i18n/locales/fr/translation.json`
- **Spanish**: `src/i18n/locales/es/translation.json`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run translate` - Generate translation keys
- `npm run translate:watch` - Watch and generate translations
- `npm run translate:check` - Check translation completeness

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Set build command**: `npm run build`
3. **Set output directory**: `dist`
4. **Deploy automatically** on every push to main

### Netlify

1. **Connect your GitHub repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`
4. **Deploy automatically** on every push to main

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server

3. **Configure your server** to serve the SPA (Single Page Application)

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# EmailJS Configuration (if using contact forms)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
VITE_GA_TRACKING_ID=your_ga_tracking_id

# API Keys (if using external services)
VITE_API_BASE_URL=https://api.example.com

# Environment
NODE_ENV=development
```

### Tailwind CSS

The project uses Tailwind CSS with custom configuration:
- Custom color palette
- Responsive breakpoints
- Custom animations
- Dark mode support

### Vite Configuration

- React plugin for JSX support
- Development server on port 3000
- Hot module replacement
- Build optimization

## 🧪 Testing

### Manual Testing

1. **Test all pages** in different languages
2. **Verify responsive design** on mobile, tablet, desktop
3. **Check RTL support** for Arabic
4. **Test form submissions** and interactions
5. **Verify SEO** with browser dev tools

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** ratios
- **Focus indicators** for interactive elements

## 🐛 Troubleshooting

### Common Issues

1. **White screen on load**
   - Check browser console for errors
   - Verify all dependencies are installed
   - Clear browser cache

2. **Translation not working**
   - Check if `I18nextProvider` is properly set up
   - Verify translation keys exist in all language files
   - Check console for missing translation warnings

3. **Build errors**
   - Run `npm ci` to clean install dependencies
   - Check Node.js version compatibility
   - Clear Vite cache: `rm -rf node_modules/.vite`

### Getting Help

1. **Check the console** for error messages
2. **Review the documentation** in this README
3. **Check GitHub issues** for similar problems
4. **Create a new issue** with detailed error information

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add new feature'`
5. **Push to the branch**: `git push origin feature/new-feature`
6. **Create a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **react-i18next** - Internationalization
- **Lucide React** - Icon library
- **Vite** - Build tool

## 📞 Support

For support and questions:
- **Email**: info@itservices.com
- **Phone**: +49 123 456789
- **Website**: [IT Services Company](https://itservices.com)

---

**Built with ❤️ for businesses across Europe and the Middle East**