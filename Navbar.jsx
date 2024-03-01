import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../Redux/AuthSlice/AuthSlice';
export default function Navbar() {

  const navigate =useNavigate()
   const location = useLocation();
   const fullURL= location.pathname;
   console.log(fullURL, "fullURL");
   const isLoginorRegister = fullURL ==="/login" || fullURL ==="/register";


  const token = localStorage.getItem("token");
  const dispatch =useDispatch()
  const handleLogout =()=>{
    dispatch(logout());
    navigate('/login');

  }
  return (
    <>
    {!isLoginorRegister && 
    <>
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}


  {/* Spinner End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <Link to="/" className="navbar-brand">
      <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3" />Kider</h1>
    </Link>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto">
        <Link to="/" className="nav-item nav-link active">Home</Link>
     <Link to="/about" className="nav-item nav-link">About Us</Link>
     <Link to="/classes" className="nav-item nav-link">Classes</Link>
     <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
            <Link to="/facility" className="dropdown-item">School Facilities</Link>
            <Link to="/team" className="dropdown-item">Popular Team</Link>
            <Link to="/teachers" className="dropdown-item">Become A Teachers</Link>
            <Link to="/appointment" className="dropdown-item">Make Appointment</Link>
            <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
            <Link to="*" className="dropdown-item">404 Error</Link>
          </div>
        </div>
        <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
      </div>
       {token ?(
     <button onClick={handleLogout} className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
      Logout<i className="fa fa-arrow-right ms-3" /></button>
      ):(
        <Link to='/login' className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Login<i className="fa fa-arrow-right ms-3" /></Link>
      )}
      </div>
  </nav>
  {/* Navbar End */}
</div>

</>
}
    </>
  )
}
