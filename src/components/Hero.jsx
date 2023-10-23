import React from "react";
import "../styles/hero.css";
import HeroImg from "../assets/HeroImage.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Container hero-sec mt-5">
      <div>
        <img className="w-100 h-100" src={HeroImg} alt="" />
      </div>
      <div className="hero-text mt-3">
        <h2>Explore, Connect And Innovate</h2>
        <p>
          Dive into a world of limitless possibilities, where coding languages
          speak louder than words and digital innovations shape the future.
          Engage in discussions, collaborate on projects, and build lasting
          relationships that could shape your tech journey.
        </p>
        <Link to={"/login"}>
          <div
            type="button"
            className="btn btn-primary p-2 px-4 fs-5 fw-bold rounded"
          >
            Join Community
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
