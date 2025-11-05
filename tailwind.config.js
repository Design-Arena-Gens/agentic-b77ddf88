/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f0ff',
          200: '#b0e3ff',
          300: '#7dd0ff',
          400: '#47b2ff',
          500: '#1e90ff',
          600: '#1872db',
          700: '#155bb0',
          800: '#144e90',
          900: '#133f73'
        }
      },
      fontFamily: {
        heading: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(30,144,255,0.15)",
      },
      backgroundImage: {
        'plaid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        'interlace': "linear-gradient(0deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
