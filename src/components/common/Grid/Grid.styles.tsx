import styled from 'styled-components';
import {
  compose,
  grid,
  layout,
  LayoutProps,
  GridProps,
  SpaceProps,
} from 'styled-system';
import { Box } from '~components/common/Box';

type DataProps =
    GridProps
    & SpaceProps
    & LayoutProps;

const gridStyledSystem = compose(
  grid,
  layout,
);

export const GridStyles = styled(Box)<DataProps>`
  ${gridStyledSystem};
  display: grid;
`;
