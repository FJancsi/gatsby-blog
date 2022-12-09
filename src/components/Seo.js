import * as React from "react";
import propTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title, description, lang, pathname, article, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.defaultTitle;
  const metaDescription = description || site.siteMetadata.defaultDescription;
  const metaURL = `${site.siteMetadata.siteUrl}${pathname || ``}`;
  const boolArticle = article || false;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `canonical`,
          content: metaURL,
        },
        {
          name: `og:url`,
          content: metaURL,
        },

        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          name: `og:sitename`,
          content: site.siteMetadata.defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: boolArticle ? `article` : `website`,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  description: ``,
  lang: `en`,
  pathname: `/`,
  article: false,
  meta: [],
};

Seo.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string,
  lang: propTypes.string,
  pathname: propTypes.string,
  article: propTypes.bool,
  meta: propTypes.arrayOf(propTypes.object),
};

export default Seo;
