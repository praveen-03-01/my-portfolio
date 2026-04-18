import React from 'react'

import Stats from './components/Stats'
import About from './components/About'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    
    </div>
  )
}

export default App
