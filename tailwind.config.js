/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
<<<<<<< HEAD
        md: { max: "834px" },
        sm: { max: "400px" },
=======
        sm: "640px",
        md: "768px",
        lg: "1024px",
>>>>>>> 9d708ffa548061b32f6561f7d84636262d46ad0d
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}
