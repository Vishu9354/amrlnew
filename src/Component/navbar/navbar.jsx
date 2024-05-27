import React from 'react'
import '../CSS/navbar.css'
import {Link} from "react-router-dom"
import {Route,Routes} from "react-router-dom"

export default function navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" >Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Teaching">Teaching</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            People
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Faculty">Faculty</Link></li>
            <li><Link class="dropdown-item" to="/Stu">Students</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Research
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Funded">Funded Projects</Link></li>
            <li><Link class="dropdown-item" to="/PHD">PhD Research</Link></li>
            <li><Link class="dropdown-item" to="/Student">Student Projects</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Activites
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Award">Awards</Link></li>
            <li><a class="dropdown-item" href="#">Conferences</a></li>
            <li><a class="dropdown-item" href="#">Invited Talk</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Facility">Facilities</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Collaboration
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Collaboration">National</Link></li>
            <li><Link class="dropdown-item" to="/Icollaboration">International</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/Publication" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Publication
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Publication">Journal</Link></li>
            <li><Link class="dropdown-item" to="/PaPublication">Research paper</Link></li>
            <li><Link class="dropdown-item" to="/BaPublication">Books/Book chapter</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
)
}
