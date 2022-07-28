import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  position: fixed;
  width: 30px;
  right: 10px;
  bottom: 0;
  z-index: 10;

  .email {
    display: flex;
    flx-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
  }

  a {
    writing-mode: vertical-rl;
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.2s ease-in-out;
    font-family: "SF Mono", Consolas, "DejaVu Sans Mono", "Roboto Mono",
      monospace;
    margin: 0.5rem;
  }

  a:hover,
  a:active {
    transform: translateY(-5px);
    color: var(--text-highlight);
  }

  .email::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--text-primary);
  }
`;

export const SideBar = () => {
  return (
    <SideBarWrapper>
      <div className="email">
        <a href="mailto:auguest.gao@gmail.com">auguest.gao@gmail.com</a>
      </div>
    </SideBarWrapper>
  );
};
