import React from 'react'
import styles from './ConfirmedBooking.module.sass'

function ConfirmedBooking () {
  return (
    <div className={styles.successMessage}>
      <h2 tabIndex="-1">Your booking has been confirmed!</h2>
      <p>Thank you for choosing our restaurant. We look forward to serving you.</p>
    </div>
  )
}

export default ConfirmedBooking
