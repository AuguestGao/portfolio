import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeToggleWrapper = styled.div`
  /* background-color: yellow; */
  cursor: pointer;

  .icon {
    color: var(--accent);
    transition: all 0.3s ease;
  }

  .icon:hover {
    color: gold;
    transform: translateY(-5px);
  }
`;

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = () => theme === "dark";

  return (
    <ThemeToggleWrapper
      type="checkbox"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="theme toggle"
    >
      {isDark() ? (
        <FontAwesomeIcon icon={faMoon} className="icon" size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="icon" size="lg" />
      )}
    </ThemeToggleWrapper>
  );
};
