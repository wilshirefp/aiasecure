import React from 'react'
import styles from '../styles/ProductDesc.module.scss'


export default function ProductDesc({product}) {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.capital}>
        <div className={styles.item}>
            <div className={styles.border}>
            <h2 className={styles.title}>{product.subTitle}</h2>
            </div>
            <span className={styles.desc}>{product.desc}</span>
            <span className={styles.serviceBold}>{product.label}{product.lableAbbr}</span>
            <span className={styles.desc}>{product.desc2}</span>
        </div>
{product.label?(
        <p className={styles.intro}>Our <span className={styles.introBold}>{product.label}</span> services include:</p>
        ): ""
}
        </div>
        </div>
    </div>
  )
}
