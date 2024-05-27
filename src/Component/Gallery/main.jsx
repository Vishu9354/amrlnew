import React from 'react'
import Gallery from './gallery'
import i1 from '../Images/1.jpg'
export default function main() {
const gallery =[
    {
        image:i1
    },
    {
        image:i1
    },
    {
        image:i1
    },
    {
        image:i1
    },
    {
        image:i1
    },

    {
        image:i1
    },
    {
        image:i1
    },
    {
        image:i1
    },
    
]

  return (
  <>
  <Gallery gallery={gallery}/>
  </>
  )
}
