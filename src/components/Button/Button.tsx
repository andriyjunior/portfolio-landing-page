import { FC, ReactNode } from "react";
import { StyledButtonPrimary, StyledButtonSecondary } from "./StyledButton";

interface IButtonProps extends Partial<CSSStyleDeclaration> {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

const components = {
  primary: StyledButtonPrimary,
  secondary: StyledButtonSecondary,
};

export const Button: FC<IButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  ...rest
}) => {
  const SelectedComponent = components[variant];

  return (
    <SelectedComponent size={size} {...rest}>
      {children}
    </SelectedComponent>
  );
};
