import React from "react";
import styled from "styled-components";

const HeroGreetingWrapper = styled.section`
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: 0.03em;

  & span {
    color: var(--text-highlight);
  }

  p:last-of-type {
    font-size: 1.5rem;
  }

  @media (min-width: 480px) {
    font-size: 3rem;

    p:last-of-type {
      font-size: 2.5rem;
    }
  }
`;

export const HeroGreeting = () => (
  <HeroGreetingWrapper id="#about">
    <p>Hi there, I&apos;m Auguest.</p>
    <p>
      A Full-stack <span>Developer</span>,{" "}
    </p>
    <p>previously lead engineer with awards-winning project.</p>
  </HeroGreetingWrapper>
);
