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
        {
          title:"Toolpath strategy and generation for robotic fibre placement on curved surface",
          author:"Nahaad Vaheed, Felix Raspall, Rajkumar Velu, Chadurvedi Venkatesan",
          Publication:"Engineers Australia",
          impactFactor:'',
          link:'https://search.informit.org/doi/abs/10.3316/informit.888612103654483',
        },
      
      ] 
    },

    {
      year:"2018",
      detail:[
        {
          title:"DESIGN AND ROBOTIC FABRICATION OF 3D PRINTED MOULDS FOR COMPOSITES",
          author:"Rajkumar Velu, Nahaad Vaheed, Felix Raspall",
          Publication:"",
          impactFactor:'',
          link:'https://repositories.lib.utexas.edu/items/ee2bb36d-0691-4c3b-b17f-f496489e9baa',
        },
        {
          title:"Investigation on the effect of flyash on tensile, flexural and impact strength of hybrid composite material",
          author:"M Venkatasudhahar, R Velu, K Logesh",
          Publication:"",
          impactFactor:'',
          link:'https://d1wqtxts1xzle7.cloudfront.net/57522934/13.IJMPERDAUG201813.-libre.pdf?1538980801=&response-content-disposition=inline%3B+filename%3DINVESTIGATION_ON_THE_EFFECT_OF_FLYASH_ON.pdf&Expires=1716789712&Signature=Nkpj4HA8whujtZzvDP3GaPHxStX1KQAVxxYkLAEQShB2igG8wn-eIM2H7QAOn~DAk7MbTmGc8vPX593XjtYf89nBSj~aGfB9mpbKxatZqxobzjEC85KLjF53YqO3KZzlEPnpw0X7m6nLdMF98DyYAN1nl6woiutndj3FYMru2shxDQgMUDaKbL8CUq113jbwvjXvYRoMkQA0r8jYDMU7BVunTlVgz8vJZzThaXCSXQugScwRE5fhE0xQxSrwNTPoWKYomaMMrjpczn6nn3ewJhTE0F4Z2jWPX8M5oh1ZsuXQQrXlMQIIWSfi-kFMDRP5-gLOKadgGOVcwHPiW7nY9A__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA',
        },
      ]  
    },

    {
      year:"2017",
      detail:[
        {
          title:"Study of the influence of the process variables on formability and strain distribution in incremental sheet metal working of AA 1050 sheets",
          author:"M Amala Justus Selvam, R Velu, T Dheerankumar",
          Publication:"Springer Singapore",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-10-1771-1_53',
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
