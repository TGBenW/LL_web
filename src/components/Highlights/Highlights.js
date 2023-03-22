// src/components/Highlights/Highlights.jsx

import React from 'react'

import styles from './Highlights.module.sass'

function Highlights () {
  const specials = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/special-1.jpg`,
      name: 'Special Dish 1',
      price: '$12.99',
      description: 'A delicious and mouth-watering special dish.',
      orderLink: '#'
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/special-2.jpg`,
      name: 'Special Dish 2',
      price: '$14.99',
      description: 'A delightful mix of flavors to surprise your taste buds.',
      orderLink: '#'
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/img/special-3.jpg`,
      name: 'Special Dish 3',
      price: '$16.99',
      description: 'A satisfying and filling meal, perfect for any occasion.',
      orderLink: '#'
    }
  ]

  return (
    <section className={styles.highlights}>
    <h2 className={styles.heading}>Highlights</h2>
    <button className={styles.button}>Online Menu</button>
    <div className={styles.cards}>
      {specials.map((special, index) => (
        <div key={index} className={styles.card}>
          <img
            src={special.imgSrc}
            alt={`${special.name}`}
            className={styles['card-image']}
          />
          <h3 className={styles['card-name']}>{special.name}</h3>
          <p className={styles['card-price']}>{special.price}</p>
          <p className={styles['card-description']}>
            {special.description}
          </p>
          <a
            href={special.orderLink}
            className={styles['card-link']}
          >
            Delivery order
          </a>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Highlights
