// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "computer": "url('./src/assets/Computer.jpg')"
      },
      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
      },
    },
  },
  plugins: [],
});

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         computer: "url('./src/assets/Computer.jpg')",
//       },
//       fontFamily: {
//         fjalla: ["Fjalla One", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// });
