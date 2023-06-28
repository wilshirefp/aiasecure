import React from 'react'
import styles from '../styles/Newsletter.module.scss'
import Image from 'next/image'

export default function Newsletter() {
  return (
    <div className={styles.container}>
        <div className={styles.newsletter}>
            <div className={styles.iconSection}>
                <Image className={styles.icon} src="/images/envelopeicon1.png" alt="Corporate Finace bulb image" width="83" height="83"></Image>
            </div>
            <div className={styles.box}>
                <div className={styles.titleSection}>
                <p className={styles.title}>Stay connected.</p>
                </div>
                <div className={styles.emailSection}>
                <div className={styles.emailField}>
                    <p>Enter your email</p>
                </div>
                </div>
                <div className={styles.signUpSection}>
                <div className={styles.signUp}>
                    <p>Sign Up</p>
                </div>
                </div>
            </div>

            </div>
        </div>
  )
}
