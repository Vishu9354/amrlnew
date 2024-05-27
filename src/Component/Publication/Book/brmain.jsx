import React from 'react'
// import Publication from "./japublication.jsx"
import Rpublication from "./brpublication.jsx"
import Carousel from '../carousel.jsx'
import {Route,Routes} from "react-router-dom"
export default function publication() {
 
  const publication=[
    {
      year:"2024",
      detail:[
        {
          title:"Digital Design and Manufacturing of Medical Devices and Systems",
          author:"Rajkumar Velu, Karupppasamy Subburaj, Anand Kumar Subramaniyanr",
          Publication:"Springer Nature Singapore ",
          impactFactor:'',
          link:'https://link.springer.com/book/10.1007/978-981-99-7100-8',
        },
        {
          title:"State-of-the-Art Overview and Recent Trends in Biomedical Devices Using Digital Manufacturing: Opportunities, Limitations, and Current Market",
          author:"Murali Krishnan Ramachandran, Jairam Raigar, Manigandan Kannan, Rajkumar Velu",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_1',

        },
        {
          title:"Integrating Advanced Technologies in Post-operative Rehabilitation: 3D-Knitting, 3D-Printed Electronics, and Sensor-Embedded Textiles",
          author:"Rahul Gorka, Anand Kumar Subramaniyan, Rajkumar Velu",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_5',
        },
        {
          title:"Design and Manufacturing of 3D Printed Sensors for Biomedical Applications",
          author:"Sridhar Chandrasekaran, Arunkumar Jayakumar, Rajkumar Velu, S Stella Mary",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_3',
        },
        {
          title:"3D Printing of Pharmaceutical Products Using AI Technology",
          author:"Brahmansh Kaushik, Anand Kumar Subramaniyan, Mitali Pareek, Sneha Sharma, Rajkumar Velu",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_12',
        },
        {
          title:"Design and Development of 3D Printing on Bioinks and Biomaterials for Implants and Tissue Engineering",
          author:"Murali Krishnan Ramachandran, Manigandan Kannan, Rajkumar Velu, Paramasamy Shanmugam",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_9',
        },
        {
          title:"Modular Product Architecture to Design and Fabricate Prosthetic and Orthotic Products by 3D Printing",
          author:"Mohit Teacher, Rajkumar Velu, Surinder Kumar",
          Publication:"Digital Design and Manufacturing of Medical Devices and Systems",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-99-7100-8_8',
        },
        {
          title:"Additive manufacturing of functionally graded materials: A comprehensive review",
          author:"Mohit Teacher, Rajkumar Velu",
          Publication:"International Journal of Precision Engineering and Manufacturing",
          impactFactor:'',
          link:'https://link.springer.com/article/10.1007/s12541-023-00864-x',
        },
      ]
      
    },
    {
      year:"2023",
      detail:[
        {
          title:"Geometrical Form Deviation and Defect Analysis of SLM Processed Slender Parts Using Computer Vision Methodology",
          author:"Brahmansh Kaushik, S Anand Kumar, V Rajkumar",
          Publication:"Advances in Additive Manufacturing and Metal Joining: Proceedings of AIMTDR 2021",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-19-7612-4_13',
        },
        {
          title:"Applications of additive manufacturing techniques in aerospace industry",
          author:"S Anand Kumar, Akshay Pathania, Abhishek Shrivastava, V Rajkumar, Prasad Raghupatruni",
          Publication:"Nanotechnology‐Based Additive Manufacturing: Product Design, Properties and Applications",
          impactFactor:'',
          link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/9783527835478.ch19',
        },
        {
          title:"Metal additive manufacturing of PEM fuel cell flow field plates and the scope of nanomaterials for its fabrication",
          author:"Arunkumar Jayakumar, Dinesh K Madheswaran, Rajkumar Velu",
          Publication:"Nanotechnology‐Based Additive Manufacturing: Product Design, Properties and Applications",
          impactFactor:'',
          link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/9783527835478.ch4',
        },
        {
          title:"Environmental impact, challenges for industrial applications and future perspectives of additive manufacturing",
          author:"Rajkumar Velu, Roopa Tulasi, Murali K Ramachandran",
          Publication:"Nanotechnology‐Based Additive Manufacturing: Product Design, Properties and Applications",
          impactFactor:'',
          link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/9783527835478.ch24',
        },
        {
          title:"State‐of‐the‐Art Overview and Recent Trends in Additive Manufacturing: Opportunities, Limitations, and Current Market",
          author:"Rajkumar Velu, Murali K Ramachandran, S Anand Kumar",
          Publication:"Nanotechnology‐Based Additive Manufacturing: Product Design, Properties and Applications",
          impactFactor:'',
          link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/9783527835478.ch1',
        },
        {
          title:"Bio-inspired advancements in additive manufacturing",
          author:"Ruban Whenish, Selvam Arivazhagan, Rajkumar Velu, S Anand Kumar",
          Publication:"Advances in Additive Manufacturing",
          impactFactor:'',
          link:'https://www.sciencedirect.com/science/article/abs/pii/B9780323918343000089',
        },
        {
          title:"Processing challenges in additively manufactured single crystal alloys: a process–structure–property relationship approach",
          author:"Rajkumar Velu, S Anand Kumar, Ruban Whenish",
          Publication:"Advances in Additive Manufacturing",
          impactFactor:'',
          link:'https://www.sciencedirect.com/science/article/abs/pii/B978032391834300017X',
        },
      ]
    },
    {
       year:"2022",
       detail:[
       {
         title:"Polymer based flow field plates for polymer electrolyte membrane fuel cell and the scope of additive manufacturing: A techno‐economic review",
         author:"Dinesh Kumar Madheswaran, Arunkumar Jayakumar, Rajkumar Velu, Rajendran Raj, Edwin Geo Varuvel",
         Publication:"International Journal of Energy Research",
         impactFactor:'',
         link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/er.8645',
        },
       {
         title:"3D printing of nanocomposites",
         author:"Vigneshwaran Shanmugam, Rajkumar Velu",
         Publication:"Smart 3D Nanoprinting",
         impactFactor:'',
         link:'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003189404-8/3d-printing-nanocomposites-vigneshwaran-shanmugam-rajkumar-velu',
        },
        {
         title:"Perspective chapter: multi-material in 3D printing for engineering applications",
         author:"Rajkumar Velu, R Sathishkumar, A Saiyathibrahim",
         Publication:"Advanced Additive Manufacturing",
         impactFactor:'',
         link:'https://books.google.co.in/books?hl=en&lr=&id=qyJ-EAAAQBAJ&oi=fnd&pg=PA117&dq=info:S3jONmIH_',
        },
        {
         title:"Chitosan biopolymer for 3D printing: a comprehensive review",
         author:"Dhileep Kumar Jayashankar, Sachin Sean Gupta, Rajkumar Velu, Arunkumar Jayakumar",
         Publication:"Natural Polymers",
         impactFactor:'',
         link:'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003130765-5/chitosan-biopolymer-3d-printing-comprehensive-review-dhileep-kumar-jayashankar-sachin-sean-gupta-rajkumar-velu-arunkumar-jayakumar',
        },
        {
          title:"Additive manufacturing technologies for biomedical implants using functional biocomposites",
          author:"Ruban Whenish, Rajkumar Velu, S Anand Kumar, LS Ramprasath",
          Publication:"Springer Singapore",
          impactFactor:'',
          link:'https://link.springer.com/chapter/10.1007/978-981-16-7377-1_2',
        },
       ]
    },
    {
      year:"2021",
      detail:[
      {
         title:"Additive manufacturing technologies for biomedical implants using functional biocomposites",
         author:"Ruban Whenish, Rajkumar Velu, S Anand Kumar, LS Ramprasath",
         Publication:"High-performance composite structures: Additive manufacturing and processing",
         impactFactor:'',
         link:'https://link.springer.com/chapter/10.1007/978-981-16-7377-1_2',
      },
      {
        title:"Selective laser melting of titanium alloys: effect of processing parameters on microstructure and mechanical properties",
        author:"Ajay Kushwaha, S Anand Kumar, Rajkumar Velu",
        Publication:"International Journal of Mechatronics and Manufacturing Systems",
        impactFactor:'',
        link:'https://www.inderscienceonline.com/doi/abs/10.1504/IJMMS.2021.119156',
      },
      {
        title:"Laser aided metal additive manufacturing and postprocessing: A comprehensive review",
        author:"Rajkumar Velu, ASS Balan, Jyoti Mazumder",
        Publication:"Additive Manufacturing",
        impactFactor:'',
        link:'https://www.sciencedirect.com/science/article/abs/pii/B9780128184110000239',
      },
    ]
  },
  {
    year:"2012",
    detail:[
    {
      title:"Shape Memory Alloy Based Actively Tuned Undamped Mass Absorber",
      author:"M Senthil Kumar V Rajkumar S Shyamkirthi",
      Publication:"International Journal of Manufacturing, Materials, and Mechanical Engineering",
      impactFactor:'',
      link:'https://scholar.google.com/scholar?oi=bibs&hl=en&q=related:jCJ1kr4DA8kJ:scholar.google.com/',
    },
   ]
  },
  {
    year:"2011",
    detail:[
      {
        title:"Experimental Studies on Dynamic Vibration Absorber using Shape Memory Alloy (NiTi) Springs",
        author:"V. Raj Kumar M. B. Bharathi Raj Kumar M. Senthil Kumar",
        Publication:"AIP Conference Proceedings. Eds. P. Predeep, Mrinal Thakur, and MK Ravi Varma",
        impactFactor:'',
        link:'https://pubs.aip.org/aip/acp/article-abstract/1391/1/336/907081/Experimental-Studies-on-Dynamic-Vibration-Absorber',
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