import styled, { css } from "styled-components";

interface ITypography extends Partial<CSSStyleDeclaration> {
  typography: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3" | "body4";
}

const fontSizeMapping = {
  h1: "64px",
  h2: "36px",
  h3: "28px",
  h4: "20px",
  body1: "18px",
  body2: "16px",
  body3: "14px",
  body4: "12px",
};

const fontSizeMobileMapping = {
  h1: "48px",
  h2: "28px",
  h3: "24px",
  h4: "20px",
  body1: "18px",
  body2: "16px",
  body3: "14px",
  body4: "12px",
};

const defaultStyles = css`
  color: ${({ theme }) => theme.colors.neutral.darkGrey};
`;

const defaultHeadingStyles = css<ITypography>`
  font-weight: ${({ fontWeight }) => fontWeight ?? 600};
  font-size: ${({ typography }) => fontSizeMapping[typography]};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  max-width: ${({ maxWidth }) => maxWidth};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ typography }) => fontSizeMobileMapping[typography]};
  }
`;

const StyledH1 = styled.h1<ITypography>`
  ${defaultStyles}
  ${defaultHeadingStyles}
`;

const StyledH2 = styled.h2<ITypography>`
  ${defaultStyles}
  ${defaultHeadingStyles}
`;

const StyledH3 = styled.h3<ITypography>`
  ${defaultStyles}
  ${defaultHeadingStyles}
  font-weight: ${({ fontWeight }) => fontWeight ?? 700};
`;

const StyledH4 = styled.h4<ITypography>`
  ${defaultStyles}
  ${defaultStyles}
  ${defaultHeadingStyles}
`;

const StyledBody = styled.p<ITypography>`
  ${defaultStyles}
  ${defaultHeadingStyles}
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
`;

export const StyledTypography = {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledBody,
};
