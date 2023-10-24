import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GrNotification } from "react-icons/gr";
import Delete from "./images/DeleteIcon.png"
import "../CommunityInternalModal/notification.css"
const NotificationModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div>
      <h1 className=" text-center" onClick={handleShow}>
        <GrNotification />
      </h1>

      <Modal show={show} onHide={handleClose} keyboard={false} size="md">
        <Modal.Body>
          <div className="d-flex justify-content-center ">
            <img src={Delete} alt="Delete Icon" />
          </div>
          <div className="d-flex justify-content-center py-3 m-auto">
            {" "}
            <h2>Are you sure?</h2>
          </div>
          <article className=" d-flex justify-content-center m-auto text-center">
            Do you really want to delete this project? This cannot be undone.
          </article>
          <form className="d-flex  justify-content-center m-auto py-4 gap-3 ">
            <div className="Handle1">
              <Button onClick={handleClose}>Cancel</Button>
            </div>
            <div className="Handle2">
              {" "}
              <Button>Delete</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NotificationModal;
