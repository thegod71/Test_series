/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#c28422",
          "gold-hover": "#aa6f15",
          "gold-light": "#fef8ee",
          "gold-border": "#eedbb8",
          "gold-badge": "#e8991f",
          navy: "#0a192f",
          "navy-dark": "#060f1d",
          "navy-light": "#132542",
          "navy-card": "#0f213d",
          accent: "#ca8a04",
          surface: "#faf8f5",
          border: "#e5e7eb",
          muted: "#64748b",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
