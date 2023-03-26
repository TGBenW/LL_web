import React from 'react'
import { Routes, Route } from 'react-router-dom'

import styles from './Main.module.sass'

import Header from './../Header/Header'
import HomePage from './../../pages/Home'
import AboutPage from './../../pages/About'
import MenuPage from './../../pages/Menu'
import ReservationsPage from './../../pages/Reservations'
import OrderOnlinePage from './../../pages/Order'
import LoginPage from './../../pages/Login'

function Main () {
  return (
    <main className={styles.main}>
      <Header className={styles['app-header']} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  )
}

export default Main
