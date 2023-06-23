import React from "react";
import "./Features.css";
import { illustrations } from "../../components";
const Features = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerwidth flexCol f-container">
        <span className="primaryText"> Features</span>
        <span className="secondaryText subtitle">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </span>
        <div className="f-titles">
          <span className="active">Simple Bookmarking</span>
          <span>Speedy Searching</span>
          <span>Easy Sharing</span>
        </div>
        <div className="innerWidth f-content">
          <div className="flexColCenter innerWidth content">
            <div className="left-content">
              <div className="image-container">
                <img src={illustrations} alt="fig" />
              </div>
            </div>
            <div className="right-content">
              <p className="primaryText">Bookmark in one click</p>
              <span className="secondaryText">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </span>
              <button className="button">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
