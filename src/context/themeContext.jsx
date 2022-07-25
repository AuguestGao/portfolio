import React, { useState, useEffect, createContext } from "react";

const getInitalTheme = () => {
  if (typeof window !== undefined && window.localStorage) {
    const storedTheme = window.localStorage.getItem("theme");

    if (typeof storedTheme === "string") {
      return storedTheme;
    }

    const browserScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (browserScheme.matches) {
      return "dark";
    }
  }

  return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitalTheme);

  const funcSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDarkTheme = theme === "dark";

    root.classList.remove(isDarkTheme ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  };

  if (initialTheme) {
    funcSetTheme(initialTheme);
  }

  useEffect(() => {
    funcSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
