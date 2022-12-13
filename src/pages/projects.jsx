import React from 'react'
import Dev from '../assets/dev-relax.png.png'
import Nav from '../components/Nav'

const projects = () => {
  return (
    <>
    <Nav/>
    <div>
      <h2>Proyectos</h2>
      <img className='Dev z-30 hidden lg:block lg:w-9/12' src={Dev} alt="" />
    </div>
    </>
  )
}

export default projects
