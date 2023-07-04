import React from 'react'
import styles from '../styles/ContactDesc.module.scss'

export default function ContactDesc() {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
    <div className={styles.capital}>
    <div className={styles.item}>
        <div className={styles.border}>
        <h2 className={styles.title}>Unlock Opportunity<span className={styles.copy}>&reg;</span></h2>
        </div>
        <p className={styles.desc}>Thank you for your interest in AIA Securities. Please complete the form below to submit general inquiries. We look forward to connecting with you to answer any questions you may have about our services.</p>
        
    </div>
    </div>
    </div>
</div>
  )
}
