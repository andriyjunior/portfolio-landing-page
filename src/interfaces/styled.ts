export interface ICustomTheme {
  colors: {
    neutral: {
      black: string;
      darkGrey: string;
      grey: string;
      lightGrey: string;
      greyBlue: string;
      silver: string;
      white: string;
    };
    primary: string;
    primaryShade: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    primaryTint: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    secondary: string;
    info: string;
    warning: string;
    error: string;
    success: string;
  };
  shadows: {
    1: string;
    2: string;
    3: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}
