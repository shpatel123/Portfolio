import React from "react";
import footerCSS from "./Footer.module.css";

function Footer() {
  return (
      <div className={footerCSS.end}>
        <p>&copy;CopyRight By Shubham Bhalala. All rights reserved</p>
        <p>
          <a href="#">Terms & Conditions | Privacy Policy</a>
        </p>
      </div>
  );
}

export default Footer;
