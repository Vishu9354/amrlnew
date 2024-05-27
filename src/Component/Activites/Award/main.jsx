import React from 'react'
import Award from './award'
export default function main() {
    const award =[
        {
            title:'award title',
            description:'Description of Award'
        },
        {
            title:'award title',
            description:'Description of Award'
        },
        {
            title:'award title',
            description:'Description of Award'
        },
        {
            title:'award title',
            description:'Description of Award'
        },
    ]
  return (
 <>
 <Award award={award}/>
 </>
  )
}
