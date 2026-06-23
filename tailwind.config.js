/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(56, 189, 248, 0.25)",
      },
    },
  },
  plugins: [],
};
