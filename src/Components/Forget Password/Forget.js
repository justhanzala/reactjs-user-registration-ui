import React from "react";
import "../Forget Password/Forget.css";
import Key from "../Images/key.png";

export default function Forget() {
  return (
    <div id="forget" className="forget">
      <div className="container">
        <div className="forget-content">
          <img src={Key} alt="Key" />
          <h2>Reset Password</h2>
          <div className="form">
            <form>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="f_email"
                placeholder="EMAIL ID"
                required
              />
            </form>
          </div>
          <div className="btn">
            <a href="#forget">
              <button type="button" className="btn-black">
                RESET MY PASSWORD
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
