// BookingPage.js
import React from 'react'
import PropTypes from 'prop-types'
import BookingForm from '../BookingForm/BookingForm'
import styles from './BookingPage.module.sass'

function BookingPage ({ formData, handleChange, availableTimes, submitForm }) { // submitForm is added
  return (
    <div className={styles.bookingPage}>
      <h1 className={styles.title}>Book a table</h1>
      <BookingForm formData={formData} handleChange={handleChange} availableTimes={availableTimes} submitForm={submitForm} /> {/* submitForm is passed */}
    </div>
  )
}

BookingPage.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  availableTimes: PropTypes.array.isRequired,
  submitForm: PropTypes.func.isRequired // Added propTypes
}

export default BookingPage
