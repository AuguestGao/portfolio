import React from "react";
import styled from "styled-components";
import { ExternalLink } from "./";

const BadgeWrapper = styled.div`
  max-width: 640px;
  display: flex;
  gap: 2rem;
  animation: var(--left-in) calc(2 * var(--load-time)) ease-in
    calc(2 * var(--load-time));
  animation-fill-mode: forwards;
  transform: translateX(-1000%);
`;

const ColumnWrapper = styled.div`
  li,
  p {
    color: var(--text-secondary);
    margin: 0.2rem 0;
    font-size: 80%;
  }

  a {
    font-size: 80%;
  }

  h5 {
    text-transform: uppercase;
    color: var(--text-primary);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  li > span {
    color: var(--text-highlight);
    margin-right: 5px;
  }
`;

export const Badge = ({ type, techs, repo, live }) => {
  return (
    <BadgeWrapper>
      <ColumnWrapper>
        <h5>type</h5>
        <p>{type}</p>
      </ColumnWrapper>
      <ColumnWrapper>
        <h5>Technologies</h5>
        <ul>
          {techs.map((tech, index) => (
            <li key={index}>
              <span>&#9679;</span>
              {tech}
            </li>
          ))}
        </ul>
      </ColumnWrapper>
      {repo ? (
        <ColumnWrapper>
          <h5>Repository</h5>
          <ExternalLink href={repo} text="Github" />
        </ColumnWrapper>
      ) : null}

      <ColumnWrapper>
        <h5>Live site</h5>
        <ExternalLink href={live} text="Visit" />
      </ColumnWrapper>
    </BadgeWrapper>
  );
};
