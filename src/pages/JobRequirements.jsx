import "../styles/JobRequirements.css";
import { Card, Button, Form } from "react-bootstrap";
import backwardArrow from '../assets/backwardarrow.svg'

export default function JobRequirements() {

  return (
    <div className="job-body-main">
      <div className="job-body container">
        <div className="header-body pt-5 pb-4">
            <button><img src={backwardArrow} alt="" className="img-fluid" />CANCEL & GO BACK</button>
            <div className="text-center">
                <h3>Job Requirement</h3>
            </div>
        </div>
      <div className="container-fluid card-main-body">
        {/* <Card className="container card-main-body mt-5 mb-5"> */}
          <Card.Body className="container">
            <Form className="container">
              <div className="d-flex justify-content-between mt-5 mb-4">
                <div>
                  <Form.Group controlId="jobtitle" className="w-100">
                    <Form.Label>
                      <h6>
                        <strong>Job title</strong>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter job title for this job post"
                      className="w-100 job-title-input"
                    />
                  </Form.Group>
                </div>
                <div>
                  <Form.Group controlId="joblocation">
                    <Form.Label>
                      <h6>
                        <strong>Job location</strong>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter job location for this job post"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div>
                  <Form.Group controlId="jobposition">
                    <Form.Label>
                      <h6>
                        <strong>What position type are you offering?</strong>
                      </h6>
                    </Form.Label>
                    <Form.Select>
                      <option value="">Select Job Type</option>
                      <option value="">Web Developement</option>
                      <option value="">Product Design</option>
                      <option value="">Data Analysis</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group controlId="jobposition">
                    <Form.Label>
                      <h6>
                        <strong>What level of experience do you want?</strong>
                      </h6>
                    </Form.Label>
                    <Form.Select>
                      <option value="">
                        Choose the minimum experience level requiremnet
                      </option>
                      <option value="">4-6 Months</option>
                      <option value="">1-2 years</option>
                      <option value="">2-4 years</option>
                      <option value="">3-4 years</option>
                      <option value="">4-5 years</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div>
                <Form.Group controlId="jobdescription">
                  <Form.Label>
                    <h6>
                      <strong>Job Description</strong>
                    </h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter the title of position you want to fill"
                  />
                </Form.Group>
                <Form.Group controlId="minimumqualification">
                  <Form.Label>
                    <h6>
                      <strong>Minimum Qualification</strong>
                    </h6>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter the minimum level of qualification for the position you are hiring for"
                  />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Form.Group controlId="skills">
                    <Form.Label>
                      <h6>
                        <strong>
                          What skills or languages are you looking to hire?
                        </strong>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Add new skill"
                    />
                  </Form.Group>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
                <div>
                  <Form.Group controlId="tools">
                    <Form.Label>
                      <h6>
                        <strong>What tools would be used</strong>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Add new tool"
                    />
                  </Form.Group>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
              </div>
              <Form.Group controlId="responsibilities" className="pt-4">
                <Form.Label>
                  <h6>
                    <strong>Responsibilities</strong>
                  </h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter the list of responsibilities accompanying the positin"
                />
              </Form.Group>
              <div className="d-flex justify-content-between pt-4 pb-5">
                <div>
                  <Form.Group controlId="payrange">
                    <Form.Label>
                      <h6>
                        <strong>What is the pay range?</strong>
                      </h6>
                    </Form.Label>
                    <Form.Select>
                      <option value="">
                        Select Amount
                      </option>
                      <option value="">150,000-250,000</option>
                      <option value="">250,000-350,000</option>
                      <option value="">350,000-450,000</option>
                      <option value="">450,000-650,000</option>
                      <option value="">650,000-750,000</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div>
                  <Form.Group controlId="takingapplicants">
                    <Form.Label>
                      <h6>
                        <strong>For how long will you be taking applicants?</strong>
                      </h6>
                    </Form.Label>
                    <Form.Select>
                      <option value="">
                      Set application deadline
                      </option>
                      <option value="">2-3 weeks</option>
                      <option value="">1 Month</option>
                      <option value="">2 Months</option>
                      <option value="">3 Months</option>
                      <option value="">4 Months</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="button-main pt-3 pb-3">
              <Button type="Submit" className="">
              CANCEL
            </Button>
            <Button type="Submit" className="">
              SUBMIT
            </Button>
              </div>
            </Form>
            {/* <select className="custom-select w-100 h-100">
  <select className="select-selected w-100">Select an option</select>
  <div className="select-items w-100">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </div>
</select> */}
          </Card.Body>
        {/* </Card> */}
      </div>
    </div>
    </div>
  );
}
