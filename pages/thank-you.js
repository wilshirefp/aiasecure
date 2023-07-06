import React from 'react'
import Head from 'next/head'
import styles from '../styles/DisclosurePage.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function ThankYou() {
  return (
    <div className={styles.container}>
    <Head>
        <title>AIA Securities - Thank You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Alternative Investment Advisors" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.hero}>
  <div className={styles.wrapper}>
        <h1 className={styles.title}>THANK YOU</h1>
        <div className={styles.borderTH}>
        </div>
    </div>
    </div>
    
    <div className={styles.disclosures}>
    <div className={styles.version}>
      <p className={styles.info}></p>
    </div>
    <div className={styles.items}>
        {/* <p className={styles.modalTitle}>Thank you for contacting us! We'll be in touch soon. For immediate assistance please call us at (877) 247-7557</p> */}
        <p className={styles.info}>Thank you for contacting us! We&#39;ll be in touch soon. For immediate assistance please call us at (877) 247-7557</p>
         
    </div>
    
    </div>
</div>
  )
}
