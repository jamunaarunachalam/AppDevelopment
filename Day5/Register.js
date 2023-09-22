import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import tip from'../Fpage/INTIMINA-blog-146-tips-stay-hydrated-drink-water.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import men from '../Fpage/tiny-young-woman-holding-a-glass-of-water.png'
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

export default function Register() {
   const nav=useNavigate("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[gender,setGender]=useState("");
  const[weight,setWeight]=useState("");
  const[selects,setSelects]=useState();
  const[age,setAge]=useState("");
  const dispatch=useDispatch();
  const handleSubmit=(e)=>
  {
      e.preventDefault();
      
  }
  const authenticate=(e)=>{
    if(username.length==0||password.length==0){
      alert("Enter all fields")
    }
    else if (username && password) {
      dispatch(login(username));
      nav("/");
    }
  }
  return (
    <div className='full'>
       <div className='photo'>
           <img src={tip} height={735} width={1480} alt=''/>
              <div className='glass'>
              <div className='title'>
              <h1>REGISTER</h1>
              </div>
              <div className='menn'>
              <img src={men} height={200} alt=""/>
              </div>
              <div className='form2'>
              <form onSubmit={handleSubmit}> 
              <input type="text"  placeholder= 'Username'  value={username} onChange={ (e)=>setUsername(e.target.value)} name='username' required/><br></br>
    
              <input type="Password" placeholder='password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password'/><br></br> 
              <input type="text" placeholder='Gender' value={gender} onChange={ (e)=>setGender(e.target.value)} name='gender'/><br></br> 
              <input type="number" placeholder='Weight' value={weight} onChange={ (e)=>setWeight(e.target.value)} name='weight'/><br></br>
              <input type="number" placeholder='Age' value={age} onChange={ (e)=>setAge(e.target.value)} name='age'/><br></br>
              
              <Link to ="/login"><button type="submit" className='button' onClick={authenticate}>Register</button></Link></form></div>
              </div>
       </div>
    </div>
  )
}
