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
      },
      borderRadius: {
        md: "4px",
      },
      width: {
        320: "80rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
