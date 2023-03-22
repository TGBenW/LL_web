import React from 'react'

import styles from './Testimonials.module.sass'

function Testimonials () {
  const reviews = [
    {
      stars: '★★★★★',
      imgSrc: './img/customer-1.jpg',
      name: 'John Doe',
      date: '2023-03-01',
      text: 'Great service and delicious food. Highly recommended!'
    },
    {
      stars: '★★★★☆',
      imgSrc: './img/customer-2.jpg',
      name: 'Jane Smith',
      date: '2023-02-28',
      text: 'Nice atmosphere, good food, and friendly staff.'
    },
    {
      stars: '★★★★★',
      imgSrc: './img/customer-3.jpg',
      name: 'Mary Johnson',
      date: '2023-02-25',
      text: 'Excellent food and service, will definitely come back!'
    }
  ]

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>Testimonials</h2>
      <p className={styles.subheading}>What our clients say about us</p>
      <div className={styles.cards}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <p className={styles['card-stars']}>{review.stars}</p>
            <img
              src={review.imgSrc}
              alt={`${review.name}`}
              className={styles['card-image']}
            />
            <h3 className={styles['card-name']}>{review.name}</h3>
            <p className={styles['card-date']}>{review.date}</p>
            <p className={styles['card-text']}>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
