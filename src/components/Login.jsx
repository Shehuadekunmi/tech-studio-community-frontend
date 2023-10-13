import "../styles/Login.css";
import techstudioLogo from "../assets/TSA community 3.svg";
import brandPicture from "../assets/picture.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import lineIcon from "../assets/line-icon.svg";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
    }
  }

  return (
    <div className="login d-flex">
      <div className="frame-1 d-none d-lg-flex align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center gap-5">
          <img src={techstudioLogo} alt="" />
          <div className="brand-container">
            <img className="img-fluid w-100" src={brandPicture} alt="" />
          </div>
        </div>
      </div>
      <div className="frame-2 d-flex align-items-center">
        <section className="login-content">
          <div className="blue-top w-100"></div>
          <div className="login-content-padding">
            <div className="login-heading mb-4">
              <h1 className="fw-bold">Welcome Back!</h1>
              <p>Let’s Help You Get Into Your Account.</p>
            </div>
            <form onSubmit={handleSubmit} className={error ? "error" : ""}>
              <div className="login-email d-flex flex-column gap-3">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-password d-flex flex-column gap-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <p style={{ color: "red" }}>All fields must be filled!</p>
              )}
              <button type="submit" className="btn btn-primary d-block">
                Login
              </button>
              <div className="register d-flex gap-2 justify-content-center">
                <p className="text-center">New User?</p>
                <a className="text-decoration-none" href="#">
                  Sign Up
                </a>
              </div>
            </form>
            <div className="d-flex gap-1 justify-content-center align-items-center mt-2 mb-4">
              <div>
                <img className="lineIcon" src={lineIcon} alt="" />
              </div>
              <p className="fw-bold m-0">0R</p>
              <div>
                <img className="lineIcon" src={lineIcon} alt="" />
              </div>
            </div>
            <div className="social-icons d-flex justify-content-center gap-3">
              <img className="img-fluid" src={twitterIcon} alt="" />
              <img className="img-fluid" src={facebookIcon} alt="" />
              <img className="img-fluid" src={googleIcon} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
