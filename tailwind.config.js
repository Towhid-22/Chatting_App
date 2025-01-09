const withMT = require("@material-tailwind/react/utils/withMT");
const { Container } = require("postcss");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        computer: "url('./src/assets/Computer.jpg')",
      },
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
      },
      container: {
        screens: {
          xxs: "475px",
          sm: "600px",
          md: "728px",
          lg: "1024px",
          xl: "1320px",
          "2xl": "1536px",
        },
        center: true,
      },
    },
  },
  plugins: [],
});

