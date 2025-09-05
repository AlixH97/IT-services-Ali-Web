# IT Services Website

A modern, multilingual IT services website built with React.js, featuring responsive design, smooth animations, and support for multiple languages including English, German, Arabic, French, and Spanish.

## 🌟 Features

- **Multilingual Support**: English, German, Arabic, French, and Spanish with RTL support for Arabic
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Modern UI**: Clean, professional design with blue (#1E3A8A) and green (#10B981) color scheme
- **SEO Optimized**: Proper meta tags, alt text, and structured data
- **Form Validation**: React Hook Form with Yup validation
- **Performance**: Optimized with Vite build tool and lazy loading

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd it-services-website
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
it-services-website/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Services.jsx
│   │   └── TermsOfService.jsx
│   ├── i18n.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitattributes
├── .gitignore
├── .nvmrc
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server

## 🎨 Design System

### Colors
- **Primary Blue**: #1E3A8A (primary-600)
- **Secondary Green**: #10B981 (secondary-600)
- **Background**: Light gray (#F9FAFB) and white (#FFFFFF)
- **Text**: Dark gray (#111827) for headings, medium gray (#6B7280) for body

### Typography
- **Font Family**: Inter, system fonts fallback
- **Headings**: 600 weight, 1.2 line height
- **Body**: 400 weight, 1.6 line height

### Animations
- **Hover Effects**: Scale 1.05, smooth transitions
- **Fade Ins**: Opacity 0 to 1 with translateY
- **Service Cards**: Hover scale and rotateY effects

## 🌐 Multilingual Support

The website supports 5 languages with automatic RTL detection for Arabic:

- **English** (en) - Default
- **German** (de)
- **Arabic** (ar) - RTL support
- **French** (fr)
- **Spanish** (es)

Language files are managed through react-i18next and stored in the `public/locales` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify
3. **Set environment variables** in Netlify dashboard

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server
3. **Configure your server** to serve the SPA correctly

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_APP_TITLE="IT Services Website"
VITE_APP_DESCRIPTION="Modern IT services website"
VITE_COMPANY_EMAIL="info@itservices.com"
VITE_COMPANY_PHONE="+49 30 12345678"
# ... other variables
```

### Tailwind Configuration

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. Key features:

- Custom color palette
- Responsive breakpoints
- Custom animations
- Component classes

## 🧪 Testing

To ensure consistency across different environments:

1. **Test on different operating systems** (Windows, macOS, Linux)
2. **Test on different browsers** (Chrome, Firefox, Safari, Edge)
3. **Test responsive design** on various screen sizes
4. **Test multilingual functionality** and RTL support
5. **Test form validation** and submission

## 📦 Dependencies

### Production Dependencies
- **React 18.2.0** - UI library
- **React Router DOM 6.8.1** - Client-side routing
- **React i18next 13.5.0** - Internationalization
- **Framer Motion 10.16.4** - Animations
- **React Hook Form 7.45.4** - Form handling
- **Lucide React 0.263.1** - Icons

### Development Dependencies
- **Vite 4.5.0** - Build tool
- **Tailwind CSS 3.3.3** - Styling
- **PostCSS 8.4.31** - CSS processing
- **Autoprefixer 10.4.16** - CSS vendor prefixes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email info@itservices.com or create an issue in the repository.

## 🔄 Version History

- **v1.0.0** - Initial release with multilingual support and responsive design

---

**Note**: This project uses exact dependency versions to ensure consistency across different environments. Always use `npm ci` instead of `npm install` for production deployments.