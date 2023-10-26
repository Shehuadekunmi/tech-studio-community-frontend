import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import prof from '../../assets/prof.png'
import '../Community/community.css'
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'
import HeaderDashboard from '../../components/HeaderDashboard';

const Community = () => {
  return (
      <div className='contain '>
<div className="sidebar-shehu">
      <Sidebar />
      </div>

        <section>
        <div className="shehu-board">
       <HeaderDashboard />
        </div>

          <div className='shehu-comm'>
          <div className="shehu-title my-5 d-flex justify-content-between">
              <div className='d-md-flex gap-md-3'>
              <p>Web Development</p>
              <p>Product Design</p>
              <p>Data Analysis</p>
              </div>
            {/* <button></button> */}
          </div>
      <div className="shehu-card-body ">
          <Card style={{ width: '16rem' }} className='text-center shehu-card' >
        <img src={prof} alt="" />
        <Card.Body >
          <h2>Ola Jack</h2>
          <h5>Data Analysis</h5>
          <h5>Cohort - August, 2023. </h5>
        <Link to='/profile'>  <Button variant="primary w-100">View Profile</Button> </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '16rem' }} className='text-center shehu-card' >
        <img src={prof} alt="" />
        <Card.Body >
          <h2>Ola Jack</h2>
          <h5>Data Analysis</h5>
          <h5>Cohort - August, 2023. </h5>
        <Link to='/profile'>  <Button variant="primary w-100">View Profile</Button> </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '16rem' }} className='text-center shehu-card' >
        <img src={prof} alt="" />
        <Card.Body >
          <h2>Ola Jack</h2>
          <h5>Data Analysis</h5>
          <h5>Cohort - August, 2023. </h5>
        <Link to='/profile'>  <Button variant="primary w-100">View Profile</Button> </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '16rem' }} className='text-center shehu-card' >
        <img src={prof} alt="" />
        <Card.Body >
          <h2>Ola Jack</h2>
          <h5>Data Analysis</h5>
          <h5>Cohort - August, 2023. </h5>
        <Link to='/profile'>  <Button variant="primary w-100">View Profile</Button> </Link>
        </Card.Body>
      </Card>
      </div>

      

      </div>
      </section>
      </div>
  )
}

export default Community