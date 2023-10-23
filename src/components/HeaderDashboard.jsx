import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Icon } from '@iconify/react';
import details from '../assets/details.png'
import '../styles/headerDashboard.css'


const HeaderDashboard = () => {
  return (
    <div>

      <Navbar expand="lg" className="   head">
        <Container>
          <Navbar.Brand>
            <Link to="" className="text-decoration-none">

              <h1 className="text-white ps-md-4">Dashboard</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="ms-auto my-2 my-lg-0 d-flex ">
              <div className="mt  ">
                <Nav
                  className="m-auto my-2 my-lg-0 justify-content-betwee gap-3"
                  navbarScroll
                >
                  <Form className="d-flex kk me-lg-3 ">
                  <box-icon name='search' color='#ffffff' ></box-icon>   
                   
                    <input type="text " placeholder="search" className="inp"/>
                  </Form>
                  <Link
                    to="" className="text-decoration-none tag mt-lg-2 ">
                 <Icon icon="mdi:bell-notification-outline" color="white" width="40" height="40"  />
                  </Link>

                  <Link className="text-decoration-none text-white d-flex mt-lg-2 fw-bold tag">
                    <img src={details} alt="" /> <p className="px-lg-2">Wale Ahmed </p> <select name="" id="">lot</select>
                  </Link>
                 

                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default HeaderDashboard