// Reservations.js
import React from 'react'
import PropTypes from 'prop-types'
import BookingPage from '../components/BookingPage/BookingPage'

function Reservations ({ formData, handleChange, availableTimes, submitForm }) { // submitForm is added
  return (
    <div>
      <BookingPage formData={formData} handleChange={handleChange} availableTimes={availableTimes} submitForm={submitForm} /> {/* submitForm is passed */}
    </div>
  )
}

Reservations.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  availableTimes: PropTypes.array.isRequired,
  submitForm: PropTypes.func.isRequired // Added propTypes
}

export default Reservations
