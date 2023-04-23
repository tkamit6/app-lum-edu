import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
      <>
        <header>
            <div className="container">
                <div className="logo"><h1>Portfolio</h1></div>
            <nav>
                <div className="nav-item">
                    <ul>
                        <li><Link href="">Home</Link> </li>
                        <li><Link href="#work">Work</Link> </li>
                        <li><Link href="#cont">Contact</Link> </li>
                        <li><Link href="#get-in-touch">Get in touch</Link> </li>
                    </ul>
                </div>
            </nav>
            <span className="hamburger">
                <i className="fa-solid fa-bars"></i>
                <i className="fa-solid fa-xmark"></i>
            </span>
            </div>
        </header>
        {/* HOME */}
        <section className="home bg-white py-5">
        <div className="container-lg">
            <div className="row min-vh-100 align-items-center align-content-center" >
                <div className="col-md-6">
                    <div className="home-img mx-5 align-content-center align-items-center text-center mt-5 mt-md-0">
                        <img src="IMG_20210629_210454.jpeg" className="mw-10 img-fluid" style={{width:"70%",borderRadius:"200px"}} alt="home" />
                        <div className="red"></div>
                    </div>
                </div>
                <div className="col-md-6 order-md-first" >
                    <div className="home-txt m-5">
                        <p className="text-muted mb-1">Hello my name is </p>
                        <h1 className=" fw-bold">Amit</h1>
                        <h3 >Web Designer</h3>
                        <p className="mt-2">Commerce graduate & Enthusiastic Designer. Further,
                            Skill Set: - HTML, CSS, Bootstrap, WordPress Customize theme development, website design, area of expertise is Photoshop, Bootstrap, JavaScript, J Query, HTML, CSS and WordPress. etc.</p>
                        <div className="btn">
                            <a href="#work" className="work">My Work</a>
                            <a href="https://wa.link/llljf0" className="contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
  )
}

export default Portfolio