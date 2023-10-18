import React from "react"
import "../styles/loading.css"

const LoadingPage = () => {
  return (
    <div className="loader">
      <div className="spinner-border text-primary" role="status" style={{width:"100px", height:"100px"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="loading-txt">Loading...</div>
    </div>
  );
};

export default LoadingPage;