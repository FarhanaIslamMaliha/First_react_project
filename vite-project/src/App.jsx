import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import OurServices from './components/OurServices'
import Image from './components/Image'
import Benefits from './components/Benefits'
import Protection from './components/Protection'
import Testimonial from './components/Testimonial'
import Submit from './components/Submit'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <OurServices/>
      <Image/>
      <Benefits/>
      <Protection/>
      <Testimonial/>
      <Submit/>
      <Footer/>
    </>
  )
}

export default App
