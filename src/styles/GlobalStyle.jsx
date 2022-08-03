import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
  }

  .light {
    --bg: white;
    --bg-secondary: #f9f0dd;
    --text-primary: black;
    --text-secondary: #696969;
    --text-highlight: #f9631c;
    --accent: #ebd7cc;
  }

  .dark {
    --bg: #4b5e6b;
    --bg-secondary: #546a76;
    --text-primary: #fefefe;
    --text-secondary: #efefef;
    --text-highlight: wheat;
    --accent: #afd6d4;
  }

  html {
    width: 100%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-family: Roboto, Calibri;
  }

  body {
    width: 100%;
    background: var(--bg);
    color: var(--text-primary);
    transition: color 0.3s ease;
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
