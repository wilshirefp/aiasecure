import React from 'react'
import styles from '../styles/Disclosures.module.scss'

export default function Disclosures() {
  return (
    <div className={styles.container}>
            <div className={styles.disclosures}>
            <ul className={styles.disclaimer}>
                <li className={styles.listItem}>Terms of Use and Legal Notices</li>
                <li className={styles.listItem}>Privacy</li>
                <li className={styles.listItem}>Cookies Policy</li>
                <li className={styles.listItem}>California Consumer Privacy Request</li>
                </ul>
            </div>
        </div>
  )
}
