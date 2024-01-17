import styled from "styled-components";

export const StyledSection = styled.section``;

export const StyledAboutProduct = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 144px;
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledAboutProductText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledHelpingSection = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.silver};
`;

export const StyledHelping = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.silver};
  justify-content: space-between;
  padding: 64px 144px;
  gap: 204px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 32px 16px;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
`;

export const StyledHelpingText = styled.div`
  flex-shrink: 0;
`;

export const StyledStats = styled.div`
  max-width: 500px;
  display: flex;
  row-gap: 40px;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 1;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledStatCard = styled.div`
  display: flex;
  gap: 16px;
  flex: 1 1 0px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const StyledStatCardText = styled.div``;

export const StyledImageIllustration = styled.img`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 400px;
  }
`;
export const StyledIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const StyledFeedbackSection = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.silver};
`;

export const StyledFeedback = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 144px;
  display: flex;
  justify-content: space-between;
  gap: 78px;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 16px;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const StyledFeedbackRight = styled.div``;
export const StyledFeedbackRightSponsors = styled.div`
  padding-top: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFeedbackImage = styled.img`
  width: 326px;
  height: 326px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100px;
    height: 100px;
  }
`;
