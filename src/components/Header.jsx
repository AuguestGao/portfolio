import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { PeelingLink } from "./UnifiedComponents";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const NavWrapper = styled.ul`
  li {
    text-align: right;
    display: inline-block;
    margin: 0 0.5rem;
  }
`;

export const Header = () => {
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
        <li>
          <PeelingLink to="#about">about</PeelingLink>
        </li>
        <li>
          <PeelingLink to="#projects">projects</PeelingLink>
        </li>
        <li>
          <PeelingLink to="#contact">contact</PeelingLink>
        </li>
      </NavWrapper>
    </HeaderWrapper>
  );
};
