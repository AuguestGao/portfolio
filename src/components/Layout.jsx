import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

export const Layout = (props) => {
  return (
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  );
};
