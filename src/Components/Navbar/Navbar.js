import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div animate="hidden" className="header-logo">
            {/* <a href="/"> */}
              <span className="logo-img">
                <img src={Logo} height={60} alt="logo" />
              </span>
            {/* </a> */}
          </div>
          <div className="navbar-links">
           
            <ul>
              {/* <a href="/signup"> */}
              <li>
                <NavLink to="/login/">Login </NavLink>
              </li>
              {/* </a> */}
            </ul>
            <ul>
              {/* <a href="#login"> */}
              <li>
                <NavLink to="/signup/">Signup </NavLink>{" "}
              </li>
             
              {/* </a> */}
            </ul>
            <ul>
              {/* <a href="#forget"> */}
              <li>
                {" "}
                <NavLink to="/forget/">Forget Password</NavLink>
              </li>
              {/* </a> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
