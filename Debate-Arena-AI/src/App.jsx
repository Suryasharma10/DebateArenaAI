import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
const App = () => {
  return (
    <div className='font-bold text-4xl p-4 m-9'>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App