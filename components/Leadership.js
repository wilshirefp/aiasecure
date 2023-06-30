import React from 'react'
import styles from '../styles/Leadership.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Leadership() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <h2 className={styles.title}>Executive Leadership</h2>
        <div className={styles.leaders}>
            <div className={styles.leader}>
            <Image src="/images/don.png" width="300" height="300" ></Image>
            <div className={styles.info}>
                <div className={styles.leaderBorder}></div>
                <span>Donald H. Pelgrim, Jr., Esq.</span>
                <span>CEO</span>
            </div>
            
            </div>
            <div className={styles.leader}>
            <Image src="/images/kari.png" width="300" height="300" ></Image>
            <div className={styles.info}>
                <div className={styles.leaderBorder}></div>
                <span>Kari M. Laitinen, Executive JD, MBA</span>
                <span>Executive Vice President &</span>
                <span>Chief Compliance Officer</span>
            </div>
            </div>
        </div>
        <div className={styles.brokerBorder}></div>
          <Link href={"https://brokercheck.finra.org/"}><p className={styles.brokerCheck}>Broker Check</p></Link>  
        </div>
    </div>
  )
}
