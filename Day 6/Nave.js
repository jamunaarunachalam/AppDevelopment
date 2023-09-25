import React from 'react'
import logo from '../Fpage/icons8-water-64.png';
import './Nave.css'
import { Link } from 'react-router-dom';
import { useRef,useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
export default function Nave() {
  
  
    const navRef = useRef();
    const showNavbar = ()=> 
    {
       navRef.current.classList.toggle("responsive_nav");
    }
  return (
   
    <div className="body67">
    
    <header>
    <div className='hh'>
    <h3>&nbsp;&nbsp;HYDRO HUB</h3></div>
    <div className='logos'>
     <img src={logo} height={30}/>
     </div>
     
    <nav ref={navRef}>
    <Link to ="/">Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='/log'>Register</Link>
    <Link to='/login'>Logout</Link>
    <Link to ='/about'>About Us</Link>
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
    </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars/>
      
    </button>
    <div>
    <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar' ><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
          <div className="sidebar">
            
            <ul> 
          <Link to ="/goal">Today</Link>
          <Link to="/history">History</Link>
          <Link to="/suggestor">Suggestor</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/feedback">Feedback</Link>
            </ul>
          </div>
    </div>
    </header>
    </div>
  )
}
