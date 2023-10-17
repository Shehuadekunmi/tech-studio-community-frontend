import "../styles/Login.css";
import techstudioLogo from "../assets/TSA community 3.svg";
import brandPicture from "../assets/picture.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import lineIcon from "../assets/line-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errorsObject = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailPattern.test(email);

    if (!email) {
      errorsObject.email = "Email is required!";
    } else if (!isFormatValid) {
      errorsObject.email = "Enter valid email!";
    }

    if (!password) {
      errorsObject.password = "Password is required!";
    } else if (password.length < 5) {
      errorsObject.password = "Password length must be greater than 5!";
    }

    return errorsObject;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setErrors(validationErrors);
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

            <form onSubmit={handleSubmit}>
              <div className={errors.email ? "error" : ""}>
                <div className="login-email d-flex flex-column gap-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      {
                        errors.email = "";
                      }
                    }}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className={errors.password ? "error" : ""}>
                <div className="login-password d-flex flex-column gap-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      {
                        errors.password = "";
                      }
                    }}
                  />
                  {errors.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                </div>
              </div>

              <button type="submit" className="btn btn-primary d-block mt-3">
                Login
              </button>
              <div className="register d-flex gap-2 justify-content-center pt-2">
                <p className="text-center">New User?</p>
                <Link
                  to={"/GuestSignUp"}
                  className="text-decoration-none"
                  href="#"
                >
                  Sign Up
                </Link>
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
