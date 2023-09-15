import React,{useState} from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
 const nav=useNavigate("");
  const[username,setName]=useState("");
  const[password,setPassword]=useState("");
  const[gender,setGender]=useState("");
  const[weight,setWeight]=useState("");
  const[selects,setSelects]=useState();
  

  const handleSubmit=(e)=>
  {
      e.preventDefault();
     
  }
  const authenticate=(e)=>{
    if(username.length==0||password.length==0||gender.length==0||weight.length==0||selects.length==0){
      alert("Enter all fields")
    }
    else{
      nav("/log")
    }
  }
  
  return (
    <div className='rect1'>
    
    <div className='box1'/>
    
    <div className='img1'>
    <img src="https://www.frederickhealth.org/images/blogs/1956-1298_FRHS-Stay_Hydrated_Article.jpg" height="330px" width="1485px"/>
    
    
    
    
    <div className='fst'></div>
    
    
   
    
    </div>
    <div className='scndhalf'>
    <div className='grandpa'><img src="https://doulton.in/wp-content/uploads/2021/07/Hydration-Reminder-for-You-Reminder-to-Drink-Water-Everyday.jpg" height="200px" width="300px"/></div>
    <div className='child'><img src="https://suburbanessexdental.com/wp-content/uploads/2021/08/water.jpg" height="180px" width="280px"/></div>
    <div className='hide'>
    <div className='rem1'><p>Set a hydration remainder</p><p> for your children</p></div>
    <div className='rem2'><p>Set a hydration remainder</p><p> for your dad</p></div></div>
    
    <div className='form1'><form onSubmit={handleSubmit}>
    
    <label htmlFor="username">Name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="username" placeholder='Username' value={username} onChange={ (e)=>setName(e.target.value)} name='username'/><br></br><br></br>
    <label htmlFor="password">Password :&nbsp;&nbsp;</label>
     <input type="Password" placeholder='********' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password'/><br></br><br></br>
    <label htmlFor="gender">Gender : &nbsp;&nbsp;&nbsp; </label>
    <input type="gender" placeholder='Male/Female/Other' value={gender} onChange={ (e)=>setGender(e.target.value)} name='gender'/><br></br><br></br>
    <label htmlFor="weight">Weight :&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="number" placeholder='In kg' value={weight} onChange={ (e)=>setWeight(e.target.value)} name='weight'/><br></br><br></br>
    <label htmlFor="Season">Current Season : </label>
    <select value={selects} onChange={e=>setSelects(e.target.value)}><option></option><option>Summer</option><option>Winter</option><option>Spring</option><option>Autumn</option></select><br></br><br></br>
    <button type="submit" onClick={authenticate}>Submit</button>
    </form>
    </div>
    <div className='title'><h>HYDRO </h></div>
    <div className='title1'><h>hub</h></div>
    
    </div>
    </div>
  )
}
