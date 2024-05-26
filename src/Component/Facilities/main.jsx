import React from 'react'
import Facility from './facility'
export default function main() {
  const facility = [
    {
      title:"Name of Facility",
      specification :[
        {
          s1:"specification 1",
          s2:"specification 2",
          s3:"specification 3",
        }
      ]
    }
  ]
  return (
    <>
    <Facility facility={facility}/>
    </>
  )
}
