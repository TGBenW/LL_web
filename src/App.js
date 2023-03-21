import React from 'react'
import { Container } from 'react-bootstrap'

import './App.css'
import Helmet from './components/Helmet'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      <Container style={{ border: '1px solid red' }} className='container'>
        <Helmet />
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  )
}

export default App
