import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 40px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const StyledImage = styled.img`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 32px;
  }
`;

export const StyledSlider = styled.div`
  padding-top: 24px;
`;
