import React from 'react';
import { SpaceProps } from 'styled-system';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from './Icon.styles';
import { IconProps } from './Icon.d';

type Props = IconProps & SpaceProps;

const Icon: React.FC<Props> = ({
    name,
    size,
    color,
    ...rest
}) => (
  <IconWrapper {...rest}>
    <FontAwesomeIcon
      icon={name}
      size={size}
      color={color}
    />
  </IconWrapper>
);

export default Icon;
