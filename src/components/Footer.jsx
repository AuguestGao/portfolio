import React from "react";
import styled from "styled-components";
import { Contact, EndOfFooter } from "./";

const FooterWrapper = styled.footer`
  background: var(--bg-secondary);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 3rem;

  @media (min-width: 480px) {
    padding: 2rem 4rem;
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
