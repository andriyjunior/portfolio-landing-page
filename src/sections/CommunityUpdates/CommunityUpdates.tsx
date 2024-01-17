import { Link, Typography } from "components";
import {
  StyledCard,
  StyledCardImage,
  StyledCards,
  StyledInnerCard,
  StyledSection,
  StyledTextTitles,
} from "./StyledCommunityUpdates";
import { useTheme } from "styled-components";
import image1 from "assets/images/community/image1.png";
import image2 from "assets/images/community/image2.png";
import image3 from "assets/images/community/image3.png";

export const CommunityUpdates = () => {
  const theme = useTheme();
  return (
    <StyledSection>
      <StyledTextTitles>
        <Typography typography="h2" textAlign="center">
          Caring is the new marketing
        </Typography>
        <Typography
          typography="body2"
          color={theme.colors.neutral.grey}
          paddingTop="8px"
          maxWidth="628px"
          textAlign="center"
        >
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </Typography>
      </StyledTextTitles>
      <StyledCards>
        <StyledCard>
          <StyledCardImage src={image1} />
          <StyledInnerCard>
            <Typography typography="h4" textAlign="center">
              Creating Streamlined Safeguarding Processes with OneRen
            </Typography>
            <Link to="#" paddingTop="24px">
              Read more
            </Link>
          </StyledInnerCard>
        </StyledCard>
        <StyledCard>
          <StyledCardImage src={image2} />
          <StyledInnerCard>
            <Typography typography="h4" textAlign="center">
              What are your safeguarding responsibilities and how can you manage
              them?
            </Typography>
            <Link to="#" paddingTop="24px">
              Read more
            </Link>
          </StyledInnerCard>
        </StyledCard>
        <StyledCard>
          <StyledCardImage src={image3} />
          <StyledInnerCard>
            <Typography typography="h4" textAlign="center">
              Revamping the Membership Model with Triathlon Australia
            </Typography>
            <Link to="#">Read more</Link>
          </StyledInnerCard>
        </StyledCard>
      </StyledCards>
    </StyledSection>
  );
};
