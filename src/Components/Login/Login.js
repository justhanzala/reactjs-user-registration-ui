import React from "react";
import "../Login/Login.css";

export default function Login() {
  return (
    <>
      <div id="login" className="login">
        <div className="container">
          <div className="bg-content">
            {/* <div className="bg-img"> */}
              <div className="bg-text">
                <h1>Hello</h1>
                <h1>World.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            {/* </div> */}

            <div className="form">
              <div className="form-content">
                <h2>Register</h2>
                <p>
                  Don't have any account? <span>Create your account</span>, it
                  takes <p>less than a minute.</p>
                </p>
                <form>
                  <label htmlFor="name"></label>
                  <input
                    className="lform"
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="NAME"
                  />
                </form>
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

                <label htmlFor="phone"></label>
                <input
                  className="lform"
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="PHONE NO"
                />
                <form>
                  <label
                    htmlFor="inputPassword"
                    className="visually-hidden"
                  ></label>
                  <input
                    className="lform"
                    type="password"
                    id="inputPassword"
                    placeholder="PASSWORD"
                  />
                </form>
                <form className="radio">
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    I Accept terms and conditions and & privacy policy
                  </label>
                </form>
                <div className="btn">
                  <a href="#login" target="_blank" rel="noreferrer">
                    <button type="button" className="btn-red">
                      LOGIN
                    </button>
                  </a>
                </div>

                <div className="social-btn">
                  <p>Login with social media</p>
                  <div className="btn">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn-blue">
                        <i class="fa-brands fa-facebook-f"></i>Facebook
                      </button>
                    </a>

                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn-lblue">
                        <i class="fa-brands fa-twitter"></i>Twitter
                      </button>
                    </a>
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn-orange">
                        <i class="fa-brands fa-google-plus-g"></i>Google
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
