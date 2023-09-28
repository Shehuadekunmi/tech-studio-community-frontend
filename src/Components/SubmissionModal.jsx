import React from 'react'
import "../styles/modal.css";

import V1 from "../assets/Vector1.png"
const SubmissionModal = () => {
    return (
      <div className='container'>
        <div className=" border rounded-3 mt-5 pb-3 work">
          <div className="text-center background-holder w-auto ">
            <img src={V1} alt=" A right marked icon " />
          </div>
          <div>
            <div className="w-auto text-center Writeup">
              <h2 className="m-auto p-2">Well done!</h2>
              <p className="w-75  m-auto">
                Your job posting has been successfully submitted and is now
                under review by our team.
              </p>
              <button
                
                className="  border-0 m-auto mt-3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SubmissionModal