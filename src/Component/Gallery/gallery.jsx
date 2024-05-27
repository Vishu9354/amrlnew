import React from 'react'
import i1 from '../Images/1.jpg'
import '../CSS/gallery.css'
export default function gallery(props) {
  return (
   <>
   <div className='imagecontainer'>
{props.gallery.map((position,index)=>(
    <div className='galleryimage'>
    <img src={position.image}/>
   </div>

))}
    
   </div>
   </>
  )
}
