import { ICustomTheme } from "interfaces/styled";

export const theme: ICustomTheme = {
  colors: {
    neutral: {
      black: "#263238",
      darkGrey: "#4D4D4D",
      grey: "#717171",
      lightGrey: "#89939E",
      greyBlue: "#ABBED1",
      silver: "#F5F7FA",
      white: "#FFFFFF",
    },
    primary: "#4CAF4F",
    primaryShade: {
      1: "#43A046",
      2: "#388E3B",
      3: "#237D31",
      4: "#1B5E1F",
      5: "#103E13",
    },
    primaryTint: {
      1: "#66BB69",
      2: "#81C784",
      3: "#A5D6A7",
      4: "#C8E6C9",
      5: "#E8F5E9",
    },
    secondary: "#263238",
    info: "#2194f3",
    warning: "#FBC02D",
    error: "#E53835",
    success: "#2E7D31",
  },
  shadows: {
    1: "0px 2px 4px 0px rgba(171, 190, 209, 0.3)",
    2: "0px 2px 8px 0px rgba(171, 190, 209, 0.3)",
    3: "0px 4px 10px 0px rgba(171, 190, 209, 0.3)",
  },
  breakpoints: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};
