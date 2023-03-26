import React from 'react'
import { Link } from 'react-router-dom'
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
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
