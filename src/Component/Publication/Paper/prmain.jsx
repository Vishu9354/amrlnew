import React from 'react'
// import Publication from "./japublication.jsx"
import Rpublication from "./papublication.jsx"
import Carousel from '../carousel.jsx'
import {Route,Routes} from "react-router-dom"
export default function publication() {
 
  const publication=[
    {
      year:"2024",
      detail:[
        {
          title:"Name of Raj kumar Sir paper",
          author:"Name of all the author",
          Publication:"Name of Publication",
          impactFactor:'Impact factor',
          link:'#',
        },
        {
          title:"Name of Raj kumar Sir paper",
          author:"Name of all the author",
          Publication:"Name of Publication",
          impactFactor:'Impact factor',
          link:'#',

        },
      ]
      
    },
    {
      year:"2023",
      detail:[
        {
          title:"Name of Raj kumar Sir paper",
          author:"Name of all the author",
          Publication:"Name of Publication",
          impactFactor:'Impact factor',
          link:'#',

        },
        {
          title:"Name of Raj kumar Sir paper",
          author:"Name of all the author",
          Publication:"Name of Publication",
          impactFactor:'Impact factor',
          link:'#',
        },
      ]
      
    },
  ]
  return (
   <>
  <Carousel/>
<Rpublication publication={publication}/>

   
   </>
  )
}
