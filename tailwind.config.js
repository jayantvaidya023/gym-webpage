/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burn-bg': '#090909',
        'burn-surface': '#111111',
        'burn-card': '#171717',
        'burn-card-hover': '#1f1f1f',
        'burn-border': '#262626',
        'burn-border-glow': '#ff2a2a40',
        'burn-red': {
          DEFAULT: '#FF2A2A',
          hover: '#E51717',
          dark: '#B80D0D',
          light: '#FF5E5E',
          glow: 'rgba(255, 42, 42, 0.45)',
          muted: 'rgba(255, 42, 42, 0.15)',
        },
        'burn-gray': {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#333333',
          800: '#202020',
          900: '#141414',
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', '"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(255, 42, 42, 0.15) 0%, transparent 70%)',
        'red-gradient': 'linear-gradient(135deg, #FF2A2A 0%, #B80D0D 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
