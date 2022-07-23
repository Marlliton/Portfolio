/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /from-(violet|blue)-(700|800|900)/,
    },
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            color: "rgb(124 58 237)",
          },
          "100%": {
            color: "rgba(0,0,0,0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down .8s infinite",
      },
    },
  },
  plugins: [],
};
