import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { space, SpaceProps } from 'styled-system';
import { Link } from '~components/common/Link';
import breakpoint from '~utils/styles/breakpoints';

type NavbarProps = {
  currentPage?: boolean
  isHorizontal?: boolean
};

type Props = SpaceProps & NavbarProps;

export const NavWrapper = styled.div<NavbarProps>`
`;

export const NavItems = styled.ul<NavbarProps>`
  display: ${({ isHorizontal }) => isHorizontal && 'flex'};
  align-items: ${({ isHorizontal }) => isHorizontal && 'center'};
  @media ${breakpoint.device.lg} {
    padding: ${({ theme }) => `0 ${theme.spacing.md}`};
  }
`;

export const NavItem = styled.li<NavbarProps>`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const NavLink = styled(Link)<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-weight: ${({ theme, currentPage }) => currentPage && theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme, currentPage }) => (currentPage ? theme.colors.brandDark : 'inherit')};
  background: ${({ theme, currentPage }) => (currentPage && theme.colors.brandLight)};
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brandDark};
    background: ${({ theme }) => theme.colors.brandLight};
    & svg {
      color: ${({ theme }) => theme.colors.brandDark};
    }
  }
  & svg {
    color: ${({ theme, currentPage }) => currentPage && theme.colors.brandDark};
  }
`;

export const NavItemIcon = styled(FontAwesomeIcon)<Props>`
  ${space};
`;
