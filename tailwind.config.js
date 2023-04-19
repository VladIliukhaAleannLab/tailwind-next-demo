const responsiveTextPlugin = require("./tailwind/plugins/responsiveTextPlugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        s: "480px",
        m: "960px",
        l: "1560px",
      },
      fontFamily: {
        recoleta: ["Recoleta", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      text: {
        "body-1": {
          DEFAULT: {
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "-0.75px",
          },
          s: { fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.75px" },
        },
      },
    },
  },
  plugins: [
    responsiveTextPlugin({
      extraFonts: [{ name: "inter", multiplicator: 1.08 }],
    }),
  ],
};
