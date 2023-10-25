import React, { useState } from 'react'
import logo from '../assets/logod.png'
import 'boxicons'
import '../styles/sidebar.css'
import { Icon } from '@iconify/react';
import comm from '../assets/comm.png'
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Sidebar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container'>

      <section>
     <div  className="shehu-mob">
        <box-icon name='menu-alt-left' color='#ffffff'  onClick={handleShow}></box-icon>
     </div>

      <Offcanvas show={show} onHide={handleClose} className=' w-75'>
        <Offcanvas.Header closeButton className='shehu-mobile'>
          <Offcanvas.Title ><img src={logo} alt="" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='shehu-mobile '>
        <section className=' text-white'>
            
            <div className='text-center hom my-2'>
              <p> <Icon icon="ic:baseline-dashboard" width="30" height="30" className='icon' /> <span className="mx-1"> Dashboard</span> </p>
            </div>

            <div className='text-center movie  my-2'>
              <p> <img src={comm} alt="" />  <span className="mx-1 "> <select name="" id="">
                <option value="">Community</option>
                <option value="">Developer</option>
                <option value="">UI/UX</option>
                <option value="">Data Analyst</option>
              
              </select></span> </p>
            </div>

            <div className='text-center tv  my-2 '>
              <p> <Icon icon="streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close" width="30" height="30" className='icon'  />
               <span className="mx-3"> Projects</span>  </p>
            </div>

            <div className='text-center up  my-2  '>
              <p> <Icon icon="mingcute:user-4-line" width="30" height="30" className='icon'  /> <span className="mx-3"> Profile </span></p>
            </div>

            <div className='text-center up  my-2  '>
              <p><Icon icon="ep:setting" width="30" height="30" className='icon'   /> <span className="mx-3">  Settings </span></p>
              
            </div>

            <div className='text-center tv pt-5 mt-5 '>
              <p><Icon icon="ic:baseline-copyright" width="20" height="20" className='icon'   /> <span className="mx-">  Copyright </span></p>
              <p>TSA Interns | Aug23 </p>
            </div>
        </section>

        </Offcanvas.Body>
      </Offcanvas>
      </section>
     
        <section className='sidebar text-white'>
          <div className="img d-flex ">
            <img src={logo} alt="" />
          </div>
            
            <div className='text-center hom  my-lg-2 my-1'>
              <p> <Icon icon="ic:baseline-dashboard" width="30" height="30" className='icon' /> <span className="mx-md-1"> Dashboard</span> </p>
            </div>

            <div className='text-center movie  my-lg-2 my-1'>
            <p> <img src={comm} alt="" />  <span className="mx-1 "> <select name="" id="">
                <option value="">Community</option>
                <option value="">Developer</option>
                <option value="">UI/UX</option>
                <option value="">Data Analyst</option>
              
              </select></span> </p>
            </div>

            <div className='text-center tv  my-lg-2  my-1'>
              <p> <Icon icon="streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close" width="30" height="30" className='icon'  /> <span className="mx-md-3"> Projects</span>  </p>
            </div>

            <div className='text-center up  my-lg-2   my-1'>
              <p> <Icon icon="mingcute:user-4-line" width="30" height="30" className='icon'  /> <span className="mx-md-3"> Profile </span></p>
            </div>

            <div className='text-center up  my-lg-2   my-1'>
              <p><Icon icon="ep:setting" width="30" height="30" className='icon'   /> <span className="mx-md-3">  Settings </span></p>
              
            </div>

            <div className='text-center tv pt-lg-5   -1'>
              <p><Icon icon="ic:baseline-copyright" width="20" height="20" className='icon'   /> <span className="mx-md-">  Copyright </span></p>
              <p>TSA Interns | Aug23 </p>
            </div>
        </section>


        
    </div>
  )
}

export default Sidebar