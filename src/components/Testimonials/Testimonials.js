import React from 'react'

import styles from './Testimonials.module.sass'
import customer1 from './../../img/customer-1.jpg'
import customer2 from './../../img/customer-2.jpg'
import customer3 from './../../img/customer-3.jpg'
import customer4 from './../../img/customer-4.jpg'

function Testimonials () {
  const reviews = [
    {
      stars: '★★★★★',
      imgSrc: customer1,
      name: 'John Doe',
      date: '2023-03-01',
      text: 'Great service and delicious food. Highly recommended!'
    },
    {
      stars: '★★★★☆',
      imgSrc: customer2,
      name: 'Jane Smith',
      date: '2023-02-28',
      text: 'Nice atmosphere, good food, and friendly staff.'
    },
    {
      stars: '★★★★★',
      imgSrc: customer3,
      name: 'Mary Johnson',
      date: '2023-02-25',
      text: 'Excellent food and service, will definitely come back!'
    },
    {
      stars: '★★★★★',
      imgSrc: customer4,
      name: 'Emily Brown',
      date: '2023-03-18',
      text: 'Amazing food, great atmosphere, highly recommended!'
    }
  ]

  return (
    <div className={styles['testimonials-wrapper']}>
      <section className={styles.testimonials}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.cards}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <p className={styles['card-stars']}>{review.stars}</p>
              <div className={styles['card-box']}>
                <img
                  src={review.imgSrc}
                  alt={`Profile picture of ${review.name}`}
                  className={styles['card-image']}
                />
                <div className={styles['card-content']}>
                  <h3 className={styles['card-name']}>{review.name}</h3>
                  <p className={styles['card-date']}>{review.date}</p>
                </div>
              </div>
              <p className={styles['card-text']}>{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonials
