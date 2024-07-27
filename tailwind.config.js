/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "10px 20px 8px 0px rgba(59,59,59,0.8)",
      },
      transformOrigin: {
        "center-right": "center right",
      },
      clipPath: {
        "right-half": "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(115deg, rgba(24, 22, 29, 0.8) 10%, rgba(45, 46, 54, 0.1) 70%)",

        "card-gradient":
          "linear-gradient(125deg, rgba(24, 22, 29, 0.8) 1%, rgba(45, 46, 54, 0.1) 40%)",

        "gauge-gradient":
          "linear-gradient(200deg, rgba(0, 0, 0, 0.7) 2%, rgba(45, 46, 54, 0.1) 75%)",

        "glass-gradient": "linear-gradient(rgba(54,61,66,0.8) , rgba(0, 0, 0, 0) )",
      },
      backgroundColor: {
        "gray-bg": "rgb(24, 22, 29)",
      },
      boxShadow: {
        right:
          " 10px 10px 20px rgb(24, 22, 29), 10px 30px 30px 0 rgb(45, 46, 54)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path-right-half": {
          clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
