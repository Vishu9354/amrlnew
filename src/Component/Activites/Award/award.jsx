import React from 'react'
import '../../CSS/award.css'
import i1 from  '../../Images/1.jpg'
export default function award(props) {
  return (
    <>
  
    <div className='awardcontainer'>
      {props.award.map((position,index)=>(

<div class="awardcard">
<img src={i1} alt="Loading"/>
<div class="intro">
  <h3>{position.title}</h3>
  <p><i class="fa-solid fa-eye">{position.description}</i></p>
</div>
</div>
      ))}
   
        
    </div>
    </>
  )
}
