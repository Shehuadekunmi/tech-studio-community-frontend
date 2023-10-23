import React from 'react'
import tick from "../assets/rightmark.svg";
import "../styles/PasswordResetModal.css";

const LoginInfoModal = ({message,status,login}) => {
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
          {!login && (status ? <></> : 
             <button onClick={() => window.location.reload()} className="btn btn-primary">
                Login
            </button>
            )}
        </div>
      </div>
    </div>
  )
}

export default LoginInfoModal