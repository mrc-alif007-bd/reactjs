import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
         <>
     {/* Navbar Start */}
<div className="container-fluid sticky-top bg-white shadow-sm">
  <div className="container">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
      <Link to="/" className="navbar-brand">
        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2" />Medinova</h1>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="service.html" className="nav-item nav-link">Service</Link>
          <Link to="price.html" className="nav-item nav-link">Pricing</Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
            <div className="dropdown-menu m-0">
              <Link to="blog.html" className="dropdown-item">Blog Grid</Link>
              <Link to="detail.html" className="dropdown-item">Blog Detail</Link>
              <Link to="team.html" className="dropdown-item">The Team</Link>
              <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
              <Link to="appointment.html" className="dropdown-item">Appointment</Link>
              <Link to="search.html" className="dropdown-item">Search</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  </div>
</div>
{/* Navbar End */}
     </>
  )
}

export default NavBar