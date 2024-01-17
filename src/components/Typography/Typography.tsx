import { FC, ReactNode } from "react";
import { StyledTypography } from "./StyledTypography";

interface ITypographyProps extends Partial<CSSStyleDeclaration> {
  children: ReactNode;
  typography?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "body1"
    | "body2"
    | "body3"
    | "body4";
}

export const Typography: FC<ITypographyProps> = ({
  children,
  typography = "body1",
  ...rest
}) => {
  const components = {
    h1: StyledTypography.StyledH1,
    h2: StyledTypography.StyledH2,
    h3: StyledTypography.StyledH3,
    h4: StyledTypography.StyledH4,
    body1: StyledTypography.StyledBody,
    body2: StyledTypography.StyledBody,
    body3: StyledTypography.StyledBody,
    body4: StyledTypography.StyledBody,
  };

  const SelectedComponent = components[typography];

  return (
    <SelectedComponent typography={typography} {...rest}>
      {children}
    </SelectedComponent>
  );
};
