import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/publish.css";
import V1 from "../assets/Vector1.png";
const PublishModal = () => {
      const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <div>
        <Button onClick={() => setSmShow(true)} className="">
          Publish modal
        </Button>
        <Modal
          size="md"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-md"
        >
          <Modal.Title id="example-modal-sizes-title-md">
            <div className="text-center background2 w-auto py-4 ">
              <img src={V1} alt=" A right marked icon " />
            </div>{" "}
          </Modal.Title>
          <Modal.Body>
            <div className="modal-dialog h-50">
              <div className="modal-contents">
                <div className=" m-auto pb-3 workers2">
                  <div>
                    <div className="w-auto d-flex justify-content-center  flex-column text-center gap-1 m-auto Writers2">
                      <h2 className="m-auto p-2">Well done!</h2>
                      <p className="w-75  m-auto">
                        Project published successfully!s now under review by our
                        team.
                      </p>
                      <button className="  border-0 m-auto mt-3">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default PublishModal;
