import React from "react";
import styled from "styled-components";

const HeroGreetingWrapper = styled.section`
  line-height: 1.2;
  letter-spacing: 0.03em;

  & h1:first-of-type {
    animation: var(--left-in) calc(2 * var(--load-time)) ease;
  }

  & h1:nth-of-type(2) {
    animation: var(--left-in) calc(2 * var(--load-time)) ease
      calc(var(--load-time));
    animation-fill-mode: forwards;
    transform: translateX(-1000%);
  }

  & span {
    color: var(--text-highlight);
  }

  & p {
    font-size: clamp(1.5rem, 1.5rem+10%, 2.5rem);
    animation: var(--left-in) calc(2 * var(--load-time)) ease
      calc(2 * var(--load-time));
    animation-fill-mode: forwards;
    transform: translateX(-1000%);
  }
`;

export const HeroGreeting = () => (
  <HeroGreetingWrapper id="#about">
    <h1>Hi there, I&apos;m Auguest.</h1>
    <h1>
      A Full-stack <span>Developer</span>,{" "}
    </h1>
    <p>previously lead engineer with awards-winning project.</p>
  </HeroGreetingWrapper>
);
