import React from 'react'
import Dev from '../assets/dev-relax.png.png'
import Nav from '../components/Nav'

const Word = () => {
  return (
    <>
    <Nav/>
    <div>
      <h2>Proyectos</h2>
      <img className='Dev scale-75' src={Dev} alt="" />
    </div>
    </>
  )
}

export default Word
