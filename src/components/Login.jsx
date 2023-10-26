import "../styles/Login.css";
import techstudioLogo from "../assets/TSA community 3.svg";
import brandPicture from "../assets/picture.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import lineIcon from "../assets/line-icon.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contextData/DataContext";
import LoginInfoModal from "./LoginInfoModal";
import Alert from "./Alert";
import Loader from "./Loader";

const Login = () => {
  const apiURL = "https://techstudiocommunity.onrender.com";
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ status: "", message: "" });
  const [alert, setAlert] = useState(false)

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
    }

    return errorsObject;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      
      try {
        setLoading(true);

        var requestData = {
          email: email,
          password: password
        };

        var requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        };

        const response = await fetch(
          `${apiURL}/auth/login/`,
          requestOptions
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || "An error occurred");
        }

        const result = await response.json();
        login(result.token)
        navigate("/internalpage")

      } catch (error) {

        if (error.message === 'Invalid credentials'){
          setAlert(true)
          setPassword("")
          setEmail("")
            setTimeout(() => {
              setAlert(false)
            }, 6000);
        }
        else{
          setModal((prevModal) => ({
            ...prevModal,
            status: false,
            message: error.message,
          }));
        }
      } finally {
        setLoading(false);
      }

    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div className="position-relative">
      {alert && <Alert message={"Invalid credentials was entered. Try again"}/>}
    <div className="login d-flex">
      <div className="frame-1 d-none d-lg-flex align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center gap-5">
       <Link to={'/'}>  <img src={techstudioLogo} alt="" /> </Link> 
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

            <form onSubmit={handleSubmit} className="form shehu-login">
              <div className="login-email d-flex flex-column gap-3">
                <label htmlFor="email">Email Address</label>
                <input
                  className={errors.email ? "error" : ""}
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

              <div className="login-password d-flex flex-column gap-3">
                <label htmlFor="password">Password</label>
                <input
                  className={errors.password ? "error" : ""}
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

              <button type="submit" className="btn btn-primary w-100 d-block mt-3">
                {loading?<Loader/>:<strong>Login</strong>}
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
                <img className="lineIcon shehu-or"  src={lineIcon} alt="" />
              </div>
              <p className="fw-bold m-0 shehu-or">0R</p>
              <div>
                <img className="lineIcon shehu-or" src={lineIcon} alt="" />
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
        <LoginInfoModal message={modal.message} status={modal.status} />
      )}
    </div>
  );
};

export default Login;
