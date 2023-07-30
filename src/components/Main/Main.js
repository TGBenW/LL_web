// Main.js
import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import styles from './Main.module.sass'

import Header from './../Header/Header'
import HomePage from './../../pages/Home'
import AboutPage from './../../pages/About'
import MenuPage from './../../pages/Menu'
import Reservations from './../../pages/Reservations' // Changed from ReservationsPage
import OrderOnlinePage from './../../pages/Order'
import LoginPage from './../../pages/Login'
import ConfirmedBooking from './../../components/ConfirmedBooking/ConfirmedBooking' // New import

function Main () {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    seating: '',
    name: '',
    phone: '',
    email: ''
  })

  const [availableTimes, setAvailableTimes] = useState([])

  const navigate = useNavigate() // New line

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    if (e.target.name === 'date') {
      const times = await window.fetchAPI(e.target.value)
      setAvailableTimes(times)
    }
  }

  const submitForm = async (data) => { // New function
    const success = await window.submitAPI(data)
    if (success) {
      navigate('/confirmed')
    }
  }

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      const initialDate = new Date().toISOString().split('T')[0] // get current date in YYYY-MM-DD format
      const times = await window.fetchAPI(initialDate)
      setAvailableTimes(times)
    }
    fetchAvailableTimes()
  }, []) // an empty dependency array ensures this runs once on component mount

  return (
    <main className={styles.main}>
      <Header className={styles['app-header']} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<Reservations formData={formData} handleChange={handleChange} availableTimes={availableTimes} submitForm={submitForm} />} /> {/* Updated props */}
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* New Route */}
      </Routes>
    </main>
  )
}

export default Main
