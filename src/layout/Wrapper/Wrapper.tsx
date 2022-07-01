import React from 'react';
import {
  WrapperStyles,
} from './Wrapper.styles';

import { WrapperProps } from './Wrapper.d';

const Wrapper: React.FC<WrapperProps> = ({
  view,
  children,
}) => (
  <WrapperStyles view={view}>
    {children}
  </WrapperStyles>
);

export default Wrapper;
