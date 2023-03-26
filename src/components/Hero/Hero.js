import React from 'react'

import styles from './Hero.module.sass'

import restaurantFood from './../../img/restaurantfood.jpg'

function Hero () {
  return (
    <div className={styles['hero-wrapper']}>
      <section className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <h1 className={styles.h1}>Little Lemon</h1>
          <p className={styles.p}>Welcome to Little Lemon, the new restaurant where you can enjoy delicious food and drinks in a cozy and modern atmosphere. Our menu features a variety of dishes made with fresh, locally sourced ingredients. Come join us for breakfast, lunch, or dinner, or stop by for a quick snack and a cup of our famous coffee. Visit us today and taste the best of our culinary creations!</p>
          <button className={styles['hero-button']} onClick={() => console.log('Reserve a table')}>Reserve a table</button>
        </div>
          <img src={restaurantFood} alt="Restaurant" className={styles['hero-image']} />
      </section>
    </div>
  )
}

export default Hero
