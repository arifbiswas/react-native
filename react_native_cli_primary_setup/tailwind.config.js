const { Platform } = require("react-native");
module.exports = {
  theme: {
    screens: {
      sm: "300px",
      md: "400px",
      lg: "700px",
      tablet: "700px",
      ios: Platform.OS === "ios",
      android: Platform.OS === "android",
      // Add more screen sizes here
    },
    extend: {
      fontFamily: {
        // poppins fonts
        PoppinsBlack: "PoppinsBlack",
        PoppinsBlackItalic: "PoppinsBlackItalic",
        PoppinsBold: "PoppinsBold",
        PoppinsBoldItalic: "PoppinsBoldItalic",
        PoppinsExtraBold: "PoppinsExtraBold",
        PoppinsExtraBoldItalic: "PoppinsExtraBoldItalic",
        PoppinsExtraLight: "PoppinsExtraLight",
        PoppinsExtraLightItalic: "PoppinsExtraLightItalic",
        PoppinsItalic: "PoppinsItalic",
        PoppinsLight: "PoppinsLight",
        PoppinsLightItalic: "PoppinsLightItalic",
        PoppinsMedium: "PoppinsMedium",
        PoppinsMediumItalic: "PoppinsMediumItalic",
        PoppinsRegular: "PoppinsRegular",
        PoppinsSemiBold: "PoppinsSemiBold",
        PoppinsSemiBoldItalic: "PoppinsSemiBoldItalic",
        PoppinsThin: "PoppinsThin",
        PoppinsThinItalic: "PoppinsThinItalic",
        // You can replace 'YourCustomFont' with your desired font
      },

      colors: {
        primary40: "rgba(153, 204, 223, 0.3)",
        primary50: "rgba(85, 170, 202, 0.2)",
        primary800: "rgba(9, 94, 126, 1)",
        primary900: "rgba(0, 43, 75, 0.3)",
        primary100: "#99CCDF",
        primary500: "#55AACA",
        primary600: "rgba(69, 69, 69, 0.3)",
        primary: "#334775",
        primary900: "#323D76",
        secondary: "rgba(136, 136, 136, 0.3)",
        secondary50: "rgba(69, 69, 69, 0.3)",
        secondary60: "rgba(69, 69, 69, 0.7)",
        secondary800: "rgba(69, 69, 69, 1)",
        success600: "#5BB659",

        Warning500: "#EAD852",
        base: "#F0F5FF",
        baseCircle: "rgba(174, 234, 0, 0.2)",
        baseCircleTwo: "rgba(85, 170, 202, 0.2)",
        danger600: "#DC3545",
        danger50: "#FEF2F2",

        black50: "#F6F6F6",
        black60: "#FFFFFF99",
        black100: "#E7E7E7",
        black200: "#D1D1D1",
        black400: "#888888",
        black500: "#5D5D5D",
        black600: "#5D5D5D",
        black800: "#454545",
        black900: "#333333",
        black950: "#262626",
        black1000: "#1D1929",

        white50: "#F6F6F6",
        white60: "rgba(255, 255, 255, 0.6)",
        white100: "rgba(217, 217, 217, 1)",
        white200: "#D1D1D1",
        white400: "#888888",
        white500: "#5D5D5D",
        white600: "#5D5D5D",
        white800: "#454545",
        white900: "#333333",
        white1000: "#1D1929",
      },
    },
  },
};
