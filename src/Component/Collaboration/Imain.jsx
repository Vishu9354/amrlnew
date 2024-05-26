import React from 'react'
import NCollaboration from './Icollaboration'
import Carousel from './carousel'
export default function main() {
  const ncollab = [
    {
      image:'',
      name:'name of prof',
      country:'country',
      uni:'University',
      topic:'Research Topic',
    },
   
  ]
  return (
    <>
    <Carousel/>
    <NCollaboration ncollab={ncollab}/>
    </>
  )
}
