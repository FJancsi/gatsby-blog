import * as React from "react";
import PropTypes from "prop-types";

import MainNav from "./MainNav";

const Header = ({ siteTitle, menuLinks }) => (
  <header id="site-header" role="banner">
    <div className="window">
      <div className="title-bar">
        <h1 className="title">{siteTitle}</h1>
      </div>
      <MainNav menuLinks={menuLinks} />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
};

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
};

export default Header;
