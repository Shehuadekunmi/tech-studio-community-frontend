import "../styles/JobRequirements.css";
import { Card, Button, Form } from "react-bootstrap";
import backwardArrow from "../assets/backwardarrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MultipleChoiceInput from "../Components/Choice";
import "../styles/modal.css";
import V1 from "../assets/Vector1.png";
import JobSubmission from "../Components/JobSubmission";
import Loader from "../components/Loader";

export default function JobRequirements({ jobPosterData }) {
  const navigate = useNavigate();
  const [modal, setModal] = useState({message:""});


  const initialFormData = {
    jobTitle: "",
    jobLocation: "",
    jobType: "",
    jobExperience: "",
    jobDescription: "",
    minimumQualification: "",
    responsibilities: "",
    payRange: "",
    takingApplicants: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [dropDown, setDropDown] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://techstudiocommunity.onrender.com";
  useEffect(() => {
    if (!jobPosterData.id) {
      navigate("/talent");
    }
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/api/jobs/dropdown/?email=${jobPosterData.email}`)
      .then((response) => response.json())
      .then((data) => {
        setDropDown(data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/talent");
      });
  }, []);

  useEffect(() => {
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      selectedSkills: "",
    }));
  }, [selectedSkills]);

  useEffect(() => {
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      selectedTools: "",
    }));
  }, [selectedTools]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form validation logic
    const errors = {};

    if (formData.jobTitle.trim() === "") {
      errors.jobTitle = "Please enter a job title.";
    }

    if (!selectedSkills.length) {
      errors.selectedSkills = "Please add a Skill";
    }

    if (selectedTools.length === 0) {
      errors.selectedTools = "Please add a Tool";
    }

    if (formData.jobLocation.trim() === "") {
      errors.jobLocation = "Please enter a job location.";
    }

    if (formData.jobType.trim() === "") {
      errors.jobType = "Please select a job type.";
    }

    if (formData.jobExperience.trim() === "") {
      errors.jobExperience =
        "Please select the minimum experience level requirement.";
    }

    if (formData.jobDescription.trim() === "") {
      errors.jobDescription = "Please enter a job description.";
    }

    if (formData.minimumQualification.trim() === "") {
      errors.minimumQualification = "Please enter the minimum qualification.";
    }

    if (formData.responsibilities.trim() === "") {
      errors.responsibilities = "Please enter responsibilities.";
    }

    if (formData.payRange.trim() === "") {
      errors.payRange = "Please select a pay range.";
    }

    if (formData.takingApplicants.trim() === "") {
      errors.takingApplicants = "Please select the application deadline.";
    }

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        var requestData = {
          title: formData.jobTitle,
          location: formData.jobLocation,
          deadline: formData.takingApplicants,
          jobposters: jobPosterData.id,
          skills: selectedSkills,
          tools: selectedTools,
          job_type: formData.jobType,
          experience: formData.jobExperience,
          description: formData.jobDescription,
          qualification: formData.minimumQualification,
          responsibilities: formData.responsibilities,
          pays_range: formData.payRange,
        };
        var requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        };

        fetch(`${apiUrl}/api/jobs/posts/`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setModal({message:"Your job posting has been successfully submitted and is now under review by our team."})
          })
          .catch((error) => {
            console.error("An error occurred:", error);
            setModal({message:"An Error Occurred"})
            // Handle the error here
          })
          .finally(() => {
            setLoading(false); // Set loading to false after the request (error or success)
          });
      } catch (error) {
        window.location.reload();
        console.error("An error occurred:", error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the field when it changes
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  return (
    <div className="job-body-main job-requirements-page">
      <div className="job-body container">
        <div className="d-flex pt-5 pb-4 justify-content-center position-relative">
          <Link to={'/talent'}> <button className="position-absolute job-header-button d-flex gap-2 align-items-center d-none d-md-flex start-0">
            <div>
            <img
              src={backwardArrow}
              alt=""
              className="img-fluid job-header-image"
            />
            </div>
            <p className="mt-3">CANCEL & GO BACK</p>
          </button></Link>
          <div className="text-center col-12 col-md-6 mx-md-5">
            <h3 className="job-header text-center">Job Requirement</h3>
          </div>
        </div>
        <div className=" card-main-body">
          <Card.Body className="">
            <Form className="" onSubmit={handleFormSubmit}>
              <div className=" px-2 px-md-5">
              <div className="d-flex justify-content-between my-3  flex-column flex-md-row row">
                <div className="col-12 col-md-6">
                  <Form.Group controlId="jobtitle" className="w-100">
                    <Form.Label>
                      <h6 >
                        <strong>Job title</strong>
                      </h6>
                    </Form.Label>
                    <br />
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      placeholder="Enter job title for this job post"
                      className={`w-100 ${
                        formErrors.jobTitle && "error"
                      }`}
                      onChange={handleFieldChange}
                    />
                    <br />
                    {formErrors.jobTitle && (
                      <small className="text-danger">
                        {formErrors.jobTitle}
                      </small>
                    )}
                  </Form.Group>
                </div>

                <div className="col-12 col-md-6">
                  <Form.Group controlId="joblocation" className="w-100">
                    <Form.Label>
                      <h6>
                        <strong>Job location</strong>
                      </h6>
                    </Form.Label>
                    <br />
                    <input
                      type="text"
                      name="jobLocation"
                      value={formData.jobLocation}
                      onChange={handleFieldChange}
                      className={`w-100 ${
                        formErrors.jobLocation && "error"
                      } `}
                      placeholder="Enter job location for this job post"
                    />
                    <br />
                    {formErrors.jobLocation && (
                      <small className="text-danger">
                        {formErrors.jobLocation}
                      </small>
                    )}
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex justify-content-between my-3 flex-column flex-md-row row">
                <div className="col-12 col-md-6">
                  <Form.Group controlId="jobposition" className="w-100">
                    <Form.Label className="mt-4">
                      <h6>
                        <strong>What position type are you offering?</strong>
                      </h6>
                    </Form.Label>
                    <br />
                    <select
                      placeholder="Select Job Type"
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleFieldChange}
                      className={` ${
                        formErrors.jobType && "error"
                      }  w-100`}
                    >
                      <option value="" disabled>
                        Select Job Type
                      </option>
                      {dropDown.job_type &&
                        dropDown.job_type.map((type, index) => {
                          return (
                            
                              <option key={index} value={type}>
                                {type}
                              </option>
                          
                          );
                        })}
                    </select>
                    <br />
                    {formErrors.jobType && (
                      <small className="text-danger">
                        {formErrors.jobType}
                      </small>
                    )}
                  </Form.Group>
                </div>

                <div className="col-12 col-md-6">
                  <Form.Group controlId="jobposition" className="w-100">
                    <Form.Label className="mt-4">
                      <h6>
                        <strong>What level of experience do you want?</strong>
                      </h6>
                    </Form.Label>
                    <br />
                    <select
                      name="jobExperience"
                      value={formData.jobExperience}
                      onChange={handleFieldChange}
                      className={` w-100 ${
                        formErrors.jobExperience && "error"
                      }`}
                    >
                      <option value="" disabled>
                        Choose the minimum experience level requirement
                      </option>
                      {dropDown.job_experiences &&
                        dropDown.job_experiences.map(
                          (job_experience, index) => {
                            return (
                                <option key={index} value={job_experience}>
                                  {job_experience}
                                </option>
                            );
                          }
                        )}
                    </select>
                    <br />
                    {formErrors.jobExperience && (
                      <small className="text-danger">
                        {formErrors.jobExperience}
                      </small>
                    )}
                  </Form.Group>
                </div>
              </div>
              <div>
                <Form.Group controlId="jobdescription">
                  <Form.Label className="mt-4">
                    <h6>
                      <strong>Job Description</strong>
                    </h6>
                  </Form.Label>
                  <br />
                  <textarea
                    type="text"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleFieldChange}
                    placeholder="Enter the title of position you want to fill"
                    className={` w-100 ${
                      formErrors.jobDescription && "error"
                    }`}
                  />

                  <br />
                  {formErrors.jobDescription && (
                    <small className="text-danger">
                      {formErrors.jobDescription}
                    </small>
                  )}
                </Form.Group>

                <Form.Group controlId="minimumqualification">
                  <Form.Label className="mt-5">
                    <h6>
                      <strong>Minimum Qualification</strong>
                    </h6>
                  </Form.Label>
                  <br />
                  <textarea
                    type="text"
                    name="minimumQualification"
                    value={formData.minimumQualification}
                    onChange={handleFieldChange}
                    className={`w-100 ${
                      formErrors.minimumQualification && "error"
                    } `}
                    placeholder="Enter the minimum level of qualification for the position you are hiring for"
                  />
                  <br />
                  {formErrors.minimumQualification && (
                    <small className="text-danger">
                      {formErrors.minimumQualification}
                    </small>
                  )}
                </Form.Group>
              </div>

              <div className="d-flex justify-content-between flex-column flex-md-row row mt-5 gap-3 gap-md-0 ">
                <div className="multiple-choice col-12 col-md-6">
                  {formErrors.selectedSkills && (
                    <small className="text-danger">
                      {formErrors.selectedSkills}
                    </small>
                  )}
                  <MultipleChoiceInput
                    initialChoices={dropDown.skills ? dropDown.skills : []}
                    jobPosterData={jobPosterData}
                    setSelectedChoices={setSelectedSkills}
                    selectedChoices={selectedSkills}
                    endpoint={"skills"}
                    error={formErrors.selectedSkills}
                  />
                </div>
                <div className="multiple-choice col-12 col-md-6">
                  {formErrors.selectedTools && (
                    <small className="text-danger">
                      {formErrors.selectedTools}
                    </small>
                  )}
                  <MultipleChoiceInput
                    initialChoices={dropDown.tools ? dropDown.tools : []}
                    jobPosterData={jobPosterData}
                    setSelectedChoices={setSelectedTools}
                    selectedChoices={selectedTools}
                    endpoint={"tools"}
                    error={formErrors.selectedTools}
                  />
                </div>
              </div>

              <Form.Group controlId="responsibilities" className="pt-4">
                <Form.Label className="mt-4">
                  <h6>
                    <strong>Responsibilities</strong>
                  </h6>
                </Form.Label>
                <br />
                <textarea
                  type="text"
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleFieldChange}
                  className={` w-100 ${
                    formErrors.responsibilities && "error"
                  }`}
                  placeholder="Enter the list of responsibilities accompanying the position"
                />
                <br />
                {formErrors.responsibilities && (
                  <small className="text-danger">
                    {formErrors.responsibilities}
                  </small>
                )}
              </Form.Group>

              <div className="d-flex justify-content-between py-4 flex-column flex-md-row row ">
                <div className="col-12 col-md-6">
                  <Form.Group controlId="payrange">
                    <Form.Label className="mt-4">
                      <h6>
                        <strong>What is the pay range?</strong>
                      </h6>
                    </Form.Label>
                    <br />
                    <select
                      name="payRange"
                      value={formData.payRange}
                      onChange={handleFieldChange}
                      className={`w-100 ${
                        formErrors.payRange && "error"
                      } `}
                    >
                      <option value="" disabled>
                        Select Amount
                      </option>
                      {dropDown.jobposts_pays &&
                        dropDown.jobposts_pays.map((job_experience, index) => {
                          return (
                              <option key={index} value={job_experience}>
                                {job_experience}
                              </option>
                          );
                        })}
                    </select>
                    <br />
                    {formErrors.payRange && (
                      <small className="text-danger">
                        {formErrors.payRange}
                      </small>
                    )}
                  </Form.Group>
                </div>

                <div className="col-12 col-md-6">
                  <Form.Group controlId="takingapplicants">
                    <Form.Label className="mt-4">
                      <h6>
                        <strong>
                          For how long will you be taking applicants?
                        </strong>
                      </h6>
                    </Form.Label>
                    <br />
                    <select
                      name="takingApplicants"
                      value={formData.takingApplicants}
                      onChange={handleFieldChange}
                      className={`w-100 ${
                        formErrors.takingApplicants && "error"
                      } `}
                    >
                      <option value="" disabled>
                        Set application deadline
                      </option>
                      {dropDown.deadline_choices &&
                        dropDown.deadline_choices.map(
                          (job_experience, index) => {
                            return (
                                <option key={index} value={job_experience}>
                                  {job_experience}
                                </option>
                            );
                          }
                        )}
                    </select>
                    <br />
                    {formErrors.takingApplicants && (
                      <small className="text-danger">
                        {formErrors.takingApplicants}
                      </small>
                    )}
                  </Form.Group>
                </div>
              </div>
              </div>
           
          <div className="pt-3 my-md-5">
            <div className="container-md px-md-5 d-flex button-main justify-content-center gap-3 py-3 justify-content-md-end ">
              <div>
                <Link to={"/talent"}>
                  <button className="cancel-button">CANCEL</button>
                </Link>
              </div>

              <div className="">
                {" "}
                <button
                  className="submit-button"
                  type="submit"
                  // onClick={toggleModal}
                >
                  {loading?<Loader/>:"Submit"}
                </button>{" "}
              </div>
            </div>
          </div>
          </Form>
          </Card.Body>

          {modal.message && (
            <>
              <JobSubmission message={modal.message}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
