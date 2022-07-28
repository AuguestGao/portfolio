import React from "react";
import styled from "styled-components";
import { Section, ProjectCard } from "./";

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  *:first-child {
    width: 100%;
  }

  *:not(:first-child) {
    flex: 1;
  }
`;

export const Projects = ({ projects }) => {
  return (
    <Section id="projects">
      <h2>What I&apos;ve worked on</h2>
      <p>
        I like to stay busy by working on projects. Here are some projects and
        companies I&apos;ve had fun with.
      </p>
      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsList>
    </Section>
  );
};
