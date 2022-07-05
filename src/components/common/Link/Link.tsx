import React from 'react';
import { LinkStyle } from './Link.styles';

import { LinkD } from './Link.d';

const Link: React.FC<LinkD> = ({
  size,
  name,
  type,
  variant,
  href,
  children,
  isAbsolute,
  ...rest
}) => (
  <LinkStyle
    type={type}
    size={size}
    href={href}
    variant={variant}
    isAbsolute={isAbsolute}
  >
    <a {...rest}>
      {name || children}
    </a>
  </LinkStyle>
);

export default Link;
