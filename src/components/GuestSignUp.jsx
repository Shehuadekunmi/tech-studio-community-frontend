import "../styles/GuestSignUp.css";
import "../styles/Login.css";
import techstudioLogo from "../assets/TSA community 3.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import guestSignUpBanner from "../assets/guest-sign-up-banner.svg";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";
import lineIcon from "../assets/line-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const GuestSignUp = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [community, setCommunity] = useState("");
  const [errors, setErrors] = useState({});
  const [reveal, setReveal] = useState(false);
  const [reveal2, setReveal2] = useState(false);

  const validateForm = () => {
    const errorsObject = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailPattern.test(email);

    if (!firstname) {
      errorsObject.firstname = "Firstname is required!";
    }

    if (!lastname) {
      errorsObject.lastname = "Lastname is required!";
    }

    if (!email) {
      errorsObject.email = "Email is required!";
    } else if (!isFormatValid) {
      errorsObject.email = "Enter valid email!";
    }

    if (!community) {
      errorsObject.community = "You have to select a community!";
    }

    if (!password) {
      errorsObject.password = "Password is required!";
    } else if (password.length < 5) {
      errorsObject.password = "Password length must be greater than 5!";
    }

    if (!confirmPassword) {
      errorsObject.confirmPassword = "Please confirm your password!";
    } else if (confirmPassword !== password) {
      errorsObject.confirmPassword = "Both passwords must match!";
    }

    return errorsObject;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReveal = () => {
    setReveal(!reveal);
  };

  const handleReveal2 = () => {
    setReveal2(!reveal2);
  };

  return (
    <div className="guest-sign-up d-flex">
      <div className="frame-3 d-none d-lg-flex align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center gap-5">
          <img src={techstudioLogo} alt="" />
          <div className="brand-container">
            <img className="img-fluid w-100" src={guestSignUpBanner} alt="" />
          </div>
        </div>
      </div>

      <div className="frame-4 d-flex">
        <section className="sign-up-content">
          <div className="blue-top w-100"></div>
          <div className="login-content-padding">
            <div className="login-heading mb-4">
              <h1 className="fw-bold">Sign Up</h1>
              <p>Enter details to create account.</p>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="guest-name justify-content-between">
                <div className={errors.firstname ? "error" : ""}>
                  <div className="sign-up-first-name d-flex flex-column gap-3">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      className="px-3"
                      type="text"
                      value={firstname}
                      id="first-name"
                      onChange={(e) => {
                        setFirstname(e.target.value);
                        {
                          errors.firstname = null;
                        }
                      }}
                    />
                    {errors.firstname && (
                      <p className="error-message">{errors.firstname}</p>
                    )}
                  </div>
                </div>

                <div className={errors.lastname ? "error" : ""}>
                  <div className="sign-up-last-name d-flex flex-column gap-3">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      className="px-3"
                      type="text"
                      value={lastname}
                      id="last-name"
                      onChange={(e) => {
                        setLastname(e.target.value);
                        {
                          errors.lastname = null;
                        }
                      }}
                    />
                    {errors.lastname && (
                      <p className="error-message">{errors.lastname}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className={errors.community ? "error" : ""}>
                <div className="community-group d-flex flex-column gap-3">
                  <label htmlFor="community">Community Group</label>
                  <select
                    name="community"
                    id="community"
                    className="px-2"
                    value={community}
                    onChange={(e) => {
                      setCommunity(e.target.value);
                      {
                        errors.community = null;
                      }
                    }}
                  >
                    <option disabled value="">
                      Select Community
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Data Analysis">Data Analysis</option>
                  </select>
                  {errors.community && (
                    <p className="error-message">{errors.community}</p>
                  )}
                </div>
              </div>

              <div className={errors.email ? "error" : ""}>
                <div className="sign-up-email d-flex flex-column gap-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="px-3"
                    value={email}
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      {
                        errors.email = null;
                      }
                    }}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className={errors.password ? "error" : ""}>
                <div className="sign-up-password d-flex flex-column gap-3">
                  <label htmlFor="password">Password</label>
                  <div className="password-container">
                    <input
                      className="px-3"
                      type={reveal ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        {
                          errors.password = null;
                        }
                      }}
                    />
                    <img
                      className="eye"
                      onClick={handleReveal}
                      src={reveal ? eyeclose : eyeopen}
                      alt=""
                    />
                  </div>
                  {errors.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                </div>
              </div>

              <div className={errors.confirmPassword ? "error" : ""}>
                <div className="sign-up-confirm-password-password d-flex flex-column gap-3">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <div className="password-container">
                    <input
                      className="px-3"
                      type={reveal2 ? "text" : "password"}
                      id="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        {
                          errors.confirmPassword = null;
                        }
                      }}
                    />
                    <img
                      className="eye"
                      src={reveal2 ? eyeclose : eyeopen}
                      onClick={handleReveal2}
                      alt=""
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="error-message">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <button type="submit" className="btn btn-primary d-block mt-3">
                Register
              </button>

              <div className="register d-flex gap-2 justify-content-center">
                <p className="text-center">Already have an account?</p>
                <Link to={"/Login"} className="text-decoration-none">
                  Login
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

export default GuestSignUp;
