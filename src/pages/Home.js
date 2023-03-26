import React from 'react'

import styles from './../components/Main/Main.module.sass'

// import Header from './../components/Header/Header'
import Hero from './../components/Hero/Hero'
import Highlights from './../components/Highlights/Highlights'
import Testimonials from './../components/Testimonials/Testimonials'
import About from './../components/About/About'

function Main () {
  return (
    <main className={styles.main}>
      {/* <Header className={styles['app-header']} /> */}
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  )
}

export default Main
