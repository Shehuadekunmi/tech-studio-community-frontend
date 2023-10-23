import React from 'react'
import { Link } from 'react-router-dom'
import dot from '../assets/dot.svg'
import can from '../assets/can.svg'
import frame from '../assets/Frame.svg'
import layer from '../assets/Layer.svg'
import '../pages/find talent/style.css'

const FindtalentSec1 = () => {
  return (
    <div>
      <section className="one d-md-flex justify-content-between">
        <div className="text">
          <div>
          <h1 className='py-3'>Find the best talents to grow your team</h1>
          <p>TechStudio is relied upon by a good amount if great companies for finding competent talents.
            We mould our talents to fit into their needed positions and your company culture.</p>
            </div>
        </div>
        <div className="form">
          <div className="for">
            <form action="">
              <input type="text" placeholder='Your Full Name' className='my-4 ps-2' />
              <input type="email" placeholder='Your Email' className='mb-2 ps-2' /> <br />
              <div className="button"> <Link><button className='btn btn-primary'>Get Started</button></Link> </div>  <br />
            </form>
          </div>
          <img src={dot} alt="" />

        </div>
      </section>


      <section className="two text-center my-5">
        <h1 className='py-md-4'>How Techstudio works for employers</h1>
        <div className=" d-md-flex flex-wrap justify-content-center">
        <div className='my-5 do'>
          <img src={layer} alt="" />
          <h2>Post a job</h2>
          <p>Create an account and a befitting profile to attract job offers with ease. Your profile shows employers what make you</p>
        </div>
        <div className='my-5 do'>
          <img src={frame} alt="" />
          <h2>Review & Shortlist</h2>
          < p className='px-md-1'> Create a position on Hired and specify the skills and experience you‘re looking for</p>
        </div>
        <div className='my-5 do'>
          <img src={can} alt="" />
          <h2>Interview & hire</h2>
          <p>Create an account and a befitting profile to attract job offers with ease.</p>
        </div>
        </div>
      </section>
    </div>
  )
}

export default FindtalentSec1