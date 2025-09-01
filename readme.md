# IT Services Company Website

A modern, responsive website for an IT services company targeting Germany, Europe, and Saudi Arabia markets. Built with React.js, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Multilingual Support**: English, German, Arabic, French, and Spanish
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Modern UI/UX**: Beautiful animations and smooth transitions using Framer Motion
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Contact Form**: Functional contact form with validation
- **Blog Section**: Sample blog posts with search and filtering
- **RTL Support**: Full right-to-left support for Arabic language

## 🚀 Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Internationalization**: react-i18next
- **Form Handling**: React Hook Form with Yup validation
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with language switcher
│   └── Footer.jsx      # Footer with links and social media
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with hero and services overview
│   ├── About.jsx       # Company information and team
│   ├── Services.jsx    # Detailed services with interactive cards
│   ├── Blog.jsx        # Blog posts with search and filtering
│   ├── Contact.jsx     # Contact form and company information
│   ├── PrivacyPolicy.jsx # Privacy policy page
│   └── TermsOfService.jsx # Terms of service page
├── i18n.js             # Internationalization configuration
├── App.jsx             # Main app component with routing
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Clone and Install Dependencies

```bash
# Navigate to the project directory
cd web

# Install dependencies
npm install
```

### Step 2: Start Development Server

```bash
# Start the development server
npm run dev
```

The website will open automatically in your browser at `http://localhost:3000`

### Step 3: Build for Production

```bash
# Build the project for production
npm run build

# Preview the production build
npm run preview
```

## 🌍 Language Support

The website supports 5 languages:

- **English** (en) - Default language
- **German** (de) - Deutsch
- **Arabic** (ar) - العربية (with RTL support)
- **French** (fr) - Français
- **Spanish** (es) - Español

Language switching is available in the navigation bar with a dropdown menu.

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Blue shades (#3b82f6 to #1e3a8a)
- **Secondary**: Green shades (#22c55e to #14532d)

### Styling

Custom CSS classes are available in `src/index.css`:

- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.card` - Card component styling
- `.section-padding` - Standard section padding
- `.container-custom` - Custom container width

## 📧 Contact Form

The contact form includes:

- Name, email, phone number
- Service selection dropdown
- Language preference
- Message field
- Form validation with error messages
- Success/error feedback

**Note**: The form currently simulates submission. In production, you'll need to integrate with a backend service or email service like EmailJS.

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Manual Deployment

```bash
# Build the project
npm run build

# Upload the contents of the 'dist' folder to your web server
```

## 📊 Performance Optimization

- **Image Optimization**: Uses high-quality images from Unsplash with proper alt tags
- **Lazy Loading**: Images and components load as needed
- **Code Splitting**: React Router provides automatic code splitting
- **CSS Optimization**: Tailwind CSS purges unused styles in production

## 🔒 Security Features

- **Form Validation**: Client-side validation with Yup schema
- **XSS Protection**: React automatically escapes user input
- **HTTPS Ready**: Secure headers and practices implemented

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: Semantic HTML structure
- **Alt Tags**: Descriptive alt text for all images
- **Sitemap Ready**: Clean URL structure for search engines

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:

- **Email**: info@itservices.com
- **Phone**: +49 30 12345678
- **Website**: [Contact Page](/contact)

## 🔄 Updates

- **Last Updated**: March 15, 2024
- **Version**: 1.0.0
- **React Version**: 18.2.0
- **Tailwind CSS**: 3.3.0

## 🌟 Key Features Implemented

✅ **Complete Website Structure**
✅ **Multilingual Support (5 languages)**
✅ **Responsive Design**
✅ **Modern Animations**
✅ **Contact Form with Validation**
✅ **Blog Section with Search**
✅ **SEO Optimization**
✅ **RTL Support for Arabic**
✅ **Professional Design**
✅ **Deployment Ready**

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The website is now ready to use! 🎉