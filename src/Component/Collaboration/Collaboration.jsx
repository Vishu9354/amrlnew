import React from 'react'
import i1 from "../Images/1.jpg"
import '../CSS/Collaboration.css'
export default function Collaboration() {
  return (
   <>
   <div className='box'>
    <div>
    <div className='img'>
        <img src={i1}/>
    </div>
    <div className='Content'>
        <p><b>Prof. Name</b></p>
        <p>Country</p>
        <p>University</p>
        <p>Research topic</p>
    </div>
    </div>
   </div>
   </>
  )
}
