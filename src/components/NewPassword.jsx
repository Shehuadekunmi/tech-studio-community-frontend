import techstudioLogo from "../assets/TSA community 3.svg";
import { Link } from "react-router-dom";
import "../styles/NewPassword.css";
import { useState } from "react";
import eyeclose from "../assets/eye-close.svg";
import eyeopen from "../assets/eye-open.svg";
// import PasswordResetModal from "./PasswordResetModal";

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [reveal, setReveal] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errorsObject = {};

    if (!newPassword) {
      errorsObject.newPassword = "Password is required!";
    }

    if (!confirmNewPassword) {
      errorsObject.confirmNewPassword = "Please confirm your new password";
    } else if (confirmNewPassword !== newPassword) {
      errorsObject.confirmNewPassword = "Both passwords must match";
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
          <p className="new-password-heading">
            To reset your password, please enter a new password below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={errors.newPassword ? "error" : ""}>
              <div className="d-flex flex-column form-div">
                <label htmlFor="email">New Password</label>
                <input
                  className="px-3"
                  type={reveal ? "text" : "password"}
                  id="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    {
                      errors.newPassword = null;
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
              {errors.newPassword && (
                <p className="error-message mt-2">{errors.newPassword}</p>
              )}
            </div>
            <div className={errors.confirmNewPassword ? "error" : ""}>
              <div className="d-flex flex-column form-div">
                <label htmlFor="email">Confirm Password</label>
                <input
                  className="px-3"
                  type={reveal2 ? "text" : "password"}
                  id="confirmpassword"
                  placeholder="Confirm new password"
                  value={confirmNewPassword}
                  onChange={(e) => {
                    setConfirmNewPassword(e.target.value);
                    {
                      errors.confirmNewPassword = null;
                    }
                  }}
                />
                <img
                  className="eye"
                  onClick={handleReveal2}
                  src={reveal2 ? eyeclose : eyeopen}
                  alt=""
                />
              </div>
              {errors.confirmNewPassword && (
                <p className="error-message mt-2">
                  {errors.confirmNewPassword}
                </p>
              )}
            </div>
            <button
              // onClick={() => setOpenModal(true)}
              className="btn btn-primary mt-3"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
      {/* {openModal && <PasswordResetModal />} */}
    </div>
  );
};

export default NewPassword;
