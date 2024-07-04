import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "light-small": "0 2px 20px 0 rgba(178, 178, 178, 0.20)",
        "light-medium": "0 2px 20px 0 rgba(204, 204, 204, 0.20)",
        "light-large": "0 2px 20px 0 hsla(229, 229, 229, 0.20)",

        "dark-small": "0 2px 20px 0 rgba(77, 77, 77, 0.20)",
        "dark-medium": "0 2px 20px 0 rgba(64, 64, 64, 0.20)",
        "dark-large": "0 2px 20px 0 rgba(51, 51, 51, 0.20)"
      },

      lineHeight: {
        "display-large": "76.8px",
        "display-medium": "57.6px",
        "display-small": "48px",

        "h1-large": "60.72px",
        "h1-medium": "52.8px",
        "h1-small": "47.52px",

        "h2-large": "47.52px",
        "h2-medium": "42.24px",
        "h2-small": "36.96px",

        "h3-large": "36.96px",
        "h3-medium": "31.68px",
        "h3-small": "29.04px",

        "h4-large": "29.04px",
        "h4-medium": "26.4px",
        "h4-small": "23.76px",

        "body-large": "27px",
        "body-medium": "24px",
        "body-small": "21px"
      }
    },
    colors: {
      neutral: {
        "0": "#FFFFFF",
        "100": "#EBEBEB",
        "200": "#D1D1D1",
        "300": "#C7C7C7",
        "400": "#6B6B6B",
        "500": "#525252",
        "600": "#383838",
        "700": "#1F1F1F"
      },

      fiera: {
        "0": "#E6E3FC",
        "100": "#BCB5F7",
        "200": "#9187F2",
        "300": "#6759ED",
        "400": "#3C2BE8",
        "500": "#2616CA",
        "600": "#1E119C",
        "700": "#150C6E",
        "800": "#0C0740"
      },

      additional: {
        "success": "#82DD55",
        "error": "#E23636",
        "warning": "#EDB95E"
      }
    },
    fontSize: {
      "display-large": "64px",
      "display-medium": "48px",
      "display-small": "40px",

      "h1-large": "46px",
      "h1-medium": "40px",
      "h1-small": "36px",

      "h2-large": "36px",
      "h2-medium": "32px",
      "h2-small": "28px",

      "h3-large": "28px",
      "h3-medium": "24px",
      "h3-small": "22px",

      "h4-large": "22px",
      "h4-medium": "20px",
      "h4-small": "18px",

      "body-large": "18px",
      "body-medium": "16px",
      "body-small": "14px",
    },
    letterSpacing: {
      display: "-0.01rem",
      heading: "-0.02rem",
      body: "0.01rem",
    }
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
