import React, { useState } from "react";
import "./Features.css";
import {
  illustrations,
  illustrations2,
  illustrations3,
} from "../../components";
const Features = () => {
  const [toggle, setToggle] = useState(1);

  function toggleBtn(index) {
    setToggle(index);
  }
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
          <span
            className={toggle === 1 ? "spanBtn active" : "spanBtn"}
            onClick={() => toggleBtn(1)}
          >
            Simple Bookmarking
          </span>
          <span
            className={toggle === 2 ? "spanBtn active" : "spanBtn"}
            onClick={() => toggleBtn(2)}
          >
            Speedy Searching
          </span>
          <span
            className={toggle === 3 ? "spanBtn active" : "spanBtn"}
            onClick={() => toggleBtn(3)}
          >
            Easy Sharing
          </span>
        </div>
        <div className="innerWidth f-content">
          <div
            className={toggle === 1 ? "content-cover actives" : "content-cover"}
          >
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
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </span>
                <button className="button">More Info</button>
              </div>
            </div>
          </div>
          <div
            className={toggle === 2 ? "content-cover actives" : "content-cover"}
          >
            <div className="flexColCenter innerWidth content">
              <div className="left-content">
                <div className="image-container">
                  <img src={illustrations2} alt="fig" />
                </div>
              </div>
              <div className="right-content">
                <p className="primaryText">Intelligent search</p>
                <span className="secondaryText">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </span>
                <button className="button">More Info</button>
              </div>
            </div>
          </div>
          <div
            className={toggle === 3 ? "content-cover actives" : "content-cover"}
          >
            <div className="flexColCenter innerWidth content">
              <div className="left-content">
                <div className="image-container">
                  <img src={illustrations3} alt="fig" />
                </div>
              </div>
              <div className="right-content">
                <p className="primaryText">Share your bookmarks Easily</p>
                <span className="secondaryText">
                  share your bookmarks and collections with others. Create a
                  shareable link that you can send at the click of a button.
                </span>
                <button className="button">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
