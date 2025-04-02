import React from 'react'
import styles from "./style.module.css"

export default function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerLogo}>
          <div className={styles.logo}></div>
          <div className={styles.logo}></div>
      </div>

      <div className={styles.navContainer}>
        <ul>
            <li>Live</li>
            <li>Push</li>
            <li>Move</li>
            <li>Note</li>
            <li>Link</li>
            <li>Shop</li>
            <li>Packs</li>
            <li>Help</li>
        </ul>
      </div>

      <div>
        <ul>
            <li>Try Live for free</li>
            <li>Account</li>
            <li>Log out</li>
        </ul>
      </div>
    </div>
  )
}
