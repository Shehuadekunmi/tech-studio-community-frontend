import tick from "../assets/rightmark.svg";
import "../styles/PasswordResetModal.css";
import { Link } from "react-router-dom";

const PasswordResetModal = ({message,status,login}) => {
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
          {!login && (status?<></>:<Link to={"/Login"}>
            <button className="btn btn-primary">Login</button>
          </Link>)}

          {login && <Link to={"/Login"}>
            <button className="btn btn-primary">Login</button>
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default PasswordResetModal;
