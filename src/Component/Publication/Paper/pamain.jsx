import React from 'react'
import Publication from "./papublication.jsx"
// import Rpublication from "./jRpublication.jsx"
import Carousel from '../carousel.jsx'
import {Route,Routes} from "react-router-dom"
export default function publication() {
  const publication=[

    {
      year:"2023",
      detail:[
       
        {
          title:"Surface Texture and Microstructural Characterization of Thin-Walled Ti6Al4V Part Processed Using Laser Powder Bed Fusion Technique: Effect of Build Direction",
          author:"S Anand Kumar, Ajay Kushwaha, Abhishek Shrivastava, BK Nagesha, Sanjay Barad",
          Publication:"Journal of Testing and Evaluation",
          impactFactor:'1.2',
          link:'https://asmedigitalcollection.asme.org/testingevaluation',
           },
      {
        title:"Laser powder bed fusion technique of hydrogen–fueled gas turbine: Role of advanced materials and its challenges",
        author:"B.K. Nagesha Shreyas Nandakumar Harithsa, S. Anand Kumar, Rajkumar Velu",
        Publication:"Materials Today: Proceedings",
        link:'https://www.sciencedirect.com/science/article/pii/S2214785323014359',
    },
      ]
    },
    {
      year:"2022",
      detail:[
        {

          title:"5 Tribological Performance Involving DOE of an Additively Cu-Ni Alloy",
          author:"R Rajesh, Mithun V Kulkarni, P Sampathkumaran, S Anand Kumar, S Seetharamu, Jitendra Kumar Katiyar",
          Publication:'Industrial Tribology: Sustainable Machinery and Industry 4.0',
          link:'https://books.google.co.in/books?hl=en&lr=&id=d0ECEQAAQBAJ&oi=fnd&pg=PA75&ots=MkeNLV3AgB&sig=7TKQTzY42Z538N4Nb8Vt5T1YoVE#v=onepage&q&f=false', 
        },
        {
          title:"Anisotropic yielding performance of additively manufactured Inconel 718: Effect of thermal treatment",
          author:"Nagesha B.K. Abhishek Shrivastava, Anand Kumar S, Samrat Rao",
          Publication:'Materials Today: Proceedings',
          impactFactor:'24.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322060849',
        },
        {
          title:"Design and optimization of a 3D printed prosthetic socket for transtibial amputees",
          author:"Karupppasamy Subburaj PiyushRai, Venkatessan Jankiraman, Mohit Teacher, Rajkumar Velu, S.Anand Kumar, TrevorBinedell",
          Publication:'Materials Today: Proceedings',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322061818', 
        },
        {
          title:"Modal Characterization of Additively Manufactured Chiral Structure: Suppression of Its Multiple Responses",
          author:"Rukmangad S Barad, Akshay Pathania, BK Nagesh, S Anand Kumar",
          Publication:'International Symposium on Plasticity and Impact Mechanics',
          link:'https://link.springer.com/book/10.1007/978-981-99-6259-4', 
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


  
  
