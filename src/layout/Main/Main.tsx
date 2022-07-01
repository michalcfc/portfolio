import React from 'react';

import {
  MainWrapper,
  MainContainer,
} from './Main.styles';

import {
  MainProps,
} from './Main.d';

const Main:React.FC<MainProps> = ({
  children,
}) => (
  <MainWrapper>
    <MainContainer>
      {children}
    </MainContainer>
  </MainWrapper>
);

export default Main;
