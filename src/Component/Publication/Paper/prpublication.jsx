import React from 'react'
import "../../CSS/publication.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {Link} from "react-router-dom"
import {Route,Routes} from "react-router-dom"

export default function main(props) {
  return (
    <>
   <div className='Sir'>
      <div><Link to="/PaPublication">Dr.Anad kumar </Link></div>
      <div><Link to="/PrPublication">Dr. Rajkumar Velu</Link></div>
    </div>
{props.publication?.map((postion,index)=>(

<div>
<div key={index} className='date'>{postion.year}
<div className='content'>
  {postion.detail.map((publicationdetail,pindex)=>(
  <div key={pindex} className='detail'>
<p>{publicationdetail.title}</p>
  <p>{publicationdetail.author}</p>
  <p><b>{publicationdetail.Publication}</b></p>
  <p>{publicationdetail.impactFactor}</p>
</div>
  ))}

</div>

</div>

</div>
))}


    </>
  )
}
