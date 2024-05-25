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
          title:"Influence of post-heat treatment with super β transus temperature on the tensile behaviour of LPBF processed Ti6Al4V",
          author:"Akshay Pathania, S Anand Kumar, BK Nagesha",
          Publication:"SAGE Publications",
          impactFactor:'2.4',
          link:'https://journals.sagepub.com/doi/full/10.1177/09544089231209808',
        },
        {
          title:"Surface Texture and Microstructural Characterization of Thin-Walled Ti6Al4V Part Processed Using Laser Powder Bed Fusion Technique: Effect of Build Direction",
          author:"S Anand Kumar, Ajay Kushwaha, Abhishek Shrivastava, BK Nagesha, Sanjay Barad",
          Publication:"ASTM International",
          impactFactor:'1.2',
          link:'https://asmedigitalcollection.asme.org/testingevaluation',
        },
        
          {
            title:"Geometrical Form Deviation and Defect Analysis of SLM Processed Slender Parts Using Computer Vision Methodology",
            author:"Brahmansh Kaushik, S Anand Kumar, V Rajkumar",
            Publication:"Springer Nature Singapore",
            impactFactor:'',
            link:'https://link.springer.com/chapter/10.1007/978-981-19-7612-4_13',
        },
        {
          title:"Densification behaviour of laser powder bed fusion processed Ti6Al4V: Effects of customized heat treatment and build direction",
          author:"Akshay Pathania, Anand Kumar Subramaniyan, Nagesha Bommanahalli Kenchappa",
          Publication:"SAGE Publications",
          impactFactor:'2.4',
          link:'https://journals.sagepub.com/doi/full/10.1177/09544089231190483',
      },
      {
        title:"Laser powder bed fusion technique of hydrogen–fueled gas turbine: Role of advanced materials and its challenges",
        author:"B.K. Nagesha Shreyas Nandakumar Harithsa, S. Anand Kumar, Rajkumar Velu",
        Publication:"https://doi.org/10.1016/j.matpr.2023.03.389",
        impactFactor:'',
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
          Publication:'CRC Press',
          impactFactor:'',
          link:'', 
        },
        {
          title:"Anisotropic yielding performance of additively manufactured Inconel 718: Effect of thermal treatment",
          author:"Nagesha B.K. Abhishek Shrivastava, Anand Kumar S, Samrat Rao",
          Publication:'Science direct',
          impactFactor:'24.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322060849',
        },
        {
          title:"Design and optimization of a 3D printed prosthetic socket for transtibial amputees",
          author:"Karupppasamy Subburaj PiyushRai, Venkatessan Jankiraman, Mohit Teacher, Rajkumar Velu, S.Anand Kumar, TrevorBinedell",
          Publication:'Science direct',
          impactFactor:'',
          link:'', 
        },
        {
          title:"Modal Characterization of Additively Manufactured Chiral Structure: Suppression of Its Multiple Responses",
          author:"Rukmangad S Barad, Akshay Pathania, BK Nagesh, S Anand Kumar",
          Publication:'Springer Nature Singapore',
          impactFactor:'',
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


  
  
