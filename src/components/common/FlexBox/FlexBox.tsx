import React from 'react';
import { FlexBoxD } from './FlexBox.d';
import { BoxWrapper } from './FlexBox.styles';

const FlexBox: React.FC<FlexBoxD> = ({
  hoverEffect,
  children,
  ...rest
}) => (
  <BoxWrapper
    hoverEffect={hoverEffect}
    {...rest}
  >
    {children}
  </BoxWrapper>
);

export default FlexBox;
