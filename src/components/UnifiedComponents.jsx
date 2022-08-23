import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export const PeelingLink = styled(Link)`
  text-decoration: none;
  color: var(--text-primary);
  padding: 5px;
  box-shadow: inset 0 0 0 0 var(--accent);
  margin: 0 -0.25rem;
  transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  width: fit-content;

  &:hover,
  &:active {
    box-shadow: inset 500px 0 0 0 var(--accent);
    color: white;
  }
`;

export const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-width: 480px) {
    gap: 4rem;
    font-size: 1.2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  color: var(--text-secondary);

  h2,
  h3,
  *.main {
    color: var(--text-primary);
  }

  p {
    font-size: 80%;
    line-height: 1.5;
    width: 100%;
  }

  &.right-aligned {
    align-items: end;
  }

  li {
    font-size: 80%;
    margin-bottom: 0.3rem;
  }

  &.left-in-animate {
    animation-name: var(--left-in);
    animation-duration: calc(1 * var(--load-time));
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    transform: translateX(-1000%);
  }

  &.delay1 {
    animation-delay: calc(1.5 * var(--load-time));
  }

  &.right-in-animate {
    animation-name: var(--right-in);
    animation-duration: calc(1 * var(--load-time));
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    transform: translateX(1000%);
  }

  &.delay2 {
    animation-delay: calc(1.75 * var(--load-time));
  }

  @media (min-width: 768px) {
    p {
      line-height: 1.8;
      width: 75%;
    }

    gap: 2rem;
  }
`;

export const ProjectPageWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2rem;

  & > h1 {
    color: var(--text-primary);
    font-size: 4rem;
  }

  .center {
    margin: auto;
  }

  .responsive {
    width: 100%;
    height: auto;
    max-width: 960px;
  }

  img {
    width: 100%;
  }

  figure {
    max-width: 960px;
  }

  figure > figcaption {
    margin-top: 0.3rem;
    font-size: 80%;
    color: var(--text-secondary);
    text-align: center;
  }

  .project-page-image {
    max-width: 960px;
  }

  .frame {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  .frame > iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .credit {
    color: var(--text-secondary);
    font-size: 60%;
    margin: auto;
  }

  .push-up-animate {
    animation: var(--push-up) calc(2 * var(--load-time)) ease
      calc(1 * var(--load-time));
    animation-fill-mode: forwards;
    transform: translateY(100%);
  }
`;

const ExternalLinkWrapper = styled.a`
  display: block;
  color: var(--text-highlight);
  border-bottom: 3px solid hidden;
  width: fit-content;
  height: 25px;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid;
  }
`;

export const ExternalLink = ({ href, text }) => {
  return <ExternalLinkWrapper href={href}>{text}</ExternalLinkWrapper>;
};
