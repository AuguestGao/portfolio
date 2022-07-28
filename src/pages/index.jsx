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

// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };

// markup
const IndexPage = ({ data }) => {
  const projectImages = data.allFile.nodes;
  useEffect(() => {
    console.log(textArt);
    console.log("This website was designed and built by Auguest Gao.");
  }, []);

  const projects = projectList.map((item) => {
    const projectImage = projectImages.find((node) => node.name === item.name);

    return {
      ...item,
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
        relativeDirectory: { eq: "projects" }
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
