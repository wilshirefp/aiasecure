import React from 'react'
import styles from  '../styles/ProductHero.module.scss'
import Link from 'next/link'
export default function ProductHero({product}) {
  return (
    <div className={styles.container} style={{'background-image': `url(/images/${product.hero})`}} >
    <div className={styles.wrapper}>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.border}></div>
            <div className={styles.cta}>
            <Link href={`/${product.ctaUrl}`}>  
                <div className={styles.button}>
                  <p className={styles.buttonText}>{product.ctaLabel}</p>
                </div>
            </Link>
            </div>
        </div>
        
    </div>
  )
}
