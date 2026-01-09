/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        secondary: '#FACC15',
      },
    },
  },
  plugins: [],
};
