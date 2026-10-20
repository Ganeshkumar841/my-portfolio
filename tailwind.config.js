/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0D0C',
        ivory: '#F2EFE9',
        terracotta: '#D4633B',
        sage: '#A8B8A0',
      },
    },
  },
  plugins: [],
};
