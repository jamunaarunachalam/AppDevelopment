import React from 'react'
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Frontpage from './Frontpage';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import sports_icon from '../Fpage/simplistic-sportswoman-taking-selfie-after-sports-training.png';
import logo from '../Fpage/icons8-water-64.png';


import './Nav.css';
import Footer from './Footer';
export default function Nav() {
  const[open,setOpen]=useState(false);
  const handleClick=()=>{
    setOpen(!open);
  }
    const navRef = useRef();

  const showNavbar = ()=> {
       navRef.current.classList.toggle("responsive_nav");
  }
  const user = useSelector(selectUser);const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    
    <div className="body67">
    
    <div className='pic3'>
    <img src='https://i.pinimg.com/originals/00/29/40/002940ab9042c762057576f9c846d984.jpg' height="400px" width="400"></img>
    </div>
    <div className='para'><p>Hydro hub calculates your water <br></br>intake based on your
     weight and  reminds you to<br></br> drink water in a particular time interval</p></div>
     
    <header>
    <div className='hh'>
    <h3>&nbsp;&nbsp;HYDRO HUB</h3></div>
    
    
    <div className='pic2'>
    <img src="https://www.frederickhealth.org/images/blogs/1956-1298_FRHS-Stay_Hydrated_Article.jpg" height="370px" width="1485px"/>
    
    </div>
    
    <div className='too'><p> Get reminders to stay hydrated </p></div>
    {username}
    
    
    <nav ref={navRef}>
    <Link to ="/">Home</Link>
    <Link to ="/login">Login</Link>
    <Link to ="/log">Register</Link>
    <Link to ="/Login">Logout</Link>
    <a href='/#'>Profile</a>
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
    </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars/>
      
    </button>
    
    </header>
    <Footer/>
    <Frontpage click={handleClick}/>
    <Sidebar open={open}/ >
    <div className='sports'>
     <img src={sports_icon} height={300}/>
     </div>
     <div className='logos'>
     <img src={logo} height={30}/>
     </div>
     
     
     
    
    </div>
  )
}
