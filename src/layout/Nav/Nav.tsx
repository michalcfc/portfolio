import React from 'react';

import {
  NavWrapper, NavItems,
} from './Nav.styles';

import { NavbarProps } from './Nav.d';

// components

const Nav: React.FC<NavbarProps> = ({
  children,
  isHorizontal,
}) => (
  <NavWrapper>
    <NavItems
      isHorizontal={isHorizontal}
    >
      {children}
    </NavItems>
  </NavWrapper>
);

export default Nav;
