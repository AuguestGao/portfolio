import React from "react";
import { Layout } from "./src/components";
import { ThemeProvider } from "./src/context/themeContext";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
