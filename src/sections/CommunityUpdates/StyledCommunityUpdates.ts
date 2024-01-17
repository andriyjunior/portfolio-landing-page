import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 144px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 16px;
  }
`;

export const StyledTextTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCards = styled.div`
  padding-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const StyledCard = styled.div`
  position: relative;
  flex: 1 1 0px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
  aspect-ratio: 16/12;
`;
export const StyledInnerCard = styled.div`
  position: relative;
  width: 80%;
  min-height: 120px;
  margin: 0 auto;
  bottom: 60px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutral.silver};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 8px;
`;
