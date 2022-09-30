module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6",
        },
        blacks: {
          400: "#090a0b",
        },
        blues: {
          400: "#4d8db3",
        },
        gray: {
          800: '#191B1F'
        }
      },
      borderRadius: {
        md: "4px",
      },
      width: {
        320: "80rem",
      },
      backgroundImage: {
        profile: "url('./src/assets/kauan.jpg')",
        card: "url('./src/assets/card.jpg')",
        REACT: "url('./src/assets/REACT.png')",
        TAILWIND: "url('./src/assets/TAILWIND.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};