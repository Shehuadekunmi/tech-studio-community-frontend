import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/shehu.css'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import logo from '../assets/logo.png'

const Footer = () => {
  const [open, setOpen]= useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div>

    <div className={`sidebarr ${open ? 'active' : ''}`}>
      <div className="logo_content d-flex justify-content-between">

        <div className="logo ">
        <img src={logo} alt="" />
        <p className="logo_name">Teach Studio <br /> Community</p>
        </div>

        <AiOutlineMenu id='btn' onClick={handleClick}/>
      </div>

      <ul className="nav_list">
       <li> 
        <AiOutlineSearch className='bx-search'   />
        <input type="text" placeholder='Search...' />
        <span className="tooltip">Search</span>
      </li>
      </ul>

      <ul className="nav_list">
        <li>
          <Link to={''}>
          <box-icon name='dashboard' type='solid' color='#ffffff' ></box-icon>   
                   <span className="links_name">Dashboard</span>  
         </Link>
           <span className="tooltip">Search</span>
       </li>
      </ul>

      <ul className="nav_list">
        <li>
          <Link to={''}>
           <box-icon type='solid' name='dashboard'></box-icon>
            <span className="links_name">Dashboard</span>  
         </Link>
           <span className="tooltip">Search</span>
       </li>
      </ul>

      <ul className="nav_list">
        <li>
          <Link to={''}>
           <box-icon type='solid' name='dashboard'></box-icon>
            <span className="links_name">Dashboard</span>  
         </Link>
           <span className="tooltip">Search</span>
       </li>
      </ul>

      <ul className="nav_list">
        <li>
          <Link to={''}>
           <box-icon type='solid' name='dashboard'></box-icon>
            <span className="links_name">Dashboard</span>  
         </Link>
           <span className="tooltip">Search</span>
       </li>
      </ul>
    </div>

    </div>
  )
}

export default Footer