import React from 'react'
import Funded from './funded'
export default function main() {
    const funded = [
        {
            title:"Title of Project",
            Value:"Project Value",
            Agency:"Funding Agency",
            Number:"Project Number"
        },
        
    ]
  return (
<>

<Funded funded={funded}/>
</>
  )
}
