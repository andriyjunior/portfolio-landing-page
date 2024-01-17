import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 144px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 16px;
  }
`;

export const StyledCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 16px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledCard = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  max-width: 240px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;
export const StyledImage = styled.img``;
