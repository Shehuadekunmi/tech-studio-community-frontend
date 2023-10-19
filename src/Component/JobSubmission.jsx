import tick from "../assets/rightmark.svg";
import "../styles/PasswordResetModal.css";
import { Link } from "react-router-dom";

const JobSubmission = ({message}) => {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="header">
          <img className="tick" src={tick} alt="" />
        </div>
        <div className="content">
          <h1 className="heading">Well Done !</h1>
          <p>
          {message}
          </p>

          <Link to={"/talent"}>
            <button className="btn btn-primary">Close</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobSubmission;
