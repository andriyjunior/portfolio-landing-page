import logo from "assets/Icon.png";
import { Typography, Link, Button } from "components";
import {
  StyledHeader,
  StyledLogoWraper,
  StyledLinks,
  StyledLink,
  StyledButtons,
} from "./StyledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoWraper href="#">
        <img alt="icon" src={logo} />
        <Typography fontWeight="600">Nexcent</Typography>
      </StyledLogoWraper>
      <StyledLinks>
        <StyledLink href="#" isActive>
          Home
        </StyledLink>
        <StyledLink href="#">Service</StyledLink>
        <StyledLink href="#">Feature</StyledLink>
        <StyledLink href="#">Product</StyledLink>
        <StyledLink href="#">Testimonial</StyledLink>
        <StyledLink href="#">FAQ</StyledLink>
      </StyledLinks>
      <StyledButtons>
        <Link to="#">Login</Link>
        <Button>Sign Up</Button>
      </StyledButtons>
    </StyledHeader>
  );
};
