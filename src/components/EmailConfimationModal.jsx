import tick from "../assets/Vector3.svg";
import "../styles/PasswordResetModal.css";
import { Link } from "react-router-dom";

const EmailConfimationModal = ({message,status,login,uid}) => {
  console.log(status);
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="header">
          <img className="tick" src={tick} alt="" />
        </div>
        <div className="content">
          <h1 className="heading">{status?'Congratulations!!!':"Opps!!!"}</h1>
          <p>
            {message}
          </p>

          {login && <Link to={"/Login"}>
            <button className="btn btn-primary">Login</button>
          </Link>}
          {message === 'Link has expired. Click resend link to get new confimation link.' && <Link to={`/resend-email-confimation/${uid}/`}>
            <button className="btn btn-primary">Resend Link</button>
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default EmailConfimationModal;
