import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const ImageWrapper = styled.section`
  width: 100%;
  animation: var(--push-up) calc(2 * var(--load-time)) ease-out
    calc(2 * var(--load-time));
  animation-fill-mode: forwards;
  transform: translateY(100%);
`;

export const HeroImage = () => (
  <ImageWrapper>
    <StaticImage
      src="../images/hero image.jpg"
      alt="Photo of Auguest Gao"
      placeholder="blurred"
      layout="constrained"
    />
  </ImageWrapper>
);
