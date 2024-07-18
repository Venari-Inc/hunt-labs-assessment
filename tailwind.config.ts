import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        'accent-primary': 'rgb(var(--color-accent-primary) / <alpha-value>)',
        'black-light': 'rgb(var(--color-black-light) / <alpha-value>)',
        'gray-light': 'rgb(var(--color-gray-light) / <alpha-value>)',
        'accent-light': 'rgb(var(--color-accent-light) / <alpha-value>)',
        'accent-mint': 'rgb(var(--color-accent-mint) / <alpha-value>)',
        'accent-sail': 'rgb(var(--color-accent-sail) / <alpha-value>)',
        'accent-cornflower':
          'rgb(var(--color-accent-cornflower) / <alpha-value>)',
        'accent-scandal': 'rgb(var(--color-accent-scandal) / <alpha-value>)',
        'accent-pink': 'rgb(var(--color-accent-pink) / <alpha-value>)',
        'accent-brulee': 'rgb(var(--color-accent-brulee) / <alpha-value>)',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|current|black|black-light|gray-light|accent-primary|accent-light|accent-mint|accent-sail|accent-cornflower|accent-scandal|accent-pink|accent-brulee)/,
    },
  ],
};
export default config;
