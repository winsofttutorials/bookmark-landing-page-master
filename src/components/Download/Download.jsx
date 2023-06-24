import React from "react";
import "./Download.css";
import { chrome, firefox, opera } from "../../components";
const Download = () => {
  return (
    <section className="d-wrapper">
      <div className="paddings innerWidth flexCenter d-container">
        <h2 className="primaryText">Download the extension</h2>
        <p className="secondaryText">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <div className="flexColCenter d-content">
          <div className="flexCenter d-contentFrame">
            <img src={chrome} alt="chrome" />
            <h3 className="primaryText">Add to Chrome</h3>
            <p className="secondaryText">Minimum version 62</p>
            <div>
              <button className="button">Add & Install Extension</button>
            </div>
          </div>
          <div className="flexCenter d-contentFrame">
            <img src={firefox} alt="firefox" />
            <h3 className="primaryText">Add to Firefox</h3>
            <p className="secondaryText">Minimum version 55</p>
            <div>
              <button className="button">Add & Install Extension</button>
            </div>
          </div>
          <div className="flexCenter d-contentFrame">
            <img src={opera} alt="opera" />
            <h3 className="primaryText">Add to Opera</h3>
            <p className="secondaryText">Minimum version 46</p>
            <div>
              <button className="button">Add & Install Extension</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
