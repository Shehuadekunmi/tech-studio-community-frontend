import techstudioLogo from "../assets/TSA community 3.svg";
import "../styles/PasswordReset.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const isFormatValid = emailPattern.test(email);
    if (!email) {
      setError(true);
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
          <p>
            To reset your password, enter the email address associated with your
            account. We’ll send you a link to create a new password.
          </p>
          <form onSubmit={handleSubmit} className={error ? "error" : ""}>
            <input
              className="px-3"
              type="email"
              id="email"
              value={email}
              placeholder={
                error
                  ? "Email field cannot be empty!"
                  : "Enter your email address"
              }
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Request Password Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
