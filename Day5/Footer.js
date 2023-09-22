import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
    <div className="container text-center">
    <div className="row">
    <div className="col-md-6 col-lg-5 col-12 ft-1">
       <h3><span></span></h3>
       <p><br/> <br/></p> 
       <div className="footer-icons">
       <i class="fab fa-facebook"></i>
       <i class="fab fa-twitter"></i>
       <i class="fab fa-square-instagram"></i>
       <i class="fab fa-linkedin-in"></i>
       </div>
    </div>
    <div className="col-md-6 col-lg-3 col-12 ft-2">
    <h5>Quick Links</h5>
    <ul>
      <li className="nav-item"> 
      <a className="" href="/">Home</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/">Login</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/">Register</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/">Log Out</a>
      </li>
    </ul>
    </div>
    <div className="col-md-6 col-lg-4 col-12 ft-3">
     <h4>Contact Info</h4>
     <p><i class="fa-solid fa-phone-volume"></i> +91 9121324083</p>
     <p><i class="fa-solid fa-envelope"></i>hydrohub@gmail.com</p>
     <p><i class="fa-sharp fa-solid fa-paper-plane"></i>Coimbatore, India.</p>
    </div>
    </div>
    </div>
    <div className="Last-footer">
    <p>Design By Hydro hub</p>
    </div>
    </div>
  )
}
