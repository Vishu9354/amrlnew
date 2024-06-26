import React from 'react'
// import Publication from "./japublication.jsx"
import Rpublication from "./papublication.jsx"
import Carousel from '../carousel.jsx'
import {Route,Routes} from "react-router-dom"
import { titleize } from 'i/lib/methods.js'
export default function publication() {
 
  const publication=[
  
    {
      year:"2023",
      detail:[
        {
          title:"Laser powder bed fusion technique of hydrogen–fueled gas turbine: Role of advanced materials and its challenges",
          author:"Shreyas Nandakumar Harithsa, S Anand Kumar, Rajkumar Velu, BK Nagesha",
          Publication:"Materials Today: Proceedings",
          impactFactor:'3.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785323014359',
        },
      
      ]
    },
    {
      year:"2022",
      detail:[ 
        {
          title:"Design and optimization of a 3D printed prosthetic socket for transtibial amputees",
          author:"Piyush Rai, Venkatessan Jankiraman, Mohit Teacher, Rajkumar Velu, S Anand Kumar, Trevor Binedell, Karupppasamy Subburaj",
          Publication:"Materials Today: Proceedings",
          impactFactor:'3.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322061818',

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
          Publication:"Materials Today: Proceedings",
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
          Publication:"Advanced Manufacturing: Polymer & Composites Science",
          impactFactor:'',
          link:'https://www.tandfonline.com/doi/full/10.1080/20550340.2018.1557397',
        },
        {
          title:"Toolpath strategy and generation for robotic fibre placement on curved surface",
          author:"Nahaad Vaheed, Felix Raspall, Rajkumar Velu, Chadurvedi Venkatesan",
          Publication:"International Conference on Composite Materials (22nd: 2019: Melboune, VIC.)",
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
          Publication:"International Journal of Mechanical and Production Engineering Research and Development",
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
        {
          title:"Effect of surface modification and hybridization of coir fiber on mechanical properties of nylon/epoxy hybrid composites",
          auhtor:"M Venkatasudhahar, R Velu, K Logesh, R Ganesh",
          Publication:"Int. J. Mech. Eng. Technol",
          impactFactor:'',
          link:'https://sdbindex.com/documents/00000002/00000-47681.pdf',
        },
        {
          title:"Selective Laser Sintering of PMMA and PMMA Plus β-tricalcium Phosphate Polymer Composites",
          author:"Rajkumar Velu",
          Publication:"",
          impactFactor:'',
          link:'https://openrepository.aut.ac.nz/items/47d6d2f6-6d3c-4dbc-80b0-499330922424',
        },
      ]
    },

    {
      year:"2016",
      detail:[
        {
          title:"Selective laser sintering of biocomposite materials",
          author:"R Velu, A Fernyhough, DA Smith, M Guen, S Singamneni",
          Publication:"Lasers Eng Old City Publ",
          impactFactor:'',
          link:'https://www.researchgate.net/profile/Rajkumar-Velu-2/publication/310512069_Selective_laser_sintering_of_biocomposite_materials/links/5a94cf120f7e9ba42970d931/Selective-laser-sintering-of-biocomposite-materials.pdf',
        }, 
      ]
    },

    {
      year:"2015",
      detail:[
        {
          title:"THERMAL ASPECTS OF SELECTIVE LASER SINTERING OF PMMA+ β-TCP COMPOSITES",
          author:"Rajkumar Velu, Sarat Singamneni",
          Publication:"Solid Freeform Fabrication",
          impactFactor:'',
          link:'https://repositories.lib.utexas.edu/items/90b0bc16-724b-42ea-8f9f-88d0c8e52577',
        },
      ]
    },

    {
      year:"2014",
      detail:[
        {
          title:"Selective laser sintering of polymer biocomposites based on polymethyl methacrylate",
          author:"Rajkumar Velu, Sarat Singamneni",
          Publication:"Journal of Materials Research",
          impactFactor:'',
          link:'https://www.cambridge.org/core/journals/journal-of-materials-research/article/abs/selective-laser-sintering-of-polymer-biocomposites-based-on-polymethyl-methacrylate/CDCB02CA8538E86EB00AA292CA38E9FB',
        },
        {
          title:"A Review ofFinite Element Method in Selective Laser Sintering (SLS) Process",
          author:"Rajkumar Velu, Sarat Singamneni",
          Publication:"Dr. R. Rudramoorthy",
          impactFactor:'',
          link:'https://scholar.google.com/scholar?oi=bibs&hl=en&q=related:CyUuP7lWuDwJ:scholar.google.com/',
        },
      ]
    },

    {
      year:"2012",
      detail:[
        {
          title:"FRICTION MEASUREMENT IN COLD FORMING USING TRIBO-TESTS",
          author:"R Velu, Moses Raja Cecil",
          Publication:"Journal of Manufacturing Engineering",
          impactFactor:'',
          link:'https://www.smenec.org/index.php/1/article/view/380',
        },
      ]
    },

    {
      year:"2024",
      detail:[
        {
          title:"Experimental and Analytical Investigation on Fibre Integration with Polymer Matrix on 3d Printed Continuous Fibre-Reinforced Composites",
          author:"Anand Sankar Manipuzha, RAJKUMAR VELU, Anandkumar Subramaniyan",
          Publication:"",
          impactFactor:'',
          link:'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4709922',
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
