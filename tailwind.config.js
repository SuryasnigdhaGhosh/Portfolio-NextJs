/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#1fdf64",
        Black: "#000",
        DeepNightBlack: "rgba(0,0,0,0.5)",
        MidNightBlack: "rgba(29, 4, 37,0.8) ",
        tealScreen: "#1F6E8C",
        EveningBlack: "rgba(173, 73, 225,0.1)",
        DarkGray: "#282828",
        SlateGray: "#404040",
        LightGray: "#959595",
        SilverGray: "#B3B3B3",
        Snow: "#ffffff",
        LightViolet:"#AD49E1",
        LightViolet2:"rgba(45, 3, 59,0.1)",
        bg1:"rgb(155, 126, 189)"
      },
      fontFamily: {
        'cascadia-normal': ['cascadia-normal'],
        'circular': ['circular-normal', 'sans-serif'],
        'circular-light': ['circular-light', 'sans-serif'],
        'circular-normal': ['circular-normal', 'sans-serif'],
        'circular-medium': ['circular-medium', 'sans-serif'],
        'circular-bold': ['circular-bold', 'sans-serif'],

      }
    },
  },
}