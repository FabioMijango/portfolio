/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        GTWalsheim: ["GT Walsheim Pro"],
      },
      colors: {
        "primary-black": "#111111",
        "secondary-darkgray": "#1A1A1A",
        "gr-0": "#9845E8",
        "gr-30": "#6192f5",
        "gr-55": "#33D2FF",
        "gr-80": "#918ebd",
        "gr-100": "#DD5789",
      },
    },
  },
  plugins: [],
}