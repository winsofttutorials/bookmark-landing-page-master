import React from "react";
import "./Header.css";
import { illustration } from "../../components";
const Header = () => {
  return (
    <section className="hd-wrapper">
      <div className="flexCol hd-container">
        {/* left */}
        <div className="leftHeader">
          <span className="primaryText">
            A Simple Bookmark
            <br />
            Manager
          </span>
          <p className="secondaryText">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <button type="button" className="button">
            Get it on Chrome
          </button>
          <button type="button" className="button btn">
            Get it on Firefox
          </button>
        </div>
        <div className="rightHeader">
          <div className="bg-design"></div>
          <div className="image-container">
            <img src={illustration} alt="fig" className="figure" />
          </div>
        </div>
        {/* right */}
      </div>
    </section>
  );
};

export default Header;
