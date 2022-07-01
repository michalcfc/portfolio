import React from 'react';

import { NavLinkWrapper } from '@layout/Nav/NavLink/NavLink.styles';
import { NavLinkProps } from './NavLink.d';

const NavLink: React.FC<NavLinkProps> = ({
  name,
  href,
  onClick,
}) => (
  <NavLinkWrapper
    href={href}
    onClick={onClick}
  >
    {name}
  </NavLinkWrapper>
);

export default NavLink;
