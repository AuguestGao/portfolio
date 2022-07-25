import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px
  }

  .light {
    --bg: white;
    --text-primary: black;
    --text-highlight: pink;
    --accent: gray
  }

  .dark {
    --bg: darkblue;
    --text-primary: white;
    --text-highlight: wheat;
    --accent: cyan
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: var(--bg);
    color: var(--text-primary);
    margin: 0;
    passing: 0;
    width:100%;
    height: 100%
  }
`;
