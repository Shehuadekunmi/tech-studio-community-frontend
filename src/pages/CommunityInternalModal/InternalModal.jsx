import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../CommunityInternalModal/internal.css";
import p1 from "../CommunityInternalModal/images/profileimage1.png";
import p2 from "../CommunityInternalModal/images/profileimage2.png";
import P3 from "../CommunityInternalModal/images/profileimage3.png";
import profile from "../CommunityInternalModal/images/profile.png";
import DeleteMessagemodal from "../../Components/DeleteMessagemodal";
import SaveChangesmodal from "../../Components/SaveChangesmodal";
import PublishModal from "../../Components/PublishModal";
import DeleteConfirmationmodal from "../../Components/DeleteConfirmationmodal";
const InternalModal = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container  ">
      <Button variant="primary" onClick={handleShow}>
        Launch Internal  modal
      </Button>

      <Modal show={show} onHide={handleClose} className="cain">
        <Modal.Body>
          <div className="container ">
            <div className="">
              <div className="d-flex w-100 p-4 gap-2 ImageHolder justify-content-center">
                <img src={p1} alt=" project image" />
                <img src={p2} alt="project image" />
                <img src={P3} alt="project image" />
              </div>
              <div className="d-flex justify-content-center Personal ">
                <img src={profile} alt="" />
              </div>
              <article className="d-flex  flex-column justify-content-center m-auto text-center Details">
                <b>Feyisayo Akinade</b>
                <h6>Data Analysis</h6>
                <p>Cohort - September, 2023.</p>
              </article>
              <div className="d-flex   justify-content-center text-center m-auto Lion">
                <div className="Divided">
                  <b>440</b>
                  <h6>Followers</h6>
                </div>

                <div className="Numbers">
                  <b>65</b>
                  <h6>Followers</h6>
                </div>
              </div>
              <div className="my-5">
                <Button variant="primary" onClick={setShow2}>
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div>
        <Modal
          show={show2}
          onHide={() => setShow2(false)}
          size="lg"
          aria-labelledby="example-custom-modal-styling-title"
          className=""
        >
          <Modal.Header closeButton className=" border-0"></Modal.Header>
          <Modal.Body>
            <form action="">
              <div className="d-flex  justify-content-center m-auto ">
                <img src={profile} alt="" className="w-auto h-auto" />
              </div>
              <div className="text-center py-2">
                <b>Chris Chuckwuebuka</b>
              </div>
              <div className="Area ">
                <input
                  name=""
                  id=""
                  placeholder="Your Message"
                  className="  d-flex   justify-content-center  fw-bold   w-100"
                ></input>
              </div>
              <div className=" m-auto my-4 Small-input">
                <label htmlFor="" className="">
                  How long are you looking to hire?
                </label>
                <br />
                <select
                  name=""
                  id=""
                  className="w-75  m-auto d-flex justify-content-center"
                >
                  <option value="" className=" fs-5">
                    Your Timeline
                  </option>
                  <option value="" className=" fs-5">
                    Within the next 3months
                  </option>
                  <option value="" className=" fs-5">
                    Within the next few weeks
                  </option>
                  <option value="" className=" fs-5">
                    Over 3months
                  </option>
                </select>
                <br />
                <label htmlFor="" className="">
                  What is the pay range?
                </label>
                <br />
                <select
                  name=""
                  id=""
                  className="w-75 m-auto d-flex justify-content-center"
                >
                  <option value="" className=" fs-6">
                    Select Amount
                  </option>
                  <option value="" className=" fs-6">
                    150,000-250,000{" "}
                  </option>
                  <option value="" className=" fs-6">
                    250,000-350
                  </option>
                  <option value="" className=" fs-6">
                    350,000-450,000{" "}
                  </option>
                  <option value="" className=" fs-6">
                    450,000-650,000{" "}
                  </option>
                  <option value="" className=" fs-6">
                    650,000-750,000{" "}
                  </option>
                </select>
              </div>
              <div className="my-4 Key ">
                <Button variant="primary" className="fw-bold">
                  Send Message
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
      <DeleteMessagemodal />
      <SaveChangesmodal />
      <DeleteConfirmationmodal/>
    </div>
  );
};

export default InternalModal;
