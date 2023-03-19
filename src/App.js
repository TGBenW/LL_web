import React from 'react'

import './App.css'
import Helmet from './components/Helmet'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Helmet />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
