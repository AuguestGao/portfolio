import React from "react";
import styled from "styled-components";
import { ProjectCard } from "./";

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  * {
    flex-basis: 100%;
  }

  @media (min-width: 768px) {
    *:first-child {
      width: 100%;
    }

    *:not(:first-child) {
      flex: 1 1 45%;
    }
  }
`;

export const Projects = ({ projects }) => {
  return (
    <ProjectsList>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </ProjectsList>
  );
};
