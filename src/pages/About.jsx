import React from 'react'
import catflow from '../assets/Catflow.png.png'
import Nav from '../components/Nav'

const About = () => {
  return (
    <>
    <Nav/>
    <div>
      <h2>Cristhian Danilo Díaz Pérez</h2>
      <img className='catflow z-30 hidden lg:block lg:w-9/12' src={catflow} alt="" />
    </div>
    </>
  )
}

export default About
