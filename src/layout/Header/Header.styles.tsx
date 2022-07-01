import styled from 'styled-components';

type DataProps = {
  isScrolled?: boolean
  isHomePage?: boolean
};

export const HeaderWrapper = styled.header<DataProps>`
  width: 100%;
  z-index: 99;
  grid-area: header;
  transition: all 0.4s ease-in;
  position: ${({ isHomePage, isScrolled }) => isHomePage && isScrolled && 'fixed'};
  box-shadow: ${({ isScrolled }) => isScrolled && '0 0 40px 0 rgb(0 0 0 / 5%)'};
  background-color:  ${({ theme, isScrolled }) => isScrolled ? theme.colors.glass : theme.colors.white};
  border-bottom:  ${({ theme, isScrolled }) => isScrolled ? `1px solid ${theme.colors.lightGray}` : '1px solid transparent'};
  backdrop-filter: saturate(180%) blur(10px);
`;

export const HeaderContent = styled.div<DataProps>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`