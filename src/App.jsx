import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
const App = () => {
  return (
    <div className='font-bold text-4xl'>
      <div className="box1">
      <Home/>
      <About/>
      <Contact/></div>
    </div>
  )
}

export default App