import styled from 'styled-components';

type HeroProps = {

};

export const HeroWrapper = styled.div<HeroProps>`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.base};
`;

export const HeroContent = styled.div<HeroProps>`
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  grid-template-columns: repeat(12,minmax(0,1fr));
  padding: ${({ theme }) => '8rem 0'}
`;
