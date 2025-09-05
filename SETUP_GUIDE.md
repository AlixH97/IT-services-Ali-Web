# GitHub Repository Setup Guide

This guide will help you initialize a new GitHub repository and ensure the IT Services Website runs consistently across different environments.

## 🚀 Initial Setup

### 1. Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: IT Services Website with multilingual support"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Repository name**: `it-services-website`
3. **Description**: `Modern IT services website with multilingual support`
4. **Visibility**: Public or Private (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 3. Connect Local Repository to GitHub

```bash
# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/it-services-website.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🔄 Cloning and Testing

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/it-services-website.git
cd it-services-website
```

### 2. Setup Development Environment

```bash
# Use the setup script (recommended)
./setup.sh

# OR manual setup
npm ci
cp .env.example .env
# Edit .env with your values
```

### 3. Start Development Server

```bash
npm run dev
```

## 🧪 Testing Consistency

### 1. Test on Different Operating Systems

- **Windows**: Test with Git Bash or PowerShell
- **macOS**: Test with Terminal
- **Linux**: Test with any terminal

### 2. Test on Different Browsers

- **Chrome**: Latest version
- **Firefox**: Latest version
- **Safari**: Latest version (macOS only)
- **Edge**: Latest version

### 3. Test Responsive Design

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### 4. Test Multilingual Support

- Switch between all 5 languages
- Test RTL support for Arabic
- Verify all text is properly translated

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect GitHub repository** to Vercel
2. **Import project** from GitHub
3. **Set environment variables** in Vercel dashboard
4. **Deploy** - Vercel handles everything automatically

### Option 2: Netlify

1. **Connect GitHub repository** to Netlify
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. **Set environment variables** in Netlify dashboard
5. **Deploy**

### Option 3: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your web server
3. **Configure server** to serve SPA correctly

## 🔧 Environment Variables

### Required for Production

```env
VITE_APP_TITLE="IT Services Website"
VITE_APP_DESCRIPTION="Modern IT services website"
VITE_COMPANY_EMAIL="info@itservices.com"
VITE_COMPANY_PHONE="+49 30 12345678"
VITE_COMPANY_ADDRESS="Musterstraße 123, 10115 Berlin, Germany"
```

### Optional for Enhanced Features

```env
VITE_EMAILJS_SERVICE_ID="your_service_id"
VITE_EMAILJS_TEMPLATE_ID="your_template_id"
VITE_EMAILJS_PUBLIC_KEY="your_public_key"
VITE_GA_TRACKING_ID="your_ga_tracking_id"
```

## 📋 Pre-Deployment Checklist

- [ ] All dependencies are locked to exact versions
- [ ] Environment variables are properly configured
- [ ] All images have proper alt text
- [ ] Multilingual support is working
- [ ] RTL support works for Arabic
- [ ] Responsive design works on all screen sizes
- [ ] Forms are properly validated
- [ ] All links are working
- [ ] SEO meta tags are present
- [ ] Performance is optimized

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version Mismatch**
   ```bash
   # Use nvm to switch to correct version
   nvm use 18.17.0
   ```

2. **Dependencies Not Installing**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Fails**
   ```bash
   # Check for TypeScript errors
   npm run build -- --verbose
   ```

4. **Styling Issues**
   ```bash
   # Clear Vite cache
   rm -rf node_modules/.vite
   npm run dev
   ```

### Getting Help

- Check the [README.md](README.md) for detailed documentation
- Review the [Issues](https://github.com/YOUR_USERNAME/it-services-website/issues) page
- Create a new issue if you find a bug

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React i18next Documentation](https://react.i18next.com/)

---

**Note**: This project is designed to be consistent across all environments. If you encounter any issues, please check the troubleshooting section or create an issue in the repository.
