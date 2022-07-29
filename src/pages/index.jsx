import React, { useEffect } from "react";
import {
  Header,
  HeroGreeting,
  HeroImage,
  Skills,
  CenterDiv,
  Summary,
  Projects,
  OutsideWork,
} from "../components";
import { graphql } from "gatsby";
import { textArt } from "../assets/textArt";
import { projectList } from "../assets/projectList";

const IndexPage = ({ data }) => {
  const projectImages = data.allFile.nodes;

  useEffect(() => {
    console.log(textArt);
    console.log("This website was designed and built by Auguest Gao.");
  }, []);

  const projects = projectList.map((project) => {
    const projectImage = projectImages.find(
      (node) => node.name === project.imageName
    );

    return {
      ...project,
      image: projectImage.childImageSharp.gatsbyImageData,
    };
  });

  return (
    <CenterDiv>
      <Header />
      <HeroGreeting />
      <HeroImage />
      <Summary />
      <Skills />
      <Projects projects={projects} />
      <OutsideWork />
    </CenterDiv>
  );
};

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "showcases" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: AUTO
          )
        }
      }
    }
  }
`;
export default IndexPage;
