import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin: 200px auto;
  width: 90%;

  @media only screen and (min-width: 480px) {
    flex-wrap: wrap;
    margin: 75px auto;
    width: 60%;
    max-width: 1080px;
  }
`;

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      {children}
    </LayoutWrapper>
  );
};
