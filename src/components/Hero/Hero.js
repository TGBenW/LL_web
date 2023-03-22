import React from 'react'

import styles from './Hero.module.sass'

function Hero () {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        <h1 className={styles.h1}>Little Lemon</h1>
        <p className={styles.p}>Little Lemon is a creative agency that specializes in web design, branding, and digital marketing.</p>
        <button className={styles['hero-button']} onClick={() => console.log('Reserve a table')}>Reserve a table</button>
      </div>
        <img src={`${process.env.PUBLIC_URL}/img/restaurantfood.jpg`} alt="Restaurant" className={styles['hero-image']} />
    </section>
  )
}

export default Hero
