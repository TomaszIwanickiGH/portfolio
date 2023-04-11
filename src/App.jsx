import React from 'react'
import { Navbar, About, TechStack, Projects, Contact } from './components'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <About />
      </div>
      <TechStack />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
