import React from 'react'
import './HomePage.css'
import sports_icon from '../Fpage/simplistic-sportswoman-taking-selfie-after-sports-training.png';
import fatigue from '../Fpage/fatigue.jpg'
import woman from '../Fpage/woman_resisting_sweets_sugary_snacks_food_cravings.png'
import headache from '../Fpage/headache.jpg'
import benefits from'../Fpage/benefits-of-drinking-water.jpg'
import Footer from './Footer'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
function HomePage() {
  
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
    
    <div className='pic3'>
    <img src='https://i.pinimg.com/originals/00/29/40/002940ab9042c762057576f9c846d984.jpg' height="400px" width="400"></img>
    </div>

     <div className='pic2'>
    <img src="https://www.frederickhealth.org/images/blogs/1956-1298_FRHS-Stay_Hydrated_Article.jpg" height="370px" width="1600px"/>
    <div className='username'>Hey {username}</div>
    </div>
    <Footer/>
    <div className='too'><p> Get reminders to stay hydrated </p></div>
    <div className='sports'>
     <img src={sports_icon} height={300}/>
     </div>
     <div className='fatigue'>
     <img src={fatigue} height={150}/>
     </div>
     <div className="boxy1">
     </div>
     <div className='woman'>
     <img src={woman} height={170} width={200}/>
     </div>
     
     <div className='headache'>
     <img src={headache} height={170} width={200}/>
     </div>
     
      <div className='benefits'>
     <img src={benefits} height={150} width={200}/>
     </div>
     <div className="boxy2">
     </div>
     <div className="boxy3">
     </div>
     <div className="boxy4">
     </div>
    <div className='fattext'>reduce fatigue</div>
    <div className='bentext'>stay energized</div>
    <div className='headtext'>reduce headache</div>
    <div className='womtext'>reduce cravings</div>
    <div className='detail'>
    Hydro hub calculates your water intake based on your weight and reminds 
    you to drink water in a particular time interval.
    tracking your water intake can also help you remember to drink enough water, which is important for overall health.
    </div>
     
  </div>
  
    
  )
}

export default HomePage