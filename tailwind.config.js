/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "690px",
      md: "768px",
      lg: "1024px",
      desktop: "1280px",
      mobile: "300px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navBarBg: "var(--navBarBg)",
        matteBlack: "var(--matteBlack)",
        footerBg: "var(--footerBg)",
        ContactBg: "var(--ContactBg)",
      },
    },
  },
  plugins: [daisyui],
};
