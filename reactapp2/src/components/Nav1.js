import React from 'react'
import { Link } from 'react-router-dom'
function Nav1() {
  return (
    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/service">Service</Link> |{" "}
        <Link to="/car">Car</Link> |{" "}
        <Link to="/form">Form</Link>
      </nav>
  )
}

export default Nav1