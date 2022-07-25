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
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: var(--bg);
    color: var(--text-primary);
  }

  main {
  display: block;
}

a {
  background-color: transparent;
}

img {
  border-style: none;
}

*, *:before, *:after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
`;
