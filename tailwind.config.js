/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New attractive color palette with WCAG 2.1 AA contrast
        primary: '#1A252F',        // Dark blue-gray for backgrounds
        'text-primary': '#E6ECEF', // Light gray for primary text
        accent: '#00C4B4',         // Teal for buttons and highlights
        'secondary-accent': '#F4A261', // Orange for hover states and accents
        
        // Extended color palette for gradients and variations
        'primary-dark': '#0F1419',
        'primary-light': '#2A3441',
        'accent-dark': '#00A896',
        'accent-light': '#00E0C6',
        'secondary-accent-dark': '#E76F51',
        'secondary-accent-light': '#F7B267',
        
        // Neutral colors
        'gray-50': '#F8FAFC',
        'gray-100': '#F1F5F9',
        'gray-200': '#E2E8F0',
        'gray-300': '#CBD5E1',
        'gray-400': '#94A3B8',
        'gray-500': '#64748B',
        'gray-600': '#475569',
        'gray-700': '#334155',
        'gray-800': '#1E293B',
        'gray-900': '#0F172A',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
