import styled from 'styled-components';

import {
  color,
  compose,
  system,
  space,
  textShadow,
  typography,
} from 'styled-system';

import { TextProps } from './Text.d';

const textStyledSystem = compose(
  space,
  system({
    overflow: true,
    textDecoration: true,
    textDecorationStyle: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
  }),
  color,
  textShadow,
  typography,
);

export const TextStyles = styled.span<TextProps>`
  ${textStyledSystem};
  color: ${({ theme, muted }) => muted && theme.colors.gray};
`;
