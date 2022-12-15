import { useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Word from './pages/Word'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/Styles/App.css'  

const App = () => {
  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Word' element={<Word/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes> 
    </BrowserRouter>
   </>
  )
}

export default App
