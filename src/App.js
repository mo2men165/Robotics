import React from 'react'
import {Navbar} from './components'
import {Footer, WhatGPT3, Header} from './containers'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      </div>
      <WhatGPT3 />
      <Footer />
    </div>
  )
}

export default App