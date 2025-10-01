import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0080FF', // bright blue (TeamWater inspired)
          50: '#e6f4ff',
          100: '#cce9ff',
          200: '#99d3ff',
          300: '#66bdff',
          400: '#33a7ff',
          500: '#0091ff',
          600: '#0080FF',
          700: '#0066cc',
          800: '#004d99',
          900: '#003366',
        },
        accent: {
          DEFAULT: '#00C896', // brighter teal/green
          50: '#e6faf5',
          100: '#ccf5eb',
          200: '#99ebd7',
          300: '#66e1c3',
          400: '#33d7af',
          500: '#00cd9b',
          600: '#00C896',
          700: '#00a078',
          800: '#00785a',
          900: '#00503c',
        },
      },
      fontFamily: {
        sans: ['var(--font-sora)', ...fontFamily.sans],
        display: ['var(--font-space-grotesk)', ...fontFamily.sans],
        heading: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0080FF 0%, #0091ff 100%)',
        'hero-blue': 'linear-gradient(to bottom, #0091ff, #0080FF)',
        'card-gradient': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'shine': 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0, 128, 255, 0.3)',
        'glow-blue': '0 0 60px rgba(0, 128, 255, 0.4)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 20px 60px -10px rgba(0, 0, 0, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(0, 128, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'gradient': 'gradient 8s linear infinite',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;