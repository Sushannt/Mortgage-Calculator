/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arsenal: ["Arsenal", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        shade: "#352F44",
        shade2: "#5C5470",
        shade3: "#B9B4C7",
        shadeLight: "#FAF0E6",
      },
    },
  },
  plugins: [],
};
