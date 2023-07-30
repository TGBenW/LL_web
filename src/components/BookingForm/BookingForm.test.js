/* eslint-env jest */

import { render, fireEvent } from '@testing-library/react'
import BookingForm from './BookingForm'

test('BookingForm can be submitted', () => {
  // Create a spy function for submission event
  const handleSubmit = jest.fn(e => e.preventDefault())

  // Initial form data
  const formData = {
    date: '2023-07-30',
    time: '12:00',
    guests: '2',
    occasion: '',
    seating: '',
    name: 'John Doe',
    phone: '',
    email: 'john.doe@example.com'
  }

  const availableTimes = ['12:00', '13:00', '14:00']
  const handleChange = jest.fn()

  const { getByDisplayValue, getByLabelText } = render(
    <BookingForm
      formData={formData}
      handleChange={handleChange}
      availableTimes={availableTimes}
    />
  )

  // Mock the form element and prevent the default form submission event
  const form = getByDisplayValue('Book Now').closest('form')
  form.onsubmit = handleSubmit

  // Fill in the form with valid data
  fireEvent.change(getByLabelText('Your Name'), { target: { value: 'John Doe' } })
  fireEvent.change(getByLabelText('Email address'), { target: { value: 'john.doe@example.com' } })

  // Submit the form
  fireEvent.click(getByDisplayValue('Book Now'))

  expect(handleSubmit).toHaveBeenCalled()
})
