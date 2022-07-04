import styled from 'styled-components';

type DataProps = {
};

export const NavbarWrapper = styled.nav<DataProps>`
  list-style: none;
  position: relative;
  margin-right: ${({ theme }) => theme.spacing.md};
`;
