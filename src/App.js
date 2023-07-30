// App.js
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from './components/Container/Container'
import Helmet from './components/Helmet'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import styles from './App.module.sass'

function App () {
  return (
    <Router>
      <div className={styles.app}>
        <Container className={styles.container}>
          <Helmet />
          <Main className={styles['app-main']} />
          <Footer className={styles['app-footer']} />
        </Container>
      </div>
    </Router>
  )
}

export default App
