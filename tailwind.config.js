/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "split-image-background-a":
          "linear-gradient(to bottom, white 50%, #6366f1 50%)",
        "split-image-background-b":
          "linear-gradient(to bottom, white 50%, black 50%)",
      },

      colors: {
        "main-purple": "#6366f1",
      },

      fontFamily: {
        titleBold: "DM Sans, sans-serif",
        titleNorm: "Open Sans, sans-serif",
        casual: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
