import React from 'react'
import Nav from '../components/Nav'
import Gatito from '../assets/Catflow.png.png'


const Home = () => {
  return (
    <>
    <Nav/>
    <div className='Home'>
        <div><h1 className='font-Fredoka text-emerald-50 text-center p-20 text-3xl'>CRISTHIAN DANILO DÍAZ PÉREZ</h1></div>
        <div><img className=' flex flex-row justify-center items-center scale-130' src={Gatito} alt="Gatoflow" /></div>
        <div><p className='font-Ubuntu text-emerald-50 text-center text-xl'>Nada es Imposible</p></div>
    </div>
    </>
  )
}

export default Home
