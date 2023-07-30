/* eslint-env jest */

import { initializeTimes, updateTimes } from './timeFunctions'

describe('Time Functions', () => {
  let originalFetchAPI

  beforeEach(() => {
    // Save original function
    originalFetchAPI = window.fetchAPI

    // Mock the function
    window.fetchAPI = jest.fn().mockResolvedValue(['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'])
  })

  afterEach(() => {
    // Restore original function
    window.fetchAPI = originalFetchAPI
  })

  describe('initializeTimes', () => {
    it('should return correct default times', async () => {
      const result = await initializeTimes()
      expect(result).toEqual(['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'])
      expect(window.fetchAPI).toHaveBeenCalled()
    })
  })

  describe('updateTimes', () => {
    it('should return updated times based on the provided date', async () => {
      const date = '2023-07-29'
      const result = await updateTimes(date)
      expect(result).toEqual(['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'])
      expect(window.fetchAPI).toHaveBeenCalledWith(date)
    })
  })
})
