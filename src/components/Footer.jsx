import React from "react";
import styled from "styled-components";
import { Contact, EndOfFooter } from "./";

const FooterWrapper = styled.footer`
  background: var(--bg-secondary);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 5rem;
  gap: 3rem;

  @media var(--tabletMin) {
    margin: 20px auto;
    width: 60%;
    max-width: 1080px;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Contact />
      <EndOfFooter />
    </FooterWrapper>
  );
};
