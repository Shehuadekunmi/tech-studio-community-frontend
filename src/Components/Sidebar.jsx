import React from 'react'
import logo from '../assets/logod.png'
import 'boxicons'
import '../styles/sidebar.css'
import { Icon } from '@iconify/react';
import comm from '../assets/comm.png'
const Sidebar = () => {
  return (
    <div>
     
        <section className='sidebar text-white'>
          <div className="img d-flex ">
            <img src={logo} alt="" />
          </div>
            
            <div className='text-center hom  my-lg-2 my-1'>
              <p> <Icon icon="ic:baseline-dashboard" width="30" height="30" className='icon' /> <span className="mx-md-1"> Dashboard</span> </p>
            </div>

            <div className='text-center movie  my-lg-2 my-1'>
              <p> <img src={comm} alt="" />  <span className="mx-md-1 "> Community</span> </p>
            </div>

            <div className='text-center tv  my-lg-2  my-1'>
              <p> <Icon icon="streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close" width="30" height="30" className='icon'  /> <spam className="mx-md-3"> Projects</spam>  </p>
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

{/* 
        <select name="" id="">
          <option value="one"></option>
          <option value="orfef"></option>
          <option value="onedf"></option>
          <option value="onewwef"></option>
        </select> */}
        
    </div>
  )
}

export default Sidebar