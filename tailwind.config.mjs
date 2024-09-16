/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // Definer primær skrifttype
      },
      fontWeight: {
        bold: "700", // Definer bold vægt
        "semi-bold": "600", // Definer semi-bold vægt
        light: "300", // Definer light vægt
      },
      fontSize: {
        // Mobil størrelser
        "h1-m": "28px",
        "h2-m": "22px",
        "h3-m": "16px",
        "body-m": "14px",
        // Desktop størrelser
        "h1-d": "156px",
        "h2-d": "44px",
        "h3-d": "34px",
        "h4-d": "28px",
        "body-bold-d": "20px",
        "body-light-d": "20px",
        "body-mini-d": "12px",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        "black-o38": "#00000061",
        "sand-100": "#c9a788",
        "sand-o58": "#c9a78894",
        "sand-lys": "#d9b594",
        "gron-100": "#5E8B4B",
        "gron-100-o58": "#5e8b4b94",
        "gron-100-o33": "#5e8b4b54",
        "gron-lys": "#7ab861",
        "gron-200": "#65a04c",
        "gron-300": "#739466",
        "gron-350": "#6c925c",
        "gron-500": "#4d6f3d",
        "gron-700": "#445a3a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
