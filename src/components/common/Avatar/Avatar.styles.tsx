import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';
import { space, SpaceProps } from 'styled-system';

type DataProps = {
  src?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
};

type AvatarProps = DataProps & SpaceProps;

export const AvatarWrapper = styled.div<AvatarProps>`
  ${space};
  width: ${theme('avatarSize', 'size')};
  height: ${theme('avatarSize', 'size')};
`;

export const AvatarImg = styled.img<DataProps>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 999px;
`;

export const AvatarDefault = styled.div<DataProps>`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
  color: #000;
  object-fit: cover;
  border-radius: 999px;
  background: #ebeef2;
`;
