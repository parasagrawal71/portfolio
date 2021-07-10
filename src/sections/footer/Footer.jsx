import React from "react";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import "./Footer.scss";

const Footer = () => {
  return (
    <main className="footer">
      <div className="footer-content">Designed and Developed by {fullName}</div>
    </main>
  );
};

export default Footer;
