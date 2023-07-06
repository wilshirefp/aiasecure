import React from 'react'
import styles from '../styles/Disclosures.module.scss'
import Link from 'next/link'
export default function Disclosures() {
  return (
    <div className={styles.container}>
            <div className={styles.disclosures}>
            <ul className={styles.disclaimer}>
                <li className={styles.listItem}>Terms of Use and Legal Notices</li>
                <li className={styles.listItem}><Link href={"/privacy-policy"}>Privacy</Link></li>
                <li className={styles.listItem}><Link href={"/cookies-policy"}>Cookies Policy</Link></li>
                <li className={styles.listItem}><Link href={"/california-privacy-policy"}>California Consumer Privacy Request</Link></li>
                </ul>
            </div>
        </div>
  )
}
