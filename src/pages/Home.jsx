import React from 'react'
import Mylogo from '../assets/My-Logo.png.png'
import Nav from '../components/Nav'


const Home = () => {
  return (
    <>
    <Nav/>
    <div className='Home'>
        <img className='Mylogo z-30 hidden lg:block lg:w-9/12' src={Mylogo} alt="" />
        <h1>Bienvenidos a mi Portafolio</h1>
    </div>
    </>
    
  )
}

export default Home
