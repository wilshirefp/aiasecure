import React from 'react'
import styles from '../styles/AboutGuidance.module.scss'
import Image from 'next/image'

export default function AboutGuidance() {
  return (
    <div className={styles.container}>
        <div className={styles.decades}>
            <Image className={styles.icon} src="/images/guidance.png" alt="Corporate Finace bulb image" width="439" height="518"></Image>
            <div className={styles.product}>
              <div className={styles.titleSection}>
                <h2 className={styles.title}>Delivering Valuable Guidance</h2></div>
              <div className={styles.desc}>
                <p>AIA Securities offers a comprehensive range of corporate finance services to help our clients achieve their objectives. Our investment bankers embrace the intricacies of each situation and work closely with your team throughout the lifecycle of the transaction to help deliver positive results</p>
              </div>
              <div className={styles.cta}>
                <p className={styles.ctaLabel}>Services</p>
              </div>
            </div> 
        </div>
        
    </div>
  )
}
