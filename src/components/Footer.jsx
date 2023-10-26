import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/shehu.css'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import logo from '../assets/logo.png'
import "../styles/footer.css";
import { BsArrowRightShort } from "react-icons/bs";
import Logo from "../assets/TSALOGO.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { Container } from "react-bootstrap";
const Footer = () => {
  const [open, setOpen]= useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    
      <div className="footer-division">
        <div className="d-md-flex mt-5 py-5 Child-division">
          <div className="Master  ">
            <Link to="#">
            <Link to={'/'}>   <img src={Logo} alt="" /> </Link>
            </Link>
            <p>
              Welcome to Tech studio community hub, where you connect with
              fellow tech enthusiasts, share knowledge, and explore endless
              possibilities.
            </p>
          </div>
          <div className="menu-list ">
            <b>Quick Menu</b>
            <Link to="#" className="text-decoration-none text-start ">
              <p>Community</p>
            </Link>
            <Link to="/talent" className="text-decoration-none text-start ">
              <p>Find Talent</p>
            </Link>
            <a href="http://www.techstudioacademy.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-start"> Go to Main Website</a>
          </div>

          <div className="news-part">
            <h3>Subscribe to our newsletter</h3>
            <div className="d-flex newsin ">
              <input type="email" placeholder="Email address" />
              <button>
                Subscribe <BsArrowRightShort />{" "}
              </button>
            </div>
          </div>
        </div>
        <hr className="mx-5" />
        <div className="d-flex justify-content-center me-5 pb-3 Policy">
          <b>Terms and Policy</b>
          <p>
            {" "}
            <AiOutlineTwitter />
          </p>
          <p>
            <BiLogoInstagram />
          </p>
          <p>
            {" "}
            <BiLogoFacebook />
          </p>
          <p>
            <FaLinkedinIn />
          </p>
        </div>
      </div>
  );
};

export default Footer;
