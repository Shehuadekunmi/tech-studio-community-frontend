import React from 'react'
import { Link } from 'react-router-dom'
import vec from '../assets/Vector.svg'
import vec5 from '../assets/Vector5.svg'
import vec2 from '../assets/Vector2.svg'
import vec3 from '../assets/Vector3.svg'
import vec4 from '../assets/Vector4.svg'

const FindtalentSec2 = () => {
    return (
        <div className=' py-lg-5'>

            <section className="sec21 text-center  ">
                <h1 className='py-md-5'>Hire to fill the most in-demand roles</h1>
                <div className=" text-center d-md-flex flex-wrap">
                    <div className='hire'>
                        <img src={vec} alt="" />
                        <h2>Software Engineers</h2>
                        <p>Learn the user experience, client management, technical,
                            and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
                    </div>
                    <div className='hire'>
                        <img src={vec2} alt="" />
                        <h2>Front-end Developers</h2>
                        <p>Learn the user experience, client management, technical,
                            and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
                    </div>
                    <div className='hire'>
                        <img src={vec3} alt="" />
                        <h2>UI/UX Designers</h2>
                        <p>Learn the user experience, client management, technical,
                            and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
                    </div>
                    <div className='d-md-flex'>
                        <div className='hire sp my-lg-5'>
                            <img src={vec4} alt="" />
                            <h2>Back-end Developers</h2>
                            <p>Learn the user experience, client management, technical,
                                and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
                        </div>
                        <div className='hire sp1 my-lg-5'>
                            <img src={vec5} alt="" />
                            <h2>Data Analyst</h2>
                            <p>Learn the user experience, client management, technical,
                                and practical skills you need to launch a career as a user experience (UX) or user interface (UI) designer.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="sec22 text-center my-5 py-5 ">
                <div className='d-md-flex'>
                    <div className='text1'>
                        <div>
                        <h2>Let’s help you hire</h2>
                        <p>Let our team of recruitment experts find the right talents fit for you. Based on your requirements,
                             we will shortlist talents with matching skills and
                             help you schedule interviews with them. We will assist you every step of the way.</p>
                             </div>
                    </div>
                    <div className='my-4 form1'>
                        <form action="">
                            <input type="text" placeholder='Your Name'  className='my-3 ps-2'/> <br />
                            <input type="text" placeholder='Company Name'  className='my-3 ps-2'/> <br />

                            <input type="email" placeholder='Company Email' className='my-3 ps-2' /> <br />

                            <input type="text" placeholder='What role do you want to fill?' className='my-3 mb-lg-5 ps-2' /> <br />

                            <div className="button"> <Link><button className='btn btn-primary'>Get Started</button></Link> </div>  <br />

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FindtalentSec2