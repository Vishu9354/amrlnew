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
   {
      year:"2020",
      detail:[
      {
         title:"Effect of process parameters on polyamide-6 carbon fibre prepreg laminated by IR-assisted automated fibre placement",
         author:"Chadurvedi Venkatesan, Rajkumar Velu, Nahaad Vaheed, Felix Raspall, Tong-Earn Tay, Arlindo Silva",
         Publication:"Springer London",
         impactFactor:'',
         link:'https://link.springer.com/article/10.1007/s00170-020-05230-z',
      },
      {
         title:"Perspective chapter: multi-material in 3D printing for engineering applications",
         author:"Rajkumar Velu, R Sathishkumar, A Saiyathibrahim",
         Publication:"IntechOpen",
         impactFactor:'',
         link:'https://books.google.co.in/books?hl=en&lr=&id=qyJ-EAAAQBAJ&oi=fnd&pg=PA117&dq=info:S3jONmIH_34J:scholar.google.com&ots=a7iJiFSFeV&sig=U2MzsPTmfDpQJNItvwOW0rf8vVE&redir_esc=y#v=onepage&q&f=false',
      },
      {
         title:"Preparation and evaluation of the tensile characteristics of carbon fiber rod reinforced 3D printed thermoplastic composites",
         author:"Arivazhagan Selvam, Suresh Mayilswamy, Ruban Whenish, Rajkumar Velu, Bharath Subramanian",
         Publication:"MDPI",
         impactFactor:'',
         link:'https://www.mdpi.com/2504-477X/5/1/8',
      },
      {
         title:"Experimental investigation of robotic 3D printing of high-performance thermoplastics (PEEK): a critical perspective to support automated fibre placement process (vol 15, pg 613 …",
         author:"Rajkumar Velu, Nahaad Vaheed, Murali Krishnan Ramachandran, Felix Raspall",
         Publication:"SPRINGER LONDON LTD",
         impactFactor:'3.4',
         link:'https://scholar.google.com/scholar?cluster=12857389802277071488&hl=en&oi=scholarr',
      },
      {
         title:"Experimental investigation of robotic 3D printing of high-performance thermoplastics (PEEK): a critical perspective to support automated fibre placement process",
         author:"Rajkumar Velu, Nahaad Vaheed, Murali Krishnan Ramachandran, Felix Raspall",
         Publication:"Springer London",
         impactFactor:'',
         link:'https://link.springer.com/article/10.1007/s00170-019-04623-z',
      },
    ]
  },
  {
      year:"2019",
      detail:[
      {
         title:"A comprehensive review on bio-nanomaterials for medical implants and feasibility studies on fabrication of such implants by additive manufacturing technique",
         author:"Rajkumar Velu, Theo Calais, Arunkumar Jayakumar, Felix Raspall",
         Publication:"Materials",
         impactFactor:'',
         link:'https://www.mdpi.com/1996-1944/13/1/92',
      },
      {
        title:"Selective laser sintering responses of keratin-based bio-polymer composites",
        author:"Sarat Singamneni, Rajkumar Velu, Malaya Prasad Behera, Sonya Scott, Peter Brorens, Duane Harland, Juliet Gerrard",
        Publication:"Elsevier",
        impactFactor:'8.4',
        link:'https://www.sciencedirect.com/science/article/pii/S0264127519305258',
      },
      {
        title:"Experimental investigation on fabrication of thermoset prepreg composites using automated fibre placement process and 3D printed substrate",
        author:"Rajkumar Velu, Nahaad Mohammed Vaheed, Chadurvedi Venkatesan, Felix Raspall, Murali Krishnan",
        Publication:"Procedia CIRP",
        impactFactor:'3.5',
        link:'https://www.sciencedirect.com/science/article/pii/S2212827119313149',
      },
      {
        title:"3D printing technologies and composite materials for structural applications",
        author:"Rajkumar Velu, Felix Raspall, Sarat Singamneni",
        Publication:"Woodhead Publishing",
        impactFactor:'',
        link:'https://www.sciencedirect.com/science/article/abs/pii/B9780081021774000082',
      },
    ]
  },
  {
    year:"2018",
      detail:[
      {
         title:"Post-process composition and biological responses of laser sintered PMMA and β-TCP composites",
         author:"Rajkumar Velu, Banu Pradheepa Kamarajan, Muthusamy Ananthasubramanian, Truc Ngo, Sarat Singamneni",
         Publication:"Cambridge University Press",
         impactFactor:'',
         link:'https://www.cambridge.org/core/journals/journal-of-materials-research/article/abs/postprocess-composition-and-biological-responses-of-laser-sintered-pmma-and-tcp-composites/0A0E5B5EB00E45FBC342570BB8AE7BDA',
      },
    ]  
    
  },
  {
    year:"2015",
      detail:[
      {
         title:"Evaluation of the influences of process parameters while selective laser sintering PMMA powders",
         auther:"Rajkumar Velu, Sarat Singamneni",
         Publication:"SAGE Publications",
         impactFactor:'2.0',
         link:'https://journals.sagepub.com/doi/full/10.1177/0954406214538012',
      },
      ]
  }

  ]
 return (
  <>
<Carousel/>
<Rpublication publication={publication}/>

   
   </>
  )
}
