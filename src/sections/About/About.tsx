import iconFinger from "assets/images/icons/finger.png";
import iconHands from "assets/images/icons/hands.png";
import iconMembers from "assets/images/icons/members.png";
import iconPayment from "assets/images/icons/payment.png";
import about1 from "assets/images/illustrations/about1.svg";
import about2 from "assets/images/illustrations/about2.svg";
import feedbackImage from "assets/images/tesla.png";
import sponsor1 from "assets/images/sponsors/Logo.png";
import sponsor2 from "assets/images/sponsors/Logo-1.png";
import sponsor3 from "assets/images/sponsors/Logo-2.png";
import sponsor4 from "assets/images/sponsors/Logo-3.png";
import sponsor5 from "assets/images/sponsors/Logo-4.png";
import sponsor6 from "assets/images/sponsors/Logo-5.png";
import { Button, Link, Typography } from "components";
import { FC } from "react";
import { useTheme } from "styled-components";
import {
  StyledAboutProduct,
  StyledAboutProductText,
  StyledFeedback,
  StyledFeedbackImage,
  StyledFeedbackRight,
  StyledFeedbackRightSponsors,
  StyledFeedbackSection,
  StyledHelping,
  StyledHelpingSection,
  StyledHelpingText,
  StyledIcon,
  StyledImageIllustration,
  StyledSection,
  StyledStatCard,
  StyledStatCardText,
  StyledStats,
} from "./StyledAbout";

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6];

export const About: FC = () => {
  const theme = useTheme();
  return (
    <StyledSection>
      <StyledAboutProduct>
        <StyledImageIllustration src={about1} />
        <StyledAboutProductText>
          <Typography typography="h2">
            The unseen of spending three years at Pixelgrade
          </Typography>
          <Typography typography="body3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </Typography>
          <Button marginTop={"24px"}>Learn More</Button>
        </StyledAboutProductText>
      </StyledAboutProduct>
      <StyledHelpingSection>
        <StyledHelping>
          <StyledHelpingText>
            <Typography typography="h2">
              Helping a local
              <Typography typography="h2" color={theme.colors.primary}>
                business reinvent itself
              </Typography>
            </Typography>
            <Typography typography="body2">
              We reached here with our hard work and dedication
            </Typography>
          </StyledHelpingText>
          <StyledStats>
            <StyledStatCard>
              <StyledIcon src={iconMembers} />
              <StyledStatCardText>
                <Typography typography="h3">2,245,341</Typography>
                <Typography typography="body2">Members</Typography>
              </StyledStatCardText>
            </StyledStatCard>
            <StyledStatCard>
              <StyledIcon src={iconHands} />
              <StyledStatCardText>
                <Typography typography="h3">46,328</Typography>
                <Typography typography="body2">Clubs</Typography>
              </StyledStatCardText>
            </StyledStatCard>
            <StyledStatCard>
              <StyledIcon src={iconFinger} />
              <StyledStatCardText>
                <Typography typography="h3">828,867</Typography>
                <Typography typography="body2">Event Bookings</Typography>
              </StyledStatCardText>
            </StyledStatCard>
            <StyledStatCard>
              <StyledIcon src={iconPayment} />
              <StyledStatCardText>
                <Typography typography="h3">1,926,436</Typography>
                <Typography typography="body2">Payments</Typography>
              </StyledStatCardText>
            </StyledStatCard>
          </StyledStats>
        </StyledHelping>
      </StyledHelpingSection>
      <StyledAboutProduct>
        <StyledImageIllustration src={about2} />
        <StyledAboutProductText>
          <Typography typography="h2">
            How to design your site footer like we did
          </Typography>
          <Typography typography="body3">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </Typography>
          <Button marginTop={"24px"}>Learn More</Button>
        </StyledAboutProductText>
      </StyledAboutProduct>
      <StyledFeedbackSection>
        <StyledFeedback>
          <StyledFeedbackImage src={feedbackImage} />
          <StyledFeedbackRight>
            <Typography typography="body2" color={theme.colors.neutral.grey}>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </Typography>
            <Link to="#" display="block" padding="16px 0">
              Tim Smith
            </Link>
            <Typography
              typography="body2"
              color={theme.colors.neutral.lightGrey}
            >
              British Dragon Boat Racing Association
            </Typography>
            <StyledFeedbackRightSponsors>
              {sponsors.map((img, idx) => (
                <img key={idx} src={img} alt="sponsor" />
              ))}
              <Link to="#">Meet all customers</Link>
            </StyledFeedbackRightSponsors>
          </StyledFeedbackRight>
        </StyledFeedback>
      </StyledFeedbackSection>
    </StyledSection>
  );
};
