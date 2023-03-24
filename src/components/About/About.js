import React from 'react'

import styles from './About.module.sass'

function About () {
  return (
    <section className={styles.about}>
      <div className={styles['about-text']}>
        <h2 className={styles['about-heading']}>About</h2>
        <p className={styles['about-text']}>
          Little Lemon is a restaurant in the heart of downtown. We serve delicious food and drinks.
        </p>
      </div>
      <div className={styles['about-images']}>
        <img
          src="./img/MarioandAdrianA.jpg"
          alt="Chef Mario and Chef Adrian A"
          className={styles['about-image']}
        />
        <img
          src="./img/MarioandAdrianB.jpg"
          alt="Chef Mario and Chef Adrian B"
          className={styles['about-image']}
        />
      </div>
    </section>
  )
}

export default About
