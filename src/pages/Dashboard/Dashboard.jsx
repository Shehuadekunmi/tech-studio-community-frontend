import React, { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar'
import HeaderDashboard from '../../components/HeaderDashboard';
import gal from '../../assets/gal.png'
import gif from '../../assets/gif.png'
import hero from '../../assets/hero.png'
import details from '../../assets/details.png'
import study from '../../assets/study.png'
import { Icon } from '@iconify/react';
import tech from '../../assets/tech.png'
import logo from '../../assets/logo.png'
import '../Dashboard/dashboard.css'
import { Link } from "react-router-dom";
import Heart from 'react-animated-heart'


const Dashboard = () => {
const initialLike = JSON.parse(window.localStorage.getItem('likes')) || 1;
  const [likes, setLikes] = useState(initialLike);

  const handleHeartClick = () => {
    setClick(!isClick);
    if (!isClick) {
      setLikes(likes + 1);
    } else{
      setLikes(likes - 1)
    }
  };

  const initialClick = JSON.parse(window.localStorage.getItem('isClick')) || false;
  const [isClick, setClick] = useState(initialClick);

  useEffect(() => {
    window.localStorage.setItem('likes', likes)
    window.localStorage.setItem('isClick', isClick);
  }, [isClick, likes]);
  return (
    <div>
      <div className="sidebar-shehu">
      <Sidebar />
      </div>
      <section className=''>
       <div className="shehu-board">
       <HeaderDashboard />
        </div>

        <section className="ps-md-4  shehu-dash">
          <p className='pt-md-3'>What Have You Been Up To?!</p>

          
          <div className='d-flex justify-content-between me-5 my-5 py-'>
            <div><img src={gal} alt="" /> <img src={gif} alt="" className='mx-3' /> <img src={hero} alt="" /> </div>
            <div> <Link className='text-decoration-none'><button className='bt'>Post</button></Link></div>
          </div>
          <hr />

          <p className="feed">News Feed</p>

          <div>

            <div className="details d-flex gap-3">
              <img src={details} alt="" />
              <div className="tex ">
                <h3>Adewunmi Haleemah  <span>12 mins ago</span></h3>
                <p>Product Design. Aug 2023</p>
              </div>
            </div>

            <h4 className='my-3 ps-lg-3'>My team and I just completed a case study we have been working on for like 5 weeks now which is called CRITIK check it out👇👇👇.</h4>

            <div className='shehu-img'>

              <img src={study} alt="" />

              <div className="lov d-flex justify-content-between me-5 mt-3">

                <Icon icon="system-uicons:message-writing" width="30" height="30" className='ico' />

                <div className='d-flex'>
            <Heart isClick={isClick} onClick={handleHeartClick} />
            <div className="likes-count heart">{likes}</div>
                </div>

                <Icon icon="tdesign:share" width="30" height="30" className='ico' />
              </div>
            </div>

          </div>
            <hr />

            <div className='my-5'>

            <div className="details d-flex gap-3 ">
              <img src={logo} alt="" />
              <div className="tex ">
                <h3>TechStudioAcademy <span>2 Days ago</span></h3>
                <p>Company</p>
              </div>
            </div>

            <h4 className='my-3 ps-lg-3'>We are 5 today!!!🎉🎉🎉🎉🎉🎉🎉🎉.</h4>

            <div className='shehu-img'>
              <img src={tech} alt="" />
              <div className="lov d-flex justify-content-between me-5 mt-3">
                <Icon icon="system-uicons:message-writing" width="30" height="30" className='ico' />
                <div className='d-flex'>
                <Heart isClick={isClick} onClick={handleHeartClick} />
               <div className="likes-count heart">{likes}</div>
                </div>       <Icon icon="tdesign:share" width="30" height="30" className='ico' />
              </div>
            </div>

          </div>

          <hr />



        </section>

      </section>
    </div>
  )
}

export default Dashboard