import React from 'react';
import { SpaceProps } from 'styled-system';
import { AvatarProps } from './Avatar.d';

import {
  AvatarWrapper,
  AvatarImg,
  AvatarDefault,
} from './Avatar.styles';

type Props = AvatarProps & SpaceProps;

const Avatar: React.FC<Props> = ({
  alt,
  src,
  size,
  ...rest
}) => (
  <AvatarWrapper size={size} {...rest}>
    {src ? (
      <AvatarImg
        src={src}
        alt={alt}
      />
    ) : (
      <AvatarDefault>
        {alt}
      </AvatarDefault>
    )}
  </AvatarWrapper>

);

export default Avatar;
