/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color with full shade range
        primary: {
          50: '#F0F2F5',
          100: '#D9E0E7',
          200: '#B3C0CF',
          300: '#8DA0B7',
          400: '#677F9F',
          500: '#416087',
          600: '#1A252F',
          700: '#14202A',
          800: '#0E161F',
          900: '#090F15',
        },
        
        // Text primary color with full shade range
        'text-primary': {
          50: '#F9FAFB',
          100: '#F0F2F5',
          200: '#E0E6EB',
          300: '#D1DAE1',
          400: '#C1CED7',
          500: '#B2C2CD',
          600: '#A2B6C3',
          700: '#93AAB9',
          800: '#839EAF',
          900: '#7492A5',
        },
        
        // Accent color with full shade range
        accent: {
          50: '#E6FFF9',
          100: '#CCFFF3',
          200: '#99FFE6',
          300: '#66FFD9',
          400: '#33FFCC',
          500: '#00C4B4',
          600: '#00B0A0',
          700: '#009C8C',
          800: '#008878',
          900: '#007464',
        },
        
        // Secondary accent color with full shade range
        'secondary-accent': {
          50: '#FEF1E6',
          100: '#FCE4CC',
          200: '#F9C999',
          300: '#F7AD66',
          400: '#F49A33',
          500: '#F4A261',
          600: '#E08F4D',
          700: '#CC7C39',
          800: '#B86925',
          900: '#A45611',
        },
        
        // Legacy single color values for backward compatibility
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
