import { useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import projects from './pages/projects'
import ContactS from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'

const App = () => {
  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Projects' element={<projects/>} />
          <Route path='/Cotact' element={<Contact/>} />
        </Routes> 
    </BrowserRouter>
   </>
  )
}

export default App
