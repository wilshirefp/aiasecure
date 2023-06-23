import React from 'react'
import styles from '../styles/ProductIndustries.module.scss'

export default function ProductIndustries({product}) {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.item}>
            <div className={styles.border}>
              {
                product.label ? (
                  <h2 className={styles.title}>Industries We Serve</h2>
                ):(
                  <h2 className={styles.title}>Unlock Opportunity®</h2>
                )
              }
            
            </div>
            {
              product.ctaMessage? (
                <p className={styles.desc}>{product.ctaMessage}</p>
              ) 
              :
              (
                <p className={styles.desc}>AIA is proud to offer <span className={styles.introBold}>{product.label}</span> services to the real estate, healthcare, transportation/logistics, manufacturing, and food industries.</p>
              )
            }
            <div className={styles.button}>
                <p className={styles.buttonText}>LEARN MORE</p>
            </div>
        </div>
        </div>
    </div>
  )
}
