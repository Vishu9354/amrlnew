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
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Teaching</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            People
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Faculty</a></li>
            <li><a class="dropdown-item" href="#">Students</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Research Activites
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Funded Projects</a></li>
            <li><a class="dropdown-item" href="#">PhD Research</a></li>
            <li><a class="dropdown-item" href="#">Student Projects</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Facilities</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Collaboration
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">National</a></li>
            <li><a class="dropdown-item" href="#">International</a></li>
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
          <a class="nav-link" href="#">Gallery</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
)
}
