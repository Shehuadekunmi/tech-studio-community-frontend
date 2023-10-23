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
import { useState, useEffect } from "react";
import PasswordResetModal from "./PasswordResetModal";
import { Link } from "react-router-dom";

const GuestSignUp = () => {
  const apiURL = "https://techstudiocommunity.onrender.com";

  const initialFormData = {
    firstname: "",
    lastname: "",
    community: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [reveal, setReveal] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  const [communityData, setCommunityData] = useState([]);
  const [modal, setModal] = useState({ status: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${apiURL}/api/users/community/`)
      .then((response) => response.json())
      .then((result) => {
        setCommunityData(result);
      })
      .catch((error) => {
        window.location.reload();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const validateForm = () => {
    const errorsObject = {};

    function isEmailValid(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    if (formData.firstname.trim() === "") {
      errorsObject.firstname = "Firstname is required";
    }

    if (formData.lastname.trim() === "") {
      errorsObject.lastname = "Lastname is required";
    }

    if (formData.community.trim() === "") {
      errorsObject.community = "Select a community";
    }

    if (formData.email.trim() === "") {
      errorsObject.email = "Email is required!";
    } else if (!isEmailValid) {
      errorsObject.email = "Enter valid email!";
    }

    if (formData.password.trim() === "") {
      errorsObject.password = "Password is required!";
    } else if (formData.password.length < 8) {
      errorsObject.password = "Password length must be greater than 8!";
    }

    if (formData.confirmPassword.trim() === "") {
      errorsObject.confirmPassword = "Please fill in the password!";
    } else if (formData.confirmPassword !== formData.password) {
      errorsObject.confirmPassword = "Both passwords must match.";
    }

    return errorsObject;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);

        var requestData = {
          email: formData.email,
          first_name: formData.firstname,
          last_name: formData.lastname,
          community: formData.community,
          password: formData.password,
        };

        var requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        };

        const response = await fetch(
          `${apiURL}/auth/register/`,
          requestOptions
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "An error occurred");
        }

        const result = await response.json();

        setModal((prevModal) => ({
          ...prevModal,
          status: true,
          message: result.message,
        }));
      } catch (error) {
        setModal((prevModal) => ({
          ...prevModal,
          status: false,
          message: error.message,
        }));
      } finally {
        setLoading(false);
      }
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

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the field when it changes
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <div>
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
              <form action="" onSubmit={handleSubmit} name="">
                <div className="guest-name d-lg-flex justify-content-between">
                  <div className="sign-up-first-name d-flex flex-column gap-1">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      className={errors.firstname ? "error" : ""}
                      name="firstname"
                      type="text"
                      value={formData.firstname}
                      id="first-name"
                      onChange={handleFieldChange}
                    />
                    {errors.firstname && (
                      <p className="error-message">{errors.firstname}</p>
                    )}
                  </div>
                  <div className="sign-up-last-name d-flex flex-column gap-1">
                    <label htmlFor="last-name">Last Name </label>
                    <input
                      className={errors.lastname ? "error" : ""}
                      name="lastname"
                      type="text"
                      value={formData.lastname}
                      id="last-name"
                      onChange={handleFieldChange}
                    />
                    {errors.lastname && (
                      <p className="error-message">{errors.lastname}</p>
                    )}
                  </div>
                </div>
                <div className="community-group d-flex flex-column gap-1">
                  <label htmlFor="community">Community Group</label>
                  <select
                    name="community"
                    id="community"
                    className={errors.community ? "error" : ""}
                    value={formData.community}
                    onChange={handleFieldChange}
                  >
                    <option value={""} disabled>
                      Select Community
                    </option>
                    {communityData &&
                      communityData.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.community && (
                    <p className="error-message">{errors.community}</p>
                  )}
                </div>
                <div className="sign-up-email d-flex flex-column gap-1">
                  <label htmlFor="email">Email Address &nbsp;</label>
                  <input
                    name="email"
                    className={errors.email ? "error" : ""}
                    type="text"
                    value={formData.email}
                    id="email"
                    onChange={handleFieldChange}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
                <div className="sign-up-password d-flex flex-column gap-1">
                  <label htmlFor="password">Password &nbsp;</label>
                  <div className="password-container">
                    <input
                      name="password"
                      className={errors.password ? "error" : ""}
                      type={reveal ? "text" : "password"}
                      id="password"
                      value={formData.password}
                      onChange={handleFieldChange}
                    />
                    <img
                      className="eye"
                      onClick={handleReveal}
                      src={reveal ? eyeclose : eyeopen}
                      alt=""
                    />
                    {errors.password && (
                      <p className="error-message">{errors.password}</p>
                    )}
                  </div>
                </div>
                <div className="sign-up-confirm-password-password d-flex flex-column gap-1">
                  <label htmlFor="confirm-password">
                    Confirm Password &nbsp;
                  </label>
                  <div className="password-container">
                    <input
                      name="confirmPassword"
                      className={errors.confirmPassword ? "error" : ""}
                      type={reveal2 ? "text" : "password"}
                      id="confirm-password"
                      value={formData.confirmPassword}
                      onChange={handleFieldChange}
                    />
                    <img
                      className="eye"
                      src={reveal2 ? eyeclose : eyeopen}
                      onClick={handleReveal2}
                      alt=""
                    />
                    {errors.confirmPassword && (
                      <p className="error-message">
                        {errors.confirmPassword}
                      </p>
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
      {modal.status !== "" && modal.message !== "" && (
        <PasswordResetModal message={modal.message} status={modal.status} />
      )}
    </div>
  );
};

export default GuestSignUp;
