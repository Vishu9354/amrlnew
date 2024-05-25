import React from 'react'
// import Publication from "./japublication.jsx"
import Carousel from '../carousel.jsx'
import Rpublication from "./jRpublication.jsx"
import {Route,Routes} from "react-router-dom"
export default function publication() {
 
  const publication=[
    {
      year:"2024",
      detail:[
        {
          title:"Influence of B4C and ZrB2 reinforcements on microstructural, mechanical and wear behaviour of AA 2014 aluminium matrix hybrid composites",
          author:"C Rajendran, A Saiyathibrahim, Rajkumar Velu",
          Publication:"Elsevier",
          impactFactor:'5.1',
          link:'https://www.sciencedirect.com/science/article/pii/S2214914724001168',
        },
      ]
    },
    {
       year:"2021",
       detail:[
       {
          title:"Design and performance of additively manufactured lightweight bionic hand",
          author:"Ruban Whenish, Maria Merin Antony, T Balaji, Arivazhagan Selvam, LS Ramprasath, Rajkumar Velu",
          Publication:"AIP Publishing",
          impactFactor:'',
          link:'https://pubs.aip.org/aip/acp/article-abstract/2317/1/020028/1002086/Design-and-performance-of-additively-manufactured',
       },
       {
        title:"Additive processing of biopolymers for medical applications",
        author:"Rajkumar Velu, Dhileep Kumar Jayashankar, Karupppasamy Subburaj",
        Publication:"Elsevier",
        impactFactor:'',
        link:'https://www.sciencedirect.com/science/article/abs/pii/B9780128184110000197',
       },
    ]  
  },
        {
        year:"2022",
        detail:[
        {
          title:"A comprehensive review on printed electronics: a technology drift towards a sustainable future",
          author:"Sridhar Chandrasekaran, Arunkumar Jayakumar, Rajkumar Velu",
          Publication:"MDPI",
          impactFactor:'',
          link:'https://www.mdpi.com/2079-4991/12/23/4251',
          },
          {
          title:"Perspective chapter: multi-material in 3D printing for engineering applications",
          author:"Rajkumar Velu, R Sathishkumar, A Saiyathibrahim",
          Publication:"IntechOpen",
          impactFactor:'',
          link:'https://books.google.co.in/books?hl=en&lr=&id=qyJ-EAAAQBAJ&oi=fnd&pg=PA117&dq=info:S3jONmIH_34J:scholar.google.com&ots=a7iJiFSFeV&sig=U2MzsPTmfDpQJNItvwOW0rf8vVE&redir_esc=y#v=onepage&q&f=false',
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
