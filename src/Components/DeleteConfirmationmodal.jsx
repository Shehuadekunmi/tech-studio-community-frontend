import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/publish.css"
import Icon from "../pages/CommunityInternalModal/images/icon77.png"
const DeleteConfirmationmodal = () => {
      const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Delete confirmation{" "}
      </Button>
      <Modal
        size="md"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
     
        <Modal.Body>
          <div className="text-center">
            <img
              src={Icon}
              alt="delete confirmed image"
              className="w-25  h-25"
            />
          </div>
          <article className="my-3   text-center m-auto  Joker">
            <b>This project has been deleted..</b>
          </article>
          <div>
            <Button variant="primary" className="fw-bold w-25  m-auto text-center d-flex justify-content-center">
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeleteConfirmationmodal