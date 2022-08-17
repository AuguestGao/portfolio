import React from "react";
import styled from "styled-components";
import { Section } from "./";
import { StaticImage } from "gatsby-plugin-image";

const OutsideWorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    width: 100%;
    color: var(--text-secondary);
    margin: 1rem auto;
  }

  .photos {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 0.5rem;
  }

  .photos-sub-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    max-width: 300px;
  }

  @media (min-width: 480px) {
    flex-direction: row;

    p {
      width: 30%;
    }

    .photos {
      flex-direction: row;
      flex: 1 1 100%;
    }

    .photos-sub-div {
      flex-direction: column;
    }

    .
  }
`;

export const OutsideWork = () => {
  return (
    <Section>
      <h2>When I&apos;m not in front of a computer ...</h2>
      <OutsideWorkWrapper>
        <p>
          I like to read, caddle with fur friends, hike/ride/kayak in the
          nature, win boardgames and fully live my life.
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
          <div className="photos-sub-div">
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
