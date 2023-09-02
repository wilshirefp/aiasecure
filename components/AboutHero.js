import React from 'react'
import styles from '../styles/AboutHero.module.scss'
import Link from 'next/link'

export default function ContactHero() {
  return (
    <div className={styles.container} >
    <div className={styles.wrapper}>
            <h1 className={styles.title}>ABOUT</h1>
            <div className={styles.border}></div>
            <div className={styles.cta}>
                <Link href={"/contact"}> <div className={styles.button}>
                  <p className={styles.buttonText}>SPEAK TO A BANKER</p>
                </div>
              </Link>
            </div>
        </div>
        
    </div>
  )
}
