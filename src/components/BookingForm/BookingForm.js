import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './BookingForm.module.sass'

function BookingForm ({ formData, handleChange, availableTimes, submitForm }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    if (isSubmitted) {
      validateForm()
    }
  }, [formData, isSubmitted])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    if (Object.keys(formErrors).length === 0) {
      const success = await submitForm(formData)
      if (success) {
        setIsSubmitted(true)
      }
    } else {
      console.log('Fill all the mandatory fields')
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name) {
      errors.name = 'Name is required'
    } else if (formData.name.length > 20) {
      errors.name = 'Name must be 20 characters or less'
    }

    if (!formData.phone && !formData.email) {
      errors.contact = 'Phone number or email is required'
    }

    if (formData.guests < 1) {
      errors.guests = 'Must have at least one guest'
    }

    if (new Date(formData.date) < new Date()) {
      errors.date = 'Date must be today or in the future'
    }

    if (!formData.time) {
      errors.time = 'Time is required'
    }

    setFormErrors(errors)
  }

  const formIsValid = Object.keys(formErrors).length === 0

  return (
    <div className={styles.container}>
      {isSubmitted
        ? (
          <div className={styles.successMessage} role="status">Booking successful!</div>
          )
        : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.column50}>
              <label htmlFor="date" className={styles.label}>
                Choose date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.column50}>
              <label htmlFor="time" className={styles.label}>
                Choose time
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={styles.select}
                required
              >
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column50}>
              <label htmlFor="guests" className={styles.label}>
                Number of guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.column50}>
              <label htmlFor="occasion" className={styles.label}>
                Occasion (Optional)
              </label>
              <input
                type="text"
                id="occasion"
                name="occasion"
                maxLength="30"
                value={formData.occasion}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column50}>
              <label htmlFor="seating" className={styles.label}>
                Seating preference (Optional)
              </label>
              <input
                type="text"
                id="seating"
                name="seating"
                maxLength="30"
                value={formData.seating}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.column50}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                maxLength="20"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column50}>
              <label htmlFor="phone" className={styles.label}>
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.column50}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.row}>
          <input
            type="submit"
            value="Book Now"
            className={styles.submit}
            aria-label="Submit the booking form"
            disabled={!formIsValid}
          />
          </div>
          </form>
          )}
    </div>
  )
}

BookingForm.propTypes = {
  formData: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  availableTimes: PropTypes.array.isRequired,
  submitForm: PropTypes.func.isRequired
}

BookingForm.defaultProps = {
  formData: {
    date: new Date().toISOString().split('T')[0],
    time: '', // This should be a sensible default time
    guests: 2,
    occasion: '',
    seating: '',
    name: '',
    phone: '',
    email: ''
  }
}

export default BookingForm
