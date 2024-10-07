import React from "react";
import "../Signup/Signup.css";

export default function Signup() {
  return (
    <div id="signup" className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-info">
          <h2>Sign in to your account</h2>
          <div className="btn">
                  <a href="#login" target="_blank" rel="noreferrer">
                    <button type="button" className="btn-red">
                      SIGN IN
                    </button>
                  </a>
                  <a href="#signup" target="_blank" rel="noreferrer">
                    <button type="button" className="btn-red">
                      SIGN UP
                    </button>
                  </a>
                </div>
          </div>
          <div className="form">
            <form>
              <label htmlFor="email"></label>
              <input
                className="lform"
                type="email"
                name="email"
                id="email"
                required
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
                className="lform"
                id="inputPassword"
                placeholder="PASSWORD"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
