import React from 'react'
import Publication from "./japublication.jsx"
// import Rpublication from "./jRpublication.jsx"
import Carousel from '../carousel.jsx'
import {Route,Routes} from "react-router-dom"
export default function publication() {
  const publication=[
    {
      year:"2024",
      detail:[
        {
          title:"How to characterise the anisotropy of laser powder bed fusion-processed parts? Towards a surrogate, non-destructive indentation-based approach",
          author:"Abhishek Shrivastava, Anand Kumar Subramaniyan, Samrat Rao, BK Nagesha",
          Publication:"Journal of Manufacturing Processes",
          impactFactor:'6.2',
          link:'https://www.sciencedirect.com/science/article/pii/S1526612524002627',
        },
        {
          title:"Influence of post-heat treatment with super β transus temperature on the fatigue behaviour of LPBF processed Ti6Al4V",
          author:"Akshay Pathania, Anand Kumar Subramaniyan, Nagesha Bommanahalli Kenchappa",
          Publication:"Springer Netherlands",
          impactFactor:"5.4",
          link:"https://link.springer.com/article/10.1007/s10704-024-00784-5",
        },
        {
          title:"git",
          author:"v",
          Publication:'',
        }
        
      ]

    },
    {
      year:"",
      detail:[
        {

        }
      ]
    }
    
  ]
  
  return (
   <>
<Carousel/>
<Publication publication={publication}/>
{/* <Rpublication publication={publication}/> */}
 
   </>
  )
}
