import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { SideBar } from "./";

const LayoutWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  justify-content: start;
  font-size: 90%;

  @media (min-width: 480px) {
    margin: 50px auto;
    max-width: 1080px;
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
