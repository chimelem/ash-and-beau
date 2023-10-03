import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          100: "var(--brand-100)",
          200: "var(--brand-200)",
          300: "var(--brand-300)",
          400: "var(--brand-400)",
          500: "var(--brand-500)",
          600: "var(--brand-600)",
        },
        primary: {
          DEFAULT: "var(--brand)",
          100: "var(--brand-100)",
          200: "var(--brand-200)",
          300: "var(--brand-300)",
          400: "var(--brand-400)",
          500: "var(--brand-500)",
          600: "var(--brand-600)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--secondary-50)"
        },
        alternate: {
          DEFAULT: "var(--alternate)"
        }
      },
      fontFamily: {
        Libre: ["Libre Caslon Text", "serif"],
      },
      minHeight: {
        "1/2": "50%",
        "500": "500px",
      },
      zIndex: {
        "100": "100",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    formsPlugin,
    typographyPlugin,
    require('@tailwindcss/aspect-ratio'),
  ],

};
