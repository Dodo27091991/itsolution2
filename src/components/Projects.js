import React from 'react'
import CardLeft from './CardLeft'
import CardRight from './CardRight'
 
function Projects() {
  return (
    <>
    <div className='container-fluid my-2'>
    <CardLeft />
    <CardRight />
    <CardLeft />
    <CardRight />
    <CardLeft />
    <CardRight />
    </div>
    </>
  )
}

export default Projects