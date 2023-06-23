import React, { Component } from "react";
import "./Hero.css";
import { logo, menu, closeIcon, Header } from "../../components";

class Hero extends Component {
  state = {
    click: false,
  };
  handleClick = () => {
    this.setState({ click: !this.state.click });
  };
  render() {
    return (
      <>
        <section className="h-wrapper">
          <div className="paddings innerWidth h-container">
            <nav>
              <img src={logo} alt="logo" className="logo" />
              <div
                id="navBar"
                className={this.state.click ? "#navBar active" : "navBar"}
              >
                <img src={logo} alt="logo" className="navLogo" />
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
                <img
                  src={closeIcon}
                  alt="menu"
                  className="closeIcon"
                  width={20}
                  onClick={() => this.setState(this.handleClick)}
                />
                <button type="button" className="button">
                  Login
                </button>
              </div>
              <img
                src={menu}
                alt="menu"
                className="hamBurger"
                onClick={() => this.setState(this.handleClick)}
              />
            </nav>

            <Header />
          </div>
        </section>
      </>
    );
  }
}

export default Hero;
