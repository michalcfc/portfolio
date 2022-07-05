import React, { useRef } from 'react';
import { BoxProps } from './Box.d';
import { BoxWrapper } from './Box.styles';

const Box: React.FC<BoxProps> = ({
  hoverEffect,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <BoxWrapper
      ref={ref}
      hoverEffect={hoverEffect}
      {...rest}
    >
      {children}
    </BoxWrapper>
  );
};

export default Box;
