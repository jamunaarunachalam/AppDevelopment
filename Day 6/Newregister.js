import React,{useState} from 'react'
import './Newregister.css';
import email_icon from '../Fpage/email.png'
import person_icon from '../Fpage/person.png'
import password_icon from '../Fpage/password.png'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './userSlice';

//import Dashboard from './Dashboard';
export default function Newregister() {

  const nav=useNavigate("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const dispatch=useDispatch();
  const handleSubmit=(e)=>
  {
      e.preventDefault();
      if(username.length==0||password.length==0){
        alert("Enter all fields")
      }
      else if (username && password) {
        dispatch(login(username));
        nav("/");
      }
      
  }
 
  
  return (
    
    <div className='bgrect'>
   
   
    <div className='bgrect1'>
    <div className='pic'><img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/12598/86c68bee-e424-4c98-a593-9b0d5a770913.jpg" height="677px" width="1485px"/>
    </div>
    <div className='boxy33'></div>
    <div className='bgrect2'>
    <div className='underline2'></div>
   
    <div className='header'>
         <div className='text'>Login</div>
         <div className='underline'></div>
      </div>
      <div className='fpassword'>Don't you have an account?</div>
    
    <div className='form1'>
    <form onSubmit={handleSubmit}>
    
    <div className='image1'>
    <img src={person_icon} height={20}></img>
    </div>
    <div className='image2'>
    <img src={password_icon} height={25}></img>
    </div>
    <input type="text"  placeholder= 'Username'  value={username} onChange={ (e)=>setUsername(e.target.value)} name='username' required/><br></br>
    
    <input type="Password" placeholder='password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password'/><br></br>
   <Link to="/"> <button type="submit" className='button1' onClick={handleSubmit}>Login</button></Link>
    </form></div>
    <Link to="/log"><button type="submit" className='button2'>Sign Up</button></Link>
    <div className='line3'></div>
    <div className='line4'></div>
    <div className='line5'></div>
    
    </div>
    </div>
    </div>
  )
}
