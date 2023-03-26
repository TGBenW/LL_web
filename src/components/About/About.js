import React from 'react'

import styles from './About.module.sass'

import left from './../../img/MarioandAdrianA.jpg'
import right from './../../img/MarioandAdrianB.jpg'

function About () {
  return (
    <div className={styles['about-wrapper']}>
      <section className={styles.about}>
        <div className={styles['about-textbox']}>
          <h2 className={styles['about-heading']}>About</h2>
          <p className={styles['about-text']}>
          Little Lemon is a cozy and welcoming restaurant located in the heart of downtown. Our talented chefs, Mario and Adrian, work hard every day to create unique and delicious dishes using only the freshest and highest-quality ingredients. Our menu features a variety of mouth-watering options, from classic favorites to innovative and contemporary dishes. We are committed to providing a memorable dining experience for all of our guests, and our friendly and attentive staff are always happy to help with any special requests. Come visit us and see why Little Lemon is the go-to spot for food lovers in the city.
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
