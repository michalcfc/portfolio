import styled from 'styled-components';

type DataProps = {
  isFixed?: boolean
};

export const AsideWrapper = styled.aside<DataProps>`
  right: 0;
  grid-area: asideRight;
  background: rgb(250, 250, 252);
  z-index: ${({ isFixed }) => isFixed && 999};
  position: ${({ isFixed }) => isFixed && 'fixed'};
`;

export const AsideExit = styled.div<DataProps>`
  cursor: pointer;
`;

export const AsideContent = styled.div<DataProps>`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const AsideItems = styled.div<DataProps>`
  flex-grow: 1;
`;

export const AsideItem = styled.div<DataProps>`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  justify-content: space-between;
`;
