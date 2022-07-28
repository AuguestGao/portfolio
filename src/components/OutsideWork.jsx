import React from "react";
import styled from "styled-components";
import { Section } from "./";
import { StaticImage } from "gatsby-plugin-image";

const OutsideWorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  p {
    color: var(--text-secondary);
    margin 1rem auto;
  }

  & > div.photos {
    flex: 0 1 60%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .updown {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

export const OutsideWork = () => {
  return (
    <Section>
      <h2>Outside of work</h2>
      <OutsideWorkWrapper>
        <p>
          I take care many plants, caddle with fur friends, walk in the nature,
          and fully live my life.
        </p>
        <div className="photos">
          <StaticImage
            src="../images/travel_1.jpg"
            alt="Auguest travel"
            placeholder="blurred"
            layout="fixed"
            width={300}
            className="left"
          />
          <div className="updown">
            <StaticImage
              src="../images/fur_1.jpg"
              alt="Auguest's fur friend"
              placeholder="blurred"
              layout="fixed"
              width={100}
            />
            <StaticImage
              src="../images/plant_1.jpg"
              alt="Auguest's Micky plany"
              placeholder="blurred"
              layout="fixed"
              width={100}
            />
          </div>
          <StaticImage
            src="../images/travel_1.jpg"
            alt="Auguest travel"
            placeholder="blurred"
            layout="fixed"
            width={300}
            className="right"
          />
        </div>
      </OutsideWorkWrapper>
    </Section>
  );
};
