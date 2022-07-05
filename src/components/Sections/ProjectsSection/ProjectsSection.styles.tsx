import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';

type DataProps = {

};

export const FeatureWrapper = styled.div<DataProps>`
  padding: 6rem 0;
`;

export const FeatureItem = styled.div<DataProps>`
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 40px;
  box-shadow: ${({ theme }) => theme.boxShadows.base};
`;
