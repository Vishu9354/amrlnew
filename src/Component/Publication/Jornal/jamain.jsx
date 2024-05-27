import React from 'react'
import Publication from "./japublication.jsx"
// import Rpublication from "./jRpublication.jsx"
import Carousel from '../carousel.jsx'
import {Route,Routes} from "react-router-dom"
import publication from '../Paper/pamain.jsx'
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
          Publication:"International Journal of Fracture",
          impactFactor:"5.4",
          link:"https://link.springer.com/article/10.1007/s10704-024-00784-5",
        },
        {
          title:"Influence of heat treatment on welding process of electron beam welded joint of Ti6Al4V parts manufactured via laser powder bed fusion",
          author:"S Anand Kumar, Randhir Kumar Singh, RK Kumar, S Cyril Joseph Daniel, Adarsh K Hegde, BK Nagesha",
          Publication:"Procedia Structural Integrity",
          impactFactor:'6.2',
          link:'https://www.sciencedirect.com/science/article/pii/S2452321624001859',
        },

        {
          title:"Exploring How LPBF process parameters impact the interface characteristics of LPBF Inconel 718 deposited on Inconel 718 wrought substrates",
          author:"B.K. Nagesha Abhishek Shrivastava, S. Anand Kumar, Samrat Rao",
          Publication:'Optics & Laser Technology',
          impactFactor:'5',
          link:'https://www.sciencedirect.com/science/article/pii/S003039922400029X',
        },
       
        {
          title:"Multi-scale modelling for optimization of process parameters of laser powder bed fusion processed Inconel 718 surrogate part",
          author:"Shrivastava Abhishek, S Anand Kumar, Samrat Rao",
          Publication:'Engineering Failure Analysis',
          impactFactor:'4',
          link:'https://www.sciencedirect.com/science/article/pii/S1350630723006672',
        },
      ]
    },
    {
      year:"2023",
      detail:[
        
        {
          title:"Influence of post-heat treatment with super β transus temperature on the tensile behaviour of LPBF processed Ti6Al4V",
          author:"Akshay Pathania, S Anand Kumar, BK Nagesha",
          Publication:"Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering",
          impactFactor:'2.4',
          link:'https://journals.sagepub.com/doi/full/10.1177/09544089231209808',
        },
        {
          title:"Skin-Core Scanning Strategy in LPBF Processed Ti6Al4V: Effects on Microstructure and Microhardness",
          author:"Akshay Pathania, Anand Kumar Subramaniyan, Nagesha Bommanahalli Kenchappa",
          Publication:'Materials Performance and Characterization',
          impactFactor:'',
          link:'https://www.astm.org/mpc20230005.html',
        },
        {
          title:"Effects of Graded Powder Dosage Factors on the Densification of LPBF Processed Inconel 718",
          author:"Amit Kumar Tigga, Subramaniyan Anand Kumar, Nagesha Bommanahalli Kenchappa, Akshay Pathania",
          Publication:'Transactions of the Indian Institute of Metals',
          impactFactor:'1.6',
          link:'https://link.springer.com/journal/12666',
        },
        {
          title:"Influence of post-heat treatment with super β transus temperature on the tensile behaviour of LPBF processed Ti6Al4V",
          author:"Akshay Pathania, S Anand Kumar, BK Nagesha",
          Publication:"Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering",
          impactFactor:'2.4',
          link:'https://journals.sagepub.com/doi/full/10.1177/09544089231209808',
        },
        {
          title:"Effect of post-heat treatment with super β transus temperature on the damping behaviour of LPBF-processed Ti6Al4V thin rotor blade",
          author:"Akshay Pathania, Nagesha BK, Sanjay Barad",
          Publication:'Proceedings of the Institution of Mechanical Engineers, Part L: Journal of Materials: Design and Applications',
          impactFactor:'2.5',
          link:'https://journals.sagepub.com/doi/full/10.1177/14644207231186511', 
        },
        {
          title:"Effect of Duplex Post-processing Treatment on the Surface Texture Characteristics of AlSi10Mg Alloy Processed by Laser Powder Bed Fusion Technique",
          author:"Abhishek Shrivastava & Prasad Raghupatruni S.Anand Kumar, Sudarshan Reddy Anigani, Snehith Mathias",
          Publication:'JOM',
          impactFactor:'2.8',
          link:'https://link.springer.com/article/10.1007/s11837-023-05770-1', 
        },
        {
          title:"Computational study on subsonic impact resistance of lattice structures in 3D printed thin Ti6Al4V parts",
          author:"Shreyas Nandakumar Harithsa, S Anand Kumar, BK Nagesha, JR Nataraj",
          Publication:'Materials Today: Proceedings',
          impactFactor:'',
          link:'https://www.sciencedirect.com/science/article/pii/S2214785322068377', 
        },
        {
          title:"Densification behaviour of laser powder bed fusion processed Ti6Al4V: Effects of customized heat treatment and build direction",
          author:"Akshay Pathania, Anand Kumar Subramaniyan, Nagesha Bommanahalli Kenchappa",
          Publication:"Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering",
          impactFactor:'2.4',
          link:'https://journals.sagepub.com/doi/full/10.1177/09544089231190483',
      },

         
      ]
    },
    
      {
        year:"2022",
        detail:[
          {

            title:"Influence of post-heat treatments on microstructural and mechanical properties of LPBF-processed Ti6Al4V alloy",
            author:"Akshay Pathania, Anand Kumar Subramaniyan, BK Nagesha",
            Publication:'Progress in Additive Manufacturing',
            impactFactor:'4.5',
            link:'https://link.springer.com/journal/40964', 
          },
          {

            title:"Contrasting Effects of Laser Shock Peening on Austenite and Martensite Phase Distribution and Hardness of Nitinol",
            author:"Srikant Tamiridi, Rajesh Dora and Goud, Rajendra and Subramaniyan, Prabhakaran and Sivaperuman, Kalainathan and , Anand Kumar Subramaniyan and Charit, Indrajit and Gollapudi",
            Publication:'Crystals',
            impactFactor:'',
            link:'https://www.mdpi.com/2073-4352/12/9/1319', 
          },
          {

            title:"Effects of inert gas environment on the sliding wear behavior of AZ91/B4C surface composites",
            author:"Hemendra Patle, B Ratna Sunil, S Anand Kumar, Ravikumar Dumpala",
            Publication:"Proceedings of the Institution of Mechanical Engineers, Part J: Journal of Engineering Tribology",
            impactFactor:'2.0',
            link:'https://journals.sagepub.com/doi/full/10.1177/13506501211004790', 
          },
          {

            title:"Correction to: Inspection of Additively Manufactured Aero-engine Parts Using Computed Radiography Technique",
            author:"BK Nagesha, S Anand Kumar, S Rajeswari, Sanjay Barad, Akshay Pathania",
            Publication:'Journal of Materials Engineering and Performance',
            impactFactor:'2.3',
            link:'https://link.springer.com/journal/11665', 
          },
          {

            title:"Inspection of Additively Manufactured Aero-engine Parts Using Computed Radiography Technique",
            author:"BK Nagesha, S Anand Kumar, S Rajeswari, Sanjay Barad, Akshay Pathania",
            Publication:'Journal of Materials Engineering and Performance',
            impactFactor:'2.3',
            link:'https://link.springer.com/journal/11665', 
          },
          {

            title:"Investigation on the role of microstructure and temperature on tribological characteristics of fine-grained ZE41 Mg alloy",
            author:"M Venkataiah, T Anup Kumar, K Venkata Rao, S Anand Kumar, Ravikumar Dumpala, B Ratna Sunil",
            Publication:'Tribology-Materials, Surfaces & Interfaces',
            impactFactor:'1.6',
            link:'https://journals.sagepub.com/doi/full/10.1080/17515831.2021.1951539', 
          },
          {

            titley:"Microstructure, mechanical, and wear properties of thin-walled Ti6Al4V parts produced using laser powder bed fusion technique",
            author:"Ajay Kushwaha, Anand Kumar Subramaniyan, Nagesha Bommanahalli Kenchappa, Sanjay Barad",
            Publication:'Materials Letters',
            impactFactor:'3',
            link:'https://www.sciencedirect.com/science/article/pii/S0167577X2101836X', 
          },
          {

            title:"Hybrid Surface Characterisation of Intra Thin-Walled Ti6Al4V Surfaces Produced by Laser Powder Bed Fusion Technology",
            author:"Nagesha B K and Sanjay Barad Anand Kumar S, Ajay Kushwaha",
            Publication:'Surface Topography: Metrology and Properties',
            impactFactor:'2.7',
            link:'https://iopscience.iop.org/article/10.1088/2051-672X/ac4a46/meta', 
          }, 
        ]
  
      },
      {
        year:"2021",
        detail:[
          {
  
            title:" Electropolishing of Inconel 718 manufactured by laser powder bed fusion: Effect of heat treatment on hardness, 3D surface topography and material ratio curve",
            author:"Abhishek Shrivastava, S Anand Kumar, BK Nagesha, TN Suresh",
            Publication:'Optics & Laser Technology',
            link:'https://link.springer.com/chapter/10.1007/978-981-16-7377-1_2', 
          },
          {
  
            title:"Influence of post-processing techniques on the microstructure, properties and surface integrity of Alsingle bondSisingle bondMg alloy processed by laser powder bed fusion technique",
            author:"Anand Kumar Subramaniyan, Anigani Sudarshan Reddy, Snehith Mathias, Abhishek Shrivastava, Prasad Raghupatruni",
            Publication:'Surface and Coatings Technology',
            impactFactor:'5.4',
            link:'https://www.sciencedirect.com/journal/surface-and-coatings-technology', 
          },
          {
            title:"Investigation on pulsed electrolytically polished AlSi10Mg alloy processed via selective laser melting technique",
            author:"S Anand Kumar, Anigani Sudarshan Reddy, Snehith Mathias, Abhishek Shrivastava, Prasad Raghupatruni",
            Publication:'Proceedings of the Institution of Mechanical Engineers, Part L: Journal of Materials: Design and Applications',
            impactFactor:'2.5',
            link:'https://journals.sagepub.com/doi/full/10.1177/14644207211045301', 
          },
          {
            title:"Elevated temperature erosive wear behavior of superalloy coatings deposited using cold spray technology",
            author:"BV Padmini, Mahantayya Mathapati, HB Niranjan, P Sampathkumaran, S Anand Kumar, G Padmavathi",
            Publication:'Proceedings of the Institution of Mechanical Engineers, Part L: Journal of Materials: Design and Applications',
            impactFactor:'2.5',
            link:'https://journals.sagepub.com/doi/full/10.1177/14644207211037010', 
          },
          {
            title:"Influence of post-processing techniques on residual stresses of SLM processed HPNGV",
            author:"K Vinodh, Amit Kumar Tigga, Sanjay Barad",
            Publication:'Journal of Manufacturing Processes',
            impactFactor:'6.2',
            link:'https://www.sciencedirect.com/journal/journal-of-manufacturing-processes', 
          },
          {
            title:"Remanufacturing of nickel-based aero-engine components using metal additive manufacturing technology",
            author:"Abhishek Shrivastava, Samrat Rao, BK Nagesha, Sanjay Barad, TN Suresh",
            Publication:'Materials Today: Proceedings',
            impactFactor:'',
            link:'https://www.sciencedirect.com/science/article/pii/S2214785321004466', 
          },
          {
            title:"Investigation on the greyscale pixel methodology for additive manufactured part: an in-situ quality assessment approach",
            author:"International Journal of Rapid Manufacturing",
            impactFactor:'',
            link:'https://www.inderscienceonline.com/doi/abs/10.1504/IJRAPIDM.2021.120019', 
          },
          {
            title:"Selective laser melting of titanium alloys: effect of processing parameters on microstructure and mechanical properties",
            author:"Ajay Kushwaha, S Anand Kumar, Rajkumar Velu",
            publication:'International Journal of Mechatronics and Manufacturing Systems',
            impactFactor:'',
            link:'https://www.inderscienceonline.com/doi/abs/10.1504/IJMMS.2021.119156', 
          },
          {
            title:"Influence of post-heat treatment on microstructure, mechanical, and wear properties of maraging steel fabricated using direct metal laser sintering technique",
            author:"Shubhendra Singh Yadav Anand Kumar S, Sudarshan Reddy Anigani, Snehith Mathias, Akshay Pathania, Prasad Raghupatruni",
            publication:'Journal of Material and Design Application',
            impactFactor:'2.5',
            link:'https://journals.sagepub.com/doi/full/10.1177/14644207211037342', 
          },
          {
            title:"Reclamation of titanium alloy based aerospace parts using laser based metal deposition methodology",
            author:"Suresh T N Akshay Pathania, Anand Kumar S, Nagesha B K, Sanjay Barad",
            publication:'Materials Today: Proceedings',
            impactFactor:'24.2',
            link:'https://www.sciencedirect.com/science/article/pii/S2214785321004454', 
          },
          {
            title:"Single crystal metal deposition using laser additive manufacturing technology for repair of aero-engine components",
            author:"Suresh T N Anand Kumar S, Raj Kumar V, Nagesha B K, Amit Kumar Tigga, Sanjay Barad",
            publication:'Materials Today: Proceedings',
            impactFactor:'24.2',
            link:'https://www.sciencedirect.com/science/article/pii/S2214785321011457', 
          },
        ]
  
      },
      
      {
        year:"2020",
        detail:[
          {
  
            title:"Artificial neural network technique to predict dynamic fracture of particulate composite",
            author:"Vinod Kushvaha, S Anand Kumar, Priyanka Madhushri, Aanchna Sharma",
            Publication:'Journal of composite Materials',
            impactFactor:'2.9',
            link:'https://journals.sagepub.com/doi/full/10.1177/0021998320911418', 
          },
          {
  
            title:"Dynamic-mechanical properties as a function of luffa fibre content and adhesion in a polyester composite",
            author:"G Kalusuraman, Irulappasamy Siva, Yashwant Munde, Chithirai Pon Selvan, S Anand Kumar, Sandro C Amico",
            Publication:'Polymer Testing',
            impactFactor:'5.1',
            link:'https://www.sciencedirect.com/science/article/pii/S0142941820301550', 
          },
          {
            title:"Effect of aspect ratio on dynamic fracture toughness of particulate polymer composite using artificial neural network",
            author:"Aanchna Sharma, S Anand Kumar, Vinod Kushvaha",
            Publication:'Engineering Fracture Mechanics',
            impactFactor:'5.4',
            link:'https://www.sciencedirect.com/science/article/pii/S0013794419313712', 
  
          },
          {
          title:"Unidirectional dry sliding wear analysis of ZE41 magnesium alloy",
          author:"M Brahmansh Kaushik, Anand Kumar S, Ram Prabhu T, Arivarasu",
          Publication:'IOP Conf. Series: Materials Science and Engineering',
          impactFactor:'',
          link:'https://iopscience.iop.org/article/10.1088/1757-899X/1004/1/012017/meta', 

        },
        {
          title:"Laser shock peening (LSP): Electrochemical and hydrodynamic investigation of corrosion protection pre-treatment for a copper surface in 3.5 % NaCl medium",
          author:"R.C.Barik V.I.Chukwuike, O.G.Echemc, S.Prabhakaran, S.Anand Kumar",
          Publication:'Corrosion Science',
          impactFactor:'8.3',
          link:'https://www.sciencedirect.com/journal/corrosion-science', 

        },
        {
          title:"Evaluation methods for residual stress measurement in large components",
          author:"Papa Rao Nikhil Gautam, Anand Kumar S",
          Publication:'Materials Today: Proceedings',
          impactFactor:'24.2',
          link:'https://www.sciencedirect.com/journal/materials-today-proceedings', 

        },
        {
          title:"A numerical modelling approach for prediction of distortion in LPBF processed Inconel 718",
          author:"Samrat Rao Abhishek Shrivastava, Anand Kumar S",
          Publication:'Materials Today: Proceedings',
          impactFactor:'24.2',
          link:'https://www.sciencedirect.com/science/article/pii/S221478532038161X', 

        },
        {
          title:"Residual stresses induced by laser shock peening in orthopaedic Ti-6Al-7Nb alloy",
          author:"X Shen, P Shukla, Anand Kumar S., Ann Zammit, PhilipSwanson, Jonathan Lawrence, Michael E.Fitzpatrick",
          Publication:'Optics and Laser Technology',
          impactFactor:'8',
          link:'https://www.sciencedirect.com/science/article/pii/S0030399220310793', 

        },





  
          
           
  
        ]
  
      },
      
    ]
    
    return (
     <>
  <Carousel/>
  <Publication publication={publication}/>
  {/* <Rpublication publication={publication}/> */}
   
     </>
    )
  }
  
      
    
    
   
    
    
 