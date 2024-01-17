import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 0 104px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutral.silver};
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.greyBlue};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0 8px;
  }
`;

export const StyledLogoWraper = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`;

export const StyledLink = styled.a<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral.black : theme.colors.neutral.grey};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primaryShade[2]};
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
