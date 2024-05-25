import React from 'react'
import NCollaboration from './Collaboration'
import Carousel from './carousel'
export default function main() {
  const ncollab = [
    {
      image:'',
      name:'name',
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
