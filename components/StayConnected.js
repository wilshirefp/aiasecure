import React from 'react'
import styles from '../styles/StayConnected.module.scss'

export default function StayConnected() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <div className={styles.titleArea}>
                    <p className={styles.title}>Stay connected.</p>
                </div>
                <div className={styles.cta}>
                    <div className={styles.emailArea}>
                        <input className={styles.email} name="email" placeholder='Enter your email' />
                    </div>
                    <div className={styles.button}>
                        <p className={styles.buttonText}>SUBSCRIBE</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
