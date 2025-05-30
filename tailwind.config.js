/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '991px',
      xl: '1064px',
      '2xl': '1441px',
    },
    extend: {
      colors: {
        background: 'var(--background)', 
        foreground: 'var(--foreground)',
        dark: 'rgba(24, 24, 24, 1)',
      },
      maxWidth: {
        'screen-xl': '1200px',
      },
    },
  },
  plugins: [],
};