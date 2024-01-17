import styled from "styled-components";

interface IButton extends Partial<CSSStyleDeclaration> {
  size: "small" | "medium" | "large";
}

const StyledBasicButton = styled.button<IButton>`
  width: max-content;
  border: none;
  margin: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 4px;
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
`;

const calculatePadding = (size: string) => {
  switch (size) {
    case "small":
      return "8px 24px";
    case "large":
      return "16px 32px";
    case "medium":
    default:
      return "14px 32px";
  }
};

export const StyledButtonPrimary = styled(StyledBasicButton)`
  padding: ${({ size }) => calculatePadding(size)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryTint[1]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryShade[1]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.silver};
    color: ${({ theme }) => theme.colors.neutral.greyBlue};
  }
`;

export const StyledButtonSecondary = styled(StyledBasicButton)`
  padding: ${({ size }) => calculatePadding(size)};
  background-color: ${({ theme }) => theme.colors.neutral.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.silver};
  }

  &:active {
    border-color: transparent;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.silver};
    color: ${({ theme }) => theme.colors.neutral.greyBlue};
  }
`;
