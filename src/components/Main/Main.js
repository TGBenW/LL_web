import React from 'react'

import styles from './Main.module.sass'

import Hero from './../Hero/Hero'
import Highlights from './../Highlights/Highlights'
import Testimonials from './../Testimonials/Testimonials'
import About from './../About/About'

function Main () {
  return (
    <main className={styles.main}>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  )
}

export default Main
