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
          title:"3D Printing of Pharmaceutical Products Using AI Technology",
          author:"Brahmansh Kaushik, Anand Kumar Subramaniyan, Mitali Pareek, Sneha Sharma, Rajkumar Velu",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_12',
        },
        {
          title:"3D-Printed Smart Implants in Orthopedic Surgery",
          author:"T Pandelani, FJ Nemavhola, Anand Kumar Subramaniyan",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_10',

        },
        {
          title:"Integrating Advanced Technologies in Post-operative Rehabilitation: 3D-Knitting, 3D-Printed Electronics, and Sensor-Embedded Textiles",
          author:"Rahul Gorka, Anand Kumar Subramaniyan, Rajkumar Velu",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_5',
        },
        {
          title:"Role of Sensing Integrated Prosthetic Socket in Comfort",
          author:"L Lebea, HM Ngwangwa, Anand Kumar Subramaniyan",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_4',
        },
      ]
    },
    {
      year:"2023",
      detail:[
        {
          title:" Applications of additive manufacturing techniques in aerospace industry",
          author:"S Anand Kumar, Akshay Pathania, Abhishek Shrivastava, V Rajkumar, Prasad Raghupatruni",
          Publication:"Nanotechnology‐Based Additive Manufacturing: Product Design, Properties and Applications",
          link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/9783527835478.ch19',
        },
        {
          title:"State‐of‐the‐Art Overview and Recent Trends in Additive Manufacturing: Opportunities, Limitations, and Current Market",
          author:"Rajkumar Velu, Murali K Ramachandran, S Anand Kumar",
          Publication:'Nanotechnology‐Based Additive Manufacturing: Product Design, Properties and Applications',
          link:'https://onlinelibrary.wiley.com/doi/book/10.1002/9783527835478',
        },
        {
          title:"Digital Design and Manufacturing of Medical Devices and Systems",
          author:"Rajkumar Velu, Karupppasamy Subburaj, Anand Kumar Subramaniyan",
          Publication:'',
          link:'https://link.springer.com/book/10.1007/978-981-99-7100-8', 
        },
        {
          title:"Bio-inspired advancements in additive manufacturing",
          author:"Ruban Whenish, Selvam Arivazhagan, Rajkumar Velu, S Anand Kumar",
          Publication:'Advances in Additive Manufacturing',
          link:'https://www.sciencedirect.com/science/article/abs/pii/B9780323918343000089', 
        },
        {
          title:" Computer vision based online monitoring technique: part quality enhancement in the selective laser melting process",
          author:"Brahmansh Kaushik, S Anand Kumar",
          Publication:'Advances in Additive Manufacturing',
          link:'https://www.sciencedirect.com/science/article/abs/pii/B9780323918343000077', 
        }, 
        {
          title:"Processing challenges in additively manufactured single crystal alloys: a process–structure–property relationship approach",
          author:"Rajkumar Velu, S Anand Kumar, Ruban Whenish",
          Publication:'Advances in Additive Manufacturing',
          link:'https://www.sciencedirect.com/science/article/abs/pii/B978032391834300017X', 
        },  
        {
          title:"Postprocessing challenges in metal AM: Strategies for achieving homogeneous microstructure in Ni-based superalloys",
          author:"Abhishek Shrivastava, S Anand Kumar, Samrat Rao",
          Publication:'Advances in Metal Additive Manufacturing',
          link:'https://www.sciencedirect.com/science/article/abs/pii/B9780323912303000019', 
        },
        {
          title:"Tribological Performance Involving DOE of an Additively Manufactured Cu-Ni Alloy",
          author:"R Rajesh, Mithun V Kulkarni, P Sampathkumaran, S Anand Kumar, S Seetharamu, Jitendra Kumar Katiyar",
          Publication:'Industrial Tribology',
          impactFactor:'',
          link:'', 
        },    
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
