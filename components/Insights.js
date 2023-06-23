import React from 'react'
import styles from '../styles/Insights.module.scss'

export default function Insights() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.lRail}>
          <p>Discover</p>
          <p>how <span className={styles.aia}>AIA</span></p>
          <p>can help you</p>
          <p>plan for</p>
          <p>what’s next.</p>
          
        </div>
        <div className={styles.rRail}>
          <div className={styles.item}>
                  <div className={styles.border}>
                  <h2 className={styles.title}>Investment &#x26; Financial Services</h2>
                  </div>
                  <span className={styles.desc}>We deliver a full spectrum of financial services to guide clients through all stages of corporate transactions — from idea to execution and formation to exit.</span>
                  <span className={styles.desc}>AIA is committed to delivering superior service and customized solutions to our clients</span>
                  <span className={styles.desc}><span className={styles.reg}>Unlock Opportunity&reg;</span></span>
                  <div className={styles.button}>
                      <p className={styles.buttonText}>LEARN MORE</p>
                  </div>
              </div>
        </div>
      </div>
    </div>
  )
}
