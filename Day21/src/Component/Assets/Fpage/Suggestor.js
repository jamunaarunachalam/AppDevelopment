import React ,{useState} from 'react'
import gify from '../Fpage/healthy-water-drinking-water.gif'
import './Suggestor.css'
import  suggcir from  '../Fpage/water_loader.gif'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nave from './Nave';

export default function Suggestor() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [activity, setActivity] = useState('');
    const [climate, setClimate] = useState('');
    const nav=useNavigate("");
    const details={age,weight,activity,climate}
    
    const [waterIntake, setWaterIntake] = useState(null);
  
    
    const calculateWaterIntake = (e) => {
      e.preventDefault();
      {
        if(age.length==0 && weight.length==0 && activity.length==0 && climate.length==0)
         {
           alert("Enter Age,Weight,Activity level and Climate")
         }
         else if(age.length===0)
         {
           alert("Enter Age")
         }
         else if(weight.length===0)
         {
           alert("Enter Weight");
         }
         else if(activity.length===0)
         {
           alert("Enter Activity Level");
         }
         else if(climate.length===0)
         {
           alert("Enter Climate");
         }
         else 
         {
           axios.post("http://localhost:8080/postSuggestor",{age,weight,activity,climate});
          
       
         }
       }
  
      
      const baseIntake = 0.035; 
      const adjustedIntake = baseIntake * weight;
  
      
      let activityMultiplier = 1.0;
      if (activity === 'low') {
        activityMultiplier = 0.5;
      } else if (activity === 'moderate') {
        activityMultiplier = 0.75;
      } else if (activity=== 'high') {
        activityMultiplier = 1.0;
      }
  
  
      let climateMultiplier = 1.0;
      if (climate === 'hot') {
        climateMultiplier = 1.2;
      } else if (climate === 'cold') {
        climateMultiplier = 0.8;
      }
  
      const totalIntake = adjustedIntake * activityMultiplier * climateMultiplier;
      
      
      setWaterIntake(totalIntake);
    };
  return (
    <div className='suggfull'>
    <div className='waterloader'><img src={suggcir} height={300} width={300}></img></div>
    <div className='giffy'><img src={gify} height={500} width={900}></img>
    <div className='sugg'>
    <h2>Water Intake Calculator</h2>
    
      <form onSubmit={calculateWaterIntake}>
      <button type="submit" >Calculate</button> <br />
      <br/>
        
          <input type="number" placeholder='Enter your age' value={age} onChange={(e) => setAge(e.target.value)} />
        
        <br />
       
          <input type="number" placeholder='Enter your weight-kg)' value={weight} onChange={(e) => setWeight(e.target.value)} />
       
        <br />
        
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="">Select an Activity Level</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        
        <br />
        
          <select value={climate} onChange={(e) => setClimate(e.target.value)}>
            <option value="">Select a Climate</option>
            <option value="average">Average</option>
            <option value="hot">Hot</option>
            <option value="cold">Cold</option>
          </select>
       
       
        
      </form></div>

      {waterIntake !== null && (
        <div className='recom'>
          <h3>daily intake<br></br> level</h3>
          <div className='result'>
          <p>{waterIntake.toFixed(2)} l</p>
          </div>
        </div>
      )}
    </div>
    <Nave/>
    </div>
  )
}
