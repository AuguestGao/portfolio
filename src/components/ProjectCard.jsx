import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { PeelingLink } from "./";

const ProjectCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 1080px;

  & > p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

export const ZoomingDiv = styled.div`
  margin: auto;
  width: 100%;

  & > div.gatsby-img {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  & > div.gatsby-img:hover,
  & > div.gatsby-img:active {
    transform: scale(1.05);
  }
`;

export const ProjectCard = ({ ...project }) => {
  return (
    <ProjectCardWrapper>
      <ZoomingDiv>
        <div className="gatsby-img">
          <Link to={project.url}>
            <GatsbyImage
              image={project.image}
              alt={project.alt}
              placeholder="blurred"
              loading="lazy"
              layout="constrained"
            />
          </Link>
        </div>
      </ZoomingDiv>
      <h3>{project.title}</h3>

      <p>{project.purpose}</p>

      <PeelingLink to={project.url}>{project.buttonName} &gt;</PeelingLink>
    </ProjectCardWrapper>
  );
};
