import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/modal.css"
const DeleteMessagemodal = () => {
      const [smShow, setSmShow] = useState(false);

  return (
    <div>
      {" "}
      <Button onClick={() => setSmShow(true)} className="me-2">
        Delete Response modal
      </Button>
      <Modal size="md" show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Body >
          <div className="text-center my-2 Delete">
            <b>Your profile photo has been deleted</b>
          </div>
          <div className='my-3 w-50 h-25 m-auto'>
            <Button variant="primary">Close</Button>{" "}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeleteMessagemodal