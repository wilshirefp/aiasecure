import React from 'react'
import styles from '../styles/AboutDesc.module.scss'


export default function ProductDesc({product}) {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.capital}>
        <div className={styles.item}>
            <div className={styles.border}>
            <h2 className={styles.title}>Who We Are</h2>
            </div>
            <span className={styles.desc}>AIA Securities is an investment banking firm providing customized capital 
solutions and alternative investment opportunities. Our experience, contacts, and 
access is what makes us different and connects our clients to diverse resources 
that blend institutional sophistication with an entrepreneurial approach. </span>
            {/* <span className={styles.serviceBold}>{product.label}{product.lableAbbr}</span>
            <span className={styles.desc}>{product.desc2}</span> */}
        </div>
{/* {product.label?(
        <p className={styles.intro}>Our <span className={styles.introBold}>{product.label}</span> services include:</p>
        ): ""
} */}
        </div>
        </div>
    </div>
  )
}
