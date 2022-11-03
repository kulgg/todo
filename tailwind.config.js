/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        97: "0.97",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "800px",
          xl: "800px",
        },
      },
    },
  },
  plugins: [],
};
