import styled from 'styled-components';

type NavItemProps = {
  isHorizontal: boolean
};

export const NavItemWrapper = styled.li<NavItemProps>`
  margin-bottom: ${({ theme, isHorizontal }) => !isHorizontal && theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
