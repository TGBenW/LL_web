import React from 'react'

import styles from './Hero.module.sass'

import restaurantFood from './../../img/restaurantfood.jpg'

function Hero () {
  return (
    <div className={styles['hero-wrapper']}>
      <section className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <h1 className={styles.h1}>Little Lemon</h1>
          <p className={styles.p}>Little Lemon is a creative agency that specializes in web design, branding, and digital marketing.</p>
          <button className={styles['hero-button']} onClick={() => console.log('Reserve a table')}>Reserve a table</button>
        </div>
          <img src={restaurantFood} alt="Restaurant" className={styles['hero-image']} />
      </section>
    </div>
  )
}

export default Hero
