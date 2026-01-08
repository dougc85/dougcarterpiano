import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    font-family: 'Raleway', sans-serif;
  }

  body {
    box-sizing: border-box;
    color: #1c1c1c;
    overflow-x: hidden;

    h2 {
      font-weight: 700;
    }
  }
`

export default GlobalStyle;