import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const EndWrapper = styled.div`
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
    margin: 0.5rem;
  }

  .icon {
    color: var(--text-secondary);
    width: 2rem;
    height: 2rem;
    transition: color 0.3s ease;
    margin: 0 1rem;
  }

  .github:hover,
  .github:focus {
    color: black;
  }

  .linkedin:hover,
  .linkedin:focus {
    color: #006192;
  }
`;

export const EndOfFooter = () => (
  <EndWrapper>
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
        <a
          href="https://github.com/AuguestGao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon github" size="lg" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/auguestgao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="icon linkedin"
            size="lg"
          />
        </a>
      </li>
    </NavWrapper>
  </EndWrapper>
);
