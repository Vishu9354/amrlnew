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
          title:"Influence of heat treatment on welding process of electron beam welded joint of Ti6Al4V parts manufactured via laser powder bed fusion",
          author:"S Anand Kumar, Randhir Kumar Singh, RK Kumar, S Cyril Joseph Daniel, Adarsh K Hegde, BK Nagesha",
          Publication:"Elsevier",
          impactFactor:'6.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2452321624001859',
        },

        {
          title:"Exploring How LPBF process parameters impact the interface characteristics of LPBF Inconel 718 deposited on Inconel 718 wrought substrates",
          author:"B.K. Nagesha Abhishek Shrivastava, S. Anand Kumar, Samrat Rao",
          Publication:'Elsevier',
          impactFactor:'5',
          link:'https://www.sciencedirect.com/science/article/pii/S003039922400029X',
        },
        {
          title:"",
          author:"",
          Publication:'',
          impactFactor:'',
          link:'',
        },
        {
          title:"Exploring How LPBF process parameters impact the interface characteristics of LPBF Inconel 718 deposited on Inconel 718 wrought substrates",
          author:"Shrivastava Abhishek, S Anand Kumar, Samrat Rao",
          Publication:'Pergamon',
          impactFactor:'4',
          link:'https://www.sciencedirect.com/science/article/pii/S1350630723006672',
        },
      ]
    },
    {
      year:"2023",
      detail:[
        {
          title:"Skin-Core Scanning Strategy in LPBF Processed Ti6Al4V: Effects on Microstructure and Microhardness",
          author:"Akshay Pathania, Anand Kumar Subramaniyan, Nagesha Bommanahalli Kenchappa",
          Publication:'ASTM International',
          impactFactor:'',
          link:'https://www.astm.org/mpc20230005.html',
        },
        {
          title:"Effects of Graded Powder Dosage Factors on the Densification of LPBF Processed Inconel 718",
          author:"Amit Kumar Tigga, Subramaniyan Anand Kumar, Nagesha Bommanahalli Kenchappa, Akshay Pathania",
          Publication:'Springer India',
          impactFactor:'1.6',
          link:'https://link.springer.com/journal/12666',
        },
        {
          title:"Effect of post-heat treatment with super β transus temperature on the damping behaviour of LPBF-processed Ti6Al4V thin rotor blade",
          author:"Akshay Pathania, Nagesha BK, Sanjay Barad",
          Publication:'SAGE Publications',
          impactFactor:'2.5',
          link:'https://journals.sagepub.com/doi/full/10.1177/14644207231186511', 
        },
        {
          title:"Effect of Duplex Post-processing Treatment on the Surface Texture Characteristics of AlSi10Mg Alloy Processed by Laser Powder Bed Fusion Technique",
          author:"Abhishek Shrivastava & Prasad Raghupatruni S.Anand Kumar, Sudarshan Reddy Anigani, Snehith Mathias",
          Publication:'Springer',
          impactFactor:'2.8',
          link:'https://link.springer.com/article/10.1007/s11837-023-05770-1', 
        },
        {
          title:"Computer vision based online monitoring technique: part quality enhancement in the selective laser melting process",
          author:"Brahmansh Kaushik, S Anand Kumar",
          Publication:'Elsevier',
          impactFactor:'',
          link:'https://www.sciencedirect.com/science/article/abs/pii/B9780323918343000077', 
        },
        {
          title:"Computational study on subsonic impact resistance of lattice structures in 3D printed thin Ti6Al4V parts",
          author:"Shreyas Nandakumar Harithsa, S Anand Kumar, BK Nagesha, JR Nataraj",
          Publication:'Elsevier',
          impactFactor:'',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322068377', 
        },
        

         
      ]
    },
    
      {
        year:"2022",
        detail:[
          {

            title:"Influence of post-heat treatments on microstructural and mechanical properties of LPBF-processed Ti6Al4V alloy",
            author:"Akshay Pathania, Anand Kumar Subramaniyan, BK Nagesha",
            Publication:'Springer International Publishing',
            impactFactor:'4.5',
            link:'https://link.springer.com/journal/40964', 
          },
          {

            title:"Contrasting Effects of Laser Shock Peening on Austenite and Martensite Phase Distribution and Hardness of Nitinol",
            author:"Srikant Tamiridi, Rajesh Dora and Goud, Rajendra and Subramaniyan, Prabhakaran and Sivaperuman, Kalainathan and , Anand Kumar Subramaniyan and Charit, Indrajit and Gollapudi",
            Publication:'MDPI',
            impactFactor:'',
            link:'https://www.mdpi.com/2073-4352/12/9/1319', 
          },
          {

            title:"Effects of inert gas environment on the sliding wear behavior of AZ91/B4C surface composites",
            author:"Hemendra Patle, B Ratna Sunil, S Anand Kumar, Ravikumar Dumpala",
            Publication:'SAGE Publications',
            impactFactor:'2.0',
            link:'https://journals.sagepub.com/doi/full/10.1177/13506501211004790', 
          },
          {

            title:"Correction to: Inspection of Additively Manufactured Aero-engine Parts Using Computed Radiography Technique",
            author:"BK Nagesha, S Anand Kumar, S Rajeswari, Sanjay Barad, Akshay Pathania",
            Publication:'Springer US',
            impactFactor:'2.3',
            link:'https://link.springer.com/journal/11665', 
          },
          {

            title:"Inspection of Additively Manufactured Aero-engine Parts Using Computed Radiography Technique",
            author:"BK Nagesha, S Anand Kumar, S Rajeswari, Sanjay Barad, Akshay Pathania",
            Publication:'Springer US',
            impactFactor:'2.3',
            link:'https://link.springer.com/journal/11665', 
          },
          {

            title:"Investigation on the role of microstructure and temperature on tribological characteristics of fine-grained ZE41 Mg alloy",
            author:"M Venkataiah, T Anup Kumar, K Venkata Rao, S Anand Kumar, Ravikumar Dumpala, B Ratna Sunil",
            Publication:'SAGE Publications',
            impactFactor:'1.6',
            link:'https://journals.sagepub.com/doi/full/10.1080/17515831.2021.1951539', 
          },
          {

            titley:"Microstructure, mechanical, and wear properties of thin-walled Ti6Al4V parts produced using laser powder bed fusion technique",
            author:"Ajay Kushwaha, Anand Kumar Subramaniyan, Nagesha Bommanahalli Kenchappa, Sanjay Barad",
            Publication:'North-Holland',
            impactFactor:'3',
            link:'https://www.sciencedirect.com/science/article/pii/S0167577X2101836X', 
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
  

    
    
 