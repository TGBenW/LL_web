/* eslint-env jest */

import { render, screen } from '@testing-library/react'
import BookingPage from './BookingPage'

test('renders static text in BookingPage', () => {
  render(<BookingPage />)
  const linkElement = screen.getByText(/Reservation/i)
  expect(linkElement).toBeInTheDocument()
})
