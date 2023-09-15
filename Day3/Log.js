import React,{useState} from 'react'
import './Log.css';

export default function Log() {
  const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        
    }
  return (
    <div className='full'>
    <div className='recr1'>
    <div className='imgr'><img src='https://domf5oio6qrcr.cloudfront.net/medialibrary/12598/86c68bee-e424-4c98-a593-9b0d5a770913.jpg' height="600px" width="800px"/>
    <div className='txtr'><h1> Login to Track your daily water intake with  </h1></div>
    <div className='txtr5'><h1>Hydro Hub</h1></div>
    
    <div className='txtr4'><p></p></div>
    </div>
    </div>
    <div className='recr2'>
    <div className='headr1'><h1>LOGIN</h1></div>
    <div className='formr'>
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email<br></br></label>
    <input type="email" placeholder='Enter email' value={email} onChange={ (e)=>setEmail(e.target.value)}/><br></br><br></br>
    <label htmlFor="password">Password<br></br></label>
    <input type="Password" placeholder='Enter Password' value={password} onChange={ (e)=>setPassword(e.target.value)}/><br></br><br></br><br></br>
    <button type="submit" class="button">LOGIN</button>
    </form>

   
    </div>
    </div>
    <div className='recr3'></div>
    </div>
  )
}
