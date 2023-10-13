import "../styles/JobRequirements.css";
import { Card, Button, Form } from "react-bootstrap";
import backwardArrow from '../assets/backwardarrow.svg'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MultipleChoiceInput from "../Components/Choice";
// import spinner from "../Components/Loader"

export default function JobRequirements({jobPosterData}) {
  const navigate =useNavigate()
  
  const initialFormData = {
    jobTitle: '',
    jobLocation: '',
    jobType: '',
    jobExperience: '',
    jobDescription: '',
    minimumQualification: '',
    responsibilities: '',
    payRange: '',
    takingApplicants: '', 
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [dropDown,setDropDown] = useState({})
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiUrl = 'https://techstudiocommunity.onrender.com'
  useEffect(() => {
    if (!jobPosterData.id) {
      navigate('/talent');
    }
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/api/jobs/dropdown/?email=${jobPosterData.email}`)
      .then((response) => response.json())
      .then((data) => {
        setDropDown(data);
      })
      .catch((error) => {
        console.log(error)
        navigate('/talent');
      });
  }, []);

  useEffect(() => {
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      selectedSkills: '',
    }));
  }, [selectedSkills]);

  useEffect(() => {
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      selectedTools: '',
    }));
  }, [selectedTools]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form validation logic
    const errors = {};

    if (formData.jobTitle.trim() === '') {
      errors.jobTitle = 'Please enter a job title.';
    }

    if (!selectedSkills.length){
      errors.selectedSkills = "Please add a Skill"
    }

    if (selectedTools.length === 0){
      errors.selectedTools = "Please add a Tool"
    }

    if (formData.jobLocation.trim() === '') {
      errors.jobLocation = 'Please enter a job location.';
    }

    if (formData.jobType.trim() === '') {
      errors.jobType = 'Please select a job type.';
    }

    if (formData.jobExperience.trim() === '') {
      errors.jobExperience = 'Please select the minimum experience level requirement.';
    }

    if (formData.jobDescription.trim() === '') {
      errors.jobDescription = 'Please enter a job description.';
    }

    if (formData.minimumQualification.trim() === '') {
      errors.minimumQualification = 'Please enter the minimum qualification.';
    }

    if (formData.responsibilities.trim() === '') {
      errors.responsibilities = 'Please enter responsibilities.';
    }

    if (formData.payRange.trim() === '') {
      errors.payRange = 'Please select a pay range.';
    }

    if (formData.takingApplicants.trim() === '') {
      errors.takingApplicants = 'Please select the application deadline.';
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
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        };
    
        fetch(`${apiUrl}/api/jobs/posts/`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
          })
          .catch(error => {
            console.error('An error occurred:', error);
            // Handle the error here
          })
          .finally(() => {
            setLoading(false); // Set loading to false after the request (error or success)
          });
      } catch (error) {
        window.location.reload();
        console.error('An error occurred:', error);
      }
    } else {
      setFormErrors(errors);
    }
  }
    

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the field when it changes
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

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
            <Form className="container" onSubmit={handleFormSubmit}>
              <div className="d-flex justify-content-between mt-5 mb-4">
                <div>
                  <Form.Group controlId="jobtitle" className="w-100">
                    <Form.Label>
                      <h6>
                        <strong>Job title</strong>
                      </h6>
                    </Form.Label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      placeholder="Enter job title for this job post"
                      className={`w-100 h-100 ${formErrors.jobTitle && "error"} job-title-input`}
                      onChange={handleFieldChange}
                    />
                    {formErrors.jobTitle && (
                    <small className="text-danger">{formErrors.jobTitle}</small>)}
                  </Form.Group>
                </div>

                <div>
                  <Form.Group controlId="joblocation">
                    <Form.Label>
                      <h6>
                        <strong>Job location</strong>
                      </h6>
                    </Form.Label>
                    <input
                      type="text"
                      name="jobLocation"
                      value={formData.jobLocation}
                      onChange={handleFieldChange}
                      className={`w-100 h-100 ${formErrors.jobLocation && "error"} job-location-input`}
                      placeholder="Enter job location for this job post"
                    />
                    {formErrors.jobLocation && (
                    <small className="text-danger">{formErrors.jobLocation}</small>)}
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
                    
                    <Form.Select 
                     placeholder="Select Job Type"
                     name="jobType"
                    value={formData.jobType}
                    onChange={handleFieldChange}
                    className={` ${formErrors.jobType && "error"}`}
                    >
                    <option value="" disabled>
                      Select Job Type
                    </option>
                      {dropDown.job_type && dropDown.job_type.map((type,index)=>{
                        return(<>
                        <option key={index} value={type}>{type}</option>
                        </>)
                      })}
                    </Form.Select>
                    {formErrors.jobType && (
                    <small className="text-danger">{formErrors.jobType}</small>)}
                  </Form.Group>
                </div>

                <div>
                  <Form.Group controlId="jobposition">
                    <Form.Label>
                      <h6>
                        <strong>What level of experience do you want?</strong>
                      </h6>
                    </Form.Label>
                    <Form.Select 
                    name="jobExperience"
                    value={formData.jobExperience}
                    onChange={handleFieldChange}
                    className={` ${formErrors.jobExperience && "error"}`}
                    >
                    <option value="" disabled>
                      Choose the minimum experience level requirement
                    </option>
                      {dropDown.job_experiences && dropDown.job_experiences.map((job_experience,index)=>{
                        return(<>
                        <option key={index} value={job_experience}>{job_experience}</option>
                        </>)
                      })}
                    </Form.Select>
                    {formErrors.jobExperience && (
                    <small className="text-danger">{formErrors.jobExperience}</small>)}
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
                  <br />
                  <input
                    type="text"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleFieldChange}
                    placeholder="Enter the title of position you want to fill"
                    className={` ${formErrors.jobDescription && "error"} job-description-input`}
                  />
                  {formErrors.jobDescription && (
                  <small className="text-danger">{formErrors.jobDescription}</small>)}
                </Form.Group>

                <Form.Group controlId="minimumqualification">
                  <Form.Label>
                    <h6>
                      <strong>Minimum Qualification</strong>
                    </h6>
                  </Form.Label>
                  <br />
                  <input
                    type="text"
                    name="minimumQualification"
                    value={formData.minimumQualification}
                    onChange={handleFieldChange}
                    className={` ${formErrors.minimumQualification && "error"} minimum-qualification-input`}
                    placeholder="Enter the minimum level of qualification for the position you are hiring for"
                  />
                  {formErrors.minimumQualification && (
                <small className="text-danger">{formErrors.minimumQualification}</small>)}
                </Form.Group>
              </div>

              <div className="d-flex justify-content-between gap-5 mt-5">
              <div className="multiple-choice">
              {formErrors.selectedSkills && (
                    <small className="text-danger">{formErrors.selectedSkills}</small>)}
              <MultipleChoiceInput initialChoices={dropDown.skills?dropDown.skills:[]} jobPosterData={jobPosterData} setSelectedChoices={setSelectedSkills} selectedChoices={selectedSkills} endpoint={"skills"} error = {formErrors.selectedSkills}/>
              </div>
              <div className="multiple-choice">
              {formErrors.selectedTools && (
                    <small className="text-danger">{formErrors.selectedTools}</small>)}
              <MultipleChoiceInput initialChoices={dropDown.tools?dropDown.tools:[]} jobPosterData={jobPosterData} setSelectedChoices={setSelectedTools} selectedChoices={selectedTools} endpoint={"tools"} error ={formErrors.selectedTools}/>
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
                 name="responsibilities"
                 value={formData.responsibilities}
                 onChange={handleFieldChange}
                 className={` ${formErrors.responsibilities && "error"}`}
                  placeholder="Enter the list of responsibilities accompanying the position"
                />
                {formErrors.responsibilities && (
          <small className="text-danger">{formErrors.responsibilities}</small>)}
              </Form.Group>

              <div className="d-flex justify-content-between pt-4 pb-5">
                <div>
                  <Form.Group controlId="payrange">
                    <Form.Label>
                      <h6>
                        <strong>What is the pay range?</strong>
                      </h6>
                    </Form.Label>
                    <Form.Select
                    name="payRange"
                    value={formData.payRange}
                    onChange={handleFieldChange}
                    className={` ${formErrors.payRange && "error"}`}
                    >
                    <option value="" disabled>
                      Select Amount
                    </option>
                    {dropDown.jobposts_pays && dropDown.jobposts_pays.map((job_experience,index)=>{
                        return(<>
                        <option key={index} value={job_experience}>{job_experience}</option>
                        </>)
                      })}
                    </Form.Select>
                    {formErrors.payRange && (
          <small className="text-danger">{formErrors.payRange}</small>)}
                  </Form.Group>
                </div>

                <div>
                  <Form.Group controlId="takingapplicants">
                    <Form.Label>
                      <h6>
                        <strong>For how long will you be taking applicants?</strong>
                      </h6>
                    </Form.Label>
                    <Form.Select
                    name="takingApplicants"
                    value={formData.takingApplicants}
                    onChange={handleFieldChange}
                    className={` ${formErrors.payRange && "takingApplicants"}`}
                    >
                    <option value="" disabled>
                      Set application deadline
                    </option>
                    {dropDown.deadline_choices && dropDown.deadline_choices.map((job_experience,index)=>{
                        return(<>
                        <option key={index} value={job_experience}>{job_experience}</option>
                        </>)
                      })}
                    </Form.Select>
                    {formErrors.takingApplicants && (
                  <small className="text-danger">{formErrors.takingApplicants}</small>)}
                  </Form.Group>
                </div>
              </div>
              <div className="button-main pt-3 pb-3">
              <Link to={"/talent"}><Button className="">
              CANCEL
            </Button>
            </Link>

            <div className="button"> <button className='btn btn-primary' type='submit'>Submit</button> </div> 
              </div>
            </Form>
          </Card.Body>
        {/* </Card> */}
      </div>
    </div>
    </div>
  );
}
