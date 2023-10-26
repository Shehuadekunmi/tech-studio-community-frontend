import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import details from '../../assets/details.png'
import study from '../../assets/study.png'
import { Icon } from '@iconify/react';
import '../Dashboard/dashboard.css'
import { Link } from "react-router-dom";
import Heart from 'react-animated-heart'
import Sidebar from '../../components/Sidebar'
import HeaderDashboard from '../../components/HeaderDashboard';
import '../postdetails/postdetails.css'

const PostDetails = () => {

    const initialLike = JSON.parse(window.localStorage.getItem('likes')) || 0;
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

      <section>
      <div className="shehu-board">
       <HeaderDashboard />
        </div>

        <div className='shehu-projcetdetails22'>   
<div>

    <box-icon name='left-arrow-alt' flip='horizontal' width='48' animation='burst' ></box-icon>
    <hr />
</div>

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

<div className="d-flex flex-wrap justify-content-between text-center mx-1 mx-md-3">
    <div className='d-flex gap-5 shehu-comment details '>
    <img src={details} alt="" className='mt-2' />

    <input type="text" name="" id="" placeholder='Write A Comment' className='' />
    </div>

    <div> <Link className='text-decoration-none'><button className='bt my-2 '>Post</button></Link></div>
</div>
<hr />

<div className="details d-flex gap-3 mx-1 mx-md-3 mb-5">
  <img src={details} alt="" />
  <div className="tex ">
    <h3>Adewunmi Haleemah  <span>12 mins ago</span></h3>
    <h6>Nice work haleemah, great case study.</h6>
  </div>
</div>
    
</div> 
</section>
    </div>
  )
}

export default PostDetails