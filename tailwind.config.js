module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          overlay: "var(--bg-overlay)",
          card: "var(--bg-card)",
          cardHover: "var(--bg-card-hover)",
          accent: "var(--bg-accent)",
          gold: "var(--bg-gold)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)"
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};