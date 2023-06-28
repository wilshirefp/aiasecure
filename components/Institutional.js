import React from 'react'
import styles from '../styles/Institutional.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function Institutional() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {/* <div className={styles.item}> */}
                <div className={styles.img}>
                    <Image src="/images/institutional2.png" width="475" height="375" ></Image>
                </div>
            {/* </div> */}
            <div className={styles.item}>
                <div className={styles.border}>
                <h2 className={styles.title}>Institutional Sophistication with an Entrepreneurial Approach</h2>
                </div>
                <p className={styles.desc}>AIA Securities provides a range of investment, advisory, and financial services, led by a team of alternative investment advisors with deep industry knowledge and a solutions-focused approach.</p>
               <Link href={"/services"}> 
                    <div className={styles.button}>
                        <p className={styles.buttonText}>LEARN MORE</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
