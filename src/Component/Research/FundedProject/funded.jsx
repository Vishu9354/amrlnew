import React from 'react'
import '../../CSS/project.css'
import i1 from '../../Images/1.jpg'
export default function funded(props) {

  return (
    <>
    <div class="ccontainer">
    {props.funded.map((positon,index)=>(
        <div key={index} className='prjbox'>
        <div className='prjimage'>
            <img src={i1}/>
        </div>
        <div className='prjcontent'>
            <div className='prjtitle'>
               <b> {positon.title}</b>
            </div>
            <div className='prjdetail'>
                <div className='Prjvalue'>
                    <span>Project Value:</span>
                    <span>INR Value</span>
                </div>
                <div className='fundingagency'>
                <span>Funding Agency:</span>
                    <span>Name of Funding Agenvy</span>
                </div>
                <div className='Prjno'>
                <span>Project Number:</span>
                    <span>Project Number</span>
                </div>
            </div>
        </div>
    </div>

    ))}
    </div>

    </>
  )
}
