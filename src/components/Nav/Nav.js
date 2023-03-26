import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Nav.module.sass'

function Nav () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/" className={styles.a}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/about" className={styles.a}>
            About
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/menu" className={styles.a}>
            Menu
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/reservations" className={styles.a}>
            Reservations
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/order-online" className={styles.a}>
            Order online
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/login" className={styles.a}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
