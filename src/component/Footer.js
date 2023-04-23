import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-dark text-white" style={{backgroundColor: "#f1f1f1"}}>
    {/* <!-- Grid container --> */}
    <div className="container pt-4">
      {/* <!-- Section: Social media --> */}
      {/* <section className="mb-4">
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"><i className="fab fa-twitter"></i></a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"><i className="fab fa-google"></i></a> 
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"><i className="fab fa-linkedin"></i></a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"><i className="fab fa-github"></i></a>
      </section> */}
    </div>
<section className='my-4'>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
            <h5>Address:</h5>
            <p>73724 Route 30 <br /> South Richmond Hill, NY 11419 </p>
            <h5>Address:</h5>
            <p>73724 Route 30 <br /> South Richmond Hill, NY 11419 </p>
        </div>
        <div className="col-md-2 ">
          <ul className='list-unstyled f-list-block'> <h5>Help Center </h5>
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">Tutorials</Link></li>
            <li><Link href="#">Term of use</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="col-md-2 clearfix">
          <ul className='list-unstyled f-list-block'><h5> About us </h5>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">News Letter</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className='list-unstyled f-list-block'><h5> Tools </h5>
            <li><a href="#">Create Account</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div className="col-md-2 clearfix">
          <ul className='list-unstyled f-list-block'><h5> Get in Touch </h5>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Invite Us</a></li>
            <li><a href="#">Donate</a></li>
          </ul>
        </div>
      </div>
    </div>
</section>
    <div className="text-center text-dark p-3 footer_bottom">
      © theguyinfitch
      {/* <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  )
}
