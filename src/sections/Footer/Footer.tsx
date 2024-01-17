import {
  StyledCopyright,
  StyledFooter,
  StyledFooterLeft,
  StyledFooterRight,
  StyledFooterRightGroup,
  StyledFooterRightGroupLinks,
  StyledFooterSection,
  StyledGetDemo,
  StyledGetDemoTitle,
  StyledImage,
  StyledLogo,
  StyledSocialIcon,
  StyledSocials,
} from "./StyledFooter";
import { Button, Link, Typography } from "components";
import { useTheme } from "styled-components";
import logo from "assets/Icon.png";
import social1 from "assets/images/socials/insta.png";
import social2 from "assets/images/socials/web.png";
import social3 from "assets/images/socials/twitter.png";
import social4 from "assets/images/socials/youtube.png";

const company = {
  title: "Company",
  options: [
    { title: "About us", link: "#" },
    { title: "Blog", link: "#" },
    { title: "Contact us", link: "#" },
    { title: "Pricing", link: "#" },
    { title: "Testimonials", link: "#" },
  ],
};

const support = {
  title: "Support",
  options: [
    { title: "Help center", link: "#" },
    { title: "Terms of service", link: "#" },
    { title: "Legal", link: "#" },
    { title: "Privacy policy", link: "#" },
    { title: "Status", link: "#" },
  ],
};

export const Footer = () => {
  const theme = useTheme();
  return (
    <div>
      <StyledGetDemo>
        <StyledGetDemoTitle>
          <Typography typography="h1" textAlign="center" maxWidth="700px">
            Pellentesque suscipit fringilla libero eu.
          </Typography>
        </StyledGetDemoTitle>
        <Button>Get a Demo</Button>
      </StyledGetDemo>
      <StyledFooterSection>
        <StyledFooter>
          <StyledFooterLeft>
            <StyledLogo>
              <StyledImage src={logo} />
              <Typography
                typography="h3"
                fontWeight="600"
                color={theme.colors.neutral.white}
              >
                Nexcent
              </Typography>
            </StyledLogo>
            <StyledCopyright>
              <Typography
                typography="body3"
                color={theme.colors.neutral.silver}
              >
                Copyright © 2020 Nexcent ltd.
              </Typography>
              <Typography
                typography="body3"
                color={theme.colors.neutral.silver}
                paddingTop="16px"
              >
                All rights reserved
              </Typography>
            </StyledCopyright>
            <StyledSocials>
              <Link to="#">
                <StyledSocialIcon src={social1} />
              </Link>
              <Link to="#">
                <StyledSocialIcon src={social2} />
              </Link>
              <Link to="#">
                <StyledSocialIcon src={social3} />
              </Link>
              <Link to="#">
                <StyledSocialIcon src={social4} />
              </Link>
            </StyledSocials>
          </StyledFooterLeft>
          <StyledFooterRight>
            <StyledFooterRightGroup>
              <Typography typography="h4" color={theme.colors.neutral.white}>
                {company.title}
              </Typography>
              <StyledFooterRightGroupLinks>
                {company.options.map((o) => (
                  <Link
                    key={o.title}
                    to={o.link}
                    color={theme.colors.neutral.white}
                  >
                    {o.title}
                  </Link>
                ))}
              </StyledFooterRightGroupLinks>
            </StyledFooterRightGroup>
            <StyledFooterRightGroup>
              <Typography typography="h4" color={theme.colors.neutral.white}>
                {support.title}
              </Typography>
              <StyledFooterRightGroupLinks>
                {support.options.map((o) => (
                  <Link
                    key={o.title}
                    to={o.link}
                    color={theme.colors.neutral.white}
                  >
                    {o.title}
                  </Link>
                ))}
              </StyledFooterRightGroupLinks>
            </StyledFooterRightGroup>
          </StyledFooterRight>
        </StyledFooter>
      </StyledFooterSection>
    </div>
  );
};
