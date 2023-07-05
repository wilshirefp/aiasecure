import React from 'react'
import styles from '../styles/AboutHero.module.scss'

export default function ContactHero() {
  return (
    <div className={styles.container} >
    <div className={styles.wrapper}>
            <h1 className={styles.title}>ABOUT</h1>
            <div className={styles.border}></div>
            <div className={styles.cta}>
                <div className={styles.button}>
                  <p className={styles.buttonText}>SPEAK TO A BANKER</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
