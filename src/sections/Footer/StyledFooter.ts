import styled from "styled-components";

export const StyledGetDemo = styled.div`
  padding: 32px 144px;
  background-color: ${({ theme }) => theme.colors.neutral.silver};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
export const StyledGetDemoTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFooter = styled.footer`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    gap: 32px;
  }
`;

export const StyledFooterSection = styled.footer`
  padding: 86px 144px;
  background-color: ${({ theme }) => theme.colors.neutral.black};
`;

export const StyledLogo = styled.div`
  display: flex;
  gap: 8px;
`;
export const StyledImage = styled.img``;

export const StyledCopyright = styled.div``;

export const StyledSocials = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledSocialIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const StyledFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledFooterRight = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 32px;
  }
`;
export const StyledFooterRightGroup = styled.div`
  min-width: 160px;
`;
export const StyledFooterRightGroupLinks = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
