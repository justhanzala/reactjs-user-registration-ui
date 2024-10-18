import React from "react";
import "../Login/Login.css";

export default function Login() {
  return (
    <div id="login" className="login">
      <div className="container">
        <div className="login-content">
          <div className="login-info">
            {/* <img src={Logo} alt="login" /> */}
            <h1>Login</h1>
            <div className="btn">
              <a href="#login">
                <button type="button" className="btn-ablue">
                 LOG IN
                </button>
              </a>
              <a href="#login">
                <button type="button" className="btn-ablue">
                  LOG OUT
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
                required
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
                required
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
