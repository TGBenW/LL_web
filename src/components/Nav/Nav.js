import React from 'react'

import styles from './Nav.module.sass'

function Nav () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><a href="#home" className={styles.a}>Home</a></li>
        <li className={styles.li}><a href="#about" className={styles.a}>About</a></li>
        <li className={styles.li}><a href="#menu" className={styles.a}>Menu</a></li>
        <li className={styles.li}><a href="#reservations" className={styles.a}>Reservations</a></li>
        <li className={styles.li}><a href="#order-online" className={styles.a}>Order online</a></li>
        <li className={styles.li}><a href="#login" className={styles.a}>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav
