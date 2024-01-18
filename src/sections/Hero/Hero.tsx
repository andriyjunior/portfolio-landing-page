import { useTheme } from "styled-components";
import heroIllustration from "assets/images/illustrations/hero.svg";
import { Button, Typography } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  StyledSection,
  StyledBody,
  StyledSlide,
  StyledLeft,
  StyledIllustration,
} from "./StyledHero";

import sliderStyles from "./slider.module.scss";

export const Hero = () => {
  const theme = useTheme();
  return (
    <StyledSection>
      <StyledBody>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className={sliderStyles.sliderWrapper}
        >
          <SwiperSlide>
            <StyledSlide>
              <StyledLeft>
                <Typography typography="h1">
                  Lessons and insights
                  <Typography typography="h1" color={theme.colors.primary}>
                    from 8 years
                  </Typography>
                </Typography>
                <Typography typography="body2">
                  Where to grow your business as a photographer: site or social
                  media?
                </Typography>
                <Button>Register</Button>
              </StyledLeft>
              <StyledIllustration alt="illustration" src={heroIllustration} />
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              <StyledLeft>
                <Typography typography="h1">
                  Lessons and insights
                  <Typography typography="h1" color={theme.colors.primary}>
                    from 8 years
                  </Typography>
                </Typography>
                <Typography typography="body2">
                  Where to grow your business as a photographer: site or social
                  media?
                </Typography>
                <Button>Register</Button>
              </StyledLeft>
              <StyledIllustration alt="illustration" src={heroIllustration} />
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              <StyledLeft>
                <Typography typography="h1">
                  Lessons and insights
                  <Typography typography="h1" color={theme.colors.primary}>
                    from 8 years
                  </Typography>
                </Typography>
                <Typography typography="body2">
                  Where to grow your business as a photographer: site or social
                  media?
                </Typography>
                <Button>Register</Button>
              </StyledLeft>
              <StyledIllustration alt="illustration" src={heroIllustration} />
            </StyledSlide>
          </SwiperSlide>
        </Swiper>
      </StyledBody>
    </StyledSection>
  );
};
