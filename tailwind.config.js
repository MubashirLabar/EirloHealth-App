const colors = require("./src/style/colors");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        Light: ["PoppinsLight"],
        Regular: ["PoppinsRegular"],
        Medium: ["PoppinsMedium"],
        SemiBold: ["PoppinsSemiBold"],
        Bold: ["PoppinsBold"],
      },
      borderRadius: {
        "4xl": "40px",
        "5xl": "48px",
        "10xl": "88px",
      },
    },
  },
  plugins: [],
};
