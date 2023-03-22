import React from 'react'
import { Container } from 'react-bootstrap'

import './App.css'
import styles from './App.module.sass'

import Helmet from './components/Helmet'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      <Container className={styles.container}>
        <Helmet />
        <Header className={styles['container-header']} />
        <Main className={styles['container-main']} />
        <Footer className={styles['container-footer']} />
      </Container>
    </>
  )
}

export default App
