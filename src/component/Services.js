import React from 'react'
import img1 from '../component/assets/img/awards-2.jpg'
// import {FaDesktop, FaMobileAlt, FaDraftingCompass} from 'react-icons/fa';
import angImg from '../component/assets/img/16-Web-Angular-e1519542183168.png';
import reactImg from '../component/assets/img/react-js-blog-header_compressed.jpg';
import nodeImg from '../component/assets/img/30-Web-NodeJS-e1519543686179.png';
import androidImg from '../component/assets/img/android_logo-1.png';
import iosImg from '../component/assets/img/ios_logo_resized.jpg';
import flutterImg from '../component/assets/img/Google-flutter-logo.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
    <section id='home'>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h1>
                Web andd Mobile App <span> Development Company in India</span>
                </h1>
                <p>
                Our services activate superior experiences in order to build memorable creations for consumers. We are a digital agency that creates a lasting experience with everything it does.
                </p>
                <img src={img1} alt="img" />
                <div className="btn">
                    <Link to="*">GET IN TOUCH</Link>
                </div>
            </div>
        </div>
    </div>
    <div className="container home-2 my-5">
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                <div className="col-md-4">
                <p>SERVICES</p>
                 <h2>Fusion of Design and Technology</h2>
                 <div className="btn"> Know More</div>
                </div>
                <div className="col-md-8">
                <div className="icon-con">
                    {/* <i><FaDesktop/></i> */}
                    <p>Web Development</p>
                </div>
                <div className="icon-con">
                    {/* <i><FaMobileAlt/></i>     */}
                    <p>Mobile App Development</p>  
                </div>
                <div className="icon-con">
                    {/* <i><FaDraftingCompass/></i> */}
                    <p>UI UX Designing</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section id='tool-tech' >
    <div className="container my-5">
            <div className='description'>
                <h4>TOOLS & TECHNOLOGIES</h4>
                <p>In-house masters of contemporary technologies that embody server-side and front-end stacks.</p>
            </div>
        <div className="row">
            <div className="col-md-2">
                <div className="card">
                    <img src={angImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={reactImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={nodeImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={androidImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={iosImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={flutterImg} className="card-img-top" alt="img"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                <div className="card">
                    <img src={angImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={reactImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={nodeImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={androidImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={iosImg} className="card-img-top" alt="img"/>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <img src={flutterImg} className="card-img-top" alt="img"/>
                </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default Services