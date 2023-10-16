import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import tip from'../Fpage/INTIMINA-blog-146-tips-stay-hydrated-drink-water.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import men from '../Fpage/tiny-young-woman-holding-a-glass-of-water.png'
import axios from 'axios'

import '../Fpage/person.png';
import '../Fpage/password.png';
import '../Fpage/email.png';
import '../Fpage/person.png';
import regg from '../Fpage/224-2244440_register-now-button-register-now-button-png-transparent.png'
import { isAsyncThunkAction } from '@reduxjs/toolkit';




export default function Register() {
   const nav=useNavigate("");
  const[username,setUsername]=useState("");
  const[emailid,setEmail]=useState("");
  const[mobileno,setWeight]=useState("");
  const[password,setPassword]=useState("");
  {/*const[gender,setGender]=useState("");
  const[selects,setSelects]=useState();
const[age,setAge]=useState("");*/}
  
 
  const authenticate=async(e)=>{
    e.preventDefault();
    if(username.length==0||password.length==0){
      alert("Enter all fields")
    }
    
    else {
      localStorage.setItem("mobileno", mobileno);
      await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno
      ,password});
      nav("/")
     }
  };
  return (
    <div className='full'>
    
       <div className='photo'>
      
           <img src={tip} height={735} width={1480} alt=''/>
              <div className='glass'>

              <div className='menn'>
              <img src={men} height={200} alt=""/>
              </div>
              <div className='form2'>
              <form > 
              <input type="text"  placeholder= 'Username'  value={username} onChange={ (e)=>setUsername(e.target.value)} name='username' required/><br></br>
              <input type="email" placeholder='Enter email' value={emailid} onChange={ (e)=>setEmail(e.target.value)}/><br></br><br></br>
              <input type="number" placeholder='Goal  (In ml)' value={mobileno} onChange={ (e)=>setWeight(e.target.value)} name='weight'/><br></br>
              <input type="Password" placeholder='password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password'/><br></br> 
              {/*<input type="text" placeholder='Gender' value={gender} onChange={ (e)=>setGender(e.target.value)} name='gender'/><br></br> 
              
  <input type="number" placeholder='Age' value={age} onChange={ (e)=>setAge(e.target.value)} name='age'/><br></br>*/}
              
              <Link to ="/"><button type="submit" className='button' onClick={authenticate}>Register</button></Link></form></div>
              </div>
       </div>
       <div className='regg'><img src={regg} height={130} width={170}></img></div>
    </div>
  )
}
