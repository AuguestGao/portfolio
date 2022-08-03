import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { PeelingLink, ThemeToggle } from "./";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  animation: var(--drop-down) calc(2 * var(--load-time)) ease-in;
`;

const NavWrapper = styled.ul`
  li {
    text-align: right;
    display: inline-block;
    margin: 0 0.3rem;
  }

  li:last-of-type {
    margin-left: 1rem;
  }

  @media (min-width: 480px) {
    li {
      margin: 0 0.5rem;
    }

    li:last-of-type {
      margin-left: 2rem;
    }
  }
`;

export const Header = ({ isHome }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <StaticImage
          alt="logo"
          loading="eager"
          src="../images/icon.png"
          width={50}
          height={50}
        />
      </Link>
      <NavWrapper>
        {isHome ? (
          <>
            <li>
              <PeelingLink to="#about">about</PeelingLink>
            </li>
            <li>
              <PeelingLink to="#projects">projects</PeelingLink>
            </li>
            <li>
              <PeelingLink to="#contact">contact</PeelingLink>
            </li>
          </>
        ) : (
          <li>
            <PeelingLink to="/">home</PeelingLink>
          </li>
        )}
        <li>
          <ThemeToggle />
        </li>
      </NavWrapper>
    </HeaderWrapper>
  );
};
