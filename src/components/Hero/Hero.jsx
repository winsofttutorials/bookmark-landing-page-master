import React from "react";
import "./Hero.css";
import { logo } from "../../components";
const Hero = () => {
  return (
    <>
      <section className="h-wrapper">
        <div className="h-container">
          <nav>
            <img src={logo} alt="logo" className="logo" />
            <div id="navBar">
              <ul>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <button>Login</button>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Hero;
