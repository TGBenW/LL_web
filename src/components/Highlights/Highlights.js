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
      name: 'Savory Shrimp Scampi',
      price: '$18.99',
      description: 'Shrimp sautéed in garlic butter sauce, served with linguine and fresh parsley.',
      orderLink: '#'
    },
    {
      imgSrc: special2,
      name: 'Balsamic Glazed Salmon',
      price: '$21.99',
      description: 'Pan-seared salmon with a sweet and tangy balsamic glaze, accompanied by seasonal vegetables.',
      orderLink: '#'
    },
    {
      imgSrc: special3,
      name: 'Spinach & Feta Stuffed Chicken',
      price: '$19.99',
      description: 'Spinach and feta stuffed chicken breast, paired with creamy garlic mashed potatoes.',
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
            <div className={styles['card-box']}>
              <h3 className={styles['card-name']}>{special.name}</h3>
              <p className={styles['card-price']}>{special.price}</p>
            </div>
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
