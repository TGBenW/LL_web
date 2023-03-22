import React from 'react'
import Nav from '../Nav/Nav'

import styles from './Header.module.sass'

function Header () {
  return (
    <header className={styles.header}>
      <img src="./img/logo.svg" alt="Little Lemon logo" className={styles['header-logo']} />
      <Nav />
    </header>
  )
}

export default Header
