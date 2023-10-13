import techstudioLogo from "../assets/TSA community 3.svg";
import { Link } from "react-router-dom";
import "../styles/NewPassword.css";
import { useState } from "react";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [reveal, setReveal] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!newPassword && !confirmNewPassword) {
      setError(true);
    }
  }

  const handleReveal = () => {
    setReveal(!reveal);
  };

  const handleReveal2 = () => {
    setReveal2(!reveal2);
  };
  return (
    <div className="new-password">
      <div className="header">
        <Link to={"/"}>
          <img src={techstudioLogo} alt="" />
        </Link>
      </div>
      <div className="container">
        <div className="body">
          <p>To reset your password, please enter a new password below.</p>
          <form onSubmit={handleSubmit} className={error ? "error" : ""}>
            <div className="d-flex flex-column form-div">
              <label htmlFor="email">New Password</label>
              <input
                className="px-3"
                type={reveal ? "text" : "password"}
                id="email"
                placeholder={
                  error
                    ? "Password field cannot be empty!"
                    : "Enter new password"
                }
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <img
                className="eye"
                onClick={handleReveal}
                src={reveal ? eyeclose : eyeopen}
                alt=""
              />
            </div>
            <div className="d-flex flex-column form-div">
              <label htmlFor="email">Confirm Password</label>
              <input
                className="px-3"
                type={reveal2 ? "text" : "password"}
                id="email"
                placeholder={
                  error
                    ? "Password field cannot be empty!"
                    : "Confirm new password"
                }
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <img
                className="eye"
                onClick={handleReveal2}
                src={reveal2 ? eyeclose : eyeopen}
                alt=""
              />
            </div>
            <button className="btn btn-primary">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
