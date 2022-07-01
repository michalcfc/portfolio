import { Views } from "~layout/types";
import styled, { css } from 'styled-components';
import breakpoint from '~utils/styles/breakpoints';

const switchTheme = ({ view }: Views) => {
  switch (view) {
    case 'fullWidth':
      return css`
      grid-template-areas:
      "header header header" 
      "main main main" 
      "footer footer footer";
    `;
    case 'withAsides':
      return css`
      grid-template-columns: 5rem 1fr 15rem;
      grid-template-areas:
      "asideLeft header header" 
      "asideLeft main asideRight" 
      "asideLeft footer asideRight";
    `;
    case 'withLeftAside':
      return css`
      grid-template-columns: 15rem 1fr;
        grid-template-areas:
      "asideLeft header header" 
      "asideLeft main main" 
      "asideLeft footer footer";
      `;
    case 'withRightAside':
      return css`
        grid-template-areas:
      "header header header" 
      "main main asideRight" 
      "footer footer asideRight";
      `;
    default:
      return css`
      grid-template-areas:
      "header header header" 
      "main main main" 
      "footer footer footer";
    `;
  }
};

type DataProps = {
  view: Views
};

export const WrapperStyles = styled.div<DataProps>`
  display: grid;
  min-height: 100vh;
  overflow: hidden;
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:
    "header" 
    "main" 
    "footer";
  @media ${breakpoint.device.lg} {
    ${switchTheme};
  }
`;
