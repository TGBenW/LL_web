// timeFunctions.js
export function initializeTimes (state, action) {
  if (action.type === 'INITIALIZE_TIMES') {
    return action.payload
  }
  return state
}

export function updateTimes (state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return action.payload
  }
  return state
}
