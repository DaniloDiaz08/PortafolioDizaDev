import React from 'react'
import Nav from '../components/Nav'
import Gatito from '../assets/Catflow.png.png'


const Home = () => {
  return (
    <>
      <Nav />
      <div className='Container'>

        <div className='grid grid-col-4 p-24 m-0'>
          <div className=' col-span-2 rounded-l-3xl h-screen w-full bg-white items-center'>
            <div>
              <h1 className=' text-center font-Fredoka text-black  p-8 text-2xl  hover:text-[#00C4CC]'>CRISTHIAN DANILO DÍAZ PÉREZ</h1>
            </div>
            <div>
              <img className=' m-auto scale-120 hover:' src={Gatito} alt="Gatoflow" />
            </div>
            <div>
              <p className=' text-center m-auto col-span-2 p-16 font-Ubuntu text-black text-2xl hover:text-[#00C4CC]'>"Nada es Imposible"</p>
            </div>

          </div>

          <div className=' col-span-2 rounded-br-3xl rounded-tr-3xl  h-screen w-full m-0 p-0 col-start-3 bg-[#00C4CC]'>

            <p className=' font-Fredoka text-center p-24 text-3xl text-white hover:text-black'>Programador junior.</p>

            <p className=' font-Ubuntu text-center p-24 text-3xl m-0 hover:text-white'>Después de realizar varias investigaciones, descubrí el desarrollo web, y desde entonces no quiero parar de aprenderlo</p>

          </div>


        </div>
      </div>

    </>
  )
}

export default Home
