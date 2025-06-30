/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Keep if you have a pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Crucial for scanning src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [], // This is for Tailwind plugins, not PostCSS plugins
}