import tick from "../assets/Vector3.svg";
import "../styles/PasswordResetModal.css";
import { Link } from "react-router-dom";

const PasswordResetModal = () => {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="header">
          <img className="tick" src={tick} alt="" />
        </div>
        <div className="content">
          <h1 className="heading">Congratulations!</h1>
          <p>
            Your password has successfully been reset. You can now login with
            your new password.
          </p>
          <Link to={"/Login"}>
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetModal;
