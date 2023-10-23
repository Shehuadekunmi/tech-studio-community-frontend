import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import prof from '../../assets/prof.png'
import '../Community/community.css'

const Community = () => {
  return (
    <div className='container'>Community
        <div className="shehu-title my-5 d-flex justify-content-between">
            <div className='d-md-flex gap-md-3'>
            <p>Web Development</p>
            <p>Product Design</p>
            <p>Data Analysis</p>
            </div>
           <button></button>
        </div>


<div className="shehu-card-body ">
        <Card style={{ width: '18rem' }} className='text-center shehu-card' >
      <img src={prof} alt="" />
      <Card.Body >
        <h2>Ola Jack</h2>
        <h5>Data Analysis</h5>
        <h5>Cohort - August, 2023. </h5>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='text-center shehu-card' >
      <img src={prof} alt="" />
      <Card.Body >
        <h2>Ola Jack</h2>
        <h5>Data Analysis</h5>
        <h5>Cohort - August, 2023. </h5>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='text-center shehu-card' >
      <img src={prof} alt="" />
      <Card.Body >
        <h2>Ola Jack</h2>
        <h5>Data Analysis</h5>
        <h5>Cohort - August, 2023. </h5>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='text-center shehu-card' >
      <img src={prof} alt="" />
      <Card.Body >
        <h2>Ola Jack</h2>
        <h5>Data Analysis</h5>
        <h5>Cohort - August, 2023. </h5>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Community