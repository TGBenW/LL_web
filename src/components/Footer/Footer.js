import React from 'react'

import styles from './Footer.module.sass'

import verticalLogo from './../../img/vertical-logo.png'

function Footer () {
  return (
    <div className={styles['footer-wrapper']}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={verticalLogo} alt="Little Lemon logo" />
        </div>
        <nav className={styles.doormatNav}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <ul>
            <li><a href="#">123 Main St, Chicago</a></li>
            <li><a href="#">555-123-4567</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
        <div className={styles.socialMediaLinks}>
          <h3>Social media</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
