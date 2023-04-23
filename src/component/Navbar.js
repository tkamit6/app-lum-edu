import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <header className='sticky-top mobile bg_color'>
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-3">
                        <NavLink className="navbar-brand" href="#">LMS <span>edu</span></NavLink>
                    </div>
                    <div className="col-7">
                    </div>
                    <div className="col-2">
                        <a className="btn btn-theme" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i className="fa fa-bars"></i>
                        </a>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header bg_color">
                                <NavLink className="navbar-brand " to="/">LMS <span>edu</span></NavLink>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/blog" className="nav-link">Course</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/services" className="nav-link">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/create" className="nav-link">Message Us</NavLink>
                                    </li>
                                   
                                </ul>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'> <NavLink className="nav-link d-none"><i className="fa-solid fa-magnifying-glass"></i></NavLink></li>
                                    <li className='nav-item'> <NavLink className="nav-link" to="/register"> Register</NavLink></li>
                                    <li className='nav-item'> <NavLink className="nav-link" to="Maintainece"> Login</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <nav className="navbar sticky-top navbar-expand-lg desktop bg_color">
            <div className="container">
                <NavLink className="navbar-brand me-5" to="/">LMS <span>edu</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/blog">Course</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Maintainece">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/create">Message Us</Link>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search"> */}
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                <ul className='navbar-nav'>
                    <li className='nav-item'> <NavLink className="nav-link"> <i className="fa-solid fa-magnifying-glass"></i></NavLink></li>
                    <li className='nav-item'> <NavLink className="nav-link"><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                    <li className='nav-item'> <NavLink className="nav-link" to="/register"> Register </NavLink></li>
                    <li className='nav-item'> <NavLink className="nav-link" to="/Maintainece"> Login</NavLink></li>
                </ul>
                {/* </form> */}
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar