import React from 'react'
import Publication from "./bapublication.jsx"
import Carousel from '../carousel.jsx'
// import Rpublication from "./jRpublication.jsx"
import {Route,Routes} from "react-router-dom"
export default function publication() {
  const publication=[
    {
      year:"2024",
      detail:[
        {
          title:"Name of Anand sir Book/Book chapter",
          author:"Name of all the author",
          Publication:"Name of Publication",
          impactFactor:'Impact factor',
          link:'#',
        },
        {
          title:"Name of Anand sir Book/Book chapter",
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
          title:"Name of Anand sir Book/Book chapter",
          author:"Name of all the author",
          Publication:"Name of Publication",
          impactFactor:'Impact factor',
          link:'#',

        },
        {
          title:"Name of Anand sir Book/Book chapter",
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
<Publication publication={publication}/>
{/* <Rpublication publication={publication}/> */}
 
   </>
  )
}
