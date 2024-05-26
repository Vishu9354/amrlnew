import React from 'react'
import '../CSS/facility.css'
import i1 from '../Images/1.jpg'
export default function facility(props) {
  return (
   <>
   {props.facility.map((position,index)=>(

<div className='fcontainer'> 
<div className='fbox'>
 <div className='fcontent'>
 <div className='ftitle'>{position.title}</div>
 {position.specification.map((sposition,sindex)=>(

<div className='fspecification'><p>Specifications</p>
<ul>
    <li>{sposition.s1}</li>
    <li>{sposition.s2}</li>
    <li>{sposition.s3}</li>
</ul>
</div>
 ))}

 </div>
 <div className='fimage'>
 <img src={i1}/>
 </div>
</div>
</div>
   ))}

   </>
  )
}
