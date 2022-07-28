import React from "react";
import styled from "styled-components";

const HeroGreetingWrapper = styled.section`
  font-size: 4rem;
  line-height: 1.2;
  letter-spacing: 0.03em;

  & span {
    color: var(--text-highlight);
  }

  P:last-of-type {
    font-size: 3rem;
  }

  /* @media var(--tabletMin) {
    font-size: 3rem;
  } */
`;

export const HeroGreeting = () => (
  <HeroGreetingWrapper id="#about">
    <p>Hi there, I&apos;m Auguest.</p>
    <p>
      Full-stack <span>Developer</span>,{" "}
    </p>
    <p>previously lead engineer with award-winning project.</p>
  </HeroGreetingWrapper>
);
