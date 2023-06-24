import React from "react";
import "./Footer.css";
import { logo, facebook, twitter } from "../../components";
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="paddings flexCol innerWidth footer-container">
        <div className="flexCol leftFooter">
          <img src={logo} alt="logo" />
          <a href="/">FEATURES</a>
          <a href="/">PRICING</a>
          <a href="/">CONTACT</a>
        </div>
        <div className="rightFooter">
          <img src={facebook} alt="socialIcon" />
          <img src={twitter} alt="socialIcon" />
        </div>
      </div>
      <p style={{ color: "var(--White)", textAlign: "center" }}>
        Challenge by Frontend Mentor. Coded by Your IFIDI W. EPHOD.
      </p>
    </section>
  );
};

export default Footer;
