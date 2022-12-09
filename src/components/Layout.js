import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

// Styles
import "@sakun/system.css";

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );

  return (
    <>
      <Header
        siteTitle={site.siteMetadata.defaultTitle}
        menuLinks={site.siteMetadata.menuLinks}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
