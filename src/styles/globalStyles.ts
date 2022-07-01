import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, div, span, iframe,
  h1, h2, h3, h4, h5, h6, p,
  a, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, ul, li,
  fieldset, form, label, legend {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0; padding: 0;
  }

  body {
    line-height: 1.5;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.background}
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  ol, ul {
    list-style: none;
  }

  input,
  select {
    &:focus {
      outline-offset: 2px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }

`;

export default GlobalStyles;
