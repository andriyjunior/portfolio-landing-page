import styled from "styled-components";

export const StyledLink = styled.a<Partial<CSSStyleDeclaration>>`
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.primaryShade[2]};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.neutral.greyBlue};
  }
  display: ${({ display }) => display};
  max-width: ${({ maxWidth }) => maxWidth};
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
  color: ${({ color }) => color};
`;
