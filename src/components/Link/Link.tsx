import React, { FC, ReactNode } from "react";
import { StyledLink } from "./StyledLink";

interface ILinkProps extends Partial<CSSStyleDeclaration> {
  children: ReactNode;
  to: string;
}

export const Link: FC<ILinkProps> = ({ children, to, ...rest }) => {
  return (
    <StyledLink href={to} {...rest}>
      {children}
    </StyledLink>
  );
};
