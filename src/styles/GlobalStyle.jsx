import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
    --tabletMin: 'only screen and (min-width: 480px)' 
  }

  .light {
    --bg: white;
    --bg-secondary: #f9f0dd;
    --text-primary: black;
    --text-secondary: #696969;
    --text-highlight: coral;
    --accent: purple;
  }

  .dark {
    --bg: darkblue;
    --bg-secondary: #CFCFCF;
    --text-primary: white;
    --text-secondary: lightgray;
    --text-highlight: wheat;
    --accent: cyan;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
font-family: Roboto, Calibri;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

*, *:before, *:after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

li {
list-style: none;

}
`;
