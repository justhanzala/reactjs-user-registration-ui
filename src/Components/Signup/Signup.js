import React from "react";
import "../Signup/Signup.css";
import Logo from "../Images/signup.png";

export default function Signup() {
  return (
    <div id="signup" className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-info">
            <img src={Logo} alt="Signup" />
            <h2>Sign in to your account</h2>
            <div className="btn">
              <a href="#login" target="_blank" rel="noreferrer">
                <button type="button" className="btn-ablue">
                  SIGN IN
                </button>
              </a>
              <a href="#signup" target="_blank" rel="noreferrer">
                <button type="button" className="btn-ablue">
                  SIGN UP
                </button>
              </a>
            </div>
          </div>
          <div className="form">
            <form>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="s_email"
                placeholder="EMAIL ID"
              />
            </form>
            <form>
              <label
                htmlFor="inputPassword"
                className="visually-hidden"
              ></label>
              <input
                type="password"
                id="s_inputPassword"
                placeholder="PASSWORD"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
