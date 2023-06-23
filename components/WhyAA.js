import React from 'react'
import styles from '../styles/WhyAA.module.scss';

export default function WhyAA() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.border}>
            <h2 className={styles.title}>Why AIA?</h2>
            </div>
            <p className={styles.desc}>AIA’s experience, contacts, and access is what makes us different and connects our clients to diverse resources that blend institutional sophistication with an entrepreneurial approach.</p>
            {/* <p className={styles.desc}>Our extensive experience guides clients through all stages of corporate transactions — from idea to execution and formation to exit — and advises investors on alternative investment strategies that align with their goals.</p> */}
            <div className={styles.button}>
                <p className={styles.buttonText}>ABOUT US</p>
            </div>
        </div>
    </div>
  )
}
