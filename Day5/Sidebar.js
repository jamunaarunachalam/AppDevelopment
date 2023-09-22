import React from 'react'
import './Frontpage.css';
import { Link } from 'react-router-dom';

export default function Sidebar({open}) {

  return (
    <div>
    <div className={open?"sidebar collapse":"sidebar"}>
       <ul>
           <li>Today </li>
           <li>Histroy</li>
           <li>Rewards</li>
           <li>Help</li>
       </ul>
       </div>
    </div>
  )
}
