import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import Logo from "../assets/TSALOGO.png"
import "../styles/header.css"
const Header2 = () => {
  return (
    <div className='container'>
      <Navbar expand="lg" className="Head">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav" className="g-5">
            <Nav className="m-auto p-auto">
              <Link
                to="#"
                className="text-decoration-none text-white   py-2  fw-bold mx-3 tag"
              >
                Explore Community
              </Link>
              <Link
                to="#"
                className="text-decoration-none text-white py-2  fw-bold mx-3 tag"
              >
                Find Talent
              </Link>
              <Link
                to="#"
                className="text-decoration-none text-white    py-2 fw-bold mx-3 tag"
              >
                For You
              </Link>
            </Nav>
            <Nav>
              <Link to="#">
                <Button
                  variant="primary"
                  className="w-auto  h-auto my-1 text-white  fw-bold mx-2 tag"
                >
                  Register
                </Button>{" "}
              </Link>
              <Link
                to="#"
                className="text-decoration-none text-white  fw-bold mx-3 my-2 tag"
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header2