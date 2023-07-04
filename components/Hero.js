import React from 'react'
import styles from '../styles/Hero.module.scss'
import Link from 'next/link'

export default function Hero() {
  return (
    
    <div className={styles.container}>
 
        <div className={styles.wrapper}>
            <h1 className={styles.title}>UNLOCK OPPORTUNITY<span className={styles.copy}>&reg;</span></h1>
            <div className={styles.cta}>
                {/* <div className={styles.lBorder}></div> */}
                <p className={styles.desc}>AIA Securities is an investment banking firm providing customized capital solutions and alternative investment opportunities.</p>
                <Link href={"/services"}>  <div className={styles.button}>
                    <p className={styles.buttonText}>BEGIN</p>
                </div></Link>
            </div>
    
        </div>
    </div>
    
  )
}
