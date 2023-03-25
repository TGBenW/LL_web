import React from 'react'

import Container from './components/Container/Container'
import Helmet from './components/Helmet'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import styles from './App.module.sass'

function App () {
  return (
    <div className={styles.app}>
      <Container className={styles.container}>
        <Helmet />
        <Header className={styles['app-header']} />
        <Main className={styles['app-main']} />
        <Footer className={styles['app-footer']} />
      </Container>
    </div>
  )
}

export default App
