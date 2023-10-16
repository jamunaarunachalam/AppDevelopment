import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nave from './Nave';
import './Goalpage.css';
import waterloader from '../Fpage/water-drinking-benefits.png';

function Goalpage() {
  const [container, setContainer] = useState('Cup'); // Default container
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const [lastDailyTotal, setLastDailyTotal] = useState(null);

  
  
  useEffect(() => {
   
    axios.get(`http://localhost:8080/auth/history/${username}`)
      .then((response) => {
       
        if (response.data.length > 0) {
          setLastDailyTotal(response.data[response.data.length - 1].dailyTotal);
        }
      })
      .catch((error) => {
        console.error('Error fetching last dailyTotal:', error);
      });
  }, [username]);

  const handleLogIntake = (selectedContainer) => {
    let iconAmount = 0;
    if (selectedContainer === 'Cup') {
      iconAmount = 250;
    } else if (selectedContainer === 'Glass') {
      iconAmount = 500;
    } else if (selectedContainer === 'Bottle') {
      iconAmount = 750;
    }
    const newTotal = lastDailyTotal + iconAmount;

 
  setLastDailyTotal(newTotal);

  

 
  axios
    .post(`http://localhost:8080/auth/log-container/${username}`, {
      container: selectedContainer,
    })
    .then((response) => {
      
      setLastDailyTotal(newTotal);
    })
    .catch((error) => {
      console.error('Error logging intake:', error);
    });
};
    


  return (
    <div>
    <div className='goalpage'>
      <h2>Log Water Intake</h2>

      <div>
        <label>Container:</label>
        <select value={container} onChange={(e) => setContainer(e.target.value)}>
          <option value="Cup">Cup</option>
          <option value="Glass">Glass</option>
          <option value="Bottle">Bottle</option>
        </select>
      </div>
      <button onClick={() => handleLogIntake(container)}>Log Intake</button>
      <div className="result">
      <h3>Last Daily Total</h3>
      <p>{lastDailyTotal !== null ? lastDailyTotal : 'Loading...'}</p>
    </div>
   
      <Nave />
    </div>
    <div className='waterloader1'>
    <img src={waterloader} height={600} width={570} ></img> </div>
    </div>
  );
}

export default Goalpage;