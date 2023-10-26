import React from 'react'
import Card from 'react-bootstrap/Card';
import upload from '../../assets/upload1.png'
import upload112 from '../../assets/upload1112.png'
import { Link } from 'react-router-dom';
import '../Projectupload/projectupload.css';
import { IoReturnUpBack } from 'react-icons/io5';
import Sidebar from '../../components/Sidebar'
import HeaderDashboard from '../../components/HeaderDashboard';

const ProjectUpload = () => {
  return (
    <div className='my-3 contain'>
        <div className="sidebar-shehu">
      <Sidebar />
      </div>
        <section>

        <div className="shehu-board">
       <HeaderDashboard />
        </div>
            <div className='adex'>           
                    <div className='shehu-link-pub'>
                        <Link><button> <IoReturnUpBack/> Return</button></Link>
                        
                        <h2 className='text-md-center my-3' >Create A Project</h2>
                    </div>

                <form action=""  className='my-lg-5'>

                    <div className='shehu-upload'>
                        <label htmlFor=""> Project title</label> <br />
                        <input type="text" placeholder='Give your project a title' />
                    </div>

                    <div className='shehu-upload'>
                        <label htmlFor=""> Project tags</label> <br />
                        <input type="text" placeholder='add up to 5 keywords to help people discover your project' />
                    </div>


                    <div className='shehu-upload'>
                        <label htmlFor=""> Tools Used</label> <br />
                        <input type="text" placeholder='What software, hardware and/or  material did you use?' />
                    </div>

                    <div className='shehu-upload'>
                        <label htmlFor=""> Project URL  <span>(optional)</span></label> <br />
                        <input type="text" placeholder='Upload project url if needed' />
                    </div>

                    <div className='shehu-upload'>
                        <label htmlFor="">Project description</label> <br />
                        <input type="text" placeholder='Enter description of your project' />
                    </div>

                </form>

                <section className='d-lg-flex my-lg-5'>
                        <div className='text-center mx-auto   shehu-dd'>
                    <Card.Body className='shehu-dd-plus py-md-5'>
                        <div className="">
                        <h3> <img src={upload} alt="" />Upload media</h3> 
                        <p>*media can be an image, video, document in the following formats (jpg, png, mp4, pdf, etc)</p> 
                        
                        </div>
                    </Card.Body>
                    </div>

                    <div className='text-center mx-auto   shehu-dd'>
                    <Card.Body className=' py-md-5'>
                        <div className="">
                            <p> <img src={upload112} alt="" />Upload Thumbnail</p>  
                            <p>*Thumbnail size of at least ‘808x632px’</p> 
                        </div>
                    </Card.Body>
                    </div>
                </section>

                <div className='shehu-butt d-lg-flex my-lg-5'>
                    <button className='button-cancel'>Cancel</button>
                    <button className='button-pub'>Publish project</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProjectUpload