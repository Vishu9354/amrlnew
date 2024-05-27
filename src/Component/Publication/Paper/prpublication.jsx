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
      <div><Link to="/BaPublication" >Dr. S. Anand Kumar</Link></div>
      <div><Link to="/BrPublication" style={{textDecoration:'underline'}}>Dr. Rajkumar Velu</Link></div>
    </div>
{props.publication.map((postion,index)=>(

<div>
<div key={index} className='date'>{postion.year}
<div className='content'>
  {postion.detail.map((publicationdetail,pindex)=>(
  <div key={pindex} className='detail'>
<p>{publicationdetail.title}</p>
  <p>{publicationdetail.author}</p>
  <p><b>{publicationdetail.Publication}</b></p>
  <p>Impact Factor: {publicationdetail.impactFactor}</p>
  <span style={{display:"flex",float:'right'}}><button><a href={publicationdetail.link}>View Link</a></button></span>
</div>
  ))}

</div>

</div>

</div>
))}


    </>
  )
}
