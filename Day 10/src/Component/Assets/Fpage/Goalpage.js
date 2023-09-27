import React from 'react'
import { useState } from 'react';
import './Goalpage.css'
import waterloader from '../Fpage/water-drinking-benefits.png';


export default function Goalpage() {
   
   const [selectedIcon, setSelectedIcon] = useState('');
   const [filledWater, setFilledWater] = useState(0);
 
   
   const [goal, setGoal] = useState('');
 
   
   const handleIconClick = (iconValue) => {
     if (goal === 0 || filledWater >= goal) {
       return; 
     }
 
     setSelectedIcon(iconValue);
 
     
     const remainingCapacity = goal - filledWater;
 
     
     if (iconValue === 'cup') {
       const cupValue = 200; // You can adjust the value
       setFilledWater(Math.min(goal, filledWater + cupValue));
     } else if (iconValue === 'glass') {
       const glassValue = 300; // You can adjust the value
       setFilledWater(Math.min(goal, filledWater + glassValue));
     } else if (iconValue === 'bottle') {
       const bottleValue = 500; // You can adjust the value
       setFilledWater(Math.min(goal, filledWater + bottleValue));
     }
   };
 
   // Function to handle goal input change
   const handleGoalChange = (e) => {
     const newGoal = parseInt(e.target.value, 10) ;
     setGoal(newGoal);
   };
 
  return (
    <div>
    <div className='waterloader1'>
    <img src={waterloader} height={600} width={570} ></img> 
    
    <div className="today-page">
    <h2>Today's Water Goal:</h2>
    <input
      type="number"
      value={goal}
      onChange={handleGoalChange}
      placeholder="Set your goal (ml)"
    />
    <div className="water-icons">
      <div
        className={`water-icon ${selectedIcon === 'cup' ? 'selected' : ''}`}
        onClick={() => handleIconClick('cup')}
      >
        Cup
      </div>
      <div
        className={`water-icon ${selectedIcon === 'glass' ? 'selected' : ''}`}
        onClick={() => handleIconClick('glass')}
      >
        Glass
      </div>
      <div
        className={`water-icon ${selectedIcon === 'bottle' ? 'selected' : ''}`}
        onClick={() => handleIconClick('bottle')}
      >
        Bottle
      </div>
    </div>
    <div className="human-figure">
      <div className="water-level" style={{ height: `${(filledWater / goal) * 100}%` }}></div>
    </div>
   
  </div>
  </div>
  </div>  
      
      
  )
}
