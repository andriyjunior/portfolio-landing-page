import { Typography } from "components";
import {
  StyledCard,
  StyledCards,
  StyledImage,
  StyledSection,
} from "./StyledCommunity";
import icon1 from "assets/images/community/icon-1.svg";
import icon2 from "assets/images/community/icon-2.svg";
import icon3 from "assets/images/community/icon-3.svg";
import { useTheme } from "styled-components";

export const Community = () => {
  const theme = useTheme();
  return (
    <StyledSection>
      <Typography typography="h2" maxWidth="542px" textAlign="center">
        Manage your entire community in a single system
      </Typography>
      <Typography
        typography="body2"
        textAlign="center"
        color={theme.colors.neutral.grey}
      >
        Who is Nextcent suitable for?
      </Typography>

      <StyledCards>
        <StyledCard>
          <StyledImage src={icon1} />
          <Typography typography="h3" textAlign="center">
            Membership Organisations
          </Typography>
          <Typography
            typography="body3"
            textAlign="center"
            color={theme.colors.neutral.grey}
          >
            Our membership management software provides full automation of
            membership renewals and payments
          </Typography>
        </StyledCard>
        <StyledCard>
          <StyledImage src={icon2} />
          <Typography typography="h3" textAlign="center">
            National Associations
          </Typography>
          <Typography
            typography="body3"
            textAlign="center"
            color={theme.colors.neutral.grey}
          >
            Our membership management software provides full automation of
            membership renewals and payments
          </Typography>
        </StyledCard>
        <StyledCard>
          <StyledImage src={icon3} />
          <Typography typography="h3" textAlign="center">
            Clubs And Groups
          </Typography>
          <Typography
            typography="body3"
            textAlign="center"
            color={theme.colors.neutral.grey}
          >
            Our membership management software provides full automation of
            membership renewals and payments
          </Typography>
        </StyledCard>
      </StyledCards>
    </StyledSection>
  );
};
