/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bukra)"],
      },
      dropShadow: {
        "xl": [
          "0 20px 13px rgba(255, 0, 0, 0.03)",
          "0 8px 5px rgba(255, 0, 0, 0.08)",
        ],
        "2xl": [
          "0 20px 13px rgba(255, 0, 0, 0.05)",
          "0 8px 5px rgba(255, 0, 0, 0.2)",
        ],
      },
      colors: {
        primary: "#CA1725",
      },
    },
  },
  plugins: [],
};
