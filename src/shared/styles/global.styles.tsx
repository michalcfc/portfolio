import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 1rem;
    }
    html, body, #root {
      height: 100vh;
    }
    body {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
    };
    ul {
      padding: 0;
      list-style: none;
    }
  `