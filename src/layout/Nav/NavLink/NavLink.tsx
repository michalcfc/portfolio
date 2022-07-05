import React from 'react';

import { NavLinkProps } from './NavLink.d';
import { NavLinkWrapper } from './NavLink.styles';

const NavLink: React.FC<NavLinkProps> = ({
  name,
  href,
  onClick,
}) => (
  <NavLinkWrapper
    href={href}
    onClick={onClick}
    name={name}
  />
);

export default NavLink;
