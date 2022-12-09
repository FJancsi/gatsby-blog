import React from "react";

import * as styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footerbar}>
    <p class="dialog-text">&copy; {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
