import React from 'react'
// import Publication from "./japublication.jsx"
import Rpublication from "./papublication.jsx"
import Carousel from '../carousel.jsx'
import {Route,Routes} from "react-router-dom"
export default function publication() {
 
  const publication=[
  
    {
      year:"2023",
      detail:[
        {
          title:"Laser powder bed fusion technique of hydrogen–fueled gas turbine: Role of advanced materials and its challenges",
          author:"Shreyas Nandakumar Harithsa, S Anand Kumar, Rajkumar Velu, BK Nagesha",
          Publication:"Elsevier",
          impactFactor:'3.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785323014359',
        },
        {
          title:"Design and optimization of a 3D printed prosthetic socket for transtibial amputees",
          author:"Piyush Rai, Venkatessan Jankiraman, Mohit Teacher, Rajkumar Velu, S Anand Kumar, Trevor Binedell, Karupppasamy Subburaj",
          Publication:"Elsevier",
          impactFactor:'3.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322061818',

        },
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
      year:"2021",
      detail:[
        {
          title:"Laser powder bed fusion technique of hydrogen–fueled gas turbine: Role of advanced materials and its challenges",
          author:"Shreyas Nandakumar Harithsa, S Anand Kumar, Rajkumar Velu, BK Nagesha",
          Publication:"Elsevier",
          impactFactor:'3.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785323014359',
        },
        {
          title:"Design and optimization of a 3D printed prosthetic socket for transtibial amputees",
          author:"Piyush Rai, Venkatessan Jankiraman, Mohit Teacher, Rajkumar Velu, S Anand Kumar, Trevor Binedell, Karupppasamy Subburaj",
          Publication:"Elsevier",
          impactFactor:'3.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322061818',

        },
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
