/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmic: {
          plum: "var(--cosmic-plum)",
          orange: "var(--cosmic-orange)",
          gold: "var(--cosmic-gold)",
          space: "var(--cosmic-space)",
          beige: "var(--cosmic-beige)",
          card: "var(--cosmic-card)",
        },
      },
      fontFamily: {
        display: ['"Rubik"', "system-ui", "sans-serif"],
        accent: ["SpaceGrotesk", "system-ui", "sans-serif"],
        sans: ["Rubik", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "cosmic-soft": "0 18px 40px rgba(15, 13, 23, 0.35)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
