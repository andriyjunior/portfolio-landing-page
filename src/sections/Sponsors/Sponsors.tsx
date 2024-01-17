import { FC } from "react";
import { StyledImage, StyledSection, StyledSlider } from "./StyledSponsors";

import sponsor1 from "assets/images/sponsors/Logo.png";
import sponsor2 from "assets/images/sponsors/Logo-1.png";
import sponsor3 from "assets/images/sponsors/Logo-2.png";
import sponsor4 from "assets/images/sponsors/Logo-3.png";
import sponsor5 from "assets/images/sponsors/Logo-4.png";
import sponsor6 from "assets/images/sponsors/Logo-5.png";
import sponsor7 from "assets/images/sponsors/Logo-6.png";
import { SwiperSlide, Swiper } from "swiper/react";
import { Typography } from "components";
import { useTheme } from "styled-components";
import { Autoplay } from "swiper/modules";

// interface ISponsorsProps {}

const images = [
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  sponsor7,
  sponsor2,
];

export const Sponsors: FC = () => {
  const theme = useTheme();
  return (
    <StyledSection>
      <Typography typography="h2" textAlign="center">
        Our Clients
      </Typography>
      <Typography
        typography="body2"
        color={theme.colors.neutral.grey}
        textAlign="center"
        paddingTop="8px"
      >
        We have been working with some Fortune 500+ clients
      </Typography>
      <StyledSlider>
        <Swiper
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          noSwiping
          preventInteractionOnTransition
          loop
          slidesPerView={7}
          speed={5000}
          modules={[Autoplay]}
        >
          {images.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <StyledImage src={img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSlider>
    </StyledSection>
  );
};
