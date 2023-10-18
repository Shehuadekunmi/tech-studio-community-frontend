import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dot from "../assets/dot.svg";
import can from "../assets/can.svg";
import frame from "../assets/Frame.svg";
import layer from "../assets/Layer.svg";
import "../pages/find talent/style.css";
import Loader from "./Loader";

const FindtalentSec1 = ({ SetJobPosterData }) => {
  const apiUrl = "https://techstudiocommunity.onrender.com";
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  function handlecheck(e) {
    if (e.target.name === "email") setError2("");
    if (e.target.name === "name") setError1("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "") {
      setError1("error");
      return;
    }
    if (mail === "" || !mail.includes("@") || !mail.includes(".com")) {
      setError2("error");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/jobs/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: name,
          email: mail,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        SetJobPosterData(data);
        navigate("/jobrequirement");
      } else {
        // window.location.reload();
        console.error("API request failed");
      }
    } catch (error) {
      // window.location.reload();
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="one d-md-flex justify-content-between">
        <div className="text">
          <div>
            <h1 className="py-3">Find the best talents to grow your team</h1>
            <p>
              TechStudio is relied upon by a good amount if great companies for
              finding competent talents. We mould our talents to fit into their
              needed positions and your company culture.
            </p>
          </div>
        </div>
        <div className="form">
          <div className="for">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className={`my-4 ps-2 ${error1}`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handlecheck(e);
                }}
              />
              <input
                name="email"
                placeholder="Your Email"
                className={`mb-2 ps-2 ${error2}`}
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                  handlecheck(e);
                }}
              />
              <br />
              <div className="button">
                <button className="btn btn-primary" type="submit">
                  {loading ? <Loader /> : "Get Started"}
                </button>
              </div>
              <br />
            </form>
          </div>
          <img src={dot} alt="" />
        </div>
      </section>

      <section className="two text-center my-5">
        <h1 className="py-md-4">How Techstudio works for employers</h1>
        <div className=" d-md-flex flex-wrap justify-content-center">
          <div className="my-5 do">
            <img src={layer} alt="" />
            <h2>Post a job</h2>
            <p>
              Create an account and a befitting profile to attract job offers
              with ease. Your profile shows employers what make you
            </p>
          </div>
          <div className="my-5 do">
            <img src={frame} alt="" />
            <h2>Review & Shortlist</h2>
            <p>
              Create aa position on Hired and specify the skills and experience
              you ‘re looking for
            </p>
          </div>
          <div className="my-5 do">
            <img src={can} alt="" />
            <h2>Interview & hire</h2>
            <p>
              Create an account and a befitting profile to attract job offers
              with ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindtalentSec1;
