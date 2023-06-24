import React, { useState } from "react";
import "./GetStarted.css";
const GetStarted = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidity = () => {
    if (!email.match(/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{3,3}$/)) {
      setMessage("Please enter valid mail");
    } else {
      setMessage("Successful");
      // setMessage("");
    }
  };
  return (
    <section className="g-wrapper">
      <div className="paddings flexCenter innerWidth g-container">
        <h3>35,000+ already joined</h3>
        <p>Stay up-to-date with what we’re doing</p>
        <div className="emailField">
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="emailF"
          />
          <button className="button" onClick={() => emailValidity()}>
            Contact Us
          </button>
          <p>{message}</p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
