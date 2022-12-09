import * as React from "react";
import { Link } from "gatsby";

import * as styles from './MainNav.module.css'

const MainNav = ({ menuLinks }) => {
  return (
    <nav className={styles.mainnav}>
      <ul role="menu-bar">
        {menuLinks.map((props) => (
          <li role="menu-item" aria-haspopup="true" key={props.name}>
            <Link to={props.link}>{props.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
