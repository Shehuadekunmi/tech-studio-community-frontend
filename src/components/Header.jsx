import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/TSALOGO.png"
import "../styles/header.css"
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="">
      <Navbar expand="lg" className=" Head">
        <Container >
          <Navbar.Brand className="text-success fs-2 fw-bold ">
            <Link to="/" className="">
              <img src={Logo} alt="" />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link
                to="#"
                className="text-decoration-none text-white  fw-bold mx-3"
              >
                Explore Community
              </Link>

              <Link
                to="#"
                className="text-decoration-none text-white fw-bold mx-3"
              >
                Find Talent{" "}
              </Link>
              <Link
                to="#"
                className="text-decoration-none text-white  fw-bold mx-3"
              >
                For You{" "}
              </Link>
        
                <Link
                  to="#"
                  className="text-decoration-none text-white  fw-bold mx-3"
                >
                  <Button variant="primary" className="w-auto fw-bold h-auto">Register</Button>{" "}
                </Link>
                <Link
                  to="#"
                  className="text-decoration-none text-white  fw-bold mx-3"
                >
                  Login{" "}
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
