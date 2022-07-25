import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/themeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = () => theme === "dark";

  return (
    <ThemeToggleWrapper
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="theme toggle"
    >
      {isDark() ? "sun" : "moon"}
    </ThemeToggleWrapper>
  );
};

const ThemeToggleWrapper = styled.button`
  background-color: yellow;
`;
