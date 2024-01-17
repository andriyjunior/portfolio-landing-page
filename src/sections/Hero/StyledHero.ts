import styled from "styled-components";

export const StyledSection = styled.section`
  height: 640px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.silver};
`;

export const StyledBody = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
`;

export const StyledIllustration = styled.img`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 200px;
  }
`;

export const StyledSlide = styled.div`
  height: 100%;
  padding: 0 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 104px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 32px;
    flex-direction: column-reverse;
  }
`;

export const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
