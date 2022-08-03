import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
    --left-in: left-in;
    --right-in: right-in;
    --drop-down: drop-down;
    --push-up: push-up;
    --load-time:300ms;
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
    --bg: #1e313e;
    --bg-secondary: #546a76;
    --text-primary: #fefefe;
    --text-secondary: #efefef;
    --text-highlight: wheat;
    --accent: #466e6c;
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

h1 {
  font-size: clamp(2rem, 1rem + 10vw, 5rem);
  animation: var(--left-in) calc(2 * var(--load-time)) ease;
}

@keyframes drop-down {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

@keyframes push-up {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes left-in {
    0% {
      transform: translateX(-1000%);
    }

    100% {
      transform: translateX(0);
    }
  }

@keyframes right-in {
    0% {
      transform: translateX(1000%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
