import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { SideBar } from "./SideBar";

const LayoutWrapper = styled.div`
  display: flex;
  margin: 100px auto;
  justify-content: center;
  width: 90%;

  @media var(--tabletMin) {
    margin: 20px auto;
    width: 60%;
    max-width: 1080px;
    font-size: 1.2rem;
  }
`;

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      {children}
      <SideBar />
    </LayoutWrapper>
  );
};
