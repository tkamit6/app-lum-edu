import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bannerHome from '../images/banner1.png'
import chrishBay from '../images/chris-bray-for-f-stop-lounge-profile.png'
import womanRiding from '../images/Woman-riding-a-bike.png'
import lapiBunch from '../images/Lapi-Buch.png'
import womanFreLancing from '../images/1926169.png'
import acoustic from '../images/3596153-acoustic-guitar-wallpaper-hd.png'
import vectoSmart from '../images/Vector Smart Object.png'
import wordpressBlog from '../images/wordpress-blog.png'
import redesignWebste from '../images/redesign-website-part-2.png'
import flatDesign from '../images/flat-design.png'
import hacking from '../images/hacking.png'
import networking from '../images/networking.png'
import internetMarketing from '../images/internet-marketing-banner1.png'
import teamPic from '../images/02_team.png'
import pexelPhoto from '../images/pexels-photo-213117.png'
import googlePic from '../images/bg-image-top-cour/google.png'
import learnedLady from '../images/learnedLady.png'
import learnedMale from '../images/learnedMale.png'

const Home = () => {
  const [state, setstate] = useState(
    {
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      c_password:""
    }
  );
  const saveData =(e)=>{
    e.preventDefault()
    console.log(state)
  }
  const handler =(e)=>{
    const {name,value}=e.target
    
    setstate({...state,[name]:value})
    // console.log(valu);
  }
  return (
    <>
      <div className="container-fluid bg_color home-banner pt-3" style={{zIndex:"-1"}}>
        <div className="row text-center text-light" >
        <div className="col-12">
          <h1>Learn Excilence in Teaching.</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          {/* <button>Explore Course<s/button> */}
          <div className="btn">Explore Course</div>
          <img src={bannerHome} className="img-fluid" alt="image" draggable="false" />
        </div>
        </div>
      </div>
      <section style={{backgroundColor:"#f4f8ff"}}>
        <div className="container text-center py-4">
          <div className="row">
            <div className="col-12">
              <div className="course-categ-heading">
              <h3>Course Categories</h3>
              <hr />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-2 course-categ">
            <div className="cont-box">
              <i className="fa-solid fa-code"></i>
              <p>Development</p>
            </div>
            </div>
            <div className="col-md-2 course-categ">
            <div className="cont-box">
              <i className="fa-solid fa-desktop"></i>
              <p>Software</p>
            </div>
            </div>
            <div className="col-md-2 course-categ">
            <div className="cont-box">
              <i className="fa-solid fa-paintbrush"></i>
              <p>Design</p>
            </div>
            </div>
            <div className="col-md-2 course-categ">
            <div className="cont-box">
              <i className="fa-solid fa-suitcase"></i>
              <p>Business</p>
            </div>
            </div>
            <div className="col-md-2 course-categ">
            <div className="cont-box">
              <i className="fa-solid fa-leaf"></i>
              <p>Lifestyle</p>
            </div>
            </div>
            <div className="col-md-2 course-categ">
              <div className="cont-box">
              <i className="fa-solid fa-camera"></i>
              <p>Photography</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 course-categ">
              <div className="cont-box">
              <i className="fa-brands fa-joomla"></i>
              <p>Joomla</p>
              </div>
            </div>
            <div className="col-md-2 course-categ">
              <div className="cont-box">
              <i className="fa-brands fa-wordpress"></i>
              <p>Wordpress</p>
              </div>
            </div>
            <div className="col-md-2 course-categ">
              <div className="cont-box">
              <i className="fa-solid fa-language"></i>
              <p>Language</p>
              </div>
            </div>
            <div className="col-md-2 course-categ">
              <div className="cont-box">
              <i className="fa-solid fa-music"></i>
              <p>Music</p>
              </div>
            </div>
            <div className="col-md-2 course-categ">
              <div className="cont-box">
              <i className="fa-solid fa-image"></i>
              <p>Photoshop</p>
              </div>
            </div>
            <div className="col-md-2 course-categ">
              <div className="cont-box">
              <i className="fa-solid fa-heart-pulse"></i>
              <p>Medicine</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row top-course">
            <div className="col-md-6">
              <div className="top-course-box">
                <h2>Top Courses</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="view-more-box">
                <Link to="#">View More</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={chrishBay}  className="img-fluid" alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={womanRiding} className="img-fluid" alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={lapiBunch} className="img-fluid" alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={womanFreLancing} className="img-fluid" alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={acoustic} className="img-fluid" alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={vectoSmart} alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{backgroundColor:"#f4f8ff"}}>
        <div className="container my-4 py-5" >
          <div className="row">
            <div className="col-12">
              <div className="popular-cour-box-head">
                <h2>Discover Our Popular Course</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, odit.</p>
              </div>
            </div>
            <div className="row n">
              <div className="col-md-4">
                <div className="popular-cour-box">
                  <h5>Top Rated</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="popular-cour-box">
                  <h5>Trending</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="popular-cour-box">
                  <h5>New and Noteworthy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row top-course">
            <div className="col-md-6">
              <div className="top-seller-box">
                <h2>Best Sellers Course</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="view-more-box">
                <Link to="#">View More</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={wordpressBlog}  className="img-fluid" alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={redesignWebste} className="img-fluid" alt="image" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={flatDesign} className="img-fluid" alt="image" draggable="false" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={hacking} className="img-fluid" alt="image" draggable="false" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={networking} className="img-fluid" alt="image" draggable="false" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="img-holder">
                  <img src={internetMarketing} alt="image" draggable="false" />
                </div>
                  <div className="img-desc">
                    <h4>Conceptual Art, Photography and Wild Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad voluptatibus quas magnam adipisci architecto!</p>
                    <div className="price">
                      <h3>$159.00</h3>
                      <p className='review-star'></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{backgroundColor:"#f4f8ff", marginTop:"4.4rem"}}>
        <div className="container pb-5">
            <div className="client">
                  <div className="row">
                    <div className="col-12">
                      <div className="client-aspi">
                        <h2>Client’s Appriciation</h2>
                        <p>Lorem ipsum, dolor sit amet. Repudiandae asperiores reprehenderit, error aut corporis ab.</p>
                      </div>
                    </div>
                  </div>
                <div className="row ro">
                    <div className="col-md-6">
                      <div className="client-aspi-quate">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aperiam officiis adipisci tempore neque, officia distinctio optio, minus debitis suscipit cumque ratione praesentium doloremque ipsa temporibus culpa, ad facere enim!</p>
                      </div>
                      <div className="img-holder">
                        <img src={teamPic} alt="image" draggable="false" />
                        <div className="detail">
                          <h5>John Doe</h5>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="you-box">
                        <img src={pexelPhoto} className="img-fluid" alt="image" draggable="false" />
                      </div>
                    </div>
                </div>
          </div>
        </div>
      </section>
      <section style={{backgroundColor:"#f4f8ff"}} className='py-2'>
        <div className="owl-box">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
                <div className="owl-head">
                  <h5>LMSedu is trusted by 322,000+ students and companies worldwide</h5>
                </div>
            </div>
              <div className="owl-carousel">
                <div className="item">
                  <div className="img-box">
                    <img src={googlePic} alt="image" className='img-fluid' draggable="false" />
                  </div>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={googlePic} alt="image" className='img-fluid' draggable="false" />
                  </div>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={googlePic} alt="image" className='img-fluid' draggable="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>
      <section className='s'>
        <div className="container" >
          <div className="row contact-box">
            <div className="col-md-2">
              <img src={learnedLady} className='img-fluid' alt="imgage" draggable="false" />
            </div>
            <div className="col-md-4">
              <p>Start your courses! <span> Try now for free </span> </p>
              <h5 className='h5'>Are you ready to work faster?</h5>
            </div>
            <div className="col-md-4">
                <div className="form-outer-box">
                  <div className="heading">
                    <h2>Apply Now</h2>
                  </div>
                  <div className="input-fields">
                    <form onSubmit={saveData}>
                        <input type="text" className='form-control input-contro' name='first_nane' onChange={handler} placeholder='First Name' />
                        <input type="text" className='form-control input-contro' name='last_name' onChange={handler} placeholder='Last Name' />
                        <input type="email" className='form-control input-contro' name='email' onChange={handler} placeholder='E-mail Address' />
                        <input type="password" className='form-control input-contro' name='password' onChange={handler} placeholder='Choose Password' />
                        <input type="password" className='form-control input-contro' name='c_password' onChange={handler} placeholder='Confirm Password' />
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree with the terms and conditions</label>
                      </div>
                      <div className="btn-box">
                      <Link to="/register">
                        <input type="submit" value="Apply Now" className="btn btn-primary"/> 
                      </Link>
                        <h5>or call us <br /> <span>+49 123 456 789</span></h5>
                      </div>
                    </form>
                    <Link to="">I already have an account</Link>
                  </div>
                </div>
            </div>
            <div className="col-md-2">
              <img src={learnedMale} className='img-fluid' alt="image" draggable="false" />
            </div>
          </div>
          </div>
      </section>
      <section className='text-center newletter py-4'>
      <div className="news-box py-3">
        <div className="email-box">
        {/* <input type="text" placeholder='Become A Instructor' className='input' />
        <input type="submit" className='bt' /> */}
        <Link to='/create' className=' btn btn-primary'>Share Your Message to us</Link>
        </div>
      </div>
      </section>
    </>
  )
}

export default Home