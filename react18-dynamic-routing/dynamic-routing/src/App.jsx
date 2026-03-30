import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFound from './pages/NotFound'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='courses' element={<Courses/>} />
        <Route path='courses/:id' element={<CourseDetail/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App