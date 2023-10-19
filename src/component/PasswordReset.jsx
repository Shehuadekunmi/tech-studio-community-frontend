import techstudioLogo from "../assets/TSA community 3.svg";
import "../styles/PasswordReset.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errorsObject = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailPattern.test(email);

    if (!email) {
      errorsObject.email = "Email is required!";
    } else if (!isFormatValid) {
      errorsObject.email = "Enter a valid email!";
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
  return (
    <div className="password-reset">
      <div className="header">
        <Link to={"/"}>
          <img src={techstudioLogo} alt="" />
        </Link>
      </div>
      <div className="container">
        <div className="body">
          <h1>Reset Your Password.</h1>
          <p className="message">
            To reset your password, enter the email address associated with your
            account. We’ll send you a link to create a new password.
          </p>
          <form onSubmit={handleSubmit} className={errors.email ? "error" : ""}>
            <input
              className="px-3"
              id="email"
              value={email}
              placeholder="Enter your email address..."
              onChange={(e) => {
                setEmail(e.target.value);
                {
                  errors.email = null;
                }
              }}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
            <button type="submit" className="btn btn-primary mt-3">
              Request Password Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
