import React from 'react'
import img1 from '../component/assets/img/Services.png'
import serviceImg1 from '../component/assets/img/14-2-370x370.jpg'
import serviceImg2 from '../component/assets/img/17-1-370x370.jpg'
import serviceImg3 from '../component/assets/img/12-10-370x370.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
  
<div>


        <div className='container-fluid service'>
            <div className='container'>
                <div className='row'>
                  <div className='col-md-6 service-img'>
                  <img src={img1} alt="img"/>
                  </div>
                  <div className='col-md-6 service-text'>
                    <h4>OUR ABILITIES</h4>
                    <p>Our motto is to go beyond and to stay with our clients through thick and thin. Our expertise in various services will help everything we build stand-out and perform.</p>
                  </div>
                </div>
            </div>
       <div className='container suite-services'>
       <div className='text'>
        <h2>Our Suite of Services</h2>
        <p>Before we start working for you, we work closely with you to understand you or your company’s culture and the idea behind it, after that we start with a clear action plan with an accurate time and budget.</p>
       </div>
       <div className='row card-row'>
        <div className="card" style={{width: '18rem'}}>
        <img src={serviceImg1} className="card-img-top" alt="img"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
        <img src={serviceImg2} className="card-img-top image-fluid" alt="img"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
        <img src={serviceImg3} className="card-img-top" alt="img"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>        
       </div>
       </div>
        </div>
        <section id='wanna-break'>
          <div className='container-fluid '>
          <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
            <h1>Wanna Break The Ice?</h1>
            </div>
            <div className='col-md-6'>

<Link to='/register'>            <div className='btn-service'>  LET'S GET IN TOUCH</div></Link>
          </div>
          </div>
          </div>
          </div>
        </section>
        </div>   
  
    )
}

export default Blog