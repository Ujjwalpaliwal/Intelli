import React from 'react'
import About from '../src/sections/About'
import Contact from '../src/sections/Contact'
import Features from '../src/sections/Features'
import Footer from '../src/components/Footer'
import Hero from '../src/sections/Hero'
import Team from '../src/sections/Team'
import NavBar from '../src/components/NavBar'

const App = () => {
  return (
    <div className='bg-primary min-h-screen w-screen text-secondary overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      <Features/>
      <About/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App