import React from 'react'
import i1 from "../Images/1.jpg"
import '../CSS/Collaboration.css'
export default function Collaboration(props) {
  return (
   <>
   {props.ncollab.map((position,index)=>(
      <div key={index} className='box'>
      <div>
      <div className='img'>
          <img src={i1}/>
      </div>
      <div className='Content'>
          <p><b>{position.name}</b></p>
          <p>{position.country}</p>
          <p>{position.uni}</p>
          <p>{position.topic}</p>
      </div>
      </div>
     </div>

    ))
   }

   </>
  )
}
