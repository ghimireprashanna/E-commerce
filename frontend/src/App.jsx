import React from 'react'
import Navbar from './module/common/Navbar'
import Footer from './module/common/Footer'
import Home from './module/Home'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App