import React from 'react'
import '../ProjectList/projectlist.css'
import { Icon } from '@iconify/react';
import min from '../../assets/min.png'
import mind from '../../assets/mind.png'
import UI from '../../assets/UI.png'
import Card from 'react-bootstrap/Card';
import Heart from 'react-animated-heart'
import {AiOutlineEye} from 'react-icons/ai'
import dele from '../../assets/dele.png'
import Sidebar from '../../components/Sidebar'
import HeaderDashboard from '../../components/HeaderDashboard';
import { BsHeart} from 'react-icons/bs'

const ProjectList = () => {
  return (
    <div >

<div className="sidebar-shehu">
      <Sidebar />
      </div>

<section>
<div className="shehu-board">
       <HeaderDashboard />
        </div>

  <div className='containe projectlist'>
        <div className="d-flex  justify-content-between mx-md-3 my-4 mx-1">
            <h5>project Name</h5>
        </div>

  <div className="shehu-list ">

    <div className='text-center mx-auto   dd'>
      <Card.Body className='shehu-card-plus py-md-5'>
        <div className="shehu-list-icon">
        <Icon icon="typcn:plus" width="50" height="50" />  
           <p>Create a Project</p> 
           <p>Get feedback, views & appreciation</p>
        </div>
      </Card.Body>
    </div>

    <section className=''>
     <div className="dele">  <img src={dele} alt="" /> </div>
         <div className='shehu-eye'>
               <img src={UI} alt="" /> 
           <div className='d-flex justify-content-between my-1'>
             <p>Uploaded 4hrs ago</p>
            <div className='d-flex'>
             <div className="art"> <BsHeart/> </div>
             <Icon icon="bi:eye" width="30" height="30" />
             </div>
        </div>
       </div>
     </section>

     <section className=''>
     <div className="dele">  <img src={dele} alt="" /> </div>
         <div className='shehu-eye'>
         <img src={UI} alt="" /> 
         <div className='d-flex justify-content-between my-1 '>
           <p>Uploaded 4hrs ago</p>
          <div className='d-flex '>
            <div className="art "> <BsHeart/> </div>
             {/* <AiOutlineEye/> */}
             <Icon icon="bi:eye" width="30" height="30" />
           </div>
        </div>
       </div>
     </section>

     <section className=''>
     <div className="dele">  <img src={dele} alt="" /> </div>
         <div className='shehu-eye'>
         <img src={UI} alt="" /> 
         <div className='d-flex justify-content-between my-1'>
           <p>Uploaded 4hrs ago</p>
          <div className='d-flex'>
            <div className="art"> <BsHeart/> </div>
             {/* <AiOutlineEye/> */}
             <Icon icon="bi:eye" width="30" height="30" />
           </div>
        </div>
       </div>
     </section>

</div>

</div>
</section>
    </div>
  )
}

export default ProjectList