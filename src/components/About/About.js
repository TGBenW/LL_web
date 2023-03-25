import React from 'react'

import styles from './About.module.sass'

import left from './../../img/MarioandAdrianA.jpg'
import right from './../../img/MarioandAdrianB.jpg'

function About () {
  return (
    <div className={styles['about-wrapper']}>
      <section className={styles.about}>
        <div className={styles['about-text']}>
          <h2 className={styles['about-heading']}>About</h2>
          <p className={styles['about-text']}>
            Little Lemon is a restaurant in the heart of downtown. We serve delicious food and drinks.
          </p>
        </div>
        <div className={styles['about-images']}>
          <img
            src={left}
            alt="Chef Mario and Chef Adrian A"
            className={styles['about-image']}
          />
          <img
            src={right}
            alt="Chef Mario and Chef Adrian B"
            className={styles['about-image']}
          />
        </div>
      </section>
    </div>
  )
}

export default About
