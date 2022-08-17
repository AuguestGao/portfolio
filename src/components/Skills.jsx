import React from "react";
import styled from "styled-components";
import { Section } from "./";

const skillList = [
  "React",
  "Node/Express",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "Python",
  "Django/Flask",
  "SQL",
  "Git",
  "Microservice",
];

const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 90%;
  gap: 0.5rem;

  & > li.skill {
    flex: 0 1 18%;
    list-style: none;
  }

  & span {
    color: var(--text-highlight);
    margin-right: 5px;
  }
`;

export const Skills = () => (
  <Section>
    <h2>Top skills</h2>
    <p>
      I have turned many ideas into useable applications mostly with the help of
      these tools:
    </p>
    <ListWrapper className="main">
      {skillList.map((item, index) => (
        <li key={index} className="skill">
          <span>&#9679;</span>
          {item}
        </li>
      ))}
    </ListWrapper>
  </Section>
);
