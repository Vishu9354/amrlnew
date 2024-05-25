import React from 'react'
import i1 from "../Images/1.jpg"
export default function carousel() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={i1} className="d-block w-100" alt="..." />
    </div>
  </div>
  
</div>
    </>
  )
}
