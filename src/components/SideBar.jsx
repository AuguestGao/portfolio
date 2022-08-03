import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: fixed;
    width: 30px;
    bottom: 0;
    z-index: 10;
    right: 10px;

    .email {
      display: flex;
      flx-wrap: nowrap;
      flex-direction: column;
      align-items: baseline;
      font-size: 0.9rem;
    }

    a {
      text-align: center;
      writing-mode: vertical-lr;
      text-decoration: none;
      color: var(--text-primary);
      transition: transform 0.2s ease-in-out;
      font-family: "SF Mono", Consolas, "DejaVu Sans Mono", "Roboto Mono",
        monospace;
      margin: 0.5rem auto;
    }

    a:hover {
      transform: translateY(-5px);
      color: var(--text-highlight);
    }

    .email::after {
      content: "";
      display: block;
      width: 1px;
      height: 60px;
      margin: 0px auto;
      background-color: var(--text-primary);
    }
  }
`;

export const SideBar = () => {
  return (
    <SideBarWrapper className="left">
      <div className="email">
        <a href="mailto:auguest.gao@gmail.com">auguest.gao@gmail.com</a>
      </div>
    </SideBarWrapper>
  );
};
