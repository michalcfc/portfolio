import styled, { css } from 'styled-components';

type DataProps = {
    selectedTab: boolean
};

export const TabWrapper = styled.li<DataProps>`
  ${({ selectedTab }) => selectedTab && css`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    border-radius: ${({ theme }) => theme.borderRadius.base};
    background: ${({ theme }) => theme.colors.red}
  `}
`;
