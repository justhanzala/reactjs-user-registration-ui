import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../Images/logo.png";

export default function Navbar() {
  return (
    <section className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div animate="hidden" className="header-logo">
            <a href="/">
              <span className="logo-img">
                <img src={Logo} height={60} alt="logo" />
              </span>
            </a>
          </div>
          <div className="navbar-links">
            <ul>
              <a href="#login">
                <li>Login</li>
              </a>
            </ul>
            <ul>
              <a href="#signup">
                <li>Signup </li>
              </a>
            </ul>
            <ul>
              <a href="#forget">
                <li>Forget Password</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
