/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
      },
      colors: {
        blue: {
          primary: "#246AA3",
        },
        dark: {
          100: "#4B465C",
          200: "#F8F7FA",
        },
      },
    },
  },
  plugins: [],
};
