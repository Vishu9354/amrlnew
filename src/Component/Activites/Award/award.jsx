import React from 'react'
import '../../CSS/award.css'
export default function award(props) {
  return (
    <>
  
    <div className='awardcontainer'>
        {props.award.map((position,index)=>(
            <div className='awardbox'>
            <div className='acontent'>
                <div className='atitle'>
                <b>{position.title}</b>
                </div>
                <div className='adetail'>
                    {position.description}
                </div>
            </div>
        </div>
        ))}
        
    </div>
    </>
  )
}
