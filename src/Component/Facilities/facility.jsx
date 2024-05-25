import React from 'react'
import '../CSS/facility.css'
import i1 from '../Images/1.jpg'
export default function facility() {
  return (
   <>
   <div className='fcontainer'> 
   <div className='fbox'>
    <div className='fcontent'>
    <div className='ftitle'>Title</div>
    <div className='fspecification'><p>Specifications</p>
        <ul>
            <li>Specifiaction detail</li>
        </ul>
    </div>
    </div>
    <div className='fimage'>
    <img src={i1}/>
    </div>
   </div>
   </div>
   </>
  )
}
