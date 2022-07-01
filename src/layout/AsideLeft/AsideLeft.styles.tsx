import styled from 'styled-components';

type DataProps = {
  isFixed?: boolean
  isMobile?: boolean
  isVisible?: boolean
};

export const AsideWrapper = styled.aside<DataProps>`
  z-index: 1030;
  width: 15rem;
  grid-area: asideLeft; 
  transition: transform .3s;
  position: ${({ isFixed }) => isFixed && 'fixed'};
  transform: ${({ isVisible, isMobile }) => ((isVisible || !isMobile)
    ? 'translateX(0rem)'
    : 'translateX(-16rem)')
  };
`;