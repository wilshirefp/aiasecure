import React from 'react'
import styles from '../styles/Hero.module.scss'

export default function Hero() {
  return (
    
    <div className={styles.container}>
 
        <div className={styles.wrapper}>
            <h1 className={styles.title}>UNLOCK OPPORTUNITY</h1>
            <div className={styles.cta}>
                {/* <div className={styles.lBorder}></div> */}
                <p className={styles.desc}>AIA Securities is an investment banking firm providing customized capital solutions and alternative investment opportunities.</p>
                <div className={styles.button}>
                  <p className={styles.buttonText}>BEGIN</p>
                </div>
            </div>
    
        </div>
    </div>
    
  )
}
