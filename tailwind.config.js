/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        "bounce_v2": "bounce_v2 1s infinite",
      },
      keyframes: {
        bounce_v2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        Inter: ["Inter"],
        GTWalsheim: ["GT Walsheim Pro"],
      },
      colors: {
        "primary-black": "#111111",
        "secondary-darkgray": "#1A1A1A",
        "primary-white": "#FBFBFB",
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