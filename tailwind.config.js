/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        "gr-55": "#33D2FF",
        "gr-100": "#DD5789",
      },
    },
  },
  plugins: [],
}