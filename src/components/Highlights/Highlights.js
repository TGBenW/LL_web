// src/components/Highlights/Highlights.jsx

import React from 'react'

import styles from './Highlights.module.sass'

import special1 from './../../img/special-1.jpg'
import special2 from './../../img/special-2.jpg'
import special3 from './../../img/special-3.jpg'

function Highlights () {
  const specials = [
    {
      imgSrc: special1,
      name: 'Special Dish 1',
      price: '$12.99',
      description: 'A delicious and mouth-watering special dish.',
      orderLink: '#'
    },
    {
      imgSrc: special2,
      name: 'Special Dish 2',
      price: '$14.99',
      description: 'A delightful mix of flavors to surprise your taste buds.',
      orderLink: '#'
    },
    {
      imgSrc: special3,
      name: 'Special Dish 3',
      price: '$16.99',
      description: 'A satisfying and filling meal, perfect for any occasion.',
      orderLink: '#'
    }
  ]

  return (
    <div className={styles['highlights-wrapper']}>
      <section className={styles.highlights}>
      <h2 className={styles.heading}>
        Highlights
        <button className={styles.button}>Online Menu</button> {/* Move the button inside the h2 element */}
      </h2>
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
  </div>
  )
}

export default Highlights
