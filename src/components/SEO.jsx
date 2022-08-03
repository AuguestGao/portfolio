import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ title, description }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, siteUrl, titleTemplate } =
    site.siteMetadata;

  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaCanonical = pathname ? `${siteUrl}${pathname}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      link={metaCanonical ? [{ rel: "canonical", href: metaCanonical }] : []}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "og:url",
          content: `${siteUrl}${pathname}`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "og:site_name",
          content: `Portfolio of Auguest Gao`,
        },
      ]}
    />
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultAuthor: author
      }
    }
    seoImage: file(name: { glob: "icon" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 500, quality: 75, width: 500)
      }
    }
  }
`;
