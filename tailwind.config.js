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
    colors: {
      dark: "#050F2B",
      "blue-dark": "#153477",
      blue: "#00529C",
      "pastel-blue": "#516EBC",
      "pastel-blue-light": "#9BAEE1",
      white: "#C1CDDC",
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },

        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "translateY(-100vh)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        "lateral-fade-in": {
          "0%": {
            opacity: 0,
            transform: "translateX(-100vw)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },

        "show-off-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },

        "show-off-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-100vh)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down .8s infinite",
        "fade-in": "fade-in .8s",
        "lateral-fade-in": "lateral-fade-in .8s",
        "show-off-up": "show-off-up .8s",
        "show-off-down": "show-off-down .8s backwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
