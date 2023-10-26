import React from 'react'
import upload from '../../assets/upload.png'
import edit from '../../assets/edit.png'
import '../editeProfile/edit.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Sidebar from '../../components/Sidebar'
import HeaderDashboard from '../../components/HeaderDashboard';

const Edit = () => {
  return (
    <div className='contain'>

<div className="sidebar-shehu">
      <Sidebar />
      </div>
      <section>
        <div>
        <div className="shehu-board">
       <HeaderDashboard />
        </div>
        </div>

        <div className="shehu-edit-edit">

     <div className="d-flex justify-content-between shehu-croxx my-2 mt-lg-5">
     <h4 className='ps-4 my- my-lg-1'>Edit Profile</h4>
     <Link to={'/profile'}><Icon icon="maki:cross" color="red" width="25" height="25" /> </Link>
      </div> 

      <div className="editimg ">
      <div className="edit"> <img src={edit} alt="" /> </div> 
        <div>
        <label htmlFor="file">  <img src={upload} alt="" className='upload' /> </label>
        <input type="file" id='file' className='invisible' />
        </div>
      </div>
      <form className="shehu-all"> 


          <section className="shehu-edit  d-md-flex justify-content-between mx-3 ">
          <div className="shehu-edit-one ">
            <label htmlFor="">First Name</label> <br />
            <input type="text" placeholder='First Name'  required/>
          </div>

          <div className="shehu-edit-one">
            <label htmlFor="">Last Name</label> <br />
            <input type="text" placeholder='Last Name'  required/>
          </div>
        </section>

        <section className="shehu-edit  d-md-flex justify-content-between mx-3 ">
          <div className="shehu-edit-one">
            <label htmlFor="">Email</label> <br />
            <input type="email" placeholder='Email'  required/>
          </div>

          <div className="shehu-edit-one">
            <label htmlFor="">Mobile Number</label> <br />
            <input type="number" placeholder='Mobile Number'  required/>
          </div>
        </section>

          <section className="shehu-edit  d-md-flex justify-content-between mx-3 ">
          <div className="shehu-edit-one">
            <label htmlFor="">Community Group</label> <br />
            <input type="text" placeholder='eg Developer group'  required/>
          </div>

          <div className="shehu-edit-one"> 
            <label htmlFor="">Cohort</label> <br />
            <input type="text" placeholder='August, 2023.'  required/>
          </div>
        </section>

        <section className="shehu-edit  d-md-flex justify-content-between mx-3 ">
          <div className="shehu-edit-one">
            <label htmlFor="">Behance URL</label> <br />
            <input type="text" placeholder='Behance URL'  required/>
          </div>

          <div className="shehu-edit-one">
            <label htmlFor="">LinkedIn URL or Github</label> <br />
            <input type="text" placeholder='LinkedIn URL or Github'  required/>
          </div>
        </section>

        <section className="shehu-edit  d-md-flex justify-content-between mx-3 ">
          <div className="shehu-edit-on">
            <label htmlFor="">About Me</label> <br />
            <textarea name="" id="" cols="30" rows="10" required placeholder='Type your About Me here'></textarea> 
          </div>
        </section>

         <div className="link"> <Link className='text-decoration-none link2'><button className='btn btn-primary my-3 my-lg-1 mx-3'>Save Changes</button></Link> </div>
        </form>
        </div>
        </section>
    </div>
  )
}

export default Edit