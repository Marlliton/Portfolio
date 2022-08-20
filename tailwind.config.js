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
        "cursor-effect": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },

        "fade-in-y": {
          "0%": {
            opacity: 0,
            transform: "translateY(-100vh)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        "fade-in-l-x": {
          "0%": {
            opacity: 0,
            transform: "translateX(-100vw)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },

        "fade-in-r-x": {
          "0%": {
            opacity: 0,
            transform: "translateX(100vw)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },

        "fade-in-r-x-reverse": {
          "0%": {
            opacity: 1,
            transform: "translateX(0px)",
            display: "block",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(100vw)",
            display: "none",
          },
        },

        "fade-in-l-x-reverse": {
          "0%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(-100vw)",
          },
        },

        "show-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(100vh)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        "show-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-100vh)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "cursor-effect": "cursor-effect .8s infinite",
        "fade-in-y": "fade-in-y .8s",
        "fade-in-l-x": "fade-in-l-x .8s forwards",
        "fade-in-r-x": "fade-in-r-x .8s forwards",
        "fade-in-l-x-reverse": "fade-in-l-x-reverse .8s backwards",
        "fade-in-r-x-reverse": "fade-in-r-x-reverse .8s forwards",
        "show-up": "show-up .8s backwards",
        "show-down": "show-down .8s backwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
