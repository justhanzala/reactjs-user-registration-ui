import React from "react";
// import Background from "../Images/bck.jpg";
import "../Login/Login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="bg">
            <div className="bg-img">
              <div className="bg-text">
                <h1>Hello</h1>
                <h1>World.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div clas sName="form">
              <div className="form-content">
                <h2>Register</h2>
                <p>
                  Don't have any account? <span>Create your account</span>, it
                  takes less than a minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
