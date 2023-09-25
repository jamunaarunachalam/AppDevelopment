import React from 'react'
import pic1 from '../Fpage/pic 1.png';
import pic2 from '../Fpage/pic 2.png';
import pic3 from '../Fpage/pic3.png'
import './About.css'

export default function About() {
  return (
    <div>
    <div className='Apic1'><img src={pic1} height={400} width={600}></img></div>
    <div className='Apic2'><img src={pic2} height={400} width={600}></img></div>
    <div className='Apic3'><img src={pic3} height={400} width={600}></img></div>
    <div className='Aboxy1'><p>Users can review their historical water consumption data to track their progress over time. This can help them see whether they are meeting their hydration goals and making positive changes to their habits. By reviewing their past water intake, users can set realistic and personalized hydration goals. For instance, if they notice that they consistently fall short of their recommended daily water intake, they can set a goal to increase their consumption gradually.</p></div>
    <div className='Aboxy2'><p>A water intake calculator takes into account various factors such as age, weight, activity level, and climate to provide personalized hydration goals. This helps individuals determine how much water they should drink daily based on their specific needs.The calculator helps users ensure they consume an adequate amount of water to meet their daily hydration requirements. </p></div>
    <div className='Aboxy3'><p>Achieving daily water intake goals can be a source of personal accomplishment and motivation. Reminders keep individuals on track to reach their hydration objectives, which can boost their confidence and motivation.Setting a water intake goal helps prevent dehydration.By drinking water at regular intervals throughout the day, they are more likely to meet their hydration goals consistently.</p></div>
    

    </div>
  )
}
