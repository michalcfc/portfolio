import React from 'react';
import { GridStyles } from './Grid.styles';
import { GridPropTypes } from './Grid.d';

const Grid: React.FC<GridPropTypes> = ({
  children,
  ...rest
}) => (
  <GridStyles
    {...rest}
  >
    {children}
  </GridStyles>
);

export default Grid;
