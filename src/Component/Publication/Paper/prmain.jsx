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
          Publication:"Additive Manufacturing",
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
          title:"Single crystal metal deposition using laser additive manufacturing technology for repair of aero-engine components",
          author:"V Rajkumar, BK Nagesha, Amit Kumar Tigga, Sanjay Barad, TN Suresh",
          Publication:"Elsevier",
          impactFactor:'',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785321011457',

        },
        
      ]
      
    },

    {
      year:"2019",
      detail:[
        {
          title:"Fabrication of complex 3D composites by fusing automated fiber placement (AFP) and additive manufacturing (AM) technologies",
          author:"Felix Raspall, Rajkumar Velu, Nahaad Mohammed Vaheed",
          Publication:"",
          impactFactor:'',
          link:'https://www.tandfonline.com/doi/full/10.1080/20550340.2018.1557397',
        },
    }
    
    
  ]
  return (
   <>
  <Carousel/>
<Rpublication publication={publication}/>

   
   </>
  )
}
