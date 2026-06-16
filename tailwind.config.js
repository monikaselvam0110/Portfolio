/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080415',   // Deep Purple-Black
        primary: '#8B5CF6',      // Purple
        secondary: '#A78BFA',    // Light Purple / Violet
        accent: '#FFFFFF',       // Pure White
        darkCard: '#130D2B',     // Dark Purple Card
        darkBorder: '#291E4E',   // Deep Purple Border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-secondary': '0 0 20px rgba(167, 139, 250, 0.3)',
        'glow-accent': '0 0 20px rgba(255, 255, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
