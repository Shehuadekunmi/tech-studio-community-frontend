import React from 'react'
import study from '../../assets/study.png'
import tech from '../../assets/tech.png'
import prof4 from '../../assets/prof4.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import '../profile/profile.css'


const Profile = () => {
  return (
    <div className='container'>
        profile
        <div className="shehu-profile-img">
          <img src={study} alt="" />
          <img src={tech} alt="" />
          <img src={study} alt="" />
        </div>
        <div className="prof4"> <img src={prof4} alt="" /> </div> 


          <section className="shehu-prof-text my- px-2 text-center d-md-flex  mx-md-4">
             
             <div className="first">
                <h3>Wale Ahmed</h3>
                <p>Product Designer</p>
                <p className='ps-5'>Cohort - August, 2023.</p>
                <p> <Icon icon="ion:location-outline" /> Lagos  Nigeria</p>
             </div>

             <div className="second d-flex gap-3 mx-auto ">
              <div className=''>
                <h4>440</h4>
                <p>Followers</p>
              </div>

              <div className="vert"></div>

              <div>
                <h4>65</h4>
                <p>Projects</p>
              </div>
             </div>

             <div className="third">
                <Link> <button className='btn btn-primary'> Edit Profile</button></Link>
             </div>
          </section>

          <div className="about-me px-2 px-md-3 my-4 px-lg-5">
            <h2>About Me</h2>
            <p>Hi there! I'm  Wale Ahmed  and I'm on a mission to create innovative and user-centric product experiences. 
              With a background in Creative Design, I bring a unique blend of creativity and technical expertise to every project I undertake.
               I am an innovative UI/UX designer who combines both creative and usability.</p>
          </div>
    </div>
  )
}

export default Profile