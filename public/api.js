// api.js

window.fetchAPI = async function (date) {
  // replace this with your actual API logic
  return new Promise(resolve => {
    setTimeout(() => resolve(['12:00', '13:00', '14:00', '15:00', '16:00']), 1000)
  })
}

window.submitAPI = async function (formData) {
  // replace this with your actual API logic
  return new Promise(resolve => {
    setTimeout(() => resolve(true), 1000)
  })
}
