import React, { useState } from 'react'
import menu_icon from '../Fpage/icons8-hamburger-menu-30.png';
import './Frontpage.css';
import { click } from '@testing-library/user-event/dist/click';
export default function Frontpage({click}) {
   
    
      return (
    <div>
       <div className='header'>
          <div className='icon'>
             
            <img src={menu_icon} alt='menu' onClick={click}/>
          </div>
       </div>
       
       
    </div>
  )
}
