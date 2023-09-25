import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="Footer">
    <div className="container text-center">
    <div className="row">
    <div className="col-md-6 col-lg-5 col-12 ft-1">
       <h3><span></span></h3>
       <p><br/> <br/></p> 
       <div className="footer-icons">
       <Link to='https://www.facebook.com/'><i class="fab fa-facebook"></i></Link>
       <Link to='https://www.twitter.com/'><i class="fab fa-twitter"></i></Link>
       <Link to='https://www.instagram.com/'><i class="fab fa-square-instagram"></i></Link>
       <Link to='https://www..linkedin.com/'><i class="fab fa-linkedin-in"></i></Link>
       </div>
    </div>
    <div className="col-md-6 col-lg-3 col-12 ft-2">
    <h5>Quick Links</h5>
    <ul>
    <li className="nav-item"> 
      <Link to="/">Home</Link>
      </li>
      <li className="nav-item"> 
      <Link to="/login">Login</Link></li>
      <li className="nav-item"> 
      <Link to="/log">Register</Link>
      </li>
      <li className="nav-item"> 
      <Link to ="/login">Log Out</Link>
      </li>
      
      
    </ul>
    </div>
    <div className="col-md-6 col-lg-4 col-12 ft-3">
     <h4>Contact Info</h4>
     <p><i class="fa-solid fa-phone-volume"></i> +91 9121324083</p>
     <p><i class="fa-solid fa-envelope"></i>&nbsp;hydro@gmail.com</p>
     <p><i class="fa-sharp fa-solid fa-paper-plane"></i>Coimbatore, India.</p>
    </div>
    </div>
    </div>
    <div className="Last-footer">
    <p>HYDRO HUB</p></div>
    <div className='copy'>
    <p1>Copyright 2008-2015.</p1>
    </div>
    <div className='reserved'>
    <h1>All rights reserved.Powered by the Hydro Hub</h1>
    </div>
    
    
    </div>

    
  )
}
