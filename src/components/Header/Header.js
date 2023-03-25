import React from 'react'
import Nav from '../Nav/Nav'

import styles from './Header.module.sass'

import logo from './../../img/logo.png'

function Header () {
  return (
    <div className={styles['header-wrapper']}>
      <header className={styles.header}>
        <img src={logo} alt="Little Lemon logo" className={styles['header-logo']} />
        <Nav />
      </header>
    </div>
  )
}

export default Header
