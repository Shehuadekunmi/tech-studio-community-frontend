import "../styles/modal.css";

import V1 from "../assets/Vector1.png";
const SubmissionModal = () => {
  return (
    // <div className='container'>
    //   <div className=" border rounded-3 mt-5 pb-3 work">
    //     <div className="text-center background-holder w-auto ">
    //       <img src={V1} alt=" A right marked icon " />
    //     </div>
    //     <div>
    //       <div className="w-auto text-center Writeup">
    //         <h2 className="m-auto p-2">Well done!</h2>
    //         <p className="w-75  m-auto">
    //           Your job posting has been successfully submitted and is now
    //           under review by our team.
    //         </p>
    //         <button

    //           className="  border-0 m-auto mt-3"
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog h-auto">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {/* Modal title */}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
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
                  <button className="  border-0 m-auto mt-3">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionModal;
