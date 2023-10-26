import React from "react";
import "../styles/modal.css";
import V1 from "../assets/Vector1.png";
const SaveChangesmodal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch  SaveChanges modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog h-50">
          <div className="modal-content">
            <div className="  m-auto pb-3 work">
              <div className="text-center background-holder w-auto py-4 ">
                <img src={V1} alt=" A right marked icon " />
              </div>
              <div>
                <div className="w-auto text-center Writeup">
                  <h2 className="m-auto py-4">Well done!</h2>
                  <p className="w-75  m-auto py-1">
                    Changes made to your profile has been saved successfully!{" "}
                  </p>
                  <button className="  border-0 m-auto mt-3">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveChangesmodal;
