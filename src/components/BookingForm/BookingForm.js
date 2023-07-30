import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './BookingForm.module.sass'

function BookingForm ({ formData, handleChange, availableTimes, submitForm }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!formData) return null

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.name && (formData.phone || formData.email) && formData.guests && formData.date && formData.time) {
      const success = await submitForm(formData)
      if (success) {
        setIsSubmitted(true)
      }
    } else {
      console.log('Fill all the mandatory fields')
    }
  }

  return (
    <div className={styles.container}>
      {isSubmitted
        ? <div className={styles.successMessage}>Booking successful!</div>
        : <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.column50}>
                <label htmlFor="date" className={styles.label}>Choose date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className={styles.input} required aria-required="true"/>
              </div>
              <div className={styles.column50}>
                <label htmlFor="time" className={styles.label}>Choose time</label>
                <select id="time" name="time" value={formData.time} onChange={handleChange} className={styles.select} required aria-required="true">
                  {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                </select>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column50}>
                <label htmlFor="guests" className={styles.label}>Number of guests</label>
                <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} className={styles.input} required aria-required="true"/>
              </div>
              <div className={styles.column50}>
                <label htmlFor="occasion" className={styles.label}>Occasion (Optional)</label>
                <input type="text" id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} className={styles.input} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column50}>
                <label htmlFor="seating" className={styles.label}>Seating preference (Optional)</label>
                <input type="text" id="seating" name="seating" value={formData.seating} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.column50}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={styles.input} required aria-required="true"/>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column50}>
                <label htmlFor="phone" className={styles.label}>Phone number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.column50}>
                <label htmlFor="email" className={styles.label}>Email address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required aria-required="true"/>
              </div>
            </div>
            <div className={styles.row}>
              <input type="submit" value="Book Now" className={styles.submit} aria-label="Submit booking form"/>
            </div>
          </form>
      }
    </div>
  )
}

BookingForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  availableTimes: PropTypes.array.isRequired,
  submitForm: PropTypes.func.isRequired
}

export default BookingForm
